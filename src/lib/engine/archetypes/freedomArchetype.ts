import { PillarScore } from "@/types/freedom";

export interface FreedomArchetype {
  name: string;
  title: string;
  description: string;
  strengths: string[];
  watchOut: string[];
  nextLevel: string;
}

export function determineFreedomArchetype(
  overallScore: number,
  pillars: PillarScore[]
): FreedomArchetype {
  const get = (id: string) =>
    pillars.find((p) => p.pillar === id)?.score ?? 0;

  const health = get("health");
  const wealth = get("wealth");
  const growth = get("growth");
  const leadership = get("leadership");
  const purpose = get("purpose");

  const average =
    (health +
      wealth +
      growth +
      leadership +
      purpose) /
    5;

  const spread =
    Math.max(
      health,
      wealth,
      growth,
      leadership,
      purpose
    ) -
    Math.min(
      health,
      wealth,
      growth,
      leadership,
      purpose
    );

  // ----------------------------------------
  // Legacy Builder
  // ----------------------------------------

  if (
    overallScore >= 90 &&
    spread <= 10
  ) {
    return {
      name: "legacy-builder",

      title: "Legacy Builder",

      description:
        "You have built excellence across every pillar and are positioned to create lasting impact for others.",

      strengths: [
        "High consistency",
        "Balanced life",
        "Long-term thinking",
      ],

      watchOut: [
        "Avoid complacency",
        "Continue challenging yourself",
      ],

      nextLevel:
        "Mentor others and build systems that outlive you.",
    };
  }

  // ----------------------------------------
  // Freedom Architect
  // ----------------------------------------

  if (
    overallScore >= 80 &&
    spread <= 15
  ) {
    return {
      name: "freedom-architect",

      title: "Freedom Architect",

      description:
        "You have created strong balance across all five pillars and are building a sustainable life of freedom.",

      strengths: [
        "Balanced performance",
        "Strategic thinking",
        "Self leadership",
      ],

      watchOut: [
        "Continue refining weaker habits",
      ],

      nextLevel:
        "Build leverage and create greater impact.",
    };
  }

  // ----------------------------------------
  // Visionary Leader
  // ----------------------------------------

  if (
    leadership >= 80 &&
    purpose >= 80
  ) {
    return {
      name: "visionary-leader",

      title: "Visionary Leader",

      description:
        "People naturally follow your vision. Your challenge is turning inspiration into scalable execution.",

      strengths: [
        "Leadership",
        "Influence",
        "Purpose driven",
      ],

      watchOut: [
        "Don't ignore health or wealth.",
      ],

      nextLevel:
        "Develop systems that multiply your impact.",
    };
  }

  // ----------------------------------------
  // Growth Accelerator
  // ----------------------------------------

  if (
    growth >= 80 ||
    wealth >= 80
  ) {
    return {
      name: "growth-accelerator",

      title: "Growth Accelerator",

      description:
        "You learn quickly and embrace opportunity. Your next breakthrough comes from creating balance across all pillars.",

      strengths: [
        "Fast learner",
        "Opportunity focused",
        "Action oriented",
      ],

      watchOut: [
        "Avoid neglecting relationships and wellbeing.",
      ],

      nextLevel:
        "Convert growth into sustainable freedom.",
    };
  }

  // ----------------------------------------
  // Momentum Maker
  // ----------------------------------------

  if (
    average >= 60
  ) {
    return {
      name: "momentum-maker",

      title: "Momentum Maker",

      description:
        "You have established positive momentum and are progressing steadily across multiple areas of life.",

      strengths: [
        "Consistency",
        "Adaptability",
        "Growth mindset",
      ],

      watchOut: [
        "Avoid losing momentum.",
      ],

      nextLevel:
        "Strengthen your weakest pillar to accelerate progress.",
    };
  }

  // ----------------------------------------
  // Foundation Builder
  // ----------------------------------------

  return {
    name: "foundation-builder",

    title: "Foundation Builder",

    description:
      "Every great achievement begins with strong foundations. Focus on building daily habits before pursuing rapid growth.",

    strengths: [
      "Potential",
      "Resilience",
      "Room for improvement",
    ],

    watchOut: [
      "Avoid chasing too many goals at once.",
    ],

    nextLevel:
      "Develop one consistent habit in each pillar.",
  };
}