"""
AeroTwin - UAV Aero Piston Engine Digital Twin
Component: Remaining Useful Life (RUL) & Dynamic Stress Budgeting Engine
EMERGE-X Architecture | Problem Statement: 26054 (DRDO)

Calculates cumulative engine fatigue damage, instantaneous stress indices,
and remaining operational life (RUL) in flight hours.
Includes the tactical 'Dynamic Stress Budgeting' capability for DRDO UAV operations,
quantifying RUL life extension when engine RPM is reduced by 15% combined with
an altitude descent into cooler, denser air.
"""

from __future__ import annotations

import math
from dataclasses import asdict, dataclass
from typing import Any, Dict, Optional, Tuple


@dataclass
class StressComponents:
    """Breakdown of individual stress acceleration factors."""
    mechanical_stress: float      # Speed & piston inertia stress ~ (RPM/RPM_nominal)^alpha
    thermal_stress: float         # Arrhenius thermal fatigue ~ exp(beta * Delta_CHT)
    lubrication_stress: float     # Boundary friction wear from low oil pressure
    anomaly_stress: float         # Multiplier derived from AI Autoencoder anomaly score
    total_stress_index: float     # Cumulative degradation acceleration multiplier (1.0 = nominal)

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


@dataclass
class DynamicStressBudget:
    """
    Actionable tactical stress mitigation budget for DRDO UAV ground control.
    Quantifies the exact life extension gained by lowering RPM by 15% and descending.
    """
    current_rpm: float
    budgeted_rpm: float                # 15% reduction in RPM
    current_altitude_m: float
    budgeted_altitude_m: float         # Recommended lower altitude
    current_stress_index: float
    budgeted_stress_index: float
    stress_reduction_percentage: float # % reduction in damage accumulation rate
    baseline_rul_hours: float          # RUL remaining if current high stress continues
    extended_rul_hours: float          # RUL remaining under stress-budgeted flight profile
    rul_extension_delta_hours: float   # Additional flight hours gained (+X.X hrs)
    life_extension_multiplier: float   # Ratio: extended_rul / baseline_rul
    tactical_advisory: str             # High-priority pilot / autopilot recommendation

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


@dataclass
class RULEstimate:
    """Full RUL assessment snapshot."""
    timestamp: float
    health_index: float                # 0.0% (exhausted) to 100.0% (factory pristine)
    rul_hours: float                   # Remaining Useful Life at current operating condition
    nominal_tbo_hours: float           # Factory Time Between Overhauls (e.g., 1800 hrs)
    stress: StressComponents
    dynamic_budget: DynamicStressBudget

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


