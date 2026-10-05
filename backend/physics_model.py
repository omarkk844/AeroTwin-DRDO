"""
AeroTwin - UAV Aero Piston Engine Digital Twin
Component: SciPy-Based Thermodynamic Physics Model
EMERGE-X Architecture | Problem Statement: 26054 (DRDO)

Models the first-principles thermodynamic, atmospheric, and combustion behavior
of a UAV aero piston engine (Rotax 912/914 class).
Uses SciPy optimization and numerical solvers to compute expected steady-state
CHT, EGT, Manifold Absolute Pressure (MAP), Oil Pressure, and Power Output
based on altitude, throttle command, and true airspeed.
"""

from __future__ import annotations

import math
from dataclasses import asdict, dataclass
from typing import Any, Dict, Optional, Tuple

# Graceful import of SciPy with pure-math numerical fallbacks
try:
    from scipy.optimize import root_scalar, minimize_scalar  # type: ignore
    SCIPY_AVAILABLE = True
except ImportError:
    SCIPY_AVAILABLE = False


# ISA (International Standard Atmosphere) Constants
P0_SEA_LEVEL = 101325.0       # Pa (Sea Level Standard Pressure)
T0_SEA_LEVEL = 288.15         # K (15°C Sea Level Standard Temperature)
RHO0_SEA_LEVEL = 1.225        # kg/m^3 (Sea Level Standard Air Density)
LAPSE_RATE = 0.0065           # K/m (Troposphere Temperature Lapse Rate)
GAS_CONSTANT_AIR = 287.058    # J/(kg*K)
GRAVITY = 9.80665             # m/s^2
EXPONENT_LAPSE = GRAVITY / (GAS_CONSTANT_AIR * LAPSE_RATE)  # ~5.25588
P0_INHG = 29.9213             # inHg standard


@dataclass
class AtmosphericCondition:
    """Atmospheric state at a given flight altitude."""
    altitude_m: float
    temperature_k: float
    temperature_c: float
    pressure_pa: float
    pressure_inhg: float
    density_kg_m3: float
    density_ratio: float       # sigma = rho / rho0


@dataclass
class ExpectedThermodynamics:
    """Theoretical expected thermodynamic values predicted by physics model."""
    altitude_m: float
    throttle: float
    expected_rpm: float
    expected_cht: float               # °C
    expected_egt: float               # °C
    expected_manifold_pressure: float # inHg
    expected_oil_pressure: float      # PSI
    expected_oil_temperature: float   # °C
    expected_power_kw: float          # Kilowatts brake power
    expected_fuel_flow_lph: float     # Liters / hour
    atmospheric: AtmosphericCondition

    def to_dict(self) -> Dict[str, Any]:
        result = asdict(self)
        return result


@dataclass
class PhysicsResiduals:
    """
    Normalized and absolute differences between physical expectations
    and observed engine telemetry.
    Zero-mean under healthy operations; non-zero residuals indicate faults.
    """
    delta_rpm: float
    delta_cht: float
    delta_egt: float
    delta_oil_pressure: float
    delta_oil_temperature: float
    delta_manifold_pressure: float
    delta_fuel_flow: float
    residual_vector: list[float]  # Ordered vector for AI autoencoder inference

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


