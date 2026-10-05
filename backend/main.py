# ==============================================================================
# REQUIREMENTS (backend/requirements.txt):
# ==============================================================================
# fastapi>=0.110.0
# uvicorn[standard]>=0.28.0
# pydantic>=2.6.0
# torch>=2.2.0
# scipy>=1.12.0
# numpy>=1.26.0
# python-dotenv>=1.0.1
# httpx>=0.27.0
# websockets>=12.0
# ==============================================================================

"""
AeroTwin - UAV Aero Piston Engine Digital Twin Backend
EMERGE-X Architecture | Problem Statement: 26054 (DRDO)

Core FastAPI Server & Real-Time Orchestrator:
- Runs high-fidelity aero piston engine simulator at 1Hz
- Computes SciPy first-principles thermodynamic baselines and residuals
- Evaluates PyTorch Residual Autoencoder for real-time anomaly detection
- Calculates Remaining Useful Life (RUL) and Dynamic Stress Budgeting (15% RPM reduction + descent)
- Dispatches telemetry to Firebase Realtime Database
- Streams live WebSocket telemetry frames to connected ground station dashboards at 1Hz
"""

from __future__ import annotations

import asyncio
import json
import logging
import sys
import time
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Any, AsyncGenerator, Dict, List, Optional, Set

# Ensure workspace root is in sys.path for direct python execution
ROOT_DIR = Path(__file__).resolve().parent.parent
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

# Pydantic validation
try:
    from pydantic import BaseModel, Field
    PYDANTIC_AVAILABLE = True
except ImportError:
    PYDANTIC_AVAILABLE = False
    class BaseModel:  # type: ignore
        pass

# FastAPI & Starlette
try:
    from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect, status
    from fastapi.middleware.cors import CORSMiddleware
    from fastapi.responses import JSONResponse
    FASTAPI_AVAILABLE = True
except ImportError:
    FASTAPI_AVAILABLE = False

# Import EMERGE-X digital twin subsystem modules
from backend.simulator import EngineSimulator, EngineTelemetry, FaultType
from backend.physics_model import AeroPistonPhysicsModel, ExpectedThermodynamics, PhysicsResiduals
from backend.ai_models import ResidualAnomalyDetector, AnomalyResult
from backend.rul_engine import RULEngine, RULEstimate, DynamicStressBudget
from backend.database import FirebaseTelemetryDatabase

# Setup Logging
logger = logging.getLogger("AeroTwin.Server")
if not logger.handlers:
    handler = logging.StreamHandler()
    handler.setFormatter(logging.Formatter("[%(asctime)s] [%(name)s] [%(levelname)s] %(message)s"))
    logger.addHandler(handler)
    logger.setLevel(logging.INFO)


# ==============================================================================
# Request/Response Schemas
# ==============================================================================
if PYDANTIC_AVAILABLE:
    class FaultInjectionRequest(BaseModel):
        fault_type: str = Field(..., description="Fault mode: cylinder_misfire, oil_leak, cooling_blockage, lean_mixture, bearing_wear")
        severity: float = Field(0.8, ge=0.1, le=1.0, description="Fault severity from 0.1 (mild) to 1.0 (severe)")

    class FlightConditionRequest(BaseModel):
        throttle: Optional[float] = Field(None, ge=0.1, le=1.0, description="Throttle position (0.1 to 1.0)")
        altitude: Optional[float] = Field(None, ge=0.0, le=8000.0, description="Altitude in meters ASL")
        airspeed: Optional[float] = Field(None, ge=15.0, le=120.0, description="Airspeed in m/s")


# ==============================================================================
# Connection Manager for WebSocket Clients
# ==============================================================================
class ConnectionManager:
    """Manages active WebSocket ground station dashboard connections."""

    def __init__(self) -> None:
        self.active_connections: Set[WebSocket] = set()
        self._lock = asyncio.Lock()

    async def connect(self, websocket: WebSocket) -> None:
        await websocket.accept()
        async with self._lock:
            self.active_connections.add(websocket)
        logger.info(f"WebSocket client connected. Total clients: {len(self.active_connections)}")

    async def disconnect(self, websocket: WebSocket) -> None:
        async with self._lock:
            self.active_connections.discard(websocket)
        logger.info(f"WebSocket client disconnected. Total clients: {len(self.active_connections)}")

    async def broadcast_json(self, data: Dict[str, Any]) -> None:
        """Broadcasts digital twin state frame to all active WebSocket listeners."""
        if not self.active_connections:
            return

        payload_text = json.dumps(data)
        async with self._lock:
            stale_connections = []
            for connection in self.active_connections:
                try:
                    await connection.send_text(payload_text)
                except Exception:
                    stale_connections.append(connection)

            for stale in stale_connections:
                self.active_connections.discard(stale)


