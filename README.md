# AeroTwin: Predictive Digital Twin for UAV Aero Piston Engines
**Team EMERGE-X** | **DRDO Problem Statement: PS-26054**

AeroTwin is a predictive digital twin and tactical ground control station (GCS) engineered for UAV aero-piston engines (e.g., Rotax 914-F class powering the DRDO Tapas-BH-201 / Rustom-II MALE UAV).

---

## Architecture Overview

```
                      +---------------------------------------+
                      |         DRDO Tapas-BH-201 MALE        |
                      |      Rotax 914-F Turbocharged UAV     |
                      +-------------------+-------------------+
                                          | Live 1Hz Telemetry / Physics Simulator
                                          v
                      +---------------------------------------+
                      |        FastAPI & SciPy Backend        |
                      | - First-Principles Thermodynamics     |
                      | - PyTorch Residual Autoencoder        |
                      | - Basquin & Arrhenius RUL Engine      |
                      | - WebSocket Telemetry Hub (:8000)     |
                      +-------------------+-------------------+
                                          | ws://localhost:8000/ws/telemetry
                                          v
                      +---------------------------------------+
                      |      AeroTwin DRDO Tactical GCS       |
                      |     (React + Vite + Three.js + TS)    |
                      +-------------------+-------------------+
                                          |
        +------------------+--------------+------------------+------------------+
        |                  |                                 |                  |
        v                  v                                 v                  v
[TACTICAL TELEMETRY] [3D DRONE DIGITAL TWIN]       [ANOMALY RESIDUALS]  [PROGNOSTICS & STRESS]
- RPM, CHT, EGT      - Tapas-BH-201 3D Airframe     - PyTorch AE Score   - Dynamic Stress Budget
- Oil P/T, MAP, FF   - OrbitControls 360° View      - 7-Dim Attributions - RUL Degradation Curves
- 4-Cyl Spread       - Dynamic Thermal Overheat     - Live MS Audit Log  - Basquin/Arrhenius Wear
- Sparklines         - In-Viewport Flight HUD       - JSON Audit Export  - -15% RPM / Descent
```

---

## Key Features

1. **DRDO Tactical GCS Aesthetic**:
   - Matte carbon background (`#090B0E`, `#111418`), gunmetal surfaces (`#181C22`), 1px solid borders (`#262C36`), monospace JetBrains font.
   - Zero rounded corners (`rounded-none` globally) for rugged defense aerospace instrumentation.
   - Tactical readouts: Cyan (`#38BDF8`), Caution Amber (`#F59E0B`), Alarm Red (`#EF4444`), Nominal Green (`#10B981`).

2. **Interactive 3D Digital Twin Viewport (`Three.js`)**:
   - Complete twin-boom tactical UAV airframe (DRDO Tapas-BH-201 style) with fuselage, pusher propeller, twin booms, and tailplane.
   - Full 360° OrbitControls rotation, tilt, and zoom.
   - Dynamic engine bay material transitions from gunmetal to pulsing Amber/Red as CHT/EGT exceed nominal limits or during fault injection.
   - Camera presets: `ISO`, `TOP`, `SIDE`, `ENGINE`, `WIRE`.

3. **High-Density Telemetry Matrix**:
   - Real-time digital gauges and 60-second strip chart sparklines for RPM, CHT, EGT, Oil Press, Oil Temp, MAP, Fuel Flow, and Vibration.
   - Individual 4-cylinder spread cards for both CHT and EGT.

4. **PyTorch Residual Autoencoder Anomaly Console**:
   - Decision threshold boundary at 0.35, reconstruction MSE readout, and explainable AI root-cause feature attribution.
   - Live millisecond audit log table with severity filters (`ALL`, `CRITICAL`, `ELEVATED`, `NOMINAL`) and JSON export.

5. **Dynamic Stress Budgeting Panel**:
   - Interactive `-15% RPM / Descent` profile toggle.
   - Visual comparative SVG degradation curves contrasting baseline high-stress wear vs extended stress-budgeted flight profile (+700+ hours gained).
   - Basquin mechanical fatigue and Arrhenius thermal strain breakdown.

6. **Tactical Fault Injection**:
   - Operational tactical buttons: Cylinder Misfire, Oil Pressure Loss, Cooling Blockage, Lean Detonation, and Normal Recovery.
   - Adjustable severity scaling (20% - 100%).

---

## Quickstart Guide

### 1. Launch Backend (FastAPI + Simulator + PyTorch + WebSocket)
```bash
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

### 2. Launch Frontend (Tactical Ground Control Station)
```bash
cd frontend
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.
*(The frontend automatically connects to `ws://localhost:8000/ws/telemetry` with seamless fallback simulation if the backend is launching).*