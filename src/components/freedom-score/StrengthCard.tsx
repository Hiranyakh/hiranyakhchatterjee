"use client";

import { Trophy } from "lucide-react";
import { PillarScore } from "@/types/freedom";
import { pillarConfig } from "@/lib/pillarConfig";

interface Props {
  strength: PillarScore;
}

export default function StrengthCard({ strength }: Props) {
  const config = pillarConfig[strength.pillar];

  const Icon = config.icon;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-3">
        <Trophy className="h-8 w-8" />

        <h2 className="text-2xl font-bold">
          Greatest Strength
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

          <p className="text-emerald-100">
            {Math.round(strength.score)}/100
          </p>
        </div>
      </div>

      <p className="mt-8 leading-7 text-emerald-50">
        {config.description}
      </p>
    </div>
  );
}