"""
AeroTwin - UAV Aero Piston Engine Digital Twin
Component: Engine Telemetry Simulator & Fault Injector
EMERGE-X Architecture | Problem Statement: 26054 (DRDO)

Generates synthetic, physics-correlated telemetry for a 4-cylinder, 4-stroke
horizontally opposed aero piston engine (e.g., Rotax 912/914 class UAV powerplant).
Includes dynamic flight envelopes, sensor noise, thermal inertia, and fault injection.
"""

from __future__ import annotations

import enum
import math
import random
import time
from dataclasses import asdict, dataclass, field
from typing import Any, Dict, Optional, Tuple


class FaultType(str, enum.Enum):
    """Supported fault injection modes for the aero-piston powerplant."""
    NONE = "none"
    CYLINDER_MISFIRE = "cylinder_misfire"          # Loss of combustion in one cylinder -> EGT drops, RPM drops, high vibration
    OIL_LEAK_PRESSURE_LOSS = "oil_leak"           # Loss of lubricant pressure -> critical wear risk, oil temp increases
    COOLING_BLOCKAGE = "cooling_blockage"         # Air cowl / baffle blockage -> runaway CHT
    LEAN_MIXTURE = "lean_mixture"                 # Detonation risk, elevated EGT, increased thermal stress
    BEARING_WEAR = "bearing_wear"                 # Mechanical drag, friction, anomalous high-frequency vibration


@dataclass
class EngineTelemetry:
    """Strongly typed snapshot of aero engine sensors and environmental state."""
    timestamp: float
    rpm: float                    # Engine crankshaft speed (RPM, nominal 4800-5800 cruise)
    cht: float                    # Cylinder Head Temperature average (°C, nominal 130-175°C)
    cht_cylinders: list[float]    # Individual cylinder head temperatures [Cyl 1, 2, 3, 4] (°C)
    egt: float                    # Exhaust Gas Temperature average (°C, nominal 700-820°C)
    egt_cylinders: list[float]    # Individual cylinder exhaust gas temperatures [Cyl 1, 2, 3, 4] (°C)
    oil_pressure: float           # Engine oil pressure (PSI, nominal 40-75 PSI)
    oil_temperature: float        # Engine oil temperature (°C, nominal 80-110°C)
    throttle: float               # Pilot/Autopilot throttle command (0.0 to 1.0)
    altitude: float               # Pressure altitude ASL (meters, 0-5000m)
    manifold_pressure: float      # Manifold Absolute Pressure (inHg, nominal 20-30 inHg)
    vibration: float              # Engine block vibration magnitude (RMS in g, nominal 0.8-2.2g)
    fuel_flow: float              # Fuel consumption rate (Liters/Hour, nominal 12-28 L/h)
    active_fault: str = FaultType.NONE.value
    fault_severity: float = 0.0   # Severity scaling [0.0 - 1.0]

    def to_dict(self) -> Dict[str, Any]:
        """Convert telemetry dataclass to dictionary."""
        return asdict(self)


