import { ExecutiveReport } from "@/types/executiveReport";
import { FreedomReport } from "@/types/freedom";

import { determineFreedomArchetype } from "./archetypes/freedomArchetype";
import { buildFreedomDNA } from "./dna/buildFreedomDNA";
import { buildSWOT } from "./swot/buildSWOT";
import { buildRoadmap } from "./roadmap/buildRoadmap";
import { buildRecommendations } from "./recommendations/buildRecommendations";

export function buildExecutiveReport(
  report: FreedomReport
): ExecutiveReport {
  const overall = report.overallScore;

  const readinessScore = Math.min(
    100,
    Math.round(overall * 1.08)
  );

  const riskIndex =
    overall >= 80
      ? "Low"
      : overall >= 60
      ? "Medium"
      : "High";

  const spread =
    Math.max(...report.pillars.map((p) => p.score)) -
    Math.min(...report.pillars.map((p) => p.score));

  const momentum =
    spread <= 10
      ? "Excellent"
      : spread <= 20
      ? "Good"
      : spread <= 30
      ? "Emerging"
      : "Needs Attention";

  const freedomDNA = buildFreedomDNA(report.pillars);

  const freedomArchetype = determineFreedomArchetype(
    overall,
    report.pillars
  );

  const swot = buildSWOT(report.pillars);

  const roadmap = buildRoadmap(report.pillars);

  const recommendations = buildRecommendations(
    report.pillars
  );

  const topStrengths = swot.strengths
    .slice(0, 3)
    .map((item) => item.title);

  const topWeaknesses = swot.weaknesses
    .slice(0, 3)
    .map((item) => item.title);

  const topPriorities = recommendations
    .slice(0, 3)
    .map((item) => item.title);

  const potentialGain = Math.max(
    5,
    Math.round((100 - overall) * 0.45)
  );

  return {
    reportDate: new Date().toLocaleDateString(),

    overallScore: overall,

    freedomLevel: report.level,

    freedomArchetype,

    freedomDNA,

    readinessScore,

    riskIndex,

    momentum,

    executiveSummary:
      report.executiveSummary.overview,

    topStrengths,

    topWeaknesses,

    topPriorities,

    swot,

    roadmap,

    recommendations,

    potential: {
      currentScore: overall,
      potentialScore: Math.min(
        100,
        overall + potentialGain
      ),
      potentialGain,
      estimatedTimeline:
        potentialGain > 20
          ? "90–180 Days"
          : "60–90 Days",
      confidence: Math.min(
        95,
        readinessScore
      ),
    },

    pillars: report.pillars,
  };
}