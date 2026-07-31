"use client";

import { FreedomResult } from "@/types/freedom";
import { buildFreedomReport } from "@/lib/engine/reportEngine";
import RadarChart from "./RadarChart";
import ReportHeader from "./ReportHeader";
import StrengthCard from "./StrengthCard";
import OpportunityCard from "./OpportunityCard";
import PillarCard from "./PillarCard";
import BlueprintCard from "./BlueprintCard";
import ExecutiveSummary from "./ExecutiveSummary";

interface Props {
  result: FreedomResult;
}

export default function ResultsScreen({ result }: Props) {
  const report = buildFreedomReport(result);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F6F1] via-white to-[#F8F6F1] py-16 px-6">
      <div className="mx-auto max-w-7xl space-y-12">

        {/* Executive Report Header */}
        <ReportHeader report={report} />

        {/* Strength & Opportunity */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <StrengthCard strength={report.strongest} />

          <OpportunityCard opportunity={report.weakest} />
        </div>

        {/* Five Pillars */}
        <section>
          <h2 className="mb-2 text-4xl font-bold text-slate-900">
            Your Freedom Pillars
          </h2>

          <p className="mb-8 text-slate-500">
            Your performance across the five core pillars of freedom.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {report.pillars.map((pillar) => (
              <PillarCard
                key={pillar.pillar}
                pillar={pillar.pillar}
                score={pillar.score}
              />
            ))}
          </div>
        </section>

        {/* Blueprint */}
        <section>
          <h2 className="mb-2 text-4xl font-bold text-slate-900">
            Your Freedom Blueprint
          </h2>

          <p className="mb-8 text-slate-500">
            Personalized action steps to improve every pillar.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {report.blueprint.map((item) => (
              <BlueprintCard
                key={item.pillar}
                blueprint={item}
              />
            ))}
          </div>
        </section>

        {/* Executive Summary */}
        <ExecutiveSummary
          insight={report.executiveSummary}
        />
        <RadarChart report={report} />
      </div>
    </div>
  );
}