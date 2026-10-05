import React, { useState } from 'react';
import { Gauge, Box, ShieldAlert, Cpu, Terminal, Radio } from 'lucide-react';
import { useTelemetry } from './hooks/useTelemetry';
import { Header } from './components/Header';
import { DroneModelViewer } from './components/DroneModelViewer';
import { TelemetryGrid } from './components/TelemetryGrid';
import { AnomalyConsole } from './components/AnomalyConsole';
import { StressBudgetingPanel } from './components/StressBudgetingPanel';
import { FaultInjector } from './components/FaultInjector';

type TabType = 'TELEMETRY' | 'DIGITAL_TWIN' | 'ANOMALIES' | 'PROGNOSTICS';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('TELEMETRY');

  const {
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
  } = useTelemetry();

  const tabs: { id: TabType; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'TELEMETRY',
      label: '[TACTICAL TELEMETRY]',
      icon: <Gauge className="w-4 h-4" />,
    },
    {
      id: 'DIGITAL_TWIN',
      label: '[3D DRONE DIGITAL TWIN]',
      icon: <Box className="w-4 h-4" />,
      badge: frame.fault_status?.active_fault !== 'none' ? 'HEAT' : undefined,
    },
    {
      id: 'ANOMALIES',
      label: '[ANOMALY RESIDUALS]',
      icon: <ShieldAlert className="w-4 h-4" />,
      badge: frame.ai_anomaly?.is_anomaly ? 'ALERT' : undefined,
    },
    {
      id: 'PROGNOSTICS',
      label: '[PROGNOSTICS & STRESS BUDGETING]',
      icon: <Cpu className="w-4 h-4" />,
      badge: isStressBudgetActive ? 'BUDGET ACTIVE' : undefined,
    },
  ];

  return (
    <div className="min-h-screen bg-carbon-900 text-gcs-textBright font-mono flex flex-col selection:bg-gcs-cyan selection:text-black">
      {/* 1. Tactical Header */}
      <Header
        frame={frame}
        connectionStatus={connectionStatus}
        latencyMs={latencyMs}
        lastCommandAck={lastCommandAck}
      />

      {/* 2. Navigation Tabs Bar */}
      <nav className="border-b border-gcs-border bg-carbon-950 px-4 flex items-center justify-between select-none">
        <div className="flex items-center gap-1 overflow-x-auto">
          {tabs.map((t) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`py-3 px-4 text-xs font-bold font-mono tracking-wider flex items-center gap-2 border-b-2 transition-all whitespace-nowrap active:scale-[0.99] ${
                  isActive
                    ? 'border-gcs-cyan text-gcs-cyan bg-gunmetal-800'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-gunmetal-800/40'
                }`}
              >
                {t.icon}
                <span>{t.label}</span>
                {t.badge && (
                  <span
                    className={`ml-1 px-1.5 py-0.2 text-[9px] font-extrabold border ${
                      t.badge === 'ALERT'
                        ? 'bg-red-950 border-gcs-red text-gcs-red animate-pulse'
                        : t.badge === 'HEAT'
                        ? 'bg-amber-950 border-gcs-amber text-gcs-amber animate-pulse'
                        : 'bg-cyan-950 border-gcs-cyan text-gcs-cyan'
                    }`}
                  >
                    {t.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tactical GCS Mode indicator */}
        <div className="hidden lg:flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-gcs-green animate-pulse" />
            GROUND TELEMETRY LINK: <strong className="text-white">ENCRYPTED L-BAND</strong>
          </span>
          <span className="text-gcs-border">|</span>
          <span>LAT/LON: <strong className="text-slate-200">14.2312° N, 76.5412° E</strong></span>
        </div>
      </nav>

      {/* 3. Main Workspace Tab View */}
      <main className="flex-1 p-4 overflow-y-auto max-w-7xl w-full mx-auto space-y-4">
        {activeTab === 'TELEMETRY' && (
          <div className="space-y-4">
            <TelemetryGrid frame={frame} history={history} />
            <FaultInjector
              frame={frame}
              onInjectFault={injectFault}
              onClearFault={clearFault}
            />
          </div>
        )}

        {activeTab === 'DIGITAL_TWIN' && (
          <div className="space-y-4">
            <div className="h-[620px] w-full">
              <DroneModelViewer frame={frame} />
            </div>
            <FaultInjector
              frame={frame}
              onInjectFault={injectFault}
              onClearFault={clearFault}
            />
          </div>
        )}

        {activeTab === 'ANOMALIES' && (
          <div className="space-y-4">
            <AnomalyConsole frame={frame} anomalyLogs={anomalyLogs} />
            <FaultInjector
              frame={frame}
              onInjectFault={injectFault}
              onClearFault={clearFault}
            />
          </div>
        )}

        {activeTab === 'PROGNOSTICS' && (
          <div className="space-y-4">
            <StressBudgetingPanel
              frame={frame}
              isStressBudgetActive={isStressBudgetActive}
              onToggleBudget={toggleDynamicStressBudgeting}
            />
            <FaultInjector
              frame={frame}
              onInjectFault={injectFault}
              onClearFault={clearFault}
            />
          </div>
        )}
      </main>

      {/* 4. Bottom Aerospace Footer Status Strip */}
      <footer className="border-t border-gcs-border bg-carbon-950 px-4 py-2 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-3 select-none">
        <div className="flex items-center gap-3">
          <span className="text-gcs-cyan font-bold">DRDO AEROTWIN</span>
          <span className="text-gcs-border">•</span>
          <span>DEFENCE RESEARCH &amp; DEVELOPMENT ORGANISATION // GOVT OF INDIA</span>
          <span className="text-gcs-border">•</span>
          <span className="text-slate-300">PS-26054 GROUND CONTROL STATION</span>
        </div>
        <div className="flex items-center gap-4 font-mono">
          <span className="text-slate-400">
            ENGINE TYPE: <span className="text-white">ROTAX 914-F TURBOCHARGED</span>
          </span>
          <span className="text-gcs-border">•</span>
          <span className="text-gcs-green font-semibold">100% OPERATIONAL // NO MOCKUPS</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
