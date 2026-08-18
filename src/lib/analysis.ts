import { PillarScore } from "@/types/freedom";

const BALANCED_SPREAD = 5;

export function getStrength(scores: PillarScore[]) {
  if (scores.length === 0) {
    throw new Error("Cannot calculate strength from empty scores.");
  }

  return scores.reduce((best, current) =>
    current.score > best.score ? current : best
  );
}

export function getOpportunity(scores: PillarScore[]) {
  if (scores.length === 0) {
    throw new Error("Cannot calculate opportunity from empty scores.");
  }

  return scores.reduce((lowest, current) =>
    current.score < lowest.score ? current : lowest
  );
}

export function areAllScoresEqual(scores: PillarScore[]) {
  if (scores.length === 0) return false;

  return scores.every(
    (item) => item.score === scores[0].score
  );
}

export function getAverageScore(scores: PillarScore[]) {
  if (scores.length === 0) return 0;

  return (
    scores.reduce((sum, item) => sum + item.score, 0) /
    scores.length
  );
}

export function getScoreSpread(scores: PillarScore[]) {
  if (scores.length === 0) return 0;

  const values = scores.map((p) => p.score);

  return Math.max(...values) - Math.min(...values);
}

export function isBalanced(scores: PillarScore[]) {
  return getScoreSpread(scores) < BALANCED_SPREAD;
}

export function getTopPillars(scores: PillarScore[]) {
  if (scores.length === 0) return [];

  const highest = Math.max(
    ...scores.map((p) => p.score)
  );

  return scores.filter(
    (p) => p.score === highest
  );
}

export function getBottomPillars(scores: PillarScore[]) {
  if (scores.length === 0) return [];

  const lowest = Math.min(
    ...scores.map((p) => p.score)
  );

  return scores.filter(
    (p) => p.score === lowest
  );
}