"use client";

export default function GaugeLabels() {
  return (
    <>
      <div className="absolute top-6 text-sm font-semibold text-slate-600">
        Health
      </div>

      <div className="absolute bottom-6 text-sm font-semibold text-slate-600">
        Purpose
      </div>

      <div className="absolute left-4 text-sm font-semibold text-slate-600">
        Wealth
      </div>

      <div className="absolute right-4 text-sm font-semibold text-slate-600">
        AI
      </div>
    </>
  );
}