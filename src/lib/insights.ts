import { FreedomResult, Pillar } from "@/types/freedom";
import { getFreedomLevel } from "./scoreLevels";
import {
  getStrength,
  getOpportunity,
  isBalanced,
  getScoreSpread,
} from "./analysis";
import { pillarConfig } from "./pillarConfig";

export interface ExecutiveInsight {
  headline: string;
  overview: string;
  strength: string;
  opportunity: string;
  next90Days: string;
  recommendation: string;
  primary90Dayspillar: Pillar;
}

export function generateExecutiveInsight(
  result: FreedomResult
): ExecutiveInsight {
  const level = getFreedomLevel(
    result.overallScore
  );

const strongest = getStrength(
  result.pillarScores
);

const weakest = getOpportunity(
  result.pillarScores
);

const balanced = isBalanced(
  result.pillarScores
);

const primary90DayPillar: Pillar =
  balanced
    ? strongest.pillar as Pillar
    : weakest.pillar as Pillar;

const strongestLabel =
  pillarConfig[
    strongest.pillar as Pillar
  ].label;

const weakestLabel =
  pillarConfig[
    weakest.pillar as Pillar
  ].label;

  const spread = getScoreSpread(
    result.pillarScores
  );

  /*
   * =========================
   * OVERVIEW
   * =========================
   */

  let overview = "";

  if (result.overallScore < 40) {
    overview =
      "You are building the foundations of personal freedom. Your priority now is to create consistent habits across the five pillars rather than trying to change everything at once.";
  } else if (result.overallScore < 70) {
    overview =
      "You have established a developing foundation across the five pillars. Your next stage is to strengthen the areas that need attention while protecting the habits that are already working.";
  } else if (result.overallScore < 90) {
    overview =
      "You have built strong foundations across several areas of your life. Your next stage is to close the remaining gaps and create greater consistency across all five pillars.";
  } else {
    overview =
      "You have developed exceptionally strong foundations across the five pillars. Your opportunity now is to sustain your standards, optimize your systems and multiply your impact.";
  }

  /*
   * =========================
   * STRENGTH
   * =========================
   */

  let strength = "";

  if (result.overallScore >= 90) {
    strength =
      "Your greatest strength is the balance and consistency you have developed across the five pillars. At this level, your focus should shift from fixing weaknesses to maintaining excellence and creating greater impact.";
  } else if (balanced) {
    strength =
      "Your five pillars are developing at a similar level. This balanced foundation gives you the flexibility to choose your next priority intentionally rather than being dominated by a single weak area.";
  } else {
    strength =
      `Your strongest pillar is ${strongestLabel}. Continue investing in this area because it can become a source of momentum for the other areas of your life.`;
  }

  /*
   * =========================
   * OPPORTUNITY
   * =========================
   */

  let opportunity = "";

  if (result.overallScore >= 90) {
    opportunity =
      "Your biggest opportunity is optimization. Maintain the systems that created your current results, refine them continuously and look for ways to multiply your impact.";
  } else if (balanced) {
    opportunity =
      "There is no single dominant weakness. Your opportunity is to build consistency across the five pillars and deliberately choose the area that matters most to your current goals.";
  } else if (spread < 10) {
    opportunity =
      `Your pillars are relatively close together, with ${weakestLabel} currently sitting slightly below the others. Rather than treating this as a major weakness, use it as a focused area for incremental improvement.`;
  } else {
    opportunity =
      `Your greatest opportunity for growth is ${weakestLabel}. Strengthening this pillar could help create a more balanced Freedom Score and improve the foundation supporting your other goals.`;
  }

  /*
   * =========================
   * NEXT 90 DAYS
   * =========================
   */

  let next90Days = "";

  if (result.overallScore < 40) {
    next90Days =
      "Choose one foundational habit from each pillar and focus on consistency. Your objective for the next 90 days is not perfection—it is establishing a reliable baseline.";
  } else if (balanced) {
    next90Days =
      "Choose one pillar that matters most to your current life goals. Spend the next 90 days strengthening that area while maintaining your existing habits across the other pillars.";
  } else if (result.overallScore >= 90) {
    next90Days =
      "Use the next 90 days to optimize your strongest systems, identify opportunities to multiply your impact and maintain disciplined standards across all five pillars.";
  } else {
    next90Days =
      `Make ${weakestLabel} your primary improvement focus for the next 90 days. Build one measurable habit at a time while protecting the strengths that are already supporting your progress.`;
  }

  /*
   * =========================
   * RECOMMENDATION
   * =========================
   */

  let recommendation = "";

  if (result.overallScore < 40) {
    recommendation =
      "Start small. Choose one action you can repeat consistently every day and use progress—not perfection—as your measurement.";
  } else if (balanced) {
    recommendation =
      "Use your balanced foundation as an advantage. Select your next priority based on your personal goals rather than simply chasing the lowest score.";
  } else if (result.overallScore >= 90) {
    recommendation =
      "Protect what is working, keep measuring your progress and begin looking beyond personal improvement toward leadership, contribution and meaningful impact.";
  } else {
    recommendation =
      "Review your Freedom Score monthly, track the pillar you are actively improving and reassess after 90 days to measure whether your actions are creating meaningful change.";
  }

  return {
    headline: level.title,
    overview,
    strength,
    opportunity,
    next90Days,
    recommendation,
    primary90Dayspillar: primary90DayPillar,
  };
}