class RULEngine:
    """
    Prognostics & Health Management (PHM) engine for aero piston powerplants.
    Implements multi-physics wear modeling (mechanical, thermal, lubrication, and AI anomaly).
    """

    def __init__(
        self,
        nominal_tbo_hours: float = 1800.0,
        initial_health_index: float = 94.5,
        nominal_rpm: float = 5000.0,
        nominal_cht_c: float = 145.0,
    ) -> None:
        self.nominal_tbo_hours = nominal_tbo_hours
        self.health_index = max(0.0, min(100.0, initial_health_index))
        self.nominal_rpm = nominal_rpm
        self.nominal_cht = nominal_cht_c

        # Exponents and model coefficients based on aviation fatigue standards (Basquin / Manson-Coffin)
        self.mech_exponent = 3.2       # Basquin mechanical fatigue power-law exponent
        self.thermal_beta = 0.038      # Arrhenius thermal strain coefficient
        self.nominal_oil_p = 55.0      # PSI

    def calculate_stress_components(
        self,
        rpm: float,
        cht: float,
        oil_pressure: float,
        anomaly_score: float = 0.0,
    ) -> StressComponents:
        """
        Computes the physics-based stress acceleration factors.
        Normalized so that total_stress_index == 1.0 under standard nominal cruise.
        """
        # 1. Mechanical stress (crankshaft & connecting rod fatigue)
        rpm_ratio = max(0.2, rpm / self.nominal_rpm)
        mech_stress = math.pow(rpm_ratio, self.mech_exponent)

        # 2. Thermal stress (exponential Arrhenius creep above nominal 145°C)
        cht_excess = max(0.0, cht - self.nominal_cht)
        thermal_stress = math.exp(self.thermal_beta * cht_excess)

        # 3. Lubrication stress (thin film breakdown when pressure falls below 35 PSI)
        if oil_pressure < 35.0:
            oil_deficit = (35.0 - max(5.0, oil_pressure)) / 35.0
            lube_stress = 1.0 + 8.0 * math.pow(oil_deficit, 2.0)
        else:
            lube_stress = 1.0

        # 4. AI Anomaly multiplier (accelerates degradation when latent residuals diverge)
        anomaly_stress = 1.0 + 3.5 * math.pow(max(0.0, min(1.0, anomaly_score)), 2.0)

        # Combined degradation rate multiplier
        total_stress = mech_stress * thermal_stress * lube_stress * anomaly_stress

        return StressComponents(
            mechanical_stress=round(mech_stress, 3),
            thermal_stress=round(thermal_stress, 3),
            lubrication_stress=round(lube_stress, 3),
            anomaly_stress=round(anomaly_stress, 3),
            total_stress_index=round(total_stress, 3),
        )

    def calculate_dynamic_stress_budget(
        self,
        current_rpm: float,
        current_altitude_m: float,
        current_cht: float,
        current_oil_pressure: float,
        anomaly_score: float = 0.0,
    ) -> DynamicStressBudget:
        """
        Dynamic Stress Budgeting Algorithm:
        Computes the operational life and endurance extension achieved if the UAV:
        1. Lowers RPM by 15% (e.g., 5200 -> 4420 RPM).
        2. Drops altitude into denser, cooler air (e.g., -1000m or down to 1000m ASL).

        Physical benefits of descent:
        - Increased air density raises convective cooling heat transfer by ~22%.
        - Ambient temperature decreases or stabilizes, cooling CHT by ~18-28°C.
        - 15% RPM reduction drops mechanical fatigue rate by ~40% due to cubic exponent.
        """
        # Current unmitigated stress
        current_stress = self.calculate_stress_components(
            rpm=current_rpm,
            cht=current_cht,
            oil_pressure=current_oil_pressure,
            anomaly_score=anomaly_score,
        )

        # Mitigated parameters:
        # 1. Lower RPM by 15%
        budgeted_rpm = round(current_rpm * 0.85, 1)

        # 2. Drop altitude: recommended descent of 1000m (clamped to safe minimum 800m ASL)
        altitude_drop = min(1200.0, max(500.0, current_altitude_m * 0.45))
        budgeted_altitude = round(max(800.0, current_altitude_m - altitude_drop), 0)

        # 3. Physics effect on CHT:
        # Reduced RPM power output (-25% power) + denser cooling air drops CHT significantly
        cht_relief = 16.0 + 12.0 * (altitude_drop / 1000.0)
        budgeted_cht = max(self.nominal_cht - 5.0, current_cht - cht_relief)

        # 4. Oil pressure at budgeted RPM stabilizes with lower thermal thinning
        budgeted_oil_p = max(38.0, current_oil_pressure * 0.95)

        # 5. Mitigated stress calculation (assumes anomaly stress reduces with lowered load)
        budgeted_anomaly_score = max(0.0, anomaly_score * 0.5)
        mitigated_stress = self.calculate_stress_components(
            rpm=budgeted_rpm,
            cht=budgeted_cht,
            oil_pressure=budgeted_oil_p,
            anomaly_score=budgeted_anomaly_score,
        )

        curr_idx = max(0.2, current_stress.total_stress_index)
        mitig_idx = max(0.2, mitigated_stress.total_stress_index)

        # Life remaining calculations
        # Base nominal RUL left at 1.0x stress
        nominal_hours_remaining = (self.health_index / 100.0) * self.nominal_tbo_hours

        # Actual hours remaining under current vs budgeted stress
        baseline_rul = max(0.5, nominal_hours_remaining / curr_idx)
        extended_rul = max(0.5, nominal_hours_remaining / mitig_idx)
        delta_hours = max(0.0, extended_rul - baseline_rul)
        multiplier = extended_rul / baseline_rul
        stress_reduction_pct = max(0.0, min(95.0, ((curr_idx - mitig_idx) / curr_idx) * 100.0))

        # Tactical mission advisory generation
        if curr_idx > 2.5:
            severity = "CRITICAL ACTION REQUIRED"
        elif curr_idx > 1.4:
            severity = "ADVISORY"
        else:
            severity = "OPTIMAL"

        advisory = (
            f"[{severity}] Dynamic Stress Budget: Decelerate RPM to {budgeted_rpm:.0f} (-15%) "
            f"and descend to {budgeted_altitude:.0f}m ASL. "
            f"Reduces powerplant stress rate by {stress_reduction_pct:.1f}%, "
            f"extending engine survival window by +{delta_hours:.1f} flight hours "
            f"({multiplier:.2f}x endurance multiplier) for safe RTB or mission completion."
        )

        return DynamicStressBudget(
            current_rpm=round(current_rpm, 1),
            budgeted_rpm=budgeted_rpm,
            current_altitude_m=round(current_altitude_m, 1),
            budgeted_altitude_m=budgeted_altitude,
            current_stress_index=round(curr_idx, 3),
            budgeted_stress_index=round(mitig_idx, 3),
            stress_reduction_percentage=round(stress_reduction_pct, 1),
            baseline_rul_hours=round(baseline_rul, 1),
            extended_rul_hours=round(extended_rul, 1),
            rul_extension_delta_hours=round(delta_hours, 1),
            life_extension_multiplier=round(multiplier, 2),
            tactical_advisory=advisory,
        )

    def estimate(
        self,
        rpm: float,
        altitude_m: float,
        cht: float,
        oil_pressure: float,
        anomaly_score: float = 0.0,
        timestamp: Optional[float] = None,
        dt_seconds: float = 1.0,
    ) -> RULEstimate:
        """
        Updates the engine health state and generates a complete RUL snapshot
        with dynamic stress budgeting.
        """
        import time
        ts = timestamp or time.time()

        # Compute stresses
        stress = self.calculate_stress_components(
            rpm=rpm,
            cht=cht,
            oil_pressure=oil_pressure,
            anomaly_score=anomaly_score,
        )

        # Cumulative damage integration
        # At nominal stress (1.0), 1 second consumes (1 / (TBO * 3600)) of health index
        hours_per_sec = dt_seconds / 3600.0
        health_decrement = (hours_per_sec * stress.total_stress_index / self.nominal_tbo_hours) * 100.0
        self.health_index = max(0.0, self.health_index - health_decrement)

        # Baseline RUL
        curr_idx = max(0.1, stress.total_stress_index)
        nominal_remaining = (self.health_index / 100.0) * self.nominal_tbo_hours
        rul_hours = max(0.0, nominal_remaining / curr_idx)

        # Dynamic stress budgeting
        budget = self.calculate_dynamic_stress_budget(
            current_rpm=rpm,
            current_altitude_m=altitude_m,
            current_cht=cht,
            current_oil_pressure=oil_pressure,
            anomaly_score=anomaly_score,
        )

        return RULEstimate(
            timestamp=ts,
            health_index=round(self.health_index, 2),
            rul_hours=round(rul_hours, 1),
            nominal_tbo_hours=self.nominal_tbo_hours,
            stress=stress,
            dynamic_budget=budget,
        )


