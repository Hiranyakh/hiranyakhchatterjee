import { questions } from "@/lib/questions";
import {
  Answer,
  Pillar,
} from "@/types/freedom";

export interface DimensionAnalysis {
  questionId: number;
  pillar: Pillar;
  label: string;
  question: string;
  response: string;
  value: number;
  percentage: number;
  description?: string;
}

export function analyzePillarAnswers(
  answers: Answer[],
  pillar: Pillar
): DimensionAnalysis[] {
  const pillarQuestions = questions.filter(
    (question) => question.pillar === pillar
  );

  return pillarQuestions.map((question) => {
    const answer = answers.find(
      (item) => item.questionId === question.id
    );

    const value = answer?.value ?? 0;

    const maxValue = Math.max(
      ...question.options.map(
        (option) => option.value
      )
    );

    const percentage =
      maxValue === 0
        ? 0
        : Math.round((value / maxValue) * 100);

    const selectedOption =
      question.options.find(
        (option) => option.value === value
      );

    return {
      questionId: question.id,
      pillar: question.pillar,
      label: question.question,
      question: question.question,
      response:
        selectedOption?.label ?? "Not answered",
      value,
      percentage,
      description: question.description,
    };
  });
}

export function getStrongestDimension(
  dimensions: DimensionAnalysis[]
): DimensionAnalysis | null {
  if (dimensions.length === 0) {
    return null;
  }

  return dimensions.reduce(
    (strongest, current) =>
      current.percentage > strongest.percentage
        ? current
        : strongest
  );
}

export function getWeakestDimension(
  dimensions: DimensionAnalysis[]
): DimensionAnalysis | null {
  if (dimensions.length === 0) {
    return null;
  }

  return dimensions.reduce(
    (weakest, current) =>
      current.percentage < weakest.percentage
        ? current
        : weakest
  );
}