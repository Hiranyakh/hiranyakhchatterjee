"use client";

import { CheckCircle2 } from "lucide-react";
import { Blueprint } from "@/lib/blueprint";
import { pillarConfig } from "@/lib/pillarConfig";

interface Props {
  blueprint: Blueprint;
}

const priorityColors = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

export default function BlueprintCard({ blueprint }: Props) {
  const config = pillarConfig[blueprint.pillar];
  const Icon = config.icon;

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-slate-100 p-3">
            <Icon className="h-7 w-7" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {config.label}
            </h3>

            <span
              className={`mt-2 inline-block rounded-full px-3 py-1 text-sm font-semibold ${priorityColors[blueprint.priority]}`}
            >
              {blueprint.priority} Priority
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {blueprint.actions.map((action) => (
          <div
            key={action}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />

            <p className="text-slate-600 leading-6">
              {action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}