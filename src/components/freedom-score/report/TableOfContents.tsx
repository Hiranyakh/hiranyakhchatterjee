"use client";

import ReportPage from "./layout/ReportPage";
import { BookOpen, ChevronRight } from "lucide-react";

interface Section {
  title: string;
  description: string;
  page: number;
}

const sections: Section[] = [
  {
    page: 1,
    title: "Executive Cover",
    description:
      "Personalized assessment overview and executive details.",
  },
  {
    page: 2,
    title: "Executive Summary",
    description:
      "Overall Freedom Score, key insights and recommendations.",
  },
  {
    page: 3,
    title: "Freedom Score Overview",
    description:
      "Radar chart, score interpretation and overall performance.",
  },
  {
    page: 4,
    title: "Health Analysis",
    description:
      "Physical wellbeing, nutrition, habits and energy.",
  },
  {
    page: 5,
    title: "Wealth Analysis",
    description:
      "Income, wealth creation and financial planning.",
  },
  {
    page: 6,
    title: "Growth Analysis",
    description:
      "Learning, AI adoption and personal development.",
  },
  {
    page: 7,
    title: "Leadership Analysis",
    description:
      "Influence, communication and leadership effectiveness.",
  },
  {
    page: 8,
    title: "Purpose Analysis",
    description:
      "Mission, vision and long-term direction.",
  },
  {
    page: 9,
    title: "Freedom Archetype™",
    description:
      "Your unique leadership and success profile.",
  },
  {
    page: 10,
    title: "Personal SWOT Analysis",
    description:
      "Strengths, weaknesses, opportunities and risks.",
  },
  {
    page: 11,
    title: "90-Day Freedom Roadmap",
    description:
      "Your personalized implementation strategy.",
  },
  {
    page: 12,
    title: "Weekly Success Tracker",
    description:
      "Printable weekly execution planner.",
  },
  {
    page: 13,
    title: "Freedom Certificate",
    description:
      "Official completion certificate.",
  },
];

export default function TableOfContents() {
  return (
    <ReportPage
      title="Table of Contents"
      subtitle="Your personalized Freedom Blueprint™ Executive Edition"
    >
      <div className="space-y-8">

        <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-6">

          <BookOpen
            size={36}
            className="text-blue-700"
          />

          <div>

            <h2 className="text-2xl font-bold">
              Report Structure
            </h2>

            <p className="mt-2 text-slate-600">
              This report has been organized to guide you
              through your current position, strengths,
              opportunities and a practical roadmap toward
              greater freedom.
            </p>

          </div>

        </div>

        <div className="rounded-3xl border border-slate-200 overflow-hidden">

          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`flex items-center justify-between p-6 ${
                index !== sections.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div className="flex items-start gap-4">

                <div className="mt-1">
                  <ChevronRight
                    size={20}
                    className="text-blue-700"
                  />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {section.title}
                  </h3>

                  <p className="mt-2 text-slate-600 leading-7">
                    {section.description}
                  </p>

                </div>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {section.page}
              </div>

            </div>
          ))}

        </div>

        <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">

          <h3 className="font-bold text-amber-800">
            How to Use This Report
          </h3>

          <p className="mt-3 leading-7 text-slate-700">
            Read the report from beginning to end before
            implementing recommendations. Focus first on
            the lowest-scoring pillar, then use the
            90-Day Freedom Roadmap to create measurable
            progress. Revisit this assessment every
            90–180 days to track your improvement.
          </p>

        </div>

      </div>
    </ReportPage>
  );
}