import React, { useState, useEffect } from 'react';
import { Radio, ShieldAlert, Cpu, Activity, Clock, ShieldCheck, Zap } from 'lucide-react';
import { DigitalTwinFrame } from '../types/telemetry';

interface HeaderProps {
  frame: DigitalTwinFrame;
  connectionStatus: 'CONNECTED' | 'CONNECTING' | 'DISCONNECTED' | 'STANDALONE';
  latencyMs: number;
  lastCommandAck: string;
}

export const Header: React.FC<HeaderProps> = ({
  frame,
  connectionStatus,
  latencyMs,
  lastCommandAck,
}) => {
  const [zuluTime, setZuluTime] = useState<string>('');

  useEffect(() => {
    const updateZulu = () => {
      const now = new Date();
      const year = now.getUTCFullYear();
      const month = String(now.getUTCMonth() + 1).padStart(2, '0');
      const day = String(now.getUTCDate()).padStart(2, '0');
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      setZuluTime(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}Z`);
    };
    updateZulu();
    const interval = setInterval(updateZulu, 1000);
    return () => clearInterval(interval);
  }, []);

  const isAnomaly = frame.ai_anomaly?.is_anomaly;
  const isFaultActive = frame.fault_status?.active_fault && frame.fault_status.active_fault !== 'none';

  return (
    <header className="border-b border-gcs-border bg-carbon-900 select-none">
      {/* Top Tactical Status Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2 border-b border-gcs-border/60 text-xs text-gcs-textMuted bg-carbon-950/70">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-gcs-cyan font-bold tracking-wider">
            <Radio className="w-3.5 h-3.5 text-gcs-cyan animate-pulse" />
            DRDO-ADE // AERONAUTICAL DEV ESTABLISHMENT
          </span>
          <span className="text-gcs-border">|</span>
          <span className="text-slate-300">
            AIRFRAME: <strong className="text-white">TAPAS-BH-201 (MALE UAV)</strong>
          </span>
          <span className="text-gcs-border">|</span>
          <span className="text-slate-300">
            ENGINE: <strong className="text-white">ROTAX 914-F TURBO (115 HP)</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-gcs-cyan" />
            <span>UTC ZULU:</span>
            <span className="text-gcs-cyan font-semibold tracking-wider">{zuluTime || 'SYNCING...'}</span>
          </div>
          <span className="text-gcs-border">|</span>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">LATENCY:</span>
            <span className="text-gcs-cyan font-bold">{latencyMs}ms</span>
          </div>
        </div>
      </div>

      {/* Main GCS Navigation & Identification Banner */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 gap-4">
        {/* Left: Branding & Mission ID */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-gcs-cyan bg-gunmetal-800 flex items-center justify-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-gcs-cyan/10"></div>
            <Zap className="w-6 h-6 text-gcs-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-xl font-extrabold tracking-widest text-white glow-cyan font-mono">
                AEROTWIN <span className="text-gcs-cyan">//</span> DRDO TACTICAL GCS
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider bg-gunmetal-700 border border-gcs-border text-gcs-cyan">
                REV 2.4.0
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs mt-0.5">
              <span className="text-slate-400">
                MISSION ID: <span className="text-gcs-amber font-bold tracking-wider font-mono">PS-26054</span>
              </span>
              <span className="text-gcs-border">•</span>
              <span className="text-slate-400">
                CALLSIGN: <span className="text-white font-semibold">VARUNA-ALPHA-01</span>
              </span>
              <span className="text-gcs-border">•</span>
              <span className="text-slate-400">
                GROUND NODE: <span className="text-gcs-green font-semibold">CHITRADURGA ATR</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Operational Status Badges */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Telemetry Link Indicator */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 bg-gunmetal-800 border border-gcs-border">
            <div className="relative flex items-center justify-center">
              <span
                className={`w-2.5 h-2.5 ${
                  connectionStatus === 'CONNECTED'
                    ? 'bg-gcs-green animate-ping'
                    : connectionStatus === 'STANDALONE'
                    ? 'bg-gcs-cyan'
                    : 'bg-gcs-amber animate-pulse'
                }`}
              />
              <span
                className={`absolute w-2.5 h-2.5 ${
                  connectionStatus === 'CONNECTED'
                    ? 'bg-gcs-green'
                    : connectionStatus === 'STANDALONE'
                    ? 'bg-gcs-cyan'
                    : 'bg-gcs-amber'
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 leading-tight">UPLINK STREAM</span>
              <span className="text-xs font-bold tracking-wider text-white">
                {connectionStatus === 'CONNECTED' ? '1Hz LIVE DUPLEX' : connectionStatus === 'STANDALONE' ? 'LOCAL TWIN RUNNER' : 'ACQUIRING LINK...'}
              </span>
            </div>
          </div>

          {/* AI Anomaly Sentinel Badge */}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 border transition-all ${
              isAnomaly
                ? 'bg-red-950/40 border-gcs-red text-gcs-red animate-pulse'
                : 'bg-gunmetal-800 border-gcs-border text-gcs-green'
            }`}
          >
            {isAnomaly ? <ShieldAlert className="w-4 h-4 text-gcs-red" /> : <ShieldCheck className="w-4 h-4 text-gcs-green" />}
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 leading-tight">AI SENTINEL</span>
              <span className="text-xs font-bold tracking-wider">
                {isAnomaly ? `ANOMALY: ${frame.ai_anomaly.root_cause_feature?.toUpperCase()}` : 'RESIDUALS NOMINAL'}
              </span>
            </div>
          </div>

          {/* Active Fault Flag */}
          {isFaultActive && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-950/40 border border-gcs-amber text-gcs-amber animate-pulse">
              <Activity className="w-4 h-4 text-gcs-amber" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 leading-tight">ACTIVE INJECTION</span>
                <span className="text-xs font-bold tracking-wider">
                  {frame.fault_status.active_fault.toUpperCase()} ({(frame.fault_status.severity * 100).toFixed(0)}%)
                </span>
              </div>
            </div>
          )}

          {/* System Health Index */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gunmetal-800 border border-gcs-border">
            <Cpu className="w-4 h-4 text-gcs-cyan" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 leading-tight">HEALTH INDEX</span>
              <span className={`text-xs font-bold tracking-wider ${
                (frame.prognostics?.health_index ?? 100) > 85
                  ? 'text-gcs-green'
                  : (frame.prognostics?.health_index ?? 100) > 60
                  ? 'text-gcs-amber'
                  : 'text-gcs-red'
              }`}>
                {(frame.prognostics?.health_index ?? 94.5).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Command & Audit Sub-Ticker */}
      <div className="px-4 py-1 bg-carbon-950 border-t border-gcs-border/40 text-[11px] flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="text-gcs-cyan font-semibold">STATUS ACK &gt;</span>
          <span className="text-slate-300 font-mono">{lastCommandAck}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">PYTORCH AE: <span className="text-gcs-cyan">ONLINE (DIM: 7)</span></span>
          <span className="text-gcs-border">•</span>
          <span className="text-slate-400">RUL MODEL: <span className="text-gcs-cyan">BASQUIN-MANSON HYBRID</span></span>
        </div>
      </div>
    </header>
  );
};
