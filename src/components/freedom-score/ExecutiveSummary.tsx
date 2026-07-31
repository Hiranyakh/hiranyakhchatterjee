"use client";

import { ExecutiveInsight } from "@/lib/insights";
import {
  FileText,
  Target,
  TrendingUp,
  Trophy,
  Lightbulb,
} from "lucide-react";

interface Props {
  insight: ExecutiveInsight;
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 rounded-xl bg-slate-100 p-3">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 leading-7 text-slate-600">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function ExecutiveSummary({
  insight,
}: Props) {
  return (
    <section className="mt-20 rounded-3xl bg-white p-10 shadow-xl">
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-blue-100 p-4">
          <FileText className="h-8 w-8 text-blue-600" />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            Executive Summary
          </h2>

          <p className="text-slate-500">
            Your personalized Freedom Report
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <h3 className="text-3xl font-bold">
          {insight.headline}
        </h3>

        <p className="mt-4 text-lg leading-8 text-blue-100">
          {insight.overview}
        </p>
      </div>

      <div className="mt-10 space-y-8">

        <Section
          icon={<Trophy className="h-6 w-6 text-emerald-600" />}
          title="Greatest Strength"
        >
          {insight.strength}
        </Section>

        <Section
          icon={<TrendingUp className="h-6 w-6 text-orange-500" />}
          title="Biggest Opportunity"
        >
          {insight.opportunity}
        </Section>

        <Section
          icon={<Target className="h-6 w-6 text-purple-600" />}
          title="Your Next 90 Days"
        >
          {insight.next90Days}
        </Section>

        <Section
          icon={<Lightbulb className="h-6 w-6 text-yellow-500" />}
          title="Recommendation"
        >
          {insight.recommendation}
        </Section>

      </div>
    </section>
  );
}