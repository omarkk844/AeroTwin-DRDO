import React from 'react';
import { Gauge, AlertTriangle, CheckCircle, TrendingUp, TrendingDown, Thermometer, Droplet, Wind, Zap } from 'lucide-react';
import { DigitalTwinFrame } from '../types/telemetry';

interface TelemetryGridProps {
  frame: DigitalTwinFrame;
  history: DigitalTwinFrame[];
}

interface GaugeDef {
  key: string;
  label: string;
  unit: string;
  value: number;
  expected: number;
  min: number;
  max: number;
  cautionLow?: number;
  nominalLow: number;
  nominalHigh: number;
  cautionHigh: number;
  decimals?: number;
  icon: React.ReactNode;
}

export const TelemetryGrid: React.FC<TelemetryGridProps> = ({ frame, history }) => {
  const { telemetry, physics_expected } = frame;

  const gauges: GaugeDef[] = [
    {
      key: 'rpm',
      label: 'ENGINE SPEED (RPM)',
      unit: 'RPM',
      value: telemetry?.rpm ?? 0,
      expected: physics_expected?.rpm ?? 5200,
      min: 0,
      max: 6200,
      nominalLow: 4200,
      nominalHigh: 5500,
      cautionHigh: 5800,
      decimals: 0,
      icon: <Gauge className="w-4 h-4 text-gcs-cyan" />,
    },
    {
      key: 'cht',
      label: 'CYLINDER HEAD TEMP',
      unit: '°C',
      value: telemetry?.cht ?? 0,
      expected: physics_expected?.cht ?? 140,
      min: 50,
      max: 220,
      nominalLow: 110,
      nominalHigh: 155,
      cautionHigh: 175,
      decimals: 1,
      icon: <Thermometer className="w-4 h-4 text-gcs-amber" />,
    },
    {
      key: 'egt',
      label: 'EXHAUST GAS TEMP',
      unit: '°C',
      value: telemetry?.egt ?? 0,
      expected: physics_expected?.egt ?? 760,
      min: 400,
      max: 950,
      nominalLow: 680,
      nominalHigh: 800,
      cautionHigh: 840,
      decimals: 1,
      icon: <Thermometer className="w-4 h-4 text-gcs-red" />,
    },
    {
      key: 'oil_press',
      label: 'LUBRICATION OIL PRESS',
      unit: 'PSI',
      value: telemetry?.oil_pressure ?? 0,
      expected: physics_expected?.oil_pressure ?? 55,
      min: 0,
      max: 100,
      cautionLow: 35,
      nominalLow: 45,
      nominalHigh: 75,
      cautionHigh: 85,
      decimals: 1,
      icon: <Droplet className="w-4 h-4 text-gcs-cyan" />,
    },
    {
      key: 'oil_temp',
      label: 'LUBRICATION OIL TEMP',
      unit: '°C',
      value: telemetry?.oil_temperature ?? 0,
      expected: physics_expected?.oil_temperature ?? 91,
      min: 40,
      max: 150,
      nominalLow: 75,
      nominalHigh: 110,
      cautionHigh: 125,
      decimals: 1,
      icon: <Droplet className="w-4 h-4 text-gcs-amber" />,
    },
    {
      key: 'map',
      label: 'MANIFOLD ABS PRESS (MAP)',
      unit: 'inHg',
      value: telemetry?.manifold_pressure ?? 0,
      expected: physics_expected?.manifold_pressure ?? 24.5,
      min: 10,
      max: 40,
      nominalLow: 18,
      nominalHigh: 28.5,
      cautionHigh: 34,
      decimals: 1,
      icon: <Wind className="w-4 h-4 text-gcs-cyan" />,
    },
    {
      key: 'fuel_flow',
      label: 'AVGAS FUEL CONSUMPTION',
      unit: 'L/h',
      value: telemetry?.fuel_flow ?? 0,
      expected: physics_expected?.fuel_flow_lph ?? 18.0,
      min: 0,
      max: 45,
      nominalLow: 10,
      nominalHigh: 26,
      cautionHigh: 32,
      decimals: 1,
      icon: <Zap className="w-4 h-4 text-gcs-green" />,
    },
    {
      key: 'vibration',
      label: 'ENGINE BLOCK VIBRATION',
      unit: 'g RMS',
      value: telemetry?.vibration ?? 1.15,
      expected: 1.10,
      min: 0,
      max: 6.0,
      nominalLow: 0.5,
      nominalHigh: 2.0,
      cautionHigh: 3.2,
      decimals: 2,
      icon: <TrendingUp className="w-4 h-4 text-gcs-amber" />,
    },
  ];

  // Helper to determine status category for gauge
  const getStatus = (g: GaugeDef) => {
    const val = g.value;
    if (g.cautionLow !== undefined && val < g.cautionLow) return 'CRITICAL';
    if (val > g.cautionHigh) return 'CRITICAL';
    if (val < g.nominalLow || val > g.nominalHigh) return 'CAUTION';
    return 'NOMINAL';
  };

  // Helper to extract historical points for mini strip line
  const extractHistory = (key: string): number[] => {
    if (!history || history.length === 0) return [0];
    return history.map((h) => {
      switch (key) {
        case 'rpm': return h.telemetry.rpm;
        case 'cht': return h.telemetry.cht;
        case 'egt': return h.telemetry.egt;
        case 'oil_press': return h.telemetry.oil_pressure;
        case 'oil_temp': return h.telemetry.oil_temperature;
        case 'map': return h.telemetry.manifold_pressure;
        case 'fuel_flow': return h.telemetry.fuel_flow;
        case 'vibration': return h.telemetry.vibration;
        default: return 0;
      }
    });
  };

  return (
    <div className="space-y-4">
      {/* Sector Header */}
      <div className="flex flex-wrap items-center justify-between p-3 bg-carbon-900 border border-gcs-border">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-gcs-cyan"></span>
          <h2 className="text-sm font-bold tracking-widest text-white uppercase font-mono">
            AERO-PISTON TELEMETRY MATRIX & DIVERGENCE RESIDUALS
          </h2>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-gcs-green">
            <span className="w-2 h-2 bg-gcs-green"></span> NOMINAL ZONE
          </span>
          <span className="flex items-center gap-1.5 text-gcs-amber">
            <span className="w-2 h-2 bg-gcs-amber"></span> CAUTION BAND
          </span>
          <span className="flex items-center gap-1.5 text-gcs-red">
            <span className="w-2 h-2 bg-gcs-red"></span> REDLINE LIMIT
          </span>
        </div>
      </div>

      {/* Main High-Density Aerospace Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {gauges.map((g) => {
          const status = getStatus(g);
          const delta = g.value - g.expected;
          const points = extractHistory(g.key);
          const percent = Math.min(100, Math.max(0, ((g.value - g.min) / (g.max - g.min)) * 100));

          // Strip Chart SVG Path
          const svgWidth = 140;
          const svgHeight = 28;
          let pathD = '';
          if (points.length > 1) {
            const minVal = Math.min(...points, g.min);
            const maxVal = Math.max(...points, g.max);
            const range = maxVal - minVal || 1;
            pathD = points.reduce((acc, pt, idx) => {
              const x = (idx / (points.length - 1)) * svgWidth;
              const y = svgHeight - ((pt - minVal) / range) * (svgHeight - 4) - 2;
              return `${acc} ${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`;
            }, '');
          }

          return (
            <div
              key={g.key}
              className={`p-3 bg-gunmetal-800 border transition-all ${
                status === 'CRITICAL'
                  ? 'border-gcs-red bg-red-950/20'
                  : status === 'CAUTION'
                  ? 'border-gcs-amber bg-amber-950/15'
                  : 'border-gcs-border hover:border-gcs-borderBright'
              }`}
            >
              {/* Header: Label & Status Icon */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {g.icon}
                  <span className="text-[11px] font-bold text-slate-300 tracking-wider font-mono">
                    {g.label}
                  </span>
                </div>
                {status === 'CRITICAL' ? (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-gcs-red animate-pulse">
                    <AlertTriangle className="w-3.5 h-3.5" /> ALARM
                  </span>
                ) : status === 'CAUTION' ? (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-gcs-amber">
                    <AlertTriangle className="w-3.5 h-3.5" /> CAUTION
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-gcs-green">
                    <CheckCircle className="w-3 h-3" /> OK
                  </span>
                )}
              </div>

              {/* Readout Value */}
              <div className="mt-2 flex items-baseline justify-between">
                <div className="flex items-baseline gap-1.5">
                  <span
                    className={`text-2xl font-extrabold font-mono tracking-tight ${
                      status === 'CRITICAL'
                        ? 'text-gcs-red glow-red'
                        : status === 'CAUTION'
                        ? 'text-gcs-amber glow-amber'
                        : 'text-gcs-cyan glow-cyan'
                    }`}
                  >
                    {g.value.toFixed(g.decimals ?? 1)}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{g.unit}</span>
                </div>

                {/* Strip Chart Mini Sparkline */}
                {pathD && (
                  <div className="flex flex-col items-end">
                    <svg width={svgWidth} height={svgHeight} className="overflow-visible">
                      <path
                        d={pathD}
                        fill="none"
                        stroke={status === 'CRITICAL' ? '#EF4444' : status === 'CAUTION' ? '#F59E0B' : '#38BDF8'}
                        strokeWidth="1.75"
                        strokeLinecap="square"
                      />
                    </svg>
                    <span className="text-[9px] text-slate-400 font-mono -mt-1">60s TREND</span>
                  </div>
                )}
              </div>

              {/* Progress Bar / Threshold Limit Indicator */}
              <div className="mt-3">
                <div className="relative w-full h-2 bg-carbon-950 border border-gcs-border overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      status === 'CRITICAL'
                        ? 'bg-gcs-red'
                        : status === 'CAUTION'
                        ? 'bg-gcs-amber'
                        : 'bg-gcs-cyan'
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                  {/* Nominal zone bracket */}
                  <div
                    className="absolute top-0 bottom-0 border-l border-r border-gcs-green/50 pointer-events-none"
                    style={{
                      left: `${((g.nominalLow - g.min) / (g.max - g.min)) * 100}%`,
                      width: `${((g.nominalHigh - g.nominalLow) / (g.max - g.min)) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 mt-1 font-mono">
                  <span>{g.min}</span>
                  <span className="text-slate-300">NOMINAL: {g.nominalLow}-{g.nominalHigh}</span>
                  <span>{g.max}</span>
                </div>
              </div>

              {/* Theoretical Physics Delta & Expected */}
              <div className="mt-2 pt-2 border-t border-gcs-border/60 flex items-center justify-between text-[11px] font-mono">
                <div className="text-slate-400">
                  PHYSICS EXP: <strong className="text-slate-200">{g.expected.toFixed(g.decimals ?? 1)}</strong>
                </div>
                <div className={`flex items-center gap-0.5 font-bold ${
                  Math.abs(delta) > (g.nominalHigh - g.nominalLow) * 0.25 ? 'text-gcs-amber' : 'text-slate-400'
                }`}>
                  {delta >= 0 ? <TrendingUp className="w-3 h-3 text-gcs-amber" /> : <TrendingDown className="w-3 h-3 text-gcs-cyan" />}
                  <span>{delta >= 0 ? `+${delta.toFixed(1)}` : delta.toFixed(1)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4-Cylinder Individual Breakdown Panels for CHT and EGT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        {/* CHT 4-Cylinder Breakdown */}
        <div className="p-3 bg-gunmetal-800 border border-gcs-border font-mono">
          <div className="flex items-center justify-between pb-2 border-b border-gcs-border text-xs">
            <span className="text-gcs-amber font-bold flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-gcs-amber" />
              CYLINDER HEAD TEMPERATURE (CHT) // 4-CYLINDER SPREAD
            </span>
            <span className="text-slate-400 text-[11px]">LIMIT: 175°C</span>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {(telemetry?.cht_cylinders ?? [141, 143, 140, 144]).map((temp, i) => {
              const isHigh = temp > 170;
              const isWarn = temp > 155;
              const p = Math.min(100, Math.max(0, ((temp - 80) / (200 - 80)) * 100));
              return (
                <div key={i} className="p-2 bg-carbon-950 border border-gcs-border text-center">
                  <div className="text-[10px] text-slate-400">CYLINDER #{i + 1}</div>
                  <div className={`text-base font-bold my-1 ${isHigh ? 'text-gcs-red animate-pulse' : isWarn ? 'text-gcs-amber' : 'text-white'}`}>
                    {temp.toFixed(1)}°C
                  </div>
                  <div className="w-full h-1.5 bg-gunmetal-700 overflow-hidden">
                    <div
                      className={`h-full ${isHigh ? 'bg-gcs-red' : isWarn ? 'bg-gcs-amber' : 'bg-gcs-green'}`}
                      style={{ width: `${p}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* EGT 4-Cylinder Breakdown */}
        <div className="p-3 bg-gunmetal-800 border border-gcs-border font-mono">
          <div className="flex items-center justify-between pb-2 border-b border-gcs-border text-xs">
            <span className="text-gcs-red font-bold flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-gcs-red" />
              EXHAUST GAS TEMPERATURE (EGT) // 4-CYLINDER SPREAD
            </span>
            <span className="text-slate-400 text-[11px]">LIMIT: 840°C</span>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {(telemetry?.egt_cylinders ?? [761, 769, 763, 766]).map((temp, i) => {
              const isHigh = temp > 820;
              const isLow = temp < 620; // Potential misfire signature
              const isWarn = temp > 800;
              const p = Math.min(100, Math.max(0, ((temp - 500) / (950 - 500)) * 100));
              return (
                <div key={i} className="p-2 bg-carbon-950 border border-gcs-border text-center">
                  <div className="text-[10px] text-slate-400">CYLINDER #{i + 1}</div>
                  <div className={`text-base font-bold my-1 ${
                    isHigh ? 'text-gcs-red animate-pulse' : isLow ? 'text-gcs-cyan' : isWarn ? 'text-gcs-amber' : 'text-white'
                  }`}>
                    {temp.toFixed(1)}°C
                  </div>
                  <div className="w-full h-1.5 bg-gunmetal-700 overflow-hidden">
                    <div
                      className={`h-full ${isHigh ? 'bg-gcs-red' : isLow ? 'bg-gcs-cyan' : isWarn ? 'bg-gcs-amber' : 'bg-gcs-green'}`}
                      style={{ width: `${p}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
