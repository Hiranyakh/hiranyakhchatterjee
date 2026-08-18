export type Pillar =
  | "health"
  | "wealth"
  | "growth"
  | "leadership"
  | "purpose";

export type QuestionType =
  | "frequency"
  | "clarity"
  | "confidence"
  | "maturity"
  | "consistency"
  | "diversification"
  | "alignment";

export interface QuestionOption {
  label: string;
  value: number;
}

export interface Question {
  id: number;
  pillar: Pillar;
  question: string;
  description?: string;
  weight: number;
  type: QuestionType;
  options: QuestionOption[];
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
  answers: Answer[];
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