if __name__ == "__main__":
    print("Testing RUL Engine & Dynamic Stress Budgeting...")
    rul = RULEngine(nominal_tbo_hours=1800.0, initial_health_index=92.0)

    # 1. Nominal cruise scenario
    nominal_est = rul.estimate(
        rpm=5000.0,
        altitude_m=2000.0,
        cht=145.0,
        oil_pressure=58.0,
        anomaly_score=0.05,
    )
    print("\n--- Nominal Cruise ---")
    print(f"Health Index: {nominal_est.health_index}% | RUL: {nominal_est.rul_hours} hrs")
    print(f"Total Stress Index: {nominal_est.stress.total_stress_index}")

    # 2. High Stress / Fault scenario (High RPM, Overheating CHT, Anomaly detected)
    print("\n--- High Thermal & Anomaly Stress Scenario ---")
    stress_est = rul.estimate(
        rpm=5600.0,
        altitude_m=3200.0,
        cht=195.0,
        oil_pressure=32.0,
        anomaly_score=0.88,
    )
    print(f"Health Index: {stress_est.health_index}%")
    print(f"Unmitigated Stress Index: {stress_est.stress.total_stress_index}")
    print(f"Baseline RUL: {stress_est.rul_hours} hrs")

    b = stress_est.dynamic_budget
    print("\n--- Dynamic Stress Budgeting Calculation ---")
    print(f"Current RPM: {b.current_rpm} -> Budgeted (-15%): {b.budgeted_rpm}")
    print(f"Current Alt: {b.current_altitude_m}m -> Budgeted: {b.budgeted_altitude_m}m")
    print(f"Stress Reduction: {b.stress_reduction_percentage}%")
    print(f"RUL Extension: +{b.rul_extension_delta_hours} hours ({b.baseline_rul_hours}h -> {b.extended_rul_hours}h)")
    print(f"Endurance Multiplier: {b.life_extension_multiplier}x")
    print(f"\nAdvisory:\n{b.tactical_advisory}")
