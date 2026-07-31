export function getFreedomLevel(score: number) {
  if (score >= 90)
    return {
      title: "Freedom Master",
      description:
        "You demonstrate exceptional balance across all five pillars of freedom.",
      color: "emerald",
    };

  if (score >= 75)
    return {
      title: "Freedom Builder",
      description:
        "You have built strong foundations and are progressing toward lasting freedom.",
      color: "blue",
    };

  if (score >= 60)
    return {
      title: "Growth Seeker",
      description:
        "You are developing steadily and have significant potential for improvement.",
      color: "amber",
    };

  if (score >= 40)
    return {
      title: "Foundation Stage",
      description:
        "Your focus should be on strengthening core habits across the five pillars.",
      color: "orange",
    };

  return {
    title: "Starting the Journey",
    description:
      "Every transformation starts with the first step. Build consistency before seeking rapid growth.",
    color: "red",
  };
}