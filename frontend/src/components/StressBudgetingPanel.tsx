import React from 'react';
import { Activity, ArrowDownRight, Clock, ShieldCheck, Zap, AlertTriangle, TrendingUp, Sliders } from 'lucide-react';
import { DigitalTwinFrame } from '../types/telemetry';

interface StressBudgetingPanelProps {
  frame: DigitalTwinFrame;
  isStressBudgetActive: boolean;
  onToggleBudget: () => void;
}

export const StressBudgetingPanel: React.FC<StressBudgetingPanelProps> = ({
  frame,
  isStressBudgetActive,
  onToggleBudget,
}) => {
  const { prognostics, dynamic_stress_budget } = frame;

  const healthIndex = prognostics?.health_index ?? 94.5;
  const currentRul = prognostics?.rul_hours ?? 1702.8;
  const tbo = prognostics?.nominal_tbo_hours ?? 1800.0;
  const stress = prognostics?.stress_components ?? {
    mechanical_stress: 1.04,
    thermal_stress: 0.98,
    lubrication_stress: 1.01,
    anomaly_stress: 1.00,
    total_stress_index: 1.03,
  };

  const budget = dynamic_stress_budget ?? {
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
  };

  // Generate SVG RUL Projection Curve Points
  // X-axis: 0 to 2500 flight hours, Y-axis: 100% health down to 0%
  const svgW = 600;
  const svgH = 220;
  const padding = { top: 20, right: 30, bottom: 35, left: 50 };
  const plotW = svgW - padding.left - padding.right;
  const plotH = svgH - padding.top - padding.bottom;

  // Unmitigated curve endpoint
  const baseEndHours = Math.min(2500, Math.max(100, budget.baseline_rul_hours));
  const extEndHours = Math.min(2500, Math.max(100, budget.extended_rul_hours));

  // Current health coordinates
  const startX = padding.left;
  const startY = padding.top + (1 - healthIndex / 100) * plotH;

  // Baseline unmitigated path
  const baseEndX = padding.left + (baseEndHours / 2500) * plotW;
  const baseEndY = padding.top + plotH; // 0% health

  // Extended stress-budgeted path
  const extEndX = padding.left + (extEndHours / 2500) * plotW;
  const extEndY = padding.top + plotH;

  const baseCurve = `M ${startX},${startY} Q ${(startX + baseEndX) / 2},${(startY + baseEndY) / 2 + 15} ${baseEndX},${baseEndY}`;
  const extCurve = `M ${startX},${startY} Q ${(startX + extEndX) / 2},${(startY + extEndY) / 2 - 15} ${extEndX},${extEndY}`;

  return (
    <div className="space-y-4 select-none font-mono">
      {/* Dynamic Stress Budgeting Operational Control Header */}
      <div className={`p-4 border transition-all ${
        isStressBudgetActive
          ? 'bg-gunmetal-800 border-gcs-cyan'
          : 'bg-gunmetal-800 border-gcs-border'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 border flex items-center justify-center ${
              isStressBudgetActive ? 'border-gcs-cyan bg-gcs-cyan/20 text-gcs-cyan' : 'border-gcs-border bg-carbon-950 text-slate-400'
            }`}>
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                  DYNAMIC STRESS BUDGETING (TACTICAL RUL PRESERVATION)
                </h3>
                <span className={`px-2 py-0.5 text-[10px] font-bold border ${
                  isStressBudgetActive
                    ? 'bg-gcs-cyan text-black border-gcs-cyan animate-pulse'
                    : 'bg-carbon-950 text-slate-400 border-gcs-border'
                }`}>
                  {isStressBudgetActive ? 'PROFILE ENGAGED' : 'STANDBY (NOMINAL)'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Reduces shaft RPM by 15% and commands altitude descent into cooler, denser air to slash Arrhenius thermal strain and Basquin fatigue damage.
              </p>
            </div>
          </div>

          {/* Operational Tactical Toggle Button */}
          <button
            onClick={onToggleBudget}
            className={`px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border transition-all flex items-center gap-2 shadow-lg active:scale-95 ${
              isStressBudgetActive
                ? 'bg-gcs-cyan hover:bg-sky-300 text-black border-gcs-cyan'
                : 'bg-carbon-950 hover:bg-gunmetal-700 text-gcs-cyan border-gcs-cyan hover:shadow-cyan-500/20'
            }`}
          >
            <Zap className={`w-4 h-4 ${isStressBudgetActive ? 'text-black' : 'text-gcs-cyan animate-pulse'}`} />
            {isStressBudgetActive ? 'DISENGAGE STRESS BUDGET' : 'ENGAGE DYNAMIC STRESS BUDGET (-15% RPM)'}
          </button>
        </div>

        {/* Tactical Advisory Banner */}
        <div className="mt-3 pt-3 border-t border-gcs-border/60 flex flex-wrap items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-gcs-amber font-bold">DRDO ADVISORY &gt;</span>
            <span className="text-white font-semibold">{budget.tactical_advisory}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>TARGET RPM: <strong className="text-gcs-cyan">{budget.budgeted_rpm} RPM</strong></span>
            <span>•</span>
            <span>TARGET ALT: <strong className="text-gcs-cyan">{budget.budgeted_altitude_m} m</strong></span>
          </div>
        </div>
      </div>

      {/* Numerical Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Health Index */}
        <div className="p-3 bg-gunmetal-800 border border-gcs-border">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>HEALTH INDEX</span>
            <Activity className="w-4 h-4 text-gcs-cyan" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className={`text-3xl font-extrabold ${healthIndex > 80 ? 'text-gcs-green glow-green' : healthIndex > 50 ? 'text-gcs-amber' : 'text-gcs-red'}`}>
              {healthIndex.toFixed(1)}%
            </span>
            <span className="text-xs text-slate-400">OF FACTORY SPEC</span>
          </div>
          <div className="mt-2 w-full h-1.5 bg-carbon-950 border border-gcs-border overflow-hidden">
            <div className={`h-full ${healthIndex > 80 ? 'bg-gcs-green' : healthIndex > 50 ? 'bg-gcs-amber' : 'bg-gcs-red'}`} style={{ width: `${healthIndex}%` }} />
          </div>
        </div>

        {/* Baseline RUL vs Extended RUL */}
        <div className="p-3 bg-gunmetal-800 border border-gcs-border">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>REMAINING USEFUL LIFE (RUL)</span>
            <Clock className="w-4 h-4 text-gcs-amber" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white">
              {isStressBudgetActive ? budget.extended_rul_hours.toFixed(1) : currentRul.toFixed(1)}
            </span>
            <span className="text-xs text-slate-400">FLIGHT HRS</span>
          </div>
          <div className="mt-1 text-[11px] text-slate-400 flex justify-between">
            <span>FACTORY TBO: {tbo}h</span>
            <span className="text-gcs-cyan font-semibold">
              {isStressBudgetActive ? `EXTENDED (${budget.life_extension_multiplier.toFixed(2)}x)` : 'BASELINE'}
            </span>
          </div>
        </div>

        {/* Life Extension Gain Delta */}
        <div className="p-3 bg-gunmetal-800 border border-gcs-border">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>RUL EXTENSION DELTA</span>
            <TrendingUp className="w-4 h-4 text-gcs-green" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-gcs-green glow-green">
              +{budget.rul_extension_delta_hours.toFixed(1)}
            </span>
            <span className="text-xs text-slate-400">HOURS GAINED</span>
          </div>
          <div className="mt-1 text-[11px] text-slate-300">
            LIFE MULTIPLIER: <strong className="text-white font-bold">{budget.life_extension_multiplier.toFixed(2)}x EXTENSION</strong>
          </div>
        </div>

        {/* Degradation Rate / Stress Index */}
        <div className="p-3 bg-gunmetal-800 border border-gcs-border">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>STRESS ACCELERATION INDEX</span>
            <ArrowDownRight className="w-4 h-4 text-gcs-cyan" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className={`text-3xl font-extrabold ${stress.total_stress_index > 1.8 ? 'text-gcs-red' : stress.total_stress_index > 1.2 ? 'text-gcs-amber' : 'text-gcs-cyan'}`}>
              {isStressBudgetActive ? budget.budgeted_stress_index.toFixed(2) : stress.total_stress_index.toFixed(2)}x
            </span>
            <span className="text-xs text-slate-400">WEAR MULTIPLIER</span>
          </div>
          <div className="mt-1 text-[11px] text-gcs-green font-semibold">
            DAMAGE RATE: -{budget.stress_reduction_percentage.toFixed(1)}% MITIGATION
          </div>
        </div>
      </div>

      {/* Comparative Visual RUL Degradation Curves Chart */}
      <div className="p-4 bg-gunmetal-800 border border-gcs-border">
        <div className="flex flex-wrap items-center justify-between pb-3 border-b border-gcs-border text-xs gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-gcs-cyan"></span>
            <span className="text-white font-bold">RUL WEAR DEGRADATION CURVES // BASELINE VS BUDGETED PROFILE</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-gcs-red font-semibold">
              <span className="w-3 h-0.5 bg-gcs-red inline-block"></span>
              BASELINE HIGH-STRESS ({budget.baseline_rul_hours.toFixed(0)} hrs)
            </span>
            <span className="flex items-center gap-1.5 text-gcs-green font-semibold">
              <span className="w-3 h-0.5 bg-gcs-green inline-block"></span>
              BUDGETED EXTENDED PROFILE ({budget.extended_rul_hours.toFixed(0)} hrs)
            </span>
          </div>
        </div>

        {/* SVG Wear Projection Plot */}
        <div className="mt-3 relative w-full overflow-x-auto">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-56 bg-carbon-950 border border-gcs-border font-mono">
            {/* Grid Lines */}
            {[0.25, 0.5, 0.75].map((frac) => (
              <line
                key={frac}
                x1={padding.left}
                y1={padding.top + plotH * frac}
                x2={padding.left + plotW}
                y2={padding.top + plotH * frac}
                stroke="#1f242c"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}
            {[0.25, 0.5, 0.75].map((frac) => (
              <line
                key={frac}
                x1={padding.left + plotW * frac}
                y1={padding.top}
                x2={padding.left + plotW * frac}
                y2={padding.top + plotH}
                stroke="#1f242c"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}

            {/* Axes */}
            <line
              x1={padding.left}
              y1={padding.top + plotH}
              x2={padding.left + plotW}
              y2={padding.top + plotH}
              stroke="#262C36"
              strokeWidth="1.5"
            />
            <line
              x1={padding.left}
              y1={padding.top}
              x2={padding.left}
              y2={padding.top + plotH}
              stroke="#262C36"
              strokeWidth="1.5"
            />

            {/* Y Axis Labels (Health %) */}
            <text x={padding.left - 8} y={padding.top + 4} fill="#64748B" fontSize="9" textAnchor="end">100%</text>
            <text x={padding.left - 8} y={padding.top + plotH * 0.5 + 3} fill="#64748B" fontSize="9" textAnchor="end">50%</text>
            <text x={padding.left - 8} y={padding.top + plotH + 3} fill="#64748B" fontSize="9" textAnchor="end">0% (EOL)</text>

            {/* X Axis Labels (Hours) */}
            <text x={padding.left} y={svgH - 10} fill="#64748B" fontSize="9" textAnchor="middle">0h</text>
            <text x={padding.left + plotW * 0.5} y={svgH - 10} fill="#64748B" fontSize="9" textAnchor="middle">1250h</text>
            <text x={padding.left + plotW} y={svgH - 10} fill="#64748B" fontSize="9" textAnchor="middle">2500h</text>

            {/* Delta Highlight Area between curves */}
            <path
              d={`${baseCurve} L ${extEndX},${extEndY} Q ${(startX + extEndX) / 2},${(startY + extEndY) / 2 - 15} ${startX},${startY} Z`}
              fill="rgba(16, 185, 129, 0.08)"
            />

            {/* Baseline High-Stress Curve (Red) */}
            <path
              d={baseCurve}
              fill="none"
              stroke="#EF4444"
              strokeWidth="2.5"
              strokeDasharray={isStressBudgetActive ? '5 5' : 'none'}
            />

            {/* Extended Budgeted Curve (Green) */}
            <path
              d={extCurve}
              fill="none"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeDasharray={!isStressBudgetActive ? '5 5' : 'none'}
            />

            {/* Current Operating Point Marker */}
            <circle cx={startX} cy={startY} r="5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
            <text x={startX + 8} y={startY - 6} fill="#38BDF8" fontSize="10" fontWeight="bold">
              CURRENT ({healthIndex.toFixed(0)}%)
            </text>

            {/* Curve End Markers */}
            <circle cx={baseEndX} cy={baseEndY} r="4" fill="#EF4444" />
            <text x={baseEndX} y={baseEndY - 8} fill="#EF4444" fontSize="9" textAnchor="middle">
              {budget.baseline_rul_hours.toFixed(0)}h
            </text>

            <circle cx={extEndX} cy={extEndY} r="4" fill="#10B981" />
            <text x={extEndX} y={extEndY - 8} fill="#10B981" fontSize="9" textAnchor="middle">
              {budget.extended_rul_hours.toFixed(0)}h (+{budget.rul_extension_delta_hours.toFixed(0)}h)
            </text>
          </svg>
        </div>
      </div>

      {/* Physics Stress Breakdown Matrix */}
      <div className="p-4 bg-gunmetal-800 border border-gcs-border">
        <div className="flex items-center justify-between pb-2 border-b border-gcs-border text-xs">
          <span className="text-slate-200 font-bold flex items-center gap-2">
            <Zap className="w-4 h-4 text-gcs-amber" />
            FATIGUE & WEAR FACTOR DECOMPOSITION (FIRST-PRINCIPLES COEFFICIENTS)
          </span>
          <span className="text-slate-400 text-[11px]">1.00 = NOMINAL STEADY-STATE WEAR</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3">
          <div className="p-3 bg-carbon-950 border border-gcs-border">
            <div className="text-[10px] text-slate-400">MECHANICAL STRESS (BASQUIN α=3.2)</div>
            <div className="text-xl font-bold text-white mt-1">{stress.mechanical_stress.toFixed(2)}x</div>
            <div className="text-[10px] text-slate-400 mt-1">RPM inertia on crankshaft & piston pins</div>
          </div>
          <div className="p-3 bg-carbon-950 border border-gcs-border">
            <div className="text-[10px] text-slate-400">THERMAL STRESS (ARRHENIUS β=0.038)</div>
            <div className="text-xl font-bold text-white mt-1">{stress.thermal_stress.toFixed(2)}x</div>
            <div className="text-[10px] text-slate-400 mt-1">CHT thermal fatigue & cylinder head creep</div>
          </div>
          <div className="p-3 bg-carbon-950 border border-gcs-border">
            <div className="text-[10px] text-slate-400">LUBRICATION STRESS (BOUNDARY)</div>
            <div className="text-xl font-bold text-white mt-1">{stress.lubrication_stress.toFixed(2)}x</div>
            <div className="text-[10px] text-slate-400 mt-1">Oil film shear and bearing pressure</div>
          </div>
          <div className="p-3 bg-carbon-950 border border-gcs-border">
            <div className="text-[10px] text-slate-400">AI ANOMALY WEAR PENALTY</div>
            <div className="text-xl font-bold text-white mt-1">{stress.anomaly_stress.toFixed(2)}x</div>
            <div className="text-[10px] text-slate-400 mt-1">Autoencoder residual divergence scaling</div>
          </div>
        </div>
      </div>
    </div>
  );
};
