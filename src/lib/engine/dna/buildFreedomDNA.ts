import { PillarScore } from "@/types/freedom";

export type DNAGrade = "A" | "B" | "C" | "D" | "E";

export interface FreedomDNA {
  code: string;
  grades: {
    health: DNAGrade;
    wealth: DNAGrade;
    growth: DNAGrade;
    leadership: DNAGrade;
    purpose: DNAGrade;
  };
  averageGrade: DNAGrade;
  summary: string;
}

function getGrade(score: number): DNAGrade {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  if (score >= 40) return "D";
  return "E";
}

function averageGrade(grades: DNAGrade[]): DNAGrade {
  const values = grades.map(g => {
    switch (g) {
      case "A":
        return 5;
      case "B":
        return 4;
      case "C":
        return 3;
      case "D":
        return 2;
      default:
        return 1;
    }
  });

  const avg =
    values.reduce((a, b) => a + b, 0) /
    values.length;

  if (avg >= 4.5) return "A";
  if (avg >= 3.5) return "B";
  if (avg >= 2.5) return "C";
  if (avg >= 1.5) return "D";
  return "E";
}

function buildSummary(code: string): string {
  if (code.startsWith("AA"))
    return "Exceptional foundation with strong long-term freedom potential.";

  if (code.includes("EEE"))
    return "Critical attention is required across multiple pillars.";

  if (code.includes("DDD"))
    return "Several core systems require strengthening before accelerating growth.";

  if (code.includes("AAA"))
    return "High-performing profile with excellent consistency.";

  return "Balanced profile with clear opportunities for improvement.";
}

export function buildFreedomDNA(
  pillars: PillarScore[]
): FreedomDNA {

  const score = (pillar: string) =>
    pillars.find(p => p.pillar === pillar)?.score ?? 0;

  const health = getGrade(score("health"));
  const wealth = getGrade(score("wealth"));
  const growth = getGrade(score("growth"));
  const leadership = getGrade(score("leadership"));
  const purpose = getGrade(score("purpose"));

  const code =
    health +
    wealth +
    growth +
    leadership +
    purpose;

  const avg = averageGrade([
    health,
    wealth,
    growth,
    leadership,
    purpose,
  ]);

  return {
    code,

    grades: {
      health,
      wealth,
      growth,
      leadership,
      purpose,
    },

    averageGrade: avg,

    summary: buildSummary(code),
  };
}