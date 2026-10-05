import React, { useState } from 'react';
import { AlertOctagon, Flame, Droplets, ZapOff, CheckCircle2, Sliders, ShieldCheck, AlertTriangle } from 'lucide-react';
import { DigitalTwinFrame } from '../types/telemetry';

interface FaultInjectorProps {
  frame: DigitalTwinFrame;
  onInjectFault: (faultType: string, severity: number) => void;
  onClearFault: () => void;
}

export const FaultInjector: React.FC<FaultInjectorProps> = ({
  frame,
  onInjectFault,
  onClearFault,
}) => {
  const [severity, setSeverity] = useState<number>(0.8);
  const activeFault = frame.fault_status?.active_fault ?? 'none';
  const activeSeverity = frame.fault_status?.severity ?? 0.0;

  const faultButtons = [
    {
      id: 'cylinder_misfire',
      label: 'CYLINDER MISFIRE',
      desc: 'Loss of combustion in Cyl #1. Drops EGT & RPM, spikes block vibration.',
      icon: <ZapOff className="w-4 h-4 text-gcs-red" />,
      colorClass: 'hover:border-gcs-red hover:bg-red-950/30 text-red-200',
    },
    {
      id: 'oil_leak',
      label: 'OIL PRESSURE LOSS',
      desc: 'Critical lubricant pressure loss below 25 PSI. Escalates bearing friction.',
      icon: <Droplets className="w-4 h-4 text-gcs-amber" />,
      colorClass: 'hover:border-gcs-amber hover:bg-amber-950/30 text-amber-200',
    },
    {
      id: 'cooling_blockage',
      label: 'COOLING BLOCKAGE',
      desc: 'Air baffle / cowl intake restriction. Rapid CHT thermal runaway > 185°C.',
      icon: <Flame className="w-4 h-4 text-gcs-red" />,
      colorClass: 'hover:border-gcs-red hover:bg-red-950/30 text-red-200',
    },
    {
      id: 'lean_mixture',
      label: 'LEAN DETONATION',
      desc: 'Sub-stoichiometric fuel/air ratio. Extreme EGT elevation > 830°C.',
      icon: <AlertTriangle className="w-4 h-4 text-gcs-amber" />,
      colorClass: 'hover:border-gcs-amber hover:bg-amber-950/30 text-amber-200',
    },
  ];

  return (
    <div className="p-4 bg-gunmetal-800 border border-gcs-border select-none font-mono">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-3 border-b border-gcs-border gap-3 text-xs">
        <div className="flex items-center gap-2">
          <AlertOctagon className="w-4 h-4 text-gcs-red" />
          <h3 className="text-sm font-bold tracking-wider text-white uppercase">
            TACTICAL FAULT INJECTION & POWERPLANT INTEGRITY TESTING
          </h3>
        </div>

        {/* Current Active Fault Status Readout */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400">ACTIVE TEST:</span>
          {activeFault === 'none' ? (
            <span className="flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold bg-green-950/40 text-gcs-green border border-gcs-green">
              <ShieldCheck className="w-3.5 h-3.5" /> NOMINAL RECOVERY (ALL SYSTEMS GREEN)
            </span>
          ) : (
            <span className="flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold bg-red-950/50 text-gcs-red border border-gcs-red animate-pulse">
              <AlertOctagon className="w-3.5 h-3.5" /> {activeFault.toUpperCase()} ({(activeSeverity * 100).toFixed(0)}% SEV)
            </span>
          )}
        </div>
      </div>

      {/* Severity Selector Slider */}
      <div className="mt-4 p-3 bg-carbon-950 border border-gcs-border flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs">
          <Sliders className="w-4 h-4 text-gcs-cyan" />
          <span className="text-slate-300 font-bold">FAULT SEVERITY SCALING:</span>
          <span className="text-gcs-cyan font-extrabold text-sm">{(severity * 100).toFixed(0)}%</span>
          <span className="text-slate-500 text-[11px]">({severity < 0.4 ? 'MILD' : severity < 0.75 ? 'MODERATE' : 'CRITICAL REDLINE'})</span>
        </div>

        <div className="flex items-center gap-3 flex-1 max-w-xs">
          <span className="text-[10px] text-slate-500">20%</span>
          <input
            type="range"
            min="0.2"
            max="1.0"
            step="0.05"
            value={severity}
            onChange={(e) => setSeverity(parseFloat(e.target.value))}
            className="w-full accent-gcs-cyan cursor-pointer"
          />
          <span className="text-[10px] text-slate-500">100%</span>
        </div>
      </div>

      {/* Operational Tactical Fault Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        {faultButtons.map((fb) => {
          const isActive = activeFault === fb.id;
          return (
            <button
              key={fb.id}
              onClick={() => onInjectFault(fb.id, severity)}
              className={`p-3 text-left border transition-all flex flex-col justify-between active:scale-[0.98] ${
                isActive
                  ? 'bg-red-950/50 border-gcs-red shadow-lg shadow-red-950/40 ring-1 ring-gcs-red'
                  : `bg-carbon-950 border-gcs-border ${fb.colorClass}`
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider font-mono">
                    {fb.label}
                  </span>
                  {fb.icon}
                </div>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-sans">
                  {fb.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-gcs-border/60 flex items-center justify-between text-[10px]">
                <span className="text-slate-500 font-mono">COMMAND</span>
                <span
                  className={`font-bold font-mono tracking-wider ${
                    isActive ? 'text-gcs-red animate-pulse' : 'text-gcs-cyan'
                  }`}
                >
                  {isActive ? '● ACTIVE ENGAGED' : 'EXECUTE INJECT &gt;'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Normal Recovery Tactical Button */}
      <div className="mt-4">
        <button
          onClick={onClearFault}
          className={`w-full py-3 px-4 text-xs font-mono font-bold tracking-widest uppercase border transition-all flex items-center justify-center gap-2 active:scale-[0.99] ${
            activeFault === 'none'
              ? 'bg-carbon-950 border-gcs-green/50 text-gcs-green hover:bg-green-950/20'
              : 'bg-gcs-green hover:bg-emerald-400 text-black border-gcs-green shadow-lg animate-pulse'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          COMMAND NORMAL RECOVERY (RESET ENGINE & CLEAR ACTIVE INJECTIONS)
        </button>
      </div>
    </div>
  );
};
