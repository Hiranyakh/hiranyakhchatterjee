"use client";

import { FreedomReport } from "@/lib/engine/reportEngine";
import { motion } from "framer-motion";
import { Award, BarChart3, ShieldCheck } from "lucide-react";

interface Props {
  report: FreedomReport;
}

export default function ReportHeader({ report }: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 md:p-12 text-white shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10">

        {/* Title */}
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 text-blue-400" />

          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              Freedom Report™
            </h1>

            <p className="text-blue-200 mt-1">
              Your Personal Freedom Assessment
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">

          {/* Left */}
          <div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-8xl font-black"
            >
              {report.overallScore}
            </motion.div>

            <p className="mt-2 text-xl text-slate-300">
              Freedom Score
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="rounded-full bg-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-300">
                {report.level.title}
              </span>

              <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-semibold text-blue-300">
                {report.profile.type}
              </span>

            </div>

            <p className="mt-8 text-lg leading-8 text-slate-200">
              {report.profile.description}
            </p>

          </div>

          {/* Right */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6">

            <div className="flex items-center gap-2">

              <BarChart3 className="h-6 w-6 text-blue-300" />

              <h2 className="text-xl font-bold">
                Pillar Snapshot
              </h2>

            </div>

            <div className="mt-8 space-y-6">

              {report.pillars.map((pillar) => (

                <div key={pillar.pillar}>

                  <div className="mb-2 flex justify-between text-sm">

                    <span className="font-semibold">
                      {pillar.label}
                    </span>

                    <span>{pillar.score}%</span>

                  </div>

                  <div className="h-3 rounded-full bg-white/10">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pillar.score}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                      }}
                      className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Quote */}

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">

          <div className="flex items-center gap-2">

            <Award className="h-5 w-5 text-yellow-400" />

            <span className="font-bold">
              Executive Insight
            </span>

          </div>

          <p className="mt-4 text-lg leading-8 text-slate-200 italic">
            "{report.executiveSummary.overview}"
          </p>

        </div>

      </div>

    </section>
  );
}