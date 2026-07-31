import { FreedomLevel, PillarScore } from "./freedom";
import { FreedomDNA } from "@/lib/engine/dna/buildFreedomDNA";
import { SWOT } from "@/lib/engine/swot/buildSWOT";
import { RoadmapAction } from "@/lib/engine/roadmap/buildRoadmap";
import { Recommendation } from "@/lib/engine/recommendations/buildRecommendations";
import { FreedomArchetype } from "@/lib/engine/archetypes/freedomArchetype";

export interface FreedomPotential {
  currentScore: number;
  potentialScore: number;
  potentialGain: number;
  estimatedTimeline: string;
  confidence: number;
}

export interface ExecutiveReport {
  reportDate: string;

  overallScore: number;

  freedomLevel: FreedomLevel;

  freedomArchetype: FreedomArchetype;

  freedomDNA: FreedomDNA;

  readinessScore: number;

  riskIndex: "Low" | "Medium" | "High";

  momentum:
    | "Excellent"
    | "Good"
    | "Emerging"
    | "Needs Attention";

  executiveSummary: string;

  topStrengths: string[];

  topWeaknesses: string[];

  topPriorities: string[];

  swot: SWOT;

  roadmap: RoadmapAction[];

  recommendations: Recommendation[];

  potential: FreedomPotential;

  pillars: PillarScore[];
}