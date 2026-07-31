import { PillarScore, Pillar } from "@/types/freedom";
import { recommendations } from "./recommendations";

export interface Blueprint {
  pillar: Pillar;
  priority: "High" | "Medium" | "Low";
  actions: string[];
}

export function generateBlueprint(
  scores: PillarScore[]
): Blueprint[] {
  return scores.map((item) => {
    let priority: Blueprint["priority"];
    let actions: string[];

    if (item.score < 40) {
      priority = "High";
      actions = recommendations[item.pillar].low;
    } else if (item.score < 70) {
      priority = "Medium";
      actions = recommendations[item.pillar].medium;
    } else {
      priority = "Low";
      actions = recommendations[item.pillar].high;
    }

    return {
      pillar: item.pillar,
      priority,
      actions,
    };
  });
}