export interface EngineTelemetryData {
  rpm: number;
  cht: number;
  cht_cylinders: number[];
  egt: number;
  egt_cylinders: number[];
  oil_pressure: number;
  oil_temperature: number;
  throttle: number;
  altitude: number;
  manifold_pressure: number;
  vibration: number;
  fuel_flow: number;
}

export interface PhysicsExpectedData {
  rpm: number;
  cht: number;
  egt: number;
  manifold_pressure: number;
  oil_pressure: number;
  oil_temperature: number;
  power_kw: number;
  fuel_flow_lph: number;
}

export interface ResidualsData {
  delta_rpm: number;
  delta_cht: number;
  delta_egt: number;
  delta_oil_pressure: number;
  delta_oil_temperature: number;
  delta_manifold_pressure: number;
  delta_fuel_flow: number;
  residual_vector?: number[];
}

export interface AIAnomalyData {
  anomaly_score: number;
  is_anomaly: boolean;
  reconstruction_error: number;
  threshold: number;
  root_cause_feature: string;
  feature_attributions: Record<string, number>;
}

export interface StressComponentsData {
  mechanical_stress: number;
  thermal_stress: number;
  lubrication_stress: number;
  anomaly_stress: number;
  total_stress_index: number;
}

export interface PrognosticsData {
  health_index: number;
  rul_hours: number;
  nominal_tbo_hours: number;
  stress_components: StressComponentsData;
}

export interface DynamicStressBudgetData {
  current_rpm: number;
  budgeted_rpm: number;
  current_altitude_m: number;
  budgeted_altitude_m: number;
  current_stress_index: number;
  budgeted_stress_index: number;
  stress_reduction_percentage: number;
  baseline_rul_hours: number;
  extended_rul_hours: number;
  rul_extension_delta_hours: number;
  life_extension_multiplier: number;
  tactical_advisory: string;
}

export interface FaultStatusData {
  active_fault: string;
  severity: number;
}

export interface DigitalTwinFrame {
  timestamp: number;
  telemetry: EngineTelemetryData;
  physics_expected: PhysicsExpectedData;
  residuals: ResidualsData;
  ai_anomaly: AIAnomalyData;
  prognostics: PrognosticsData;
  dynamic_stress_budget: DynamicStressBudgetData;
  fault_status: FaultStatusData;
}

export interface AnomalyLogEntry {
  id: string;
  timestamp: number;
  score: number;
  reconstruction_error: number;
  root_cause: string;
  severity: 'NOMINAL' | 'ELEVATED' | 'CRITICAL';
  details: string;
}
