"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Wallet,
  Brain,
  Crown,
  Target,
} from "lucide-react";

interface Props {
  pillar: string;
  score: number;
}

const config = {
  health: {
    icon: HeartPulse,
    iconColor: "text-emerald-500",
    barColor: "bg-emerald-500",
  },
  wealth: {
    icon: Wallet,
    iconColor: "text-amber-500",
    barColor: "bg-amber-500",
  },
  growth: {
    icon: Brain,
    iconColor: "text-blue-500",
    barColor: "bg-blue-500",
  },
  leadership: {
    icon: Crown,
    iconColor: "text-purple-500",
    barColor: "bg-purple-500",
  },
  purpose: {
    icon: Target,
    iconColor: "text-rose-500",
    barColor: "bg-rose-500",
  },
};

export default function PillarCard({
  pillar,
  score,
}: Props) {
  const item = config[pillar as keyof typeof config];
  const Icon = item.icon;

  const getLabel = () => {
    if (score >= 90) return "Exceptional";
    if (score >= 80) return "Excellent";
    if (score >= 70) return "Very Good";
    if (score >= 60) return "Good";
    if (score >= 50) return "Developing";
    return "Needs Attention";
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon className={item.iconColor} size={28} />
          <h3 className="text-lg font-bold capitalize">
            {pillar}
          </h3>
        </div>

        <span className="text-3xl font-bold">
          {score}%
        </span>
      </div>

      <div className="mt-6 h-3 w-full rounded-full bg-slate-200 overflow-hidden">
        <motion.div
          className={`h-full ${item.barColor}`}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1 }}
        />
      </div>

      <p className="mt-4 text-slate-500 font-medium">
        {getLabel()}
      </p>
    </motion.div>
  );
}
<div className="mt-20">
  <h2 className="text-4xl font-bold text-center text-slate-900">
    Your Freedom Blueprint
  </h2>

  <p className="mt-3 text-center text-slate-500">
    Personalized action steps to improve each pillar.
  </p>

  
</div>