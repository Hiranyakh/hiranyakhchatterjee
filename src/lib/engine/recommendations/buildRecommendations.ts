import { PillarScore } from "@/types/freedom";

export type RecommendationPriority = "High" | "Medium" | "Low";

export interface Recommendation {
  priority: number;
  pillar: string;
  title: string;
  description: string;
  expectedImpact: string;
  timeframe: string;
  level: RecommendationPriority;
}

interface RecommendationTemplate {
  title: string;
  description: string;
  expectedImpact: string;
  timeframe: string;
  level: RecommendationPriority;
}

const recommendationTemplates: Record<string, RecommendationTemplate[]> = {
  health: [
    {
      title: "Improve Sleep Quality",
      description:
        "Maintain a consistent bedtime and aim for 7–8 hours of quality sleep every night.",
      expectedImpact: "+3 to +5 Freedom Score",
      timeframe: "2 Weeks",
      level: "High",
    },
    {
      title: "Exercise Daily",
      description:
        "Complete at least 30 minutes of physical activity five days per week.",
      expectedImpact: "+2 to +4 Freedom Score",
      timeframe: "4 Weeks",
      level: "High",
    },
    {
      title: "Improve Nutrition",
      description:
        "Increase whole foods while reducing processed foods and sugary drinks.",
      expectedImpact: "+2 Freedom Score",
      timeframe: "6 Weeks",
      level: "Medium",
    },
  ],

  wealth: [
    {
      title: "Create a Monthly Budget",
      description:
        "Track your income and expenses to improve financial awareness.",
      expectedImpact: "+3 Freedom Score",
      timeframe: "2 Weeks",
      level: "High",
    },
    {
      title: "Build an Emergency Fund",
      description:
        "Save at least one month's essential expenses.",
      expectedImpact: "+4 Freedom Score",
      timeframe: "8 Weeks",
      level: "High",
    },
    {
      title: "Start Investing",
      description:
        "Begin a disciplined long-term investment plan that fits your financial goals.",
      expectedImpact: "+3 Freedom Score",
      timeframe: "12 Weeks",
      level: "Medium",
    },
  ],

  growth: [
    {
      title: "Read Every Day",
      description:
        "Spend at least 20 minutes reading books that improve your knowledge and mindset.",
      expectedImpact: "+2 Freedom Score",
      timeframe: "3 Weeks",
      level: "Medium",
    },
    {
      title: "Learn a High-Value Skill",
      description:
        "Dedicate focused time each week to learning a skill that supports your long-term goals.",
      expectedImpact: "+4 Freedom Score",
      timeframe: "8 Weeks",
      level: "High",
    },
    {
      title: "Complete an Online Course",
      description:
        "Finish one structured course in a topic relevant to your personal or professional growth.",
      expectedImpact: "+2 Freedom Score",
      timeframe: "6 Weeks",
      level: "Medium",
    },
  ],

  leadership: [
    {
      title: "Improve Communication",
      description:
        "Practice clear, confident communication in both personal and professional settings.",
      expectedImpact: "+3 Freedom Score",
      timeframe: "4 Weeks",
      level: "High",
    },
    {
      title: "Practice Active Listening",
      description:
        "Focus on understanding others before responding.",
      expectedImpact: "+2 Freedom Score",
      timeframe: "3 Weeks",
      level: "Medium",
    },
    {
      title: "Lead a Small Initiative",
      description:
        "Take ownership of a project that allows you to develop leadership skills.",
      expectedImpact: "+3 Freedom Score",
      timeframe: "8 Weeks",
      level: "Medium",
    },
  ],

  purpose: [
    {
      title: "Write Your Personal Vision",
      description:
        "Create a clear written vision describing the life you want to build over the next five years.",
      expectedImpact: "+4 Freedom Score",
      timeframe: "2 Weeks",
      level: "High",
    },
    {
      title: "Set Quarterly Goals",
      description:
        "Break your vision into measurable 90-day goals.",
      expectedImpact: "+3 Freedom Score",
      timeframe: "4 Weeks",
      level: "Medium",
    },
    {
      title: "Review Your Progress Weekly",
      description:
        "Spend 15 minutes every week reviewing progress and adjusting your plan.",
      expectedImpact: "+2 Freedom Score",
      timeframe: "Ongoing",
      level: "Low",
    },
  ],
};

export function buildRecommendations(
  pillars: PillarScore[]
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  const sorted = [...pillars].sort((a, b) => a.score - b.score);

  let priority = 1;

  sorted.forEach((pillar) => {
    const items = recommendationTemplates[pillar.pillar] ?? [];

    items.forEach((item) => {
      recommendations.push({
        priority,
        pillar: pillar.pillar,
        title: item.title,
        description: item.description,
        expectedImpact: item.expectedImpact,
        timeframe: item.timeframe,
        level: item.level,
      });

      priority++;
    });
  });

  return recommendations.slice(0, 15);
}