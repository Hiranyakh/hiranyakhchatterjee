"use client";

import { TrendingUp } from "lucide-react";
import { PillarScore } from "@/types/freedom";
import { pillarConfig } from "@/lib/pillarConfig";

interface Props {
  opportunity: PillarScore;
}

export default function OpportunityCard({
  opportunity,
}: Props) {
  const config = pillarConfig[opportunity.pillar];

  const Icon = config.icon;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-3">
        <TrendingUp className="h-8 w-8" />

        <h2 className="text-2xl font-bold">
          Biggest Opportunity
        </h2>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="rounded-full bg-white/20 p-4">
          <Icon className="h-8 w-8" />
        </div>

        <div>
          <h3 className="text-4xl font-black">
            {config.label}
          </h3>

          <p className="text-orange-100">
            {Math.round(opportunity.score)}/100
          </p>
        </div>
      </div>

      <p className="mt-8 leading-7 text-orange-50">
        {config.description}
      </p>
    </div>
  );
}