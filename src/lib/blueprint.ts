import { Pillar, PillarScore } from "@/types/freedom";
import { DimensionAnalysis } from "./engine/pillarAnalysisEngine";

export interface Blueprint {
  pillar: Pillar;
  priority: "High" | "Medium" | "Low";
  actions: string[];
  focusBehavior: string;
  focusPercentage: number;
}

export type PillarAnalysisMap = {
  health: {
    dimensions: DimensionAnalysis[];
    strongest: DimensionAnalysis | null;
    weakest: DimensionAnalysis | null;
  };
  wealth: {
    dimensions: DimensionAnalysis[];
    strongest: DimensionAnalysis | null;
    weakest: DimensionAnalysis | null;
  };
  growth: {
    dimensions: DimensionAnalysis[];
    strongest: DimensionAnalysis | null;
    weakest: DimensionAnalysis | null;
  };
  leadership: {
    dimensions: DimensionAnalysis[];
    strongest: DimensionAnalysis | null;
    weakest: DimensionAnalysis | null;
  };
  purpose: {
    dimensions: DimensionAnalysis[];
    strongest: DimensionAnalysis | null;
    weakest: DimensionAnalysis | null;
  };
};

function getActions(
  pillar: Pillar,
  dimension: DimensionAnalysis
): string[] {
  const id = dimension.questionId;

  switch (pillar) {
    // =========================
    // HEALTH
    // =========================

    case "health":
      switch (id) {
        case 1:
          return [
            "Schedule at least three 30-minute exercise sessions each week.",
            "Choose a repeatable activity you can maintain consistently.",
            "Track completed sessions weekly rather than relying on motivation.",
          ];

        case 2:
          return [
            "Set a consistent sleep and wake time.",
            "Protect a 7–8 hour sleep window on most nights.",
            "Review your sleep consistency at the end of each week.",
          ];

        case 3:
          return [
            "Plan balanced meals before the day begins.",
            "Include a quality protein source, vegetables and appropriate carbohydrates in your main meals.",
            "Reduce reliance on highly processed foods during the week.",
          ];

        case 4:
          return [
            "Identify the habits or parts of your routine associated with low energy.",
            "Prioritize sleep, hydration, movement and balanced meals.",
            "Record your daily energy level for 14 days to identify patterns.",
          ];

        case 5:
          return [
            "Create a simple monthly health-monitoring routine.",
            "Track relevant health metrics consistently.",
            "Review your health data periodically instead of waiting for problems to appear.",
          ];

        default:
          break;
      }
      break;

    // =========================
    // WEALTH
    // =========================

    case "wealth":
      switch (id) {
        case 6:
          return [
            "Set a fixed monthly savings target.",
            "Automate the transfer immediately after receiving income.",
            "Review your savings rate at the end of every month.",
          ];

        case 7:
          return [
            "Identify one realistic additional income opportunity.",
            "Develop one monetizable skill or asset.",
            "Build the additional income source without compromising your primary income.",
          ];

        case 8:
          return [
            "Define a consistent monthly investment amount.",
            "Automate contributions where appropriate.",
            "Review your long-term investment strategy periodically rather than reacting emotionally to short-term changes.",
          ];

        case 9:
          return [
            "Track your major monthly expenses.",
            "Identify unnecessary or low-value spending.",
            "Create a simple spending limit for discretionary expenses.",
          ];

        case 10:
          return [
            "Write down your current financial goals.",
            "Define targets for saving, investing and wealth creation.",
            "Review and update your financial plan every month.",
          ];

        default:
          break;
      }
      break;

    // =========================
    // GROWTH
    // =========================

    case "growth":
      switch (id) {
        case 11:
          return [
            "Choose one skill with direct relevance to your goals.",
            "Schedule dedicated learning time every week.",
            "Apply the skill through a real project rather than consuming information only.",
          ];

        case 12:
          return [
            "Choose one repetitive task that AI can improve.",
            "Use AI consistently for that workflow.",
            "Build an AI-assisted workflow that saves measurable time each week.",
          ];

        case 13:
          return [
            "Choose one book or course aligned with your current goals.",
            "Schedule weekly learning blocks.",
            "Convert each major lesson into one practical action.",
          ];

        case 14:
          return [
            "Ask for specific feedback from a trusted person.",
            "Choose one improvement area from the feedback.",
            "Review your progress and request feedback again after implementation.",
          ];

        case 15:
          return [
            "Choose one new technology relevant to your work or goals.",
            "Spend time experimenting with it in a low-risk environment.",
            "Turn successful experiments into repeatable workflows.",
          ];

        default:
          break;
      }
      break;

    // =========================
    // LEADERSHIP
    // =========================

    case "leadership":
      switch (id) {
        case 16:
          return [
            "Become more intentional about giving useful guidance.",
            "Build credibility by following through on commitments.",
            "Ask others what type of support or advice would be most valuable.",
          ];

        case 17:
          return [
            "Practice communicating one important idea clearly each day.",
            "Slow down your delivery and focus on clarity.",
            "Ask for feedback on your communication style.",
          ];

        case 18:
          return [
            "Identify your most common pressure triggers.",
            "Pause before reacting during difficult situations.",
            "Practice a consistent response routine when pressure increases.",
          ];

        case 19:
          return [
            "Identify one area where you can take ownership without being asked.",
            "Act before waiting for perfect conditions.",
            "Review one initiative you started each week.",
          ];

        case 20:
          return [
            "Recognize and encourage the people around you.",
            "Share your vision and expectations more clearly.",
            "Practice motivating through example rather than instruction alone.",
          ];

        default:
          break;
      }
      break;

    // =========================
    // PURPOSE
    // =========================

    case "purpose":
      switch (id) {
        case 21:
          return [
            "Write a one-page description of the life you want to create.",
            "Define the major areas that matter most to you.",
            "Review your vision every month and refine it as necessary.",
          ];

        case 22:
          return [
            "Identify your three most important long-term goals.",
            "Compare your current weekly activities against those goals.",
            "Reduce activities that consistently pull you away from your priorities.",
          ];

        case 23:
          return [
            "Schedule a weekly personal review.",
            "Measure progress against your most important goals.",
            "Choose the next week's priorities before the new week begins.",
          ];

        case 24:
          return [
            "Choose one important habit that must continue even when motivation drops.",
            "Create a minimum daily standard that is easy to maintain.",
            "Track consistency rather than waiting for motivation.",
          ];

        case 25:
          return [
            "Define the outcomes you want to achieve over the next five years.",
            "Break those outcomes into annual and quarterly milestones.",
            "Review your five-year direction every quarter.",
          ];

        default:
          break;
      }
      break;
  }

  return [
    "Identify one measurable improvement related to this behavior.",
    "Turn the improvement into a weekly habit.",
    "Review your progress every seven days.",
  ];
}

export function generateBlueprint(
  scores: PillarScore[],
  analyses: PillarAnalysisMap
): Blueprint[] {
  return scores.map((item) => {
    const analysis = analyses[item.pillar];
    const weakest = analysis?.weakest;

    const focusBehavior =
      weakest?.label ?? "Priority behavior";

    const focusPercentage =
      weakest?.percentage ?? item.score;

    let priority: Blueprint["priority"];

    if (item.score < 40) {
      priority = "High";
    } else if (item.score < 70) {
      priority = "Medium";
    } else {
      priority = "Low";
    }

    return {
      pillar: item.pillar,
      priority,
      actions: weakest
        ? getActions(item.pillar, weakest)
        : [
            "Choose one measurable improvement for this pillar.",
            "Convert it into a repeatable weekly habit.",
            "Review your progress every seven days.",
          ],
      focusBehavior,
      focusPercentage,
    };
  });
}