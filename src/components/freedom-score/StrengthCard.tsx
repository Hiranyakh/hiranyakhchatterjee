"use client";

import { Trophy, Sparkles } from "lucide-react";
import { PillarScore } from "@/types/freedom";
import { pillarConfig } from "@/lib/pillarConfig";

interface Props {
  strength: PillarScore;
  balanced?: boolean;
  overallScore?: number;
}

export default function StrengthCard({
  strength,
  balanced = false,
  overallScore = 0,
}: Props) {
  const config = pillarConfig[strength.pillar];
  const Icon = config.icon;

  const isExcellent = overallScore >= 90;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-3">
        {isExcellent ? (
          <Sparkles className="h-8 w-8" />
        ) : (
          <Trophy className="h-8 w-8" />
        )}

        <h2 className="text-2xl font-bold">
          Greatest Strength
        </h2>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="rounded-full bg-white/20 p-4">
          {isExcellent ? (
            <Sparkles className="h-8 w-8" />
          ) : (
            <Icon className="h-8 w-8" />
          )}
        </div>

        <div>
          <h3 className="text-3xl font-black sm:text-4xl">
            {balanced
              ? "Balanced Foundation"
              : isExcellent
                ? "Strong Across All Pillars"
                : config.label}
          </h3>{isExcellent
  ? "Strong Across All Pillars"
  : balanced
    ? "Balanced Foundation"
    : config.label}

          <p className="text-emerald-100">
            {isExcellent || balanced
  ? `${Math.round(overallScore)}/100 overall`
  : `${Math.round(strength.score)}/100`}
          </p>
        </div>
      </div>

      <p className="mt-8 leading-7 text-emerald-50">
        {isExcellent
  ? "You have developed strong foundations across all five pillars. Your next opportunity is to sustain your standards, optimize your systems and multiply your impact."
  : balanced
    ? "Your five pillars are developing at a similar level. This gives you a balanced foundation and allows you to choose your next area of growth intentionally."
    : config.description}
      </p>
    </div>
  );
}