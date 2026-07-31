import { PillarScore } from "@/types/freedom";

export type RoadmapImpact = "High" | "Medium" | "Low";

export interface RoadmapAction {
  week: number;
  pillar: string;
  title: string;
  description: string;
  impact: RoadmapImpact;
}

interface RoadmapTemplate {
  title: string;
  description: string;
  impact: RoadmapImpact;
}

const roadmapTemplates: Record<string, RoadmapTemplate[]> = {
  health: [
    {
      title: "Build a Consistent Sleep Routine",
      description:
        "Aim for 7–8 hours of quality sleep and maintain a consistent bedtime.",
      impact: "High",
    },
    {
      title: "Exercise 30 Minutes Daily",
      description:
        "Include brisk walking, strength training, or any enjoyable physical activity.",
      impact: "High",
    },
    {
      title: "Improve Daily Nutrition",
      description:
        "Increase protein, vegetables, fruits, and water while reducing processed foods.",
      impact: "Medium",
    },
  ],

  wealth: [
    {
      title: "Create a Monthly Budget",
      description:
        "Track income and expenses to identify opportunities to save and invest.",
      impact: "High",
    },
    {
      title: "Build an Emergency Fund",
      description:
        "Set aside savings equal to at least one month's essential expenses.",
      impact: "High",
    },
    {
      title: "Start Investing",
      description:
        "Begin systematic investing according to your financial goals and risk profile.",
      impact: "Medium",
    },
  ],

  growth: [
    {
      title: "Read Every Day",
      description:
        "Spend at least 20 minutes reading books that improve your skills and mindset.",
      impact: "Medium",
    },
    {
      title: "Learn a New Skill",
      description:
        "Choose one valuable professional or personal skill and practice consistently.",
      impact: "High",
    },
    {
      title: "Take an Online Course",
      description:
        "Complete one structured learning program over the next few weeks.",
      impact: "Medium",
    },
  ],

  leadership: [
    {
      title: "Practice Active Listening",
      description:
        "Focus on understanding before responding in conversations.",
      impact: "Medium",
    },
    {
      title: "Develop Communication Skills",
      description:
        "Practice public speaking, presentations, or confident communication.",
      impact: "High",
    },
    {
      title: "Lead a Small Project",
      description:
        "Take responsibility for planning and delivering a meaningful outcome.",
      impact: "Medium",
    },
  ],

  purpose: [
    {
      title: "Define Your Personal Vision",
      description:
        "Write a one-page description of the life you want to create.",
      impact: "High",
    },
    {
      title: "Set Quarterly Goals",
      description:
        "Break your vision into measurable goals for the next 90 days.",
      impact: "Medium",
    },
    {
      title: "Review Progress Weekly",
      description:
        "Reflect every week on achievements, challenges, and next actions.",
      impact: "Medium",
    },
  ],
};

export function buildRoadmap(
  pillars: PillarScore[]
): RoadmapAction[] {
  const roadmap: RoadmapAction[] = [];

  const sortedPillars = [...pillars].sort(
    (a, b) => a.score - b.score
  );

  let week = 1;

  // Focus first on the two weakest pillars
  sortedPillars.slice(0, 2).forEach((pillar) => {
    const templates = roadmapTemplates[pillar.pillar] ?? [];

    templates.forEach((task) => {
      roadmap.push({
        week,
        pillar: pillar.pillar,
        title: task.title,
        description: task.description,
        impact: task.impact,
      });

      week++;
    });
  });

  // Cover the remaining pillars
  sortedPillars.slice(2).forEach((pillar) => {
    const task = roadmapTemplates[pillar.pillar]?.[0];

    if (task) {
      roadmap.push({
        week,
        pillar: pillar.pillar,
        title: task.title,
        description: task.description,
        impact: task.impact,
      });

      week++;
    }
  });

  // Ensure a full 12-week roadmap
  while (roadmap.length < 12) {
    roadmap.push({
      week,
      pillar: "growth",
      title: "Review and Improve",
      description:
        "Review your progress, celebrate wins, identify obstacles, and plan improvements for the coming week.",
      impact: "Medium",
    });

    week++;
  }

  return roadmap.slice(0, 12);
}