# ==============================================================================
# AeroTwin Digital Twin Orchestrator
# ==============================================================================
class DigitalTwinOrchestrator:
    """
    Coordinates data pipeline across simulator, physics model, AI autoencoder,
    prognostics engine, and database transport.
    """

    def __init__(self) -> None:
        self.simulator = EngineSimulator(nominal_rpm=5200.0, initial_altitude=1800.0, initial_throttle=0.75)
        self.physics_model = AeroPistonPhysicsModel()
        self.ai_detector = ResidualAnomalyDetector(threshold=0.35)
        self.rul_engine = RULEngine(nominal_tbo_hours=1800.0, initial_health_index=94.5)
        self.db = FirebaseTelemetryDatabase()
        self.manager = ConnectionManager()

        self.is_running: bool = False
        self._streaming_task: Optional[asyncio.Task] = None
        self.latest_frame: Optional[Dict[str, Any]] = None

    def step_twin(self, dt: float = 1.0) -> Dict[str, Any]:
        """
        Executes one complete digital twin analytical cycle:
        Simulator -> Physics Residuals -> AI Autoencoder -> RUL & Dynamic Stress Budget
        """
        # 1. Step the mechanical/thermal simulator
        telemetry: EngineTelemetry = self.simulator.step(dt=dt)
        telemetry_dict = telemetry.to_dict()

        # 2. Physics-based theoretical prediction
        expected: ExpectedThermodynamics = self.physics_model.compute_expected_state(
            altitude_m=telemetry.altitude,
            throttle=telemetry.throttle,
            airspeed_mps=self.simulator.airspeed,
        )

        # 3. Residual calculation (Observation - Theory)
        residuals: PhysicsResiduals = self.physics_model.calculate_residuals(
            actual_telemetry=telemetry_dict,
            expected=expected,
        )

        # 4. AI Autoencoder anomaly evaluation
        ai_result: AnomalyResult = self.ai_detector.predict(residuals.residual_vector)

        # 5. Prognostics & Dynamic Stress Budgeting
        rul_result: RULEstimate = self.rul_engine.estimate(
            rpm=telemetry.rpm,
            altitude_m=telemetry.altitude,
            cht=telemetry.cht,
            oil_pressure=telemetry.oil_pressure,
            anomaly_score=ai_result.anomaly_score,
            timestamp=telemetry.timestamp,
            dt_seconds=dt,
        )

        # 6. Assemble complete unified digital twin telemetry frame
        frame: Dict[str, Any] = {
            "timestamp": telemetry.timestamp,
            "telemetry": {
                "rpm": telemetry.rpm,
                "cht": telemetry.cht,
                "cht_cylinders": telemetry.cht_cylinders,
                "egt": telemetry.egt,
                "egt_cylinders": telemetry.egt_cylinders,
                "oil_pressure": telemetry.oil_pressure,
                "oil_temperature": telemetry.oil_temperature,
                "throttle": telemetry.throttle,
                "altitude": telemetry.altitude,
                "manifold_pressure": telemetry.manifold_pressure,
                "vibration": telemetry.vibration,
                "fuel_flow": telemetry.fuel_flow,
            },
            "physics_expected": {
                "rpm": expected.expected_rpm,
                "cht": expected.expected_cht,
                "egt": expected.expected_egt,
                "manifold_pressure": expected.expected_manifold_pressure,
                "oil_pressure": expected.expected_oil_pressure,
                "oil_temperature": expected.expected_oil_temperature,
                "power_kw": expected.expected_power_kw,
                "fuel_flow_lph": expected.expected_fuel_flow_lph,
            },
            "residuals": residuals.to_dict(),
            "ai_anomaly": ai_result.to_dict(),
            "prognostics": {
                "health_index": rul_result.health_index,
                "rul_hours": rul_result.rul_hours,
                "nominal_tbo_hours": rul_result.nominal_tbo_hours,
                "stress_components": rul_result.stress.to_dict(),
            },
            "dynamic_stress_budget": rul_result.dynamic_budget.to_dict(),
            "fault_status": {
                "active_fault": telemetry.active_fault,
                "severity": telemetry.fault_severity,
            },
        }

        self.latest_frame = frame
        return frame

    async def run_telemetry_loop(self) -> None:
        """
        Continuous 1Hz telemetry streaming loop.
        Dispatches frames to Firebase and broadcasts to WebSocket subscribers.
        """
        logger.info("Starting AeroTwin 1Hz digital twin telemetry loop...")
        self.is_running = True

        while self.is_running:
            start_time = time.time()
            try:
                # Execute step
                frame = self.step_twin(dt=1.0)

                # Async dispatch to Firebase Realtime Database
                asyncio.create_task(self.db.update_live_telemetry_async(frame))

                # If anomaly detected, log alert event to Firebase
                if frame["ai_anomaly"]["is_anomaly"]:
                    asyncio.create_task(self.db.log_anomaly_alert_async({
                        "timestamp": frame["timestamp"],
                        "score": frame["ai_anomaly"]["anomaly_score"],
                        "root_cause": frame["ai_anomaly"]["root_cause_feature"],
                        "active_fault": frame["fault_status"]["active_fault"],
                    }))

                # Broadcast live frame to connected WebSockets
                await self.manager.broadcast_json(frame)

            except Exception as e:
                logger.error(f"Error in telemetry broadcast step: {e}", exc_info=True)

            # Enforce precise 1Hz loop frequency
            elapsed = time.time() - start_time
            sleep_duration = max(0.01, 1.0 - elapsed)
            await asyncio.sleep(sleep_duration)


orchestrator = DigitalTwinOrchestrator()


# ==============================================================================
# FastAPI Application Lifespan
# ==============================================================================
@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Manages digital twin background task lifecycle."""
    orchestrator._streaming_task = asyncio.create_task(orchestrator.run_telemetry_loop())
    logger.info("AeroTwin Digital Twin Engine initialized and running at 1Hz.")
    yield
    orchestrator.is_running = False
    if orchestrator._streaming_task:
        orchestrator._streaming_task.cancel()
    await orchestrator.db.close()
    logger.info("AeroTwin Digital Twin Engine shut down cleanly.")


# ==============================================================================
# FastAPI Application & Endpoints
# ==============================================================================
if FASTAPI_AVAILABLE:
    app = FastAPI(
        title="AeroTwin DRDO Engine Digital Twin API",
        description="Predictive Digital Twin for UAV Aero Piston Engines | Team EMERGE-X (SIH 2026)",
        version="1.0.0",
        lifespan=lifespan,
    )

    # CORS configuration for ground control web interfaces
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get("/")
    async def root_info() -> Dict[str, Any]:
        """System metadata and operational status."""
        return {
            "project": "AeroTwin - Predictive Digital Twin for UAV Engines",
            "team": "EMERGE-X",
            "problem_statement": "26054 (DRDO)",
            "telemetry_stream": "/ws/telemetry",
            "status": "ONLINE",
            "firebase_connected": bool(orchestrator.db.firebase_url),
        }

    @app.get("/health")
    async def health_check() -> Dict[str, Any]:
        """Health check endpoint."""
        return {
            "status": "healthy",
            "engine_state": "RUNNING" if orchestrator.is_running else "IDLE",
            "websocket_clients": len(orchestrator.manager.active_connections),
        }

    @app.get("/api/telemetry/latest")
    async def get_latest_telemetry() -> Dict[str, Any]:
        """Returns the most recent digital twin telemetry frame."""
        if orchestrator.latest_frame is None:
            return orchestrator.step_twin(dt=1.0)
        return orchestrator.latest_frame

    @app.get("/api/stress-budget")
    async def get_stress_budget() -> Dict[str, Any]:
        """Returns current dynamic stress budgeting calculations and life extension advisory."""
        if orchestrator.latest_frame is None:
            orchestrator.step_twin(dt=1.0)
        return orchestrator.latest_frame["dynamic_stress_budget"]

    @app.post("/api/fault/inject")
    async def inject_fault_endpoint(req: FaultInjectionRequest) -> Dict[str, Any]:
        """Injects an engine fault (e.g., cylinder_misfire, oil_leak, cooling_blockage)."""
        orchestrator.simulator.inject_fault(fault_type=req.fault_type, severity=req.severity)
        logger.warning(f"Injected Fault: {req.fault_type} with severity {req.severity}")
        return {
            "status": "FAULT_INJECTED",
            "fault_type": req.fault_type,
            "severity": req.severity,
            "timestamp": time.time(),
        }

    @app.post("/api/fault/clear")
    async def clear_fault_endpoint() -> Dict[str, Any]:
        """Clears any currently active engine fault."""
        orchestrator.simulator.clear_fault()
        logger.info("Active fault cleared; engine operating nominal.")
        return {"status": "FAULT_CLEARED", "timestamp": time.time()}

    @app.post("/api/flight-condition")
    async def set_flight_condition_endpoint(req: FlightConditionRequest) -> Dict[str, Any]:
        """Modifies throttle, altitude, or airspeed commands."""
        orchestrator.simulator.set_flight_condition(
            throttle=req.throttle,
            altitude=req.altitude,
            airspeed=req.airspeed,
        )
        return {
            "status": "FLIGHT_CONDITION_UPDATED",
            "throttle": orchestrator.simulator.throttle,
            "altitude": orchestrator.simulator.altitude,
            "airspeed": orchestrator.simulator.airspeed,
        }

    @app.get("/api/firebase/status")
    async def test_firebase_endpoint() -> Dict[str, Any]:
        """Tests Firebase Realtime Database connectivity."""
        return orchestrator.db.test_connection()

    # ==============================================================================
    # WebSocket Telemetry Stream (1Hz)
    # ==============================================================================
    @app.websocket("/ws/telemetry")
    async def websocket_telemetry_stream(websocket: WebSocket) -> None:
        """
        Streams live 1Hz telemetry frames to connected ground control clients.
        Also accepts incoming JSON commands to inject faults or adjust flight conditions.
        """
        await orchestrator.manager.connect(websocket)

        # Send immediate initial frame
        initial_frame = orchestrator.latest_frame or orchestrator.step_twin(dt=1.0)
        await websocket.send_text(json.dumps(initial_frame))

        try:
            while True:
                # Listen for incoming command messages from frontend dashboard
                data_text = await websocket.receive_text()
                try:
                    command_data = json.loads(data_text)
                    cmd = command_data.get("command", "").lower()

                    if cmd == "inject_fault":
                        fault_type = command_data.get("fault_type", "cylinder_misfire")
                        severity = float(command_data.get("severity", 0.8))
                        orchestrator.simulator.inject_fault(fault_type, severity)
                        await websocket.send_text(json.dumps({
                            "type": "command_ack",
                            "status": "FAULT_INJECTED",
                            "fault_type": fault_type,
                            "severity": severity,
                        }))

                    elif cmd == "clear_fault":
                        orchestrator.simulator.clear_fault()
                        await websocket.send_text(json.dumps({
                            "type": "command_ack",
                            "status": "FAULT_CLEARED",
                        }))

                    elif cmd == "set_flight_condition":
                        throttle = command_data.get("throttle")
                        alt = command_data.get("altitude")
                        speed = command_data.get("airspeed")
                        orchestrator.simulator.set_flight_condition(throttle=throttle, altitude=alt, airspeed=speed)
                        await websocket.send_text(json.dumps({
                            "type": "command_ack",
                            "status": "FLIGHT_CONDITION_UPDATED",
                        }))

                except json.JSONDecodeError:
                    pass

        except WebSocketDisconnect:
            await orchestrator.manager.disconnect(websocket)
        except Exception as e:
            logger.warning(f"WebSocket client error: {e}")
            await orchestrator.manager.disconnect(websocket)

else:
    app = None  # type: ignore


# ==============================================================================
# CLI Entrypoint & Local Demonstration Runner
# ==============================================================================
def run_cli_demo() -> None:
    """Command-line demonstration if launched directly with python."""
    print("\n" + "=" * 70)
    print("  AEROTWIN: DRDO UAV AERO PISTON ENGINE DIGITAL TWIN (EMERGE-X)")
    print("=" * 70)
    print("Starting 5-cycle local twin simulation run...\n")

    for cycle in range(1, 6):
        frame = orchestrator.step_twin(dt=1.0)
        t = frame["telemetry"]
        p = frame["physics_expected"]
        ai = frame["ai_anomaly"]
        prog = frame["prognostics"]
        b = frame["dynamic_stress_budget"]

        print(f"[Cycle {cycle}] Time={t['altitude']}m ASL | Throttle={t['throttle']*100:.0f}%")
        print(f"  ACTUAL:   RPM={t['rpm']} | CHT={t['cht']}°C | EGT={t['egt']}°C | OilP={t['oil_pressure']} PSI")
        print(f"  EXPECTED: RPM={p['rpm']} | CHT={p['cht']}°C | EGT={p['egt']}°C | OilP={p['oil_pressure']} PSI")
        print(f"  AI PHM:   Anomaly Score={ai['anomaly_score']} | Is Anomaly={ai['is_anomaly']}")
        print(f"  RUL:      Health={prog['health_index']}% | RUL={prog['rul_hours']} hrs | Stress={prog['stress_components']['total_stress_index']}")
        print(f"  BUDGET:   -15% RPM ({b['current_rpm']} -> {b['budgeted_rpm']}) -> RUL Ext: +{b['rul_extension_delta_hours']}h ({b['life_extension_multiplier']}x)")
        print("-" * 70)

    print("\nTo start the production FastAPI & WebSocket server:")
    print("  uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload\n")


if __name__ == "__main__":
    if FASTAPI_AVAILABLE:
        import uvicorn
        print("Starting FastAPI AeroTwin Server on http://0.0.0.0:8000 ...")
        uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
    else:
        run_cli_demo()
