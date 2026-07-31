import { PillarScore } from "@/types/freedom";

export function getStrength(scores: PillarScore[]) {
  return scores.reduce((best, current) =>
    current.score > best.score ? current : best
  );
}

export function getOpportunity(scores: PillarScore[]) {
  return scores.reduce((lowest, current) =>
    current.score < lowest.score ? current : lowest
  );
}

/* ---------- NEW ---------- */

export function areAllScoresEqual(scores: PillarScore[]) {
  return scores.every(
    (item) => item.score === scores[0].score
  );
}

export function getAverageScore(scores: PillarScore[]) {
  return (
    scores.reduce((sum, item) => sum + item.score, 0) /
    scores.length
  );
}

export function getScoreSpread(scores: PillarScore[]) {
  const values = scores.map((p) => p.score);

  return Math.max(...values) - Math.min(...values);
}

export function getTopPillars(scores: PillarScore[]) {
  const highest = Math.max(...scores.map((p) => p.score));

  return scores.filter((p) => p.score === highest);
}

export function getBottomPillars(scores: PillarScore[]) {
  const lowest = Math.min(...scores.map((p) => p.score));

  return scores.filter((p) => p.score === lowest);
}