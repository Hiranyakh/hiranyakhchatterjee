"use client";

import {
  BookOpen,
  ChevronRight,
} from "lucide-react";

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
    <section className="report-page">

      {/* HEADER */}
      <header className="report-page-header">

        <div>
          <p className="report-brand">
            THE HIRANYAKH FRAMEWORK™
          </p>

          <p className="report-brand-subtitle">
            Freedom Score™ Executive Report
          </p>
        </div>

        <div className="report-confidential">
          CONFIDENTIAL
        </div>

      </header>

      {/* TITLE */}
      <div className="report-title-block">

        <h1>
          Table of Contents
        </h1>

        <p>
          Your personalized Freedom Blueprint™ Executive Edition
        </p>

      </div>

      {/* INTRO */}
      <div className="print-avoid-break flex items-center gap-4 rounded-[18px] bg-slate-100 p-5">

        <div className="rounded-xl bg-white p-3 shadow-sm">

          <BookOpen
            size={22}
            className="text-blue-700"
          />

        </div>

        <div>

          <h2 className="text-[16px] font-bold text-slate-900">
            Report Structure
          </h2>

          <p className="mt-1 text-[10px] leading-4 text-slate-600">
            A structured journey through your current position,
            strengths, opportunities and strategic roadmap toward
            greater freedom.
          </p>

        </div>

      </div>

      {/* CONTENT LIST */}
      <div className="mt-5 overflow-hidden rounded-[18px] border border-slate-200">

        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`flex items-center justify-between px-5 py-[9px] ${
              index !== sections.length - 1
                ? "border-b border-slate-200"
                : ""
            }`}
          >

            <div className="flex min-w-0 items-start gap-3">

              <ChevronRight
                size={14}
                className="mt-1 shrink-0 text-blue-600"
              />

              <div className="min-w-0">

                <h3 className="text-[11px] font-bold leading-4 text-slate-900">
                  {section.title}
                </h3>

                <p className="mt-0.5 text-[8px] leading-3 text-slate-500">
                  {section.description}
                </p>

              </div>

            </div>

            <div className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white">
              {section.page}
            </div>

          </div>
        ))}

      </div>

      {/* HOW TO USE */}
      <div className="print-avoid-break mt-5 rounded-[18px] border-l-4 border-amber-500 bg-amber-50 p-5">

        <h3 className="text-[11px] font-bold text-amber-800">
          How to Use This Report
        </h3>

        <p className="mt-2 text-[9px] leading-4 text-slate-700">
          Read the report from beginning to end before implementing
          recommendations. Focus first on the lowest-scoring pillar,
          then use the 90-Day Freedom Roadmap to create measurable
          progress. Revisit the assessment every 90–180 days to
          track improvement.
        </p>

      </div>

      {/* FOOTER */}
      <footer className="report-footer">

        <span>
          © {new Date().getFullYear()} Freedom Score™
        </span>

        <span>
          Personal Freedom Assessment
        </span>

      </footer>

    </section>
  );
}