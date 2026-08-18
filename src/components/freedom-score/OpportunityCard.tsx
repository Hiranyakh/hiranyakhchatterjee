"use client";

import { TrendingUp, Target, Sparkles } from "lucide-react";
import { PillarScore } from "@/types/freedom";
import { pillarConfig } from "@/lib/pillarConfig";

interface Props {
  opportunity: PillarScore;
  balanced?: boolean;
  overallScore?: number;
}

export default function OpportunityCard({
  opportunity,
  balanced = false,
  overallScore = 0,
}: Props) {
  const config = pillarConfig[opportunity.pillar];
  const Icon = config.icon;

  const isExcellent = overallScore >= 90;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-3">
        {isExcellent ? (
          <Sparkles className="h-8 w-8" />
        ) : balanced ? (
          <Target className="h-8 w-8" />
        ) : (
          <TrendingUp className="h-8 w-8" />
        )}

        <h2 className="text-2xl font-bold">
          Biggest Opportunity
        </h2>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="rounded-full bg-white/20 p-4">
          {isExcellent ? (
            <Sparkles className="h-8 w-8" />
          ) : balanced ? (
            <Target className="h-8 w-8" />
          ) : (
            <Icon className="h-8 w-8" />
          )}
        </div>

        <div>
          <h3 className="text-3xl font-black sm:text-4xl">
            {isExcellent
              ? "Optimize & Multiply"
              : balanced
                ? "Build Consistency"
                : config.label}
          </h3>

          <p className="text-orange-100">
            {isExcellent || balanced
              ? `${Math.round(overallScore)}/100 overall`
              : `${Math.round(opportunity.score)}/100`}
          </p>
        </div>
      </div>

      <p className="mt-8 leading-7 text-orange-50">
        {isExcellent
          ? "Your opportunity is no longer about fixing major weaknesses. Focus on maintaining your foundations, refining your systems and helping others grow."
          : balanced
            ? "Your pillars are closely balanced. Rather than chasing a single weakness, build consistent habits and choose one meaningful area to strengthen next."
            : config.description}
      </p>
    </div>
  );
}