import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Cpu, Terminal, Filter, Download, Trash2, AlertCircle } from 'lucide-react';
import { DigitalTwinFrame, AnomalyLogEntry } from '../types/telemetry';

interface AnomalyConsoleProps {
  frame: DigitalTwinFrame;
  anomalyLogs: AnomalyLogEntry[];
}

export const AnomalyConsole: React.FC<AnomalyConsoleProps> = ({ frame, anomalyLogs }) => {
  const [filterSeverity, setFilterSeverity] = useState<'ALL' | 'CRITICAL' | 'ELEVATED' | 'NOMINAL'>('ALL');
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const { ai_anomaly, residuals } = frame;
  const score = ai_anomaly?.anomaly_score ?? 0.08;
  const threshold = ai_anomaly?.threshold ?? 0.35;
  const isAnomaly = ai_anomaly?.is_anomaly ?? false;
  const reconError = ai_anomaly?.reconstruction_error ?? 0.038;
  const rootCause = ai_anomaly?.root_cause_feature ?? 'delta_cht';
  const attributions = ai_anomaly?.feature_attributions ?? {
    delta_rpm: 0.12,
    delta_cht: 0.28,
    delta_egt: 0.22,
    delta_oil_pressure: 0.14,
    delta_oil_temperature: 0.10,
    delta_manifold_pressure: 0.08,
    delta_fuel_flow: 0.06,
  };

  const filteredLogs = anomalyLogs.filter((log) => {
    if (filterSeverity === 'ALL') return true;
    return log.severity === filterSeverity;
  });

  const exportLogs = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(anomalyLogs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `aerotwin_anomaly_audit_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setCopiedNotification('AUDIT LOG EXPORTED TO JSON');
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  return (
    <div className="space-y-4 select-none font-mono">
      {/* Top Banner: PyTorch Model Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Anomaly Decision Boundary Card */}
        <div className={`p-4 bg-gunmetal-800 border transition-all ${
          isAnomaly ? 'border-gcs-red bg-red-950/20' : 'border-gcs-border'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-bold">PYTORCH AUTOENCODER SCORE</span>
            {isAnomaly ? (
              <span className="flex items-center gap-1 text-xs font-bold text-gcs-red animate-pulse">
                <ShieldAlert className="w-4 h-4" /> THRESHOLD BREACHED
              </span>
            ) : (
              <span className="flex items-center gap-1 text-xs font-semibold text-gcs-green">
                <ShieldCheck className="w-4 h-4" /> LATENT NOMINAL
              </span>
            )}
          </div>
          <div className="mt-3 flex items-baseline gap-3">
            <span className={`text-3xl font-extrabold ${isAnomaly ? 'text-gcs-red glow-red' : 'text-gcs-cyan glow-cyan'}`}>
              {(score * 100).toFixed(1)}%
            </span>
            <span className="text-xs text-slate-400">
              BOUNDARY: <strong className="text-gcs-amber">{(threshold * 100).toFixed(0)}%</strong>
            </span>
          </div>
          {/* Threshold Progress Bar */}
          <div className="mt-3 relative w-full h-2 bg-carbon-950 border border-gcs-border overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                isAnomaly ? 'bg-gcs-red' : score > 0.25 ? 'bg-gcs-amber' : 'bg-gcs-cyan'
              }`}
              style={{ width: `${Math.min(100, score * 100)}%` }}
            />
            {/* Threshold boundary mark */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gcs-amber z-10"
              style={{ left: `${threshold * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>0.0 (HEALTHY)</span>
            <span className="text-gcs-amber">DECISION THRESHOLD (0.35)</span>
            <span>1.0 (CRITICAL)</span>
          </div>
        </div>

        {/* Reconstruction Error & Latent Metrics */}
        <div className="p-4 bg-gunmetal-800 border border-gcs-border">
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
            <span>RESIDUAL RECONSTRUCTION MSE</span>
            <Cpu className="w-4 h-4 text-gcs-cyan" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white">
              {reconError.toFixed(4)}
            </span>
            <span className="text-xs text-slate-400">MSE LOSS</span>
          </div>
          <div className="mt-3 text-xs space-y-1 text-slate-300">
            <div className="flex justify-between">
              <span>LATENT BOTTLENECK:</span>
              <strong className="text-gcs-cyan">7 &gt; 3 &gt; 7 DENSE</strong>
            </div>
            <div className="flex justify-between">
              <span>INFERENCE CYCLE:</span>
              <strong className="text-white">1000 ms (SYNCED 1Hz)</strong>
            </div>
            <div className="flex justify-between">
              <span>PRIMARY FAULT CORRELATION:</span>
              <strong className="text-gcs-amber uppercase">{frame.fault_status?.active_fault || 'NONE'}</strong>
            </div>
          </div>
        </div>

        {/* Root Cause Feature Attribution */}
        <div className="p-4 bg-gunmetal-800 border border-gcs-border">
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
            <span>EXPLAINABLE AI ROOT CAUSE</span>
            <AlertCircle className="w-4 h-4 text-gcs-amber" />
          </div>
          <div className="mt-3">
            <div className="text-xs text-slate-400">HIGHEST CONTRIBUTOR:</div>
            <div className="text-lg font-bold text-gcs-amber tracking-wide uppercase mt-0.5">
              {rootCause.replace('delta_', 'Δ ')}
            </div>
          </div>
          <div className="mt-2 text-xs text-slate-300">
            CONTRIBUTION SHARE: <strong className="text-white">{((attributions[rootCause] ?? 0.3) * 100).toFixed(1)}%</strong>
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            Residual divergence observed between first-principles SciPy thermodynamics and telemetry sensors.
          </div>
        </div>
      </div>

      {/* Feature Attribution Bar Graph */}
      <div className="p-4 bg-gunmetal-800 border border-gcs-border">
        <div className="flex items-center justify-between pb-2 border-b border-gcs-border text-xs">
          <span className="text-slate-200 font-bold flex items-center gap-2">
            <Terminal className="w-4 h-4 text-gcs-cyan" />
            RESIDUAL FEATURE ATTRIBUTION MATRIX (RECONSTRUCTION ERROR SHARE)
          </span>
          <span className="text-slate-400 text-[11px]">NORMALIZED [0% - 100%]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
          {Object.entries(attributions).map(([feat, val]) => {
            const pct = Math.min(100, Math.max(0, val * 100));
            const isHighest = feat === rootCause;
            const resVal = residuals ? (residuals as Record<string, any>)[feat] : undefined;

            return (
              <div
                key={feat}
                className={`p-2.5 bg-carbon-950 border ${
                  isHighest && isAnomaly ? 'border-gcs-amber bg-amber-950/20' : 'border-gcs-border'
                }`}
              >
                <div className="flex justify-between items-center text-[11px]">
                  <span className={`font-bold ${isHighest ? 'text-gcs-amber' : 'text-slate-300'}`}>
                    {feat.replace('delta_', 'Δ ').toUpperCase()}
                  </span>
                  <span className="text-white font-bold">{pct.toFixed(1)}%</span>
                </div>

                <div className="w-full h-2 bg-gunmetal-800 border border-gcs-border/80 mt-1.5 overflow-hidden">
                  <div
                    className={`h-full ${
                      isHighest && isAnomaly
                        ? 'bg-gcs-red'
                        : isHighest
                        ? 'bg-gcs-amber'
                        : 'bg-gcs-cyan'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="mt-1 text-[10px] text-slate-400 flex justify-between">
                  <span>RESIDUAL:</span>
                  <span className="text-slate-200 font-bold">
                    {resVal !== undefined ? (typeof resVal === 'number' ? resVal.toFixed(1) : resVal) : '0.0'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Millisecond Audit Log Stream */}
      <div className="p-4 bg-gunmetal-800 border border-gcs-border">
        {/* Controls Bar */}
        <div className="flex flex-wrap items-center justify-between pb-3 border-b border-gcs-border gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-gcs-cyan" />
            <span className="text-slate-300 font-bold">SEVERITY FILTER:</span>
            {(['ALL', 'CRITICAL', 'ELEVATED', 'NOMINAL'] as const).map((sev) => (
              <button
                key={sev}
                onClick={() => setFilterSeverity(sev)}
                className={`px-2 py-0.5 text-[11px] font-mono font-semibold border transition ${
                  filterSeverity === sev
                    ? 'bg-gcs-cyan text-black border-gcs-cyan'
                    : 'bg-carbon-950 text-slate-400 border-gcs-border hover:border-slate-500'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {copiedNotification && (
              <span className="text-gcs-green text-xs font-bold animate-pulse">
                {copiedNotification}
              </span>
            )}
            <button
              onClick={exportLogs}
              className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-carbon-950 hover:bg-gunmetal-700 text-slate-200 border border-gcs-border hover:border-gcs-cyan transition flex items-center gap-1.5"
            >
              <Download className="w-3 h-3 text-gcs-cyan" />
              EXPORT JSON
            </button>
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="mt-3 max-h-72 overflow-y-auto overflow-x-auto">
          {filteredLogs.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500 font-mono">
              NO ANOMALY ALERTS RECORDED UNDER FILTER [{filterSeverity}]. AUTOENCODER RESIDUALS NOMINAL.
            </div>
          ) : (
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-gcs-border text-slate-400 text-[10px] uppercase bg-carbon-950">
                  <th className="p-2">TIMESTAMP (MS PRECISION)</th>
                  <th className="p-2">SEVERITY</th>
                  <th className="p-2">ANOMALY SCORE</th>
                  <th className="p-2">RECON ERROR</th>
                  <th className="p-2">ROOT CAUSE</th>
                  <th className="p-2">AUDIT DETAILS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gcs-border/60">
                {filteredLogs.map((log) => {
                  const d = new Date(log.timestamp);
                  const msStr = String(d.getUTCMilliseconds()).padStart(3, '0');
                  const timeStr = `${d.toISOString().slice(11, 19)}.${msStr}Z`;

                  return (
                    <tr
                      key={log.id}
                      className={`hover:bg-gunmetal-700/50 transition-colors ${
                        log.severity === 'CRITICAL'
                          ? 'bg-red-950/20 text-red-200'
                          : log.severity === 'ELEVATED'
                          ? 'bg-amber-950/15 text-amber-200'
                          : 'text-slate-300'
                      }`}
                    >
                      <td className="p-2 whitespace-nowrap text-gcs-cyan font-semibold">{timeStr}</td>
                      <td className="p-2 whitespace-nowrap">
                        <span
                          className={`px-1.5 py-0.5 text-[9px] font-bold border ${
                            log.severity === 'CRITICAL'
                              ? 'bg-red-900/60 border-gcs-red text-gcs-red'
                              : log.severity === 'ELEVATED'
                              ? 'bg-amber-900/60 border-gcs-amber text-gcs-amber'
                              : 'bg-green-900/60 border-gcs-green text-gcs-green'
                          }`}
                        >
                          {log.severity}
                        </span>
                      </td>
                      <td className="p-2 whitespace-nowrap font-bold">{(log.score * 100).toFixed(1)}%</td>
                      <td className="p-2 whitespace-nowrap text-slate-300">{log.reconstruction_error.toFixed(4)}</td>
                      <td className="p-2 whitespace-nowrap font-semibold text-gcs-amber uppercase">{log.root_cause}</td>
                      <td className="p-2 text-slate-400 text-[11px] truncate max-w-xs">{log.details}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
