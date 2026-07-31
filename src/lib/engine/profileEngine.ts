import { PillarScore } from "@/types/freedom";
import {
  areAllScoresEqual,
  getAverageScore,
  getScoreSpread,
} from "../analysis";

export interface ProfileResult {
  type: string;
  description: string;
}

export function detectProfile(
  scores: PillarScore[],
  overall: number
): ProfileResult {

  if (areAllScoresEqual(scores)) {
    return {
      type: "Balanced Foundation",
      description:
        "Your scores are evenly distributed. Focus on building consistent habits across every pillar before specializing.",
    };
  }

  const spread = getScoreSpread(scores);

  if (overall >= 80) {
    return {
      type: "Freedom Master",
      description:
        "You have developed strong systems across multiple pillars.",
    };
  }

  if (spread < 10) {
    return {
      type: "Balanced Performer",
      description:
        "You are progressing evenly across all areas of life.",
    };
  }

  if (overall < 40) {
    return {
      type: "Foundation Builder",
      description:
        "Your focus should be building strong daily habits.",
    };
  }

  return {
    type: "Growth Accelerator",
    description:
      "You have momentum. Strengthen weaker pillars to unlock your next level.",
  };
}