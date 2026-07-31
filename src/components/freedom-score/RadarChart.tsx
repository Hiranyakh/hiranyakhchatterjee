"use client";

import { FreedomReport } from "@/lib/engine/reportEngine";
import {
  ResponsiveContainer,
  RadarChart as ReRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

interface Props {
  report: FreedomReport;
}

export default function RadarChart({ report }: Props) {
  const data = report.pillars.map((pillar) => ({
    subject: pillar.label,
    score: pillar.score,
    fullMark: 100,
  }));

  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900">
          Freedom Radar
        </h2>

        <p className="mt-2 text-slate-500">
          Visual representation of your performance across all five pillars.
        </p>
      </div>

      <div className="h-[500px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ReRadarChart data={data}>
            <PolarGrid />

            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fontSize: 14,
                fill: "#334155",
              }}
            />

            <PolarRadiusAxis
              domain={[0, 100]}
              tick={{
                fontSize: 11,
              }}
            />

            <Tooltip />

            <Radar
              name="Freedom Score"
              dataKey="score"
              stroke="#2563eb"
              fill="#3b82f6"
              fillOpacity={0.55}
            />
          </ReRadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}