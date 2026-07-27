"use client";

import CountUp from "./CountUp";

export default function GaugeCenter() {
  return (
    <div className="absolute z-20 text-center">

      <div className="mb-6 text-5xl text-[#D4AF37]">
        ◎
      </div>

      <CountUp value={72} />

      <p className="mt-3 uppercase tracking-[0.35em] text-slate-500">
        Freedom Score
      </p>

    </div>
  );
}