class AeroPistonPhysicsModel:
    """
    Thermodynamic digital twin of a 4-cylinder horizontally opposed
    aero piston powerplant (1211 cc displacement, 73.5 kW / 100 HP rated).
    """

    def __init__(
        self,
        displacement_cc: float = 1211.0,
        compression_ratio: float = 10.5,
        rated_power_kw: float = 73.5,
        rated_rpm: float = 5800.0,
        fuel_lhv_mj_kg: float = 43.5,  # Lower Heating Value of Avgas 100LL
    ) -> None:
        self.displacement_m3 = displacement_cc * 1e-6
        self.compression_ratio = compression_ratio
        self.rated_power_kw = rated_power_kw
        self.rated_rpm = rated_rpm
        self.fuel_lhv = fuel_lhv_mj_kg * 1e6  # J/kg

        # Thermal heat transfer constants
        self.a_fins = 0.85             # Effective cooling fin surface area (m^2)
        self.cp_exhaust = 1150.0       # Specific heat capacity of exhaust gas (J/kg*K)
        self.stoich_afr = 14.7         # Stoichiometric air-fuel ratio
        self.prop_k = 0.00038          # Propeller load absorption coefficient

    def calculate_atmosphere(self, altitude_m: float) -> AtmosphericCondition:
        """
        Computes standard atmospheric properties using the ISA barometric formula.
        """
        alt = max(0.0, min(11000.0, altitude_m))
        t_amb = T0_SEA_LEVEL - LAPSE_RATE * alt
        p_amb = P0_SEA_LEVEL * math.pow(t_amb / T0_SEA_LEVEL, EXPONENT_LAPSE)
        rho = p_amb / (GAS_CONSTANT_AIR * t_amb)
        sigma = rho / RHO0_SEA_LEVEL
        p_inhg = p_amb * (P0_INHG / P0_SEA_LEVEL)

        return AtmosphericCondition(
            altitude_m=alt,
            temperature_k=t_amb,
            temperature_c=t_amb - 273.15,
            pressure_pa=p_amb,
            pressure_inhg=p_inhg,
            density_kg_m3=rho,
            density_ratio=sigma,
        )

    def calculate_expected_map(self, throttle: float, atmosphere: AtmosphericCondition) -> float:
        """
        Computes expected Manifold Absolute Pressure (MAP) based on throttle plate
        angle restriction and ambient barometric pressure.
        """
        # Throttle discharge characteristic
        throttle_eff = math.pow(throttle, 1.15)
        # Manifold pressure: throttled fraction of ambient pressure + idle vacuum
        idle_map_fraction = 0.28
        map_inhg = atmosphere.pressure_inhg * (idle_map_fraction + (1.0 - idle_map_fraction) * throttle_eff)
        return float(map_inhg)

    def solve_equilibrium_rpm(self, throttle: float, map_inhg: float, atmosphere: AtmosphericCondition) -> float:
        """
        Uses SciPy root finding to solve the equilibrium RPM where engine torque
        equals the aerodynamic propeller resistance torque.
        """
        density_ratio = atmosphere.density_ratio

        def torque_balance(rpm: float) -> float:
            if rpm <= 500.0:
                return 100.0
            # Engine indicated power as function of MAP and RPM
            indicated_power = (
                self.rated_power_kw
                * (map_inhg / P0_INHG)
                * (rpm / self.rated_rpm)
                * math.sqrt(T0_SEA_LEVEL / atmosphere.temperature_k)
            )
            # Propeller aerodynamic power absorption ~ rho * RPM^3
            propeller_power = self.prop_k * density_ratio * math.pow(rpm / 1000.0, 3.0) * self.rated_power_kw
            return indicated_power - propeller_power

        if SCIPY_AVAILABLE:
            try:
                # Bracket between idle (1400 RPM) and redline (6200 RPM)
                sol = root_scalar(torque_balance, bracket=[1400.0, 6200.0], method="brentq")
                if sol.converged:
                    return float(sol.root)
            except Exception:
                pass

        # Robust analytical approximation if root finding fails or SciPy is absent
        rpm_approx = 2000.0 + (3800.0 * throttle) * math.pow(density_ratio, 0.12)
        return float(rpm_approx)

    def solve_steady_state_cht(
        self,
        rpm: float,
        power_kw: float,
        airspeed_mps: float,
        atmosphere: AtmosphericCondition,
    ) -> float:
        """
        Uses SciPy root finding to solve the steady-state thermal heat balance
        between cylinder combustion heat rejection and convective fin cooling.
        """
        t_amb_c = atmosphere.temperature_c
        sigma = atmosphere.density_ratio
        # In 4-stroke aero piston engines, approximately 16-18% of total mechanical/thermal power
        # is dissipated through cylinder head fins, while the majority exits through exhaust and oil.
        q_wall_heat = power_kw * 1000.0 * 0.28  # Watts rejected into finned cylinder heads

        # Convective heat transfer coefficient h_conv depends on ram air speed and air density
        # Nusselt number correlation for finned cylinders: Nu = c * Re^m
        reynolds_factor = math.pow((airspeed_mps * sigma) / 45.0, 0.72)
        h_effective = 85.0 * (0.4 + 0.6 * reynolds_factor) * self.a_fins

        def heat_balance(cht_c: float) -> float:
            # Convective cooling dissipation Q_cool = h_effective * (CHT - T_amb)
            q_dissipated = h_effective * (cht_c - t_amb_c)
            # Oil jacket heat absorption
            q_oil_dissipated = 0.12 * h_effective * (cht_c - (t_amb_c + 50.0))
            return q_wall_heat - (q_dissipated + q_oil_dissipated)

        if SCIPY_AVAILABLE:
            try:
                sol = root_scalar(heat_balance, bracket=[t_amb_c + 10.0, 300.0], method="brentq")
                if sol.converged:
                    return float(sol.root)
            except Exception:
                pass

        # Analytical steady-state fallback
        delta_t = q_wall_heat / max(10.0, h_effective * 1.12)
        return float(t_amb_c + delta_t)

    def calculate_expected_egt(self, throttle: float, map_inhg: float, atmosphere: AtmosphericCondition) -> float:
        """
        Thermodynamic calculation of Exhaust Gas Temperature (EGT).
        Aero engines run slightly richer at high power (takeoff) to suppress detonation,
        and leaner at cruise (75% throttle) which yields peak EGT.
        """
        t_amb_c = atmosphere.temperature_c
        # Equivalence ratio phi as function of throttle (1.0 = stoichiometric ~ peak EGT)
        # Cruise throttle ~0.75 operates close to best economy/peak EGT (~800°C)
        fuel_air_equivalence = 0.95 + 0.25 * math.pow(throttle, 2.5)  # Enriches at high throttle

        # Stoichiometric adiabatic flame temperature fraction
        t_combustion_base = 740.0 + 80.0 * math.sin(throttle * math.pi * 0.78)
        # Density effect: thinner air slightly alters combustion speed
        density_adj = (1.0 - atmosphere.density_ratio) * 15.0

        egt_expected = t_combustion_base + (t_amb_c * 0.15) + density_adj
        return float(egt_expected)

    def calculate_expected_oil_pressure(self, rpm: float, oil_temp_c: float) -> float:
        """
        Models positive displacement gear pump with spring-loaded relief valve.
        Viscosity decreases with oil temperature; relief valve regulates pressure.
        """
        # Dynamic viscosity approximation relative to 90°C reference
        viscosity_ratio = math.exp(-0.025 * (oil_temp_c - 90.0))
        # Unregulated pump discharge pressure
        raw_pressure = (28.0 + 38.0 * (rpm / self.rated_rpm)) * (0.8 + 0.2 * viscosity_ratio)
        # Spring-loaded relief valve ceiling at 72 PSI
        expected_p = min(72.0, max(22.0, raw_pressure))
        return float(expected_p)

    def compute_expected_state(
        self,
        altitude_m: float,
        throttle: float,
        airspeed_mps: float = 45.0,
    ) -> ExpectedThermodynamics:
        """
        Executes the full SciPy thermodynamic pipeline to predict healthy engine state.
        """
        atm = self.calculate_atmosphere(altitude_m)
        map_val = self.calculate_expected_map(throttle, atm)
        eq_rpm = self.solve_equilibrium_rpm(throttle, map_val, atm)

        # Brake power output
        power_kw = (
            self.rated_power_kw
            * (map_val / P0_INHG)
            * (eq_rpm / self.rated_rpm)
            * math.sqrt(T0_SEA_LEVEL / atm.temperature_k)
        )

        # Thermal states
        expected_cht = self.solve_steady_state_cht(eq_rpm, power_kw, airspeed_mps, atm)
        expected_egt = self.calculate_expected_egt(throttle, map_val, atm)

        # Oil states
        expected_oil_temp = atm.temperature_c + 45.0 + 40.0 * (power_kw / self.rated_power_kw)
        expected_oil_press = self.calculate_expected_oil_pressure(eq_rpm, expected_oil_temp)

        # Specific fuel consumption (BSFC ~ 285 g/kWh for Avgas aero piston)
        fuel_consumption_kg_h = power_kw * 0.285
        fuel_flow_lph = fuel_consumption_kg_h / 0.72  # 0.72 kg/L Avgas density

        return ExpectedThermodynamics(
            altitude_m=altitude_m,
            throttle=throttle,
            expected_rpm=round(eq_rpm, 1),
            expected_cht=round(expected_cht, 1),
            expected_egt=round(expected_egt, 1),
            expected_manifold_pressure=round(map_val, 2),
            expected_oil_pressure=round(expected_oil_press, 1),
            expected_oil_temperature=round(expected_oil_temp, 1),
            expected_power_kw=round(power_kw, 2),
            expected_fuel_flow_lph=round(fuel_flow_lph, 2),
            atmospheric=atm,
        )

    def calculate_residuals(
        self,
        actual_telemetry: Dict[str, Any],
        expected: ExpectedThermodynamics,
    ) -> PhysicsResiduals:
        """
        Calculates the delta (residual) between actual observed telemetry and
        the first-principles thermodynamic model.
        """
        delta_rpm = float(actual_telemetry.get("rpm", 0.0)) - expected.expected_rpm
        delta_cht = float(actual_telemetry.get("cht", 0.0)) - expected.expected_cht
        delta_egt = float(actual_telemetry.get("egt", 0.0)) - expected.expected_egt
        delta_oil_p = float(actual_telemetry.get("oil_pressure", 0.0)) - expected.expected_oil_pressure
        delta_oil_t = float(actual_telemetry.get("oil_temperature", 0.0)) - expected.expected_oil_temperature
        delta_map = float(actual_telemetry.get("manifold_pressure", 0.0)) - expected.expected_manifold_pressure
        delta_ff = float(actual_telemetry.get("fuel_flow", 0.0)) - expected.expected_fuel_flow_lph

        # Residual feature vector for AI Autoencoder
        vector = [
            delta_rpm,
            delta_cht,
            delta_egt,
            delta_oil_p,
            delta_oil_t,
            delta_map,
            delta_ff,
        ]

        return PhysicsResiduals(
            delta_rpm=round(delta_rpm, 2),
            delta_cht=round(delta_cht, 2),
            delta_egt=round(delta_egt, 2),
            delta_oil_pressure=round(delta_oil_p, 2),
            delta_oil_temperature=round(delta_oil_t, 2),
            delta_manifold_pressure=round(delta_map, 3),
            delta_fuel_flow=round(delta_ff, 2),
            residual_vector=[round(v, 3) for v in vector],
        )


if __name__ == "__main__":
    print(f"Testing Thermodynamic Physics Model (SciPy available: {SCIPY_AVAILABLE})...")
    model = AeroPistonPhysicsModel()
    pred = model.compute_expected_state(altitude_m=2000.0, throttle=0.75)
    print(f"Predicted at Alt=2000m, Throttle=75%:")
    print(f"  Expected RPM: {pred.expected_rpm}")
    print(f"  Expected CHT: {pred.expected_cht}°C")
    print(f"  Expected EGT: {pred.expected_egt}°C")
    print(f"  Expected MAP: {pred.expected_manifold_pressure} inHg")
    print(f"  Expected Oil Press: {pred.expected_oil_pressure} PSI")
    print(f"  Expected Power: {pred.expected_power_kw} kW")