class EngineSimulator:
    """
    Simulates operational dynamics, environmental coupling, and sensor characteristics
    of a UAV aero piston engine. Implements first-order differential thermal lag
    and real-time fault injection.
    """

    def __init__(
        self,
        nominal_rpm: float = 5200.0,
        initial_altitude: float = 1800.0,
        initial_throttle: float = 0.75,
    ) -> None:
        self.nominal_rpm = nominal_rpm
        self.altitude = initial_altitude       # meters ASL
        self.throttle = initial_throttle       # 0.0 - 1.0
        self.airspeed = 45.0                   # True Airspeed (m/s), provides ram air cooling

        # Active fault state
        self.active_fault: FaultType = FaultType.NONE
        self.fault_severity: float = 0.0
        self.fault_start_time: Optional[float] = None
        self.fault_affected_cylinder: int = 2  # Default Cylinder 3 (0-indexed 2) for misfire

        # Compute initial steady-state targets
        t_ambient = max(216.65, 288.15 - 0.0065 * self.altitude) - 273.15
        density_ratio = math.exp(-self.altitude / 8400.0)
        target_map = (29.92 * density_ratio) * (0.25 + 0.75 * self.throttle)
        target_rpm = 2200.0 + (3600.0 * self.throttle) * (0.85 + 0.15 * density_ratio)
        target_egt = 700.0 + 130.0 * math.sin(self.throttle * math.pi * 0.8)
        power_factor = (target_rpm / 5800.0) * (target_map / 29.92)
        cooling_factor = (self.airspeed / 50.0) * density_ratio
        target_cht = t_ambient + 110.0 + (65.0 * power_factor) - (20.0 * cooling_factor)
        target_oil_press = 35.0 + 30.0 * (target_rpm / 5800.0)
        target_oil_temp = t_ambient + 45.0 + 50.0 * power_factor
        target_vibration = 0.8 + 0.9 * (target_rpm / 5800.0) ** 2
        target_fuel_flow = 5.0 + 26.0 * (self.throttle ** 1.3) * density_ratio

        # Internal continuous states (initialized in equilibrium)
        self._current_rpm: float = target_rpm
        self._current_cht: float = target_cht
        self._cyl_cht: list[float] = [target_cht - 0.5, target_cht + 0.8, target_cht, target_cht - 0.3]
        self._current_egt: float = target_egt
        self._cyl_egt: list[float] = [target_egt - 2.0, target_egt + 3.0, target_egt, target_egt - 1.0]
        self._current_oil_press: float = target_oil_press
        self._current_oil_temp: float = target_oil_temp
        self._current_vibration: float = target_vibration
        self._current_fuel_flow: float = target_fuel_flow
        self._current_map: float = target_map

        # Thermal time constants (seconds)
        self._tau_cht: float = 8.0     # CHT heats/cools relatively slowly
        self._tau_egt: float = 2.0     # EGT responds rapidly to combustion changes
        self._tau_oil_temp: float = 15.0

        self._last_update_time: float = time.time()

    def set_flight_condition(
        self,
        throttle: Optional[float] = None,
        altitude: Optional[float] = None,
        airspeed: Optional[float] = None,
    ) -> None:
        """
        Dynamically adjusts external flight environment and autopilot commands.
        """
        if throttle is not None:
            self.throttle = max(0.1, min(1.0, float(throttle)))
        if altitude is not None:
            self.altitude = max(0.0, min(8000.0, float(altitude)))
        if airspeed is not None:
            self.airspeed = max(15.0, min(120.0, float(airspeed)))

    def inject_fault(self, fault_type: FaultType | str, severity: float = 1.0) -> None:
        """
        Injects an engine fault to test digital twin anomaly detection and stress budgeting.
        """
        if isinstance(fault_type, str):
            try:
                fault_type = FaultType(fault_type.lower())
            except ValueError:
                fault_type = FaultType.CYLINDER_MISFIRE

        self.active_fault = fault_type
        self.fault_severity = max(0.1, min(1.0, float(severity)))
        self.fault_start_time = time.time()

    def clear_fault(self) -> None:
        """Clears any currently active engine fault, returning to nominal operations."""
        self.active_fault = FaultType.NONE
        self.fault_severity = 0.0
        self.fault_start_time = None

    def step(self, dt: float = 1.0) -> EngineTelemetry:
        """
        Advances the simulator by dt seconds and returns a telemetry snapshot.
        """
        now = time.time()

        # 1. Atmospheric standard calculation (lapse rate)
        # T_amb in Kelvin: 288.15 - 0.0065 * alt
        t_ambient = max(216.65, 288.15 - 0.0065 * self.altitude) - 273.15  # in Celsius
        # Pressure ratio sigma ~ exp(-alt / 8400)
        density_ratio = math.exp(-self.altitude / 8400.0)

        # 2. Target physical state calculations based on throttle & altitude
        # Naturally aspirated MAP drops with altitude, scaled by throttle
        base_map = (29.92 * density_ratio) * (0.25 + 0.75 * self.throttle)
        target_map = base_map

        # RPM depends on throttle, air density, and mechanical governor
        target_rpm = 2200.0 + (3600.0 * self.throttle) * (0.85 + 0.15 * density_ratio)

        # Fuel Flow proportional to MAP and RPM
        target_fuel_flow = 5.0 + 26.0 * (self.throttle ** 1.3) * density_ratio

        # EGT baseline: typically highest near 75-80% throttle (best power / economy)
        target_egt = 700.0 + 130.0 * math.sin(self.throttle * math.pi * 0.8)

        # CHT target: balance between power produced and ram cooling air
        power_factor = (target_rpm / 5800.0) * (target_map / 29.92)
        cooling_factor = (self.airspeed / 50.0) * density_ratio
        target_cht = t_ambient + 110.0 + (65.0 * power_factor) - (20.0 * cooling_factor)

        # Oil Pressure: increases with RPM, nominal ~55-65 PSI
        target_oil_press = 35.0 + 30.0 * (target_rpm / 5800.0)

        # Oil Temp: tracks CHT and engine load
        target_oil_temp = t_ambient + 45.0 + 50.0 * power_factor

        # Vibration baseline: proportional to RPM harmonic + slight baseline
        target_vibration = 0.8 + 0.9 * (target_rpm / 5800.0) ** 2

        # 3. Apply Fault Dynamics
        fault_elapsed = (now - self.fault_start_time) if self.fault_start_time else 0.0
        cyl_egt_targets = [target_egt] * 4
        cyl_cht_targets = [target_cht] * 4

        if self.active_fault == FaultType.CYLINDER_MISFIRE:
            # Drop in EGT for the misfiring cylinder, overall RPM drop, high vibration imbalance
            misfire_intensity = self.fault_severity
            cyl_egt_targets[self.fault_affected_cylinder] = target_egt * (1.0 - 0.55 * misfire_intensity)
            # The unburnt fuel drops overall EGT slightly, RPM drops by 8-15%, vibration spikes 3-4x
            target_rpm *= (1.0 - 0.12 * misfire_intensity)
            target_vibration *= (1.0 + 2.8 * misfire_intensity)
            target_cht -= (12.0 * misfire_intensity)

        elif self.active_fault == FaultType.OIL_LEAK_PRESSURE_LOSS:
            # Progressive drop in oil pressure; oil temperature rises due to reduced heat capacity
            leak_progression = min(1.0, fault_elapsed / 25.0) * self.fault_severity
            target_oil_press = max(12.0, target_oil_press * (1.0 - 0.75 * leak_progression))
            target_oil_temp += 35.0 * leak_progression
            if leak_progression > 0.6:
                target_vibration += 1.5 * (leak_progression - 0.6)

        elif self.active_fault == FaultType.COOLING_BLOCKAGE:
            # Overheating CHT runaway
            overheat_progression = min(1.0, fault_elapsed / 30.0) * self.fault_severity
            target_cht += 70.0 * overheat_progression
            for i in range(4):
                cyl_cht_targets[i] += (65.0 + i * 4.0) * overheat_progression
            target_oil_temp += 20.0 * overheat_progression

        elif self.active_fault == FaultType.LEAN_MIXTURE:
            # Dangerous lean condition -> High EGT, moderate CHT rise, engine detonation knock
            target_egt += 95.0 * self.fault_severity
            target_cht += 25.0 * self.fault_severity
            target_vibration += 1.0 * self.fault_severity

        elif self.active_fault == FaultType.BEARING_WEAR:
            # Subtle oil pressure drop, high harmonic vibration
            target_oil_press *= (1.0 - 0.18 * self.fault_severity)
            target_vibration += 2.2 * self.fault_severity

        # 4. Integrate thermal and mechanical state with first-order filter
        alpha_cht = 1.0 - math.exp(-dt / self._tau_cht)
        alpha_egt = 1.0 - math.exp(-dt / self._tau_egt)
        alpha_oil_temp = 1.0 - math.exp(-dt / self._tau_oil_temp)
        alpha_fast = 0.5  # For responsive mechanical values (RPM, MAP, Oil Press)

        self._current_rpm += alpha_fast * (target_rpm - self._current_rpm)
        self._current_map += alpha_fast * (target_map - self._current_map)
        self._current_oil_press += alpha_fast * (target_oil_press - self._current_oil_press)
        self._current_fuel_flow += alpha_fast * (target_fuel_flow - self._current_fuel_flow)
        self._current_vibration += alpha_fast * (target_vibration - self._current_vibration)

        self._current_cht += alpha_cht * (target_cht - self._current_cht)
        self._current_egt += alpha_egt * (target_egt - self._current_egt)
        self._current_oil_temp += alpha_oil_temp * (target_oil_temp - self._current_oil_temp)

        for i in range(4):
            self._cyl_cht[i] += alpha_cht * (cyl_cht_targets[i] - self._cyl_cht[i])
            self._cyl_egt[i] += alpha_egt * (cyl_egt_targets[i] - self._cyl_egt[i])

        # 5. Add realistic Gaussian sensor noise
        rpm_noisy = max(0.0, self._current_rpm + random.gauss(0, 14.0))
        cht_noisy = max(0.0, self._current_cht + random.gauss(0, 0.45))
        egt_noisy = max(0.0, self._current_egt + random.gauss(0, 1.8))
        oil_p_noisy = max(0.0, self._current_oil_press + random.gauss(0, 0.35))
        oil_t_noisy = max(0.0, self._current_oil_temp + random.gauss(0, 0.25))
        map_noisy = max(0.0, self._current_map + random.gauss(0, 0.08))
        vib_noisy = max(0.0, self._current_vibration + random.gauss(0, 0.04))
        ff_noisy = max(0.0, self._current_fuel_flow + random.gauss(0, 0.15))

        cyl_cht_noisy = [max(0.0, c + random.gauss(0, 0.5)) for c in self._cyl_cht]
        cyl_egt_noisy = [max(0.0, e + random.gauss(0, 2.0)) for e in self._cyl_egt]

        return EngineTelemetry(
            timestamp=now,
            rpm=round(rpm_noisy, 1),
            cht=round(cht_noisy, 1),
            cht_cylinders=[round(c, 1) for c in cyl_cht_noisy],
            egt=round(egt_noisy, 1),
            egt_cylinders=[round(e, 1) for e in cyl_egt_noisy],
            oil_pressure=round(oil_p_noisy, 1),
            oil_temperature=round(oil_t_noisy, 1),
            throttle=round(self.throttle, 3),
            altitude=round(self.altitude, 1),
            manifold_pressure=round(map_noisy, 2),
            vibration=round(vib_noisy, 3),
            fuel_flow=round(ff_noisy, 2),
            active_fault=self.active_fault.value,
            fault_severity=round(self.fault_severity, 2),
        )


if __name__ == "__main__":
    print("Testing Engine Simulator...")
    sim = EngineSimulator()
    print("Nominal state:")
    for _ in range(3):
        t = sim.step(1.0)
        print(f"  RPM={t.rpm}, CHT={t.cht}°C, EGT={t.egt}°C, OilP={t.oil_pressure} PSI")

    print("\nInjecting Fault: Cylinder Misfire (Severity 0.8)...")
    sim.inject_fault(FaultType.CYLINDER_MISFIRE, severity=0.8)
    for i in range(5):
        t = sim.step(1.0)
        print(f"  Step {i+1}: RPM={t.rpm}, EGT={t.egt}°C, Cyl3_EGT={t.egt_cylinders[2]}°C, Vib={t.vibration}g")
