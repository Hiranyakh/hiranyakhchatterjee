import { FreedomResult, Pillar, PillarScore } from "@/types/freedom";
import { getFreedomLevel } from "@/lib/scoreLevels";
import {
  getStrength,
  getOpportunity,
} from "@/lib/analysis";
import { generateBlueprint } from "@/lib/blueprint";
import { generateExecutiveInsight } from "@/lib/insights";
import { detectProfile } from "./profileEngine";
import { pillarConfig } from "@/lib/pillarConfig";

export interface FreedomReport {
  overallScore: number;

  level: {
    title: string;
    description: string;
  };

  profile: {
    type: string;
    description: string;
  };

  strongest: PillarScore;

  weakest: PillarScore;

  executiveSummary: ReturnType<typeof generateExecutiveInsight>;

  blueprint: ReturnType<typeof generateBlueprint>;

  pillars: {
    pillar: Pillar;
    label: string;
    score: number;
    icon: string;
    color: string;
    description: string;
  }[];
}

export function buildFreedomReport(
  result: FreedomResult
): FreedomReport {

  const level = getFreedomLevel(result.overallScore);

  const strongest = getStrength(result.pillarScores);

  const weakest = getOpportunity(result.pillarScores);

  const profile = detectProfile(
    result.pillarScores,
    result.overallScore
  );

  const blueprint = generateBlueprint(
    result.pillarScores
  );

  const executiveSummary =
    generateExecutiveInsight(result);

  const pillars = result.pillarScores.map((pillar) => ({
    pillar: pillar.pillar,
    label: pillarConfig[pillar.pillar].label,
    score: pillar.score,
    icon: pillarConfig[pillar.pillar].icon,
    color: pillarConfig[pillar.pillar].color,
    description: pillarConfig[pillar.pillar].description,
  }));

  return {
    overallScore: result.overallScore,

    level,

    profile,

    strongest,

    weakest,

    executiveSummary,

    blueprint,

    pillars,
  };
}