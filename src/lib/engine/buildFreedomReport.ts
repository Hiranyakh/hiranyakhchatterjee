import {
  FreedomResult,
  FreedomReport,
} from "@/types/freedom";

import { getFreedomLevel } from "@/lib/scoreLevels";

function generateExecutiveSummary(
  score: number
) {
  if (score >= 90) {
    return {
      overview:
        "You demonstrate exceptional balance across the five pillars of freedom. Your current habits position you for long-term success and lasting impact.",
    };
  }

  if (score >= 75) {
    return {
      overview:
        "You have established strong foundations. Focused improvements in a few areas can significantly increase your Freedom Score.",
    };
  }

  if (score >= 60) {
    return {
      overview:
        "You are making meaningful progress. Prioritizing your weakest pillars will accelerate your overall growth.",
    };
  }

  if (score >= 40) {
    return {
      overview:
        "Several important areas require attention. A structured improvement plan can produce substantial progress over the coming months.",
    };
  }

  return {
    overview:
      "Every transformation begins with strong foundations. Concentrate on consistent daily habits before pursuing rapid growth.",
  };
}

function determineProfile(
  score: number
): string {

  if (score >= 90)
    return "Freedom Architect";

  if (score >= 75)
    return "Growth Accelerator";

  if (score >= 60)
    return "Momentum Builder";

  if (score >= 40)
    return "Foundation Builder";

  return "Explorer";
}

export function buildFreedomReport(
  result: FreedomResult
): FreedomReport {

  return {
    overallScore: result.overallScore,

    level: getFreedomLevel(
      result.overallScore
    ),

    profile: determineProfile(
      result.overallScore
    ),

    executiveSummary:
      generateExecutiveSummary(
        result.overallScore
      ),

    pillars: result.pillarScores,
  };
}