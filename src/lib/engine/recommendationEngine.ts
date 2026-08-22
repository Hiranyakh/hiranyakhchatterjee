import { Pillar, PillarScore } from "@/types/freedom";

export interface ConsultationRecommendation {
  pillar: Pillar;
  serviceName: string;
  headline: string;
  description: string;
  ctaLabel: string;
  price: number;
  priority: "primary" | "secondary";
}

const consultationMap: Record<
  Pillar,
  {
    serviceName: string;
    headline: string;
    description: string;
    ctaLabel: string;
    price: number;
  }
> = {
  health: {
    serviceName: "Health & Wellness Consultation",
    headline: "Build Your Health Foundation",
    description:
      "A personalized consultation focused on nutrition, lifestyle, energy, recovery and long-term wellbeing.",
    ctaLabel: "Pay & Book Consultation",
    price: 1500,
  },

  wealth: {
    serviceName: "Wealth & Business Consultation",
    headline: "Build Your Financial Freedom",
    description:
      "A strategic consultation focused on income growth, business opportunities, financial thinking and greater financial independence.",
    ctaLabel: "Pay & Book Consultation",
    price: 1000,
  },

  growth: {
    serviceName: "Career & AI Consultation",
    headline: "Build Your AI-Powered Growth Path",
    description:
      "A personalized strategy session focused on career growth, AI adoption, skill development and new income opportunities.",
    ctaLabel: "Pay & Book Consultation",
    price: 1000,
  },

  leadership: {
    serviceName: "Leadership Consultation",
    headline: "Strengthen Your Leadership",
    description:
      "A focused consultation designed to improve leadership capability, communication, decision-making, influence and execution.",
    ctaLabel: "Pay & Book Consultation",
    price: 1000,
  },

  purpose: {
    serviceName: "Purpose & Life Direction Consultation",
    headline: "Clarify Your Direction",
    description:
      "A strategic conversation to connect your strengths, values, goals and ambitions into a clearer personal direction.",
    ctaLabel: "Pay & Book Consultation",
    price: 1000,
  },
};

function getLowestPillar(
  pillarScores: PillarScore[]
): PillarScore {
  return [...pillarScores].sort(
    (a, b) => a.score - b.score
  )[0];
}

function getSecondLowestPillar(
  pillarScores: PillarScore[],
  primary: PillarScore
): PillarScore | undefined {
  return [...pillarScores]
    .filter(
      (pillar) =>
        pillar.pillar !== primary.pillar
    )
    .sort(
      (a, b) => a.score - b.score
    )[0];
}

export function getConsultationRecommendations(
  pillarScores: PillarScore[],
  overallScore: number
): ConsultationRecommendation[] {
  if (!pillarScores.length) {
    return [];
  }

  const primary = getLowestPillar(
    pillarScores
  );

  const secondary =
    getSecondLowestPillar(
      pillarScores,
      primary
    );

  const recommendations: ConsultationRecommendation[] =
    [
      {
        pillar: primary.pillar,
        ...consultationMap[primary.pillar],
        priority: "primary",
      },
    ];

  if (
    secondary &&
    secondary.score <= 65 &&
    overallScore <= 75
  ) {
    recommendations.push({
      pillar: secondary.pillar,
      ...consultationMap[secondary.pillar],
      priority: "secondary",
    });
  }

  return recommendations;
}