import { PillarScore } from "@/types/freedom";

export interface SWOTItem {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
}

export interface SWOT {
  strengths: SWOTItem[];
  weaknesses: SWOTItem[];
  opportunities: SWOTItem[];
  threats: SWOTItem[];
}

const pillarNames: Record<string, string> = {
  health: "Health",
  wealth: "Wealth",
  growth: "Growth",
  leadership: "Leadership",
  purpose: "Purpose",
};

export function buildSWOT(
  pillars: PillarScore[]
): SWOT {

  const strengths: SWOTItem[] = [];
  const weaknesses: SWOTItem[] = [];
  const opportunities: SWOTItem[] = [];
  const threats: SWOTItem[] = [];

  pillars.forEach((pillar) => {

    const name =
      pillarNames[pillar.pillar] ?? pillar.pillar;

    // -------------------------
    // Strengths
    // -------------------------

    if (pillar.score >= 80) {

      strengths.push({
        title: `${name} is a major strength`,
        description:
          `Your ${name.toLowerCase()} pillar is performing at a high level and can be used as leverage while improving other areas.`,
        priority: "High",
      });

    }

    // -------------------------
    // Weaknesses
    // -------------------------

    if (pillar.score < 60) {

      weaknesses.push({
        title: `${name} requires attention`,
        description:
          `Improving this pillar should become a priority because it is currently limiting your overall Freedom Score.`,
        priority: "High",
      });

    }

    // -------------------------
    // Opportunities
    // -------------------------

    if (
      pillar.score >= 60 &&
      pillar.score < 80
    ) {

      opportunities.push({
        title: `Grow your ${name}`,
        description:
          `Focused effort in this area can significantly increase your Freedom Score over the next 90 days.`,
        priority: "Medium",
      });

    }

    // -------------------------
    // Threats
    // -------------------------

    if (pillar.score < 40) {

      threats.push({
        title: `${name} is at risk`,
        description:
          `If left unaddressed, this pillar could negatively affect long-term progress across multiple areas.`,
        priority: "High",
      });

    }

  });

  return {
    strengths,
    weaknesses,
    opportunities,
    threats,
  };

}