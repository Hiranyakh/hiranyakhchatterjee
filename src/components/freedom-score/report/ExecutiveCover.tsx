"use client";

import { Calendar, FileBadge, ShieldCheck } from "lucide-react";

interface Props {
  fullName: string;
  assessmentId: string;
  assessmentDate: string;
  freedomScore: number;
  freedomLevel: string;
  freedomArchetype: string;
}

export default function ExecutiveCover({
  fullName,
  assessmentId,
  assessmentDate,
  freedomScore,
  freedomLevel,
  freedomArchetype,
}: Props) {
  return (
    <section className="report-page">

      {/* BRAND HEADER */}
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

      {/* HERO */}
      <div className="mt-10 text-center">

        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-600">
          Freedom Score™
        </p>

        <h1 className="mt-4 text-[42px] font-black leading-[1.05] text-slate-900">
          Executive Intelligence
          <br />
          Report
        </h1>

        <p className="mt-4 text-[14px] text-slate-500">
          Confidential Personal Freedom Assessment
        </p>

      </div>

      {/* IDENTITY */}
      <div className="print-avoid-break mt-8 rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm">

        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-600">
          Prepared Exclusively For
        </p>

        <h2 className="mt-3 text-[30px] font-black text-slate-900">
          {fullName}
        </h2>

        <p className="mt-1 text-[13px] text-slate-500">
          Freedom Score™ Executive Assessment
        </p>

        <div className="mt-6 grid grid-cols-2 gap-6">

          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-slate-100 p-2">
              <FileBadge
                size={17}
                className="text-slate-600"
              />
            </div>

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">
                Assessment ID
              </p>

              <p className="mt-1 text-[12px] font-bold text-slate-900">
                {assessmentId}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-slate-100 p-2">
              <Calendar
                size={17}
                className="text-slate-600"
              />
            </div>

            <div>
              <p className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">
                Assessment Date
              </p>

              <p className="mt-1 text-[12px] font-bold text-slate-900">
                {assessmentDate}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* SCORE */}
      <div className="mt-8 flex items-center justify-center">

        <div className="flex h-[145px] w-[145px] flex-col items-center justify-center rounded-full border-[8px] border-amber-100 bg-white shadow-sm">

          <p className="text-[48px] font-black leading-none text-slate-900">
            {freedomScore}
          </p>

          <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Freedom Score
          </p>

        </div>

      </div>

      {/* LEVEL + ARCHETYPE */}
      <div className="mt-7 grid grid-cols-2 gap-5">

        <div className="rounded-[20px] border border-emerald-200 bg-emerald-50 p-5 text-center">

          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-emerald-700">
            Freedom Level
          </p>

          <h3 className="mt-2 text-[19px] font-black text-slate-900">
            {freedomLevel}
          </h3>

        </div>

        <div className="rounded-[20px] border border-amber-200 bg-amber-50 p-5 text-center">

          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-amber-700">
            Freedom Archetype™
          </p>

          <h3 className="mt-2 text-[19px] font-black text-slate-900">
            {freedomArchetype}
          </h3>

        </div>

      </div>

      {/* EXECUTIVE INSIGHT */}
      <div className="mt-7 rounded-[20px] bg-[#0F172A] p-6 text-center text-white">

        <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-amber-400">
          Executive Insight
        </p>

        <p className="mt-3 text-[14px] font-medium leading-6 text-slate-200">
          Every remarkable transformation begins with one intentional decision.
        </p>

      </div>

      {/* CONFIDENTIAL NOTICE */}
      <div className="mt-6 flex items-start gap-3 rounded-[18px] border border-slate-200 bg-slate-50 p-5">

        <ShieldCheck
          size={20}
          className="mt-0.5 shrink-0 text-emerald-600"
        />

        <p className="text-[9px] leading-4 text-slate-500">
          This report has been generated exclusively for the individual
          named above using responses submitted during the Freedom Score™
          Assessment. The findings are intended for personal development,
          decision-making and long-term strategic growth.
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