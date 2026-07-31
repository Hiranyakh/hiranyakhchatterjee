import {
  HeartPulse,
  Wallet,
  Brain,
  Crown,
  Target,
} from "lucide-react";

import { Pillar } from "@/types/freedom";

export const pillarConfig: Record<Pillar, {
  label: string;
  icon: any;
  color: string;
  lightColor: string;
  description: string;
}> = {
  health: {
    label: "Health",
    icon: HeartPulse,
    color: "emerald",
    lightColor: "emerald-100",
    description:
      "You have built strong health habits that support long-term success.",
  },

  wealth: {
    label: "Wealth",
    icon: Wallet,
    color: "amber",
    lightColor: "amber-100",
    description:
      "Building stronger financial systems can dramatically improve your freedom.",
  },

  growth: {
    label: "Growth",
    icon: Brain,
    color: "blue",
    lightColor: "blue-100",
    description:
      "Continuous learning gives you a lasting competitive advantage.",
  },

  leadership: {
    label: "Leadership",
    icon: Crown,
    color: "purple",
    lightColor: "purple-100",
    description:
      "Your ability to influence others multiplies your impact.",
  },

  purpose: {
    label: "Purpose",
    icon: Target,
    color: "rose",
    lightColor: "rose-100",
    description:
      "A clear purpose helps you make confident long-term decisions.",
  },
};