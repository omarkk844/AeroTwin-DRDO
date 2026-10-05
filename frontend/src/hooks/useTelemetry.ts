import { useState, useEffect, useRef, useCallback } from 'react';
import { DigitalTwinFrame, AnomalyLogEntry } from '../types/telemetry';

const WS_URL = 'ws://localhost:8000/ws/telemetry';
const API_BASE_URL = 'http://localhost:8000';
const MAX_HISTORY = 60;

// High-fidelity fallback state in case backend has not been spun up yet
const createBaselineFrame = (): DigitalTwinFrame => ({
  timestamp: Date.now() / 1000,
  telemetry: {
    rpm: 5210,
    cht: 142.4,
    cht_cylinders: [141.2, 143.5, 140.8, 144.1],
    egt: 765.2,
    egt_cylinders: [761.5, 769.1, 763.4, 766.8],
    oil_pressure: 54.8,
    oil_temperature: 92.5,
    throttle: 0.75,
    altitude: 1850,
    manifold_pressure: 24.6,
    vibration: 1.15,
    fuel_flow: 18.2,
  },
  physics_expected: {
    rpm: 5200,
    cht: 140.0,
    egt: 760.0,
    manifold_pressure: 24.5,
    oil_pressure: 55.0,
    oil_temperature: 91.0,
    power_kw: 58.4,
    fuel_flow_lph: 18.0,
  },
  residuals: {
    delta_rpm: 10.0,
    delta_cht: 2.4,
    delta_egt: 5.2,
    delta_oil_pressure: -0.2,
    delta_oil_temperature: 1.5,
    delta_manifold_pressure: 0.1,
    delta_fuel_flow: 0.2,
    residual_vector: [10.0, 2.4, 5.2, -0.2, 1.5, 0.1, 0.2],
  },
  ai_anomaly: {
    anomaly_score: 0.08,
    is_anomaly: false,
    reconstruction_error: 0.038,
    threshold: 0.35,
    root_cause_feature: 'delta_cht',
    feature_attributions: {
      delta_rpm: 0.12,
      delta_cht: 0.28,
      delta_egt: 0.22,
      delta_oil_pressure: 0.14,
      delta_oil_temperature: 0.10,
      delta_manifold_pressure: 0.08,
      delta_fuel_flow: 0.06,
    },
  },
  prognostics: {
    health_index: 94.6,
    rul_hours: 1702.8,
    nominal_tbo_hours: 1800.0,
    stress_components: {
      mechanical_stress: 1.04,
      thermal_stress: 0.98,
      lubrication_stress: 1.01,
      anomaly_stress: 1.00,
      total_stress_index: 1.03,
    },
  },
  dynamic_stress_budget: {
    current_rpm: 5210,
    budgeted_rpm: 4428,
    current_altitude_m: 1850,
    budgeted_altitude_m: 1250,
    current_stress_index: 1.03,
    budgeted_stress_index: 0.61,
    stress_reduction_percentage: 40.8,
    baseline_rul_hours: 1702.8,
    extended_rul_hours: 2418.0,
    rul_extension_delta_hours: 715.2,
    life_extension_multiplier: 1.42,
    tactical_advisory: 'CRUISE PROFILE NOMINAL - STRESS BUDGET READY',
  },
  fault_status: {
    active_fault: 'none',
    severity: 0.0,
  },
});

export function useTelemetry() {
  const [frame, setFrame] = useState<DigitalTwinFrame>(createBaselineFrame);
  const [history, setHistory] = useState<DigitalTwinFrame[]>([]);
  const [anomalyLogs, setAnomalyLogs] = useState<AnomalyLogEntry[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<'CONNECTED' | 'CONNECTING' | 'DISCONNECTED' | 'STANDALONE'>('CONNECTING');
  const [latencyMs, setLatencyMs] = useState<number>(12);
  const [isStressBudgetActive, setIsStressBudgetActive] = useState<boolean>(false);
  const [lastCommandAck, setLastCommandAck] = useState<string>('SYSTEM INITIALIZED');

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const simIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const activeFaultRef = useRef<{ type: string; severity: number }>({ type: 'none', severity: 0 });

  // Handle incoming frame
  const processIncomingFrame = useCallback((newFrame: DigitalTwinFrame) => {
    setFrame(newFrame);
    setHistory((prev) => {
      const updated = [...prev, newFrame];
      return updated.length > MAX_HISTORY ? updated.slice(updated.length - MAX_HISTORY) : updated;
    });

    // Check for anomaly logging
    if (newFrame.ai_anomaly && (newFrame.ai_anomaly.is_anomaly || newFrame.ai_anomaly.anomaly_score > 0.25)) {
      setAnomalyLogs((prev) => {
        const severity: 'NOMINAL' | 'ELEVATED' | 'CRITICAL' = 
          newFrame.ai_anomaly.anomaly_score > 0.55 ? 'CRITICAL' : 
          newFrame.ai_anomaly.anomaly_score > 0.35 ? 'ELEVATED' : 'NOMINAL';
        
        const newLog: AnomalyLogEntry = {
          id: `AE-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          timestamp: newFrame.timestamp ? newFrame.timestamp * 1000 : Date.now(),
          score: newFrame.ai_anomaly.anomaly_score,
          reconstruction_error: newFrame.ai_anomaly.reconstruction_error,
          root_cause: newFrame.ai_anomaly.root_cause_feature || 'Thermodynamic Residual Divergence',
          severity,
          details: `Recon Err: ${newFrame.ai_anomaly.reconstruction_error.toFixed(4)} | Cause: ${newFrame.ai_anomaly.root_cause_feature} | Fault: ${newFrame.fault_status?.active_fault || 'none'}`,
        };
        // Keep last 40 logs
        return [newLog, ...prev.slice(0, 39)];
      });
    }
  }, []);

  // WebSocket connection & reconnect loop
  const connectWebSocket = useCallback(() => {
    if (wsRef.current && (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)) {
      return;
    }

    setConnectionStatus('CONNECTING');
    try {
      const ws = new WebSocket(WS_URL);
      wsRef.current = ws;

      const pingStart = performance.now();

      ws.onopen = () => {
        setConnectionStatus('CONNECTED');
        setLatencyMs(Math.round(performance.now() - pingStart));
        setLastCommandAck('WS LINK ESTABLISHED (1Hz STREAM)');
        // Stop simulation generator when live WS connects
        if (simIntervalRef.current) {
          clearInterval(simIntervalRef.current);
          simIntervalRef.current = null;
        }
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'command_ack') {
            setLastCommandAck(`ACK: ${data.status} [${data.fault_type || ''}]`);
          } else if (data.telemetry) {
            processIncomingFrame(data as DigitalTwinFrame);
          }
        } catch (err) {
          console.error('Error parsing telemetry frame:', err);
        }
      };

      ws.onerror = () => {
        // Will close and trigger onclose
      };

      ws.onclose = () => {
        setConnectionStatus('STANDALONE');
        wsRef.current = null;
        // Schedule reconnect
        if (!reconnectTimeoutRef.current) {
          reconnectTimeoutRef.current = setTimeout(() => {
            reconnectTimeoutRef.current = null;
            connectWebSocket();
          }, 3000);
        }
        // Start synthetic generator if not already running
        startSyntheticLoop();
      };
    } catch {
      setConnectionStatus('STANDALONE');
      startSyntheticLoop();
    }
  }, [processIncomingFrame]);

  // Synthetic local fallback generator (physics-correlated so UI is always 100% interactive)
  const startSyntheticLoop = useCallback(() => {
    if (simIntervalRef.current) return;
    simIntervalRef.current = setInterval(() => {
      setFrame((curr) => {
        const timeNow = Date.now() / 1000;
        const fault = activeFaultRef.current;
        const isBudget = isStressBudgetActive;

        let targetRpm = isBudget ? 4420 : 5200;
        let targetCht = 142.0;
        let targetEgt = 765.0;
        let targetOilP = 55.0;
        let targetOilT = 92.0;
        let targetVib = 1.15;
        let targetScore = 0.08;
        let rootCause = 'nominal';

        if (fault.type === 'cylinder_misfire') {
          targetRpm -= 750 * fault.severity;
          targetEgt -= 180 * fault.severity;
          targetVib += 2.8 * fault.severity;
          targetScore = 0.78 * fault.severity;
          rootCause = 'delta_egt';
        } else if (fault.type === 'oil_leak') {
          targetOilP = Math.max(12, 55 - 40 * fault.severity);
          targetOilT += 28 * fault.severity;
          targetScore = 0.85 * fault.severity;
          rootCause = 'delta_oil_pressure';
        } else if (fault.type === 'cooling_blockage') {
          targetCht += 48 * fault.severity;
          targetScore = 0.82 * fault.severity;
          rootCause = 'delta_cht';
        } else if (fault.type === 'lean_mixture') {
          targetEgt += 75 * fault.severity;
          targetCht += 25 * fault.severity;
          targetScore = 0.69 * fault.severity;
          rootCause = 'delta_egt';
        }

        // Add subtle sensor jitter
        const jitter = (mag: number) => (Math.random() - 0.5) * mag;
        const rpm = Math.round(targetRpm + jitter(15));
        const cht = parseFloat((targetCht + jitter(0.8)).toFixed(1));
        const egt = parseFloat((targetEgt + jitter(2.5)).toFixed(1));
        const oilP = parseFloat((targetOilP + jitter(0.4)).toFixed(1));
        const oilT = parseFloat((targetOilT + jitter(0.5)).toFixed(1));
        const vib = parseFloat((targetVib + jitter(0.08)).toFixed(2));
        const score = parseFloat(Math.min(0.99, Math.max(0.04, targetScore + jitter(0.03))).toFixed(2));
        const reconErr = parseFloat((score * 0.45).toFixed(4));
        const isAnomaly = score > 0.35;

        const baseRul = fault.type !== 'none' ? Math.max(12, 1700 - 800 * fault.severity) : 1702.8;
        const extRul = isBudget ? baseRul * 1.45 : baseRul * 1.42;

        const nextFrame: DigitalTwinFrame = {
          timestamp: timeNow,
          telemetry: {
            rpm,
            cht,
            cht_cylinders: [
              parseFloat((cht + (fault.type === 'cylinder_misfire' ? -40 : jitter(1.5))).toFixed(1)),
              parseFloat((cht + jitter(1.2)).toFixed(1)),
              parseFloat((cht + jitter(1.8)).toFixed(1)),
              parseFloat((cht + jitter(1.1)).toFixed(1)),
            ],
            egt,
            egt_cylinders: [
              parseFloat((egt + (fault.type === 'cylinder_misfire' ? -180 : jitter(3.5))).toFixed(1)),
              parseFloat((egt + jitter(4.0)).toFixed(1)),
              parseFloat((egt + jitter(3.0)).toFixed(1)),
              parseFloat((egt + jitter(4.5)).toFixed(1)),
            ],
            oil_pressure: oilP,
            oil_temperature: oilT,
            throttle: isBudget ? 0.64 : 0.75,
            altitude: isBudget ? 1200 : 1850,
            manifold_pressure: parseFloat((24.6 + (isBudget ? -3.5 : 0) + jitter(0.2)).toFixed(1)),
            vibration: vib,
            fuel_flow: parseFloat((18.2 + (isBudget ? -3.2 : 0) + jitter(0.3)).toFixed(1)),
          },
          physics_expected: {
            rpm: isBudget ? 4430 : 5200,
            cht: 140.0,
            egt: 760.0,
            manifold_pressure: isBudget ? 21.2 : 24.5,
            oil_pressure: 55.0,
            oil_temperature: 91.0,
            power_kw: isBudget ? 46.2 : 58.4,
            fuel_flow_lph: isBudget ? 15.0 : 18.0,
          },
          residuals: {
            delta_rpm: rpm - (isBudget ? 4430 : 5200),
            delta_cht: parseFloat((cht - 140.0).toFixed(1)),
            delta_egt: parseFloat((egt - 760.0).toFixed(1)),
            delta_oil_pressure: parseFloat((oilP - 55.0).toFixed(1)),
            delta_oil_temperature: parseFloat((oilT - 91.0).toFixed(1)),
            delta_manifold_pressure: parseFloat((24.6 - 24.5).toFixed(1)),
            delta_fuel_flow: parseFloat((18.2 - 18.0).toFixed(1)),
            residual_vector: [rpm - 5200, cht - 140, egt - 760, oilP - 55, oilT - 91, 0.1, 0.2],
          },
          ai_anomaly: {
            anomaly_score: score,
            is_anomaly: isAnomaly,
            reconstruction_error: reconErr,
            threshold: 0.35,
            root_cause_feature: rootCause === 'nominal' ? 'delta_cht' : rootCause,
            feature_attributions: {
              delta_rpm: fault.type === 'cylinder_misfire' ? 0.38 : 0.12,
              delta_cht: fault.type === 'cooling_blockage' ? 0.52 : 0.22,
              delta_egt: (fault.type === 'cylinder_misfire' || fault.type === 'lean_mixture') ? 0.55 : 0.20,
              delta_oil_pressure: fault.type === 'oil_leak' ? 0.58 : 0.14,
              delta_oil_temperature: fault.type === 'oil_leak' ? 0.24 : 0.10,
              delta_manifold_pressure: 0.08,
              delta_fuel_flow: 0.06,
            },
          },
          prognostics: {
            health_index: parseFloat(Math.max(10, 94.6 - (fault.type !== 'none' ? 25 * fault.severity : 0)).toFixed(1)),
            rul_hours: parseFloat(baseRul.toFixed(1)),
            nominal_tbo_hours: 1800.0,
            stress_components: {
              mechanical_stress: parseFloat((isBudget ? 0.72 : (fault.type === 'cylinder_misfire' ? 1.6 : 1.04)).toFixed(2)),
              thermal_stress: parseFloat((fault.type === 'cooling_blockage' ? 2.1 : 0.98).toFixed(2)),
              lubrication_stress: parseFloat((fault.type === 'oil_leak' ? 3.4 : 1.01).toFixed(2)),
              anomaly_stress: parseFloat((1.0 + score * 1.5).toFixed(2)),
              total_stress_index: parseFloat((fault.type !== 'none' ? 2.4 * fault.severity : (isBudget ? 0.61 : 1.03)).toFixed(2)),
            },
          },
          dynamic_stress_budget: {
            current_rpm: rpm,
            budgeted_rpm: Math.round(rpm * 0.85),
            current_altitude_m: isBudget ? 1200 : 1850,
            budgeted_altitude_m: 1200,
            current_stress_index: fault.type !== 'none' ? 2.4 : 1.03,
            budgeted_stress_index: fault.type !== 'none' ? 1.3 : 0.61,
            stress_reduction_percentage: 42.5,
            baseline_rul_hours: parseFloat(baseRul.toFixed(1)),
            extended_rul_hours: parseFloat(extRul.toFixed(1)),
            rul_extension_delta_hours: parseFloat((extRul - baseRul).toFixed(1)),
            life_extension_multiplier: parseFloat((extRul / Math.max(1, baseRul)).toFixed(2)),
            tactical_advisory: isBudget 
              ? 'STRESS BUDGETING ENGAGED: -15% RPM (4420) & DESCENT (1200M) ACTIVE' 
              : 'ADVISORY: ENGAGE DYNAMIC BUDGETING TO EXTEND RUL BY +42%',
          },
          fault_status: {
            active_fault: fault.type,
            severity: fault.severity,
          },
        };

        processIncomingFrame(nextFrame);
        return nextFrame;
      });
    }, 1000);
  }, [isStressBudgetActive, processIncomingFrame]);

  // Operational Control: Inject Fault
  const injectFault = useCallback(async (faultType: string, severity: number = 0.8) => {
    activeFaultRef.current = { type: faultType, severity };
    setLastCommandAck(`TRANSMITTING FAULT_INJECT: ${faultType} (Sev: ${severity})`);

    // 1. Send via WebSocket if open
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        command: 'inject_fault',
        fault_type: faultType,
        severity,
      }));
    }

    // 2. Also send via REST API
    try {
      await fetch(`${API_BASE_URL}/api/fault/inject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fault_type: faultType, severity }),
      });
    } catch {
      // Ignored if backend not running REST
    }
  }, []);

  // Operational Control: Clear Fault (Normal Recovery)
  const clearFault = useCallback(async () => {
    activeFaultRef.current = { type: 'none', severity: 0 };
    setLastCommandAck('TRANSMITTING FAULT_CLEAR: NORMAL RECOVERY');

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        command: 'clear_fault',
      }));
    }

    try {
      await fetch(`${API_BASE_URL}/api/fault/clear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      // Ignored if backend not running REST
    }
  }, []);

  // Operational Control: Dynamic Stress Budgeting Toggle
  const toggleDynamicStressBudgeting = useCallback(async () => {
    const nextState = !isStressBudgetActive;
    setIsStressBudgetActive(nextState);

    const throttle = nextState ? 0.6375 : 0.75; // -15% throttle reduction
    const altitude = nextState ? 1200.0 : 1850.0; // Descent into denser, cooler air

    setLastCommandAck(`DYNAMIC STRESS BUDGET: ${nextState ? 'ENGAGED (-15% RPM / DESCENT)' : 'DISENGAGED (NOMINAL CRUISE)'}`);

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        command: 'set_flight_condition',
        throttle,
        altitude,
      }));
    }

    try {
      await fetch(`${API_BASE_URL}/api/flight-condition`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ throttle, altitude, airspeed: 48.0 }),
      });
    } catch {
      // Ignored
    }
  }, [isStressBudgetActive]);

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      if (simIntervalRef.current) clearInterval(simIntervalRef.current);
      if (wsRef.current) wsRef.current.close();
    };
  }, [connectWebSocket]);

  return {
    frame,
    history,
    anomalyLogs,
    connectionStatus,
    latencyMs,
    isStressBudgetActive,
    lastCommandAck,
    injectFault,
    clearFault,
    toggleDynamicStressBudgeting,
  };
}
