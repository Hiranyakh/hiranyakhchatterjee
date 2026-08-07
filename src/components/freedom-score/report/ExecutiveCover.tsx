"use client";

import ReportPage from "./layout/ReportPage";
import ExecutiveIdentity from "./ExecutiveIdentity";
import ExecutiveQuote from "./ExecutiveQuote";
import FreedomScoreSeal from "./FreedomScoreSeal";
import { ShieldCheck } from "lucide-react";

interface Props {
  fullName: string;
  assessmentId: string;
  assessmentDate: string;
  freedomScore: number;
  freedomLevel: string;
  freedomArchetype: string;
}

export default function ExecutiveCover({
  fullName,
  assessmentId,
  assessmentDate,
  freedomScore,
  freedomLevel,
  freedomArchetype,
}: Props) {
  return (
    <ReportPage
      title="Executive Cover"
      subtitle="Freedom Score™ Executive Intelligence Report"
    >
      <div className="space-y-14">

        {/* Brand */}

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.45em] font-semibold text-amber-600">
            Freedom Score™
          </p>

          <h1 className="mt-5 text-6xl font-black text-slate-900">
            Executive Intelligence Report
          </h1>

          <p className="mt-5 text-xl text-slate-500">
            Confidential Personal Freedom Assessment
          </p>

        </div>

        {/* Identity */}

        <ExecutiveIdentity
          fullName={fullName}
          assessmentId={assessmentId}
          assessmentDate={assessmentDate}
        />

        {/* Score */}

        <div className="flex justify-center">

          <FreedomScoreSeal
            score={freedomScore}
            level={freedomLevel}
          />

        </div>

        {/* Archetype */}

        <div className="rounded-[32px] border border-amber-300 bg-amber-50 p-10 text-center">

          <p className="text-sm uppercase tracking-[0.35em] font-semibold text-amber-700">
            Freedom Archetype™
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            {freedomArchetype}
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            Your archetype represents the natural pattern through which
            you approach personal growth, decision making and long-term
            success across the five pillars of freedom.
          </p>

        </div>

        {/* Quote */}

        <ExecutiveQuote score={freedomScore} />

        {/* Confidential */}

        <div className="rounded-[32px] border border-slate-300 bg-white p-10">

          <div className="flex gap-5">

            <ShieldCheck
              size={34}
              className="mt-1 text-emerald-600"
            />

            <div>

              <h3 className="text-2xl font-bold text-slate-900">
                Confidential Executive Report
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                This report has been generated exclusively for the individual
                named above using responses submitted during the Freedom Score™
                Assessment. The findings are intended for personal development,
                executive decision-making and long-term strategic growth.
              </p>

            </div>

          </div>

        </div>

      </div>
    </ReportPage>
  );
}