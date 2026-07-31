import { questions } from "./questions";

import {
  Answer,
  FreedomResult,
  Pillar,
  PillarScore,
} from "@/types/freedom";

const pillars: Pillar[] = [
  "health",
  "wealth",
  "growth",
  "leadership",
  "purpose",
];

export function calculateFreedomScore(
  answers: Answer[]
): FreedomResult {
  const pillarScores: PillarScore[] = pillars.map((pillar) => {
    const pillarQuestions = questions.filter(
      (q) => q.pillar === pillar
    );

    const totalPossible = pillarQuestions.reduce(
      (sum, q) => sum + q.weight * 5,
      0
    );

    const earned = pillarQuestions.reduce((sum, question) => {
      const answer = answers.find(
        (a) => a.questionId === question.id
      );

      if (!answer) return sum;

      return sum + answer.value * question.weight;
    }, 0);

    const score =
      totalPossible === 0
        ? 0
        : Math.round((earned / totalPossible) * 100);

    return {
      pillar,
      score,
    };
  });

  const overallScore = Math.round(
    pillarScores.reduce((sum, p) => sum + p.score, 0) /
      pillarScores.length
  );

  return {
    overallScore,
    pillarScores,
  };
}