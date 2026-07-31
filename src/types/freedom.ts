export type Pillar =
  | "health"
  | "wealth"
  | "growth"
  | "leadership"
  | "purpose";

export interface Question {
  id: number;
  pillar: Pillar;
  question: string;
  description?: string;
  weight: number;
}

export interface Answer {
  questionId: number;
  value: number;
}

export interface PillarScore {
  pillar: Pillar;
  score: number;
}

export interface FreedomResult {
  overallScore: number;
  pillarScores: PillarScore[];
}

export interface FreedomLevel {
  title: string;
  description: string;
  color: string;
}

export interface ExecutiveSummary {
  overview: string;
}

export interface FreedomReport {
  overallScore: number;

  level: FreedomLevel;

  profile: string;

  executiveSummary: ExecutiveSummary;

  pillars: PillarScore[];
}