import { FreedomResult, Pillar } from "@/types/freedom";
import { getFreedomLevel } from "./scoreLevels";
import { getStrength, getOpportunity } from "./analysis";
import { pillarConfig } from "./pillarConfig";

export interface ExecutiveInsight {
  headline: string;
  overview: string;
  strength: string;
  opportunity: string;
  next90Days: string;
  recommendation: string;
}

export function generateExecutiveInsight(
  result: FreedomResult
): ExecutiveInsight {

  const level = getFreedomLevel(result.overallScore);

  const strongest = getStrength(result.pillarScores);
  const weakest = getOpportunity(result.pillarScores);

  const strongestLabel =
    pillarConfig[strongest.pillar as Pillar].label;

  const weakestLabel =
    pillarConfig[weakest.pillar as Pillar].label;

  let overview = "";

  if (result.overallScore < 40) {
    overview =
      "You are building the foundations of personal freedom. Your current focus should be on creating consistent daily habits instead of pursuing perfection.";
  } else if (result.overallScore < 70) {
    overview =
      "You have established a solid foundation. Your next stage is strengthening weaker pillars while maintaining your existing strengths.";
  } else {
    overview =
      "You have developed strong personal systems. Your opportunity now is to optimize performance and help others grow.";
  }

  return {
    headline: level.title,

    overview,

    strength:
      `Your strongest pillar is ${strongestLabel}. Continue investing in this area because it creates momentum across other aspects of your life.`,

    opportunity:
      `Your greatest opportunity for growth is ${weakestLabel}. Improving this pillar will have the biggest impact on your overall Freedom Score.`,

    next90Days:
      "Focus on improving one small habit every week. Consistency over the next 90 days will create meaningful long-term change.",

    recommendation:
      "Review your Freedom Score every month and measure your progress across all five pillars.",
  };
}