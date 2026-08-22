import { FreedomResult, Pillar, PillarScore } from "@/types/freedom";
import { determineFreedomArchetype } from "./archetypes/freedomArchetype";
import {
  analyzePillarAnswers,
  getStrongestDimension,
  getWeakestDimension,
} from "./pillarAnalysisEngine";

import { getFreedomLevel } from "@/lib/scoreLevels";

import {
  getStrength,
  getOpportunity,
  isBalanced,
  getScoreSpread,
} from "@/lib/analysis";

import { generateBlueprint } from "@/lib/blueprint";
import { generateExecutiveInsight } from "@/lib/insights";
import { detectProfile } from "./profileEngine";
import { pillarConfig } from "@/lib/pillarConfig";
import {
  getConsultationRecommendations,
} from "./recommendationEngine";

export interface FreedomReport {
  overallScore: number;

  answers: {
    questionId: number;
    value: number;
  }[];

  healthAnalysis: {
    dimensions: ReturnType<typeof analyzePillarAnswers>;
    strongest: ReturnType<typeof getStrongestDimension>;
    weakest: ReturnType<typeof getWeakestDimension>;
  };

  wealthAnalysis: {
    dimensions: ReturnType<typeof analyzePillarAnswers>;
    strongest: ReturnType<typeof getStrongestDimension>;
    weakest: ReturnType<typeof getWeakestDimension>;
  };

   growthAnalysis: {
    dimensions: ReturnType<typeof analyzePillarAnswers>;
    strongest: ReturnType<typeof getStrongestDimension>;
    weakest: ReturnType<typeof getWeakestDimension>;
  };

  leadershipAnalysis: {
  dimensions: ReturnType<typeof analyzePillarAnswers>;
  strongest: ReturnType<typeof getStrongestDimension>;
  weakest: ReturnType<typeof getWeakestDimension>;
};

 purposeAnalysis: {
  dimensions: ReturnType<typeof analyzePillarAnswers>;
  strongest: ReturnType<typeof getStrongestDimension>;
  weakest: ReturnType<typeof getWeakestDimension>;
};

  freedomArchetype: ReturnType<
    typeof determineFreedomArchetype
  >;

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

  balanced: boolean;
  scoreSpread: number;

  executiveSummary: ReturnType<
    typeof generateExecutiveInsight
  >;

  blueprint: ReturnType<
    typeof generateBlueprint
  >;

   recommendations: ReturnType<
  typeof getConsultationRecommendations
>;

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

  const scoreSpread = getScoreSpread(
    result.pillarScores
  );

  const freedomArchetype =
  determineFreedomArchetype(
    result.overallScore,
    result.pillarScores
  );

  const profile = detectProfile(
    result.pillarScores,
    result.overallScore
  );

  

  const executiveSummary =
    generateExecutiveInsight(result);

  const recommendations =
    getConsultationRecommendations(
      result.pillarScores,
      result.overallScore
    );

  // =========================
  // HEALTH ANALYSIS
  // =========================

  const healthDimensions =
    analyzePillarAnswers(
      result.answers,
      "health"
    );

  const healthAnalysis = {
    dimensions: healthDimensions,

    strongest:
      getStrongestDimension(
        healthDimensions
      ),

    weakest:
      getWeakestDimension(
        healthDimensions
      ),
  };

  // =========================
  // WEALTH ANALYSIS
  // =========================

  const wealthDimensions =
    analyzePillarAnswers(
      result.answers,
      "wealth"
    );

  const wealthAnalysis = {
    dimensions: wealthDimensions,

    strongest:
      getStrongestDimension(
        wealthDimensions
      ),

    weakest:
      getWeakestDimension(
        wealthDimensions
      ),
  };
  // =========================
  // GROWTH ANALYSIS
  // =========================

  const growthDimensions =
    analyzePillarAnswers(
      result.answers,
      "growth"
    );

  const growthAnalysis = {
    dimensions: growthDimensions,

    strongest:
      getStrongestDimension(
        growthDimensions
      ),

    weakest:
      getWeakestDimension(
        growthDimensions
      ),
  };

  // =========================
// LEADERSHIP ANALYSIS
// =========================

const leadershipDimensions =
  analyzePillarAnswers(
    result.answers,
    "leadership"
  );

const leadershipAnalysis = {
  dimensions: leadershipDimensions,

  strongest:
    getStrongestDimension(
      leadershipDimensions
    ),

  weakest:
    getWeakestDimension(
      leadershipDimensions
    ),
};

// =========================
// PURPOSE ANALYSIS
// =========================

const purposeDimensions =
  analyzePillarAnswers(
    result.answers,
    "purpose"
  );

const purposeAnalysis = {
  dimensions: purposeDimensions,

  strongest:
    getStrongestDimension(
      purposeDimensions
    ),

  weakest:
    getWeakestDimension(
      purposeDimensions
    ),
};

  // =========================
  // PILLAR ANALYSIS MAP
  // =========================

  const pillarAnalyses = {
    health: healthAnalysis,
    wealth: wealthAnalysis,
    growth: growthAnalysis,
    leadership: leadershipAnalysis,
    purpose: purposeAnalysis,
  };

  // =========================
  // 90-DAY ACTION BLUEPRINT
  // =========================

  const blueprint = generateBlueprint(
    result.pillarScores,
    pillarAnalyses
  );
  

  // =========================
  // PILLARS
  // =========================

  const pillars =
    result.pillarScores.map(
      (pillar) => ({
        pillar: pillar.pillar,

        label:
          pillarConfig[
            pillar.pillar
          ].label,

        score: pillar.score,

        icon:
          pillarConfig[
            pillar.pillar
          ].icon,

        color:
          pillarConfig[
            pillar.pillar
          ].color,

        description:
          pillarConfig[
            pillar.pillar
          ].description,
      })
    );

  // =========================
  // FINAL REPORT
  // =========================

  return {
    overallScore:
      result.overallScore,

    answers:
      result.answers,

    healthAnalysis,

    wealthAnalysis,
    
    growthAnalysis,

    leadershipAnalysis,

    purposeAnalysis,

    freedomArchetype,
    
level,

    profile,

    strongest,

    weakest,

    balanced,

    scoreSpread,

    executiveSummary,

    blueprint,
 
    recommendations,

    pillars,
  };
}
