"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  FileText,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="grid lg:grid-cols-2">

          {/* LEFT */}

          <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 p-10 text-white">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles size={16} />
              Premium Personal Assessment
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight">
              Freedom Score™
            </h1>

            <p className="mt-4 text-2xl font-semibold text-blue-100">
              Powered by the 5 Pillars of Freedom Framework
            </p>

            <p className="mt-8 text-lg leading-8 text-blue-100">
              Discover where you truly stand in the five areas that
              determine long-term freedom and success.
            </p>

            <div className="mt-10 space-y-5">

              <Feature
                icon={<Target size={20} />}
                title="25 Scientifically Structured Questions"
              />

              <Feature
                icon={<Trophy size={20} />}
                title="Personalized Freedom Score™"
              />

              <Feature
                icon={<FileText size={20} />}
                title="Executive Assessment Report"
              />

              <Feature
                icon={<ShieldCheck size={20} />}
                title="100% Confidential Assessment"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="p-10">

            <h2 className="text-4xl font-black text-slate-900">
              Before You Begin
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This assessment is designed to evaluate your current
              level of freedom across Health, Wealth, Growth,
              Leadership and Purpose.
            </p>

            <div className="mt-10 grid gap-5">

              <InfoCard
                title="Assessment Duration"
                value="7 Minutes"
              />

              <InfoCard
                title="Questions"
                value="25"
              />

              <InfoCard
                title="Results"
                value="Instant"
              />

              <InfoCard
                title="Professional PDF"
                value="Available After Assessment"
              />

            </div>

            <div className="mt-10 rounded-2xl bg-blue-50 p-6">

              <div className="flex items-center gap-3">

                <Clock3 className="text-blue-600" />

                <span className="font-bold text-blue-700">
                  Important
                </span>

              </div>

              <p className="mt-3 leading-7 text-slate-700">
                Answer honestly. There are no right or wrong
                answers. The more authentic your responses, the more
                valuable your Freedom Report™ will be.
              </p>

            </div>

            <button
              onClick={onStart}
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-xl font-bold text-white transition hover:bg-blue-700"
            >
              Start Assessment

              <ArrowRight />
            </button>

          </div>

        </div>
      </motion.div>
    </div>
  );
}

function Feature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-xl bg-white/15 p-3 backdrop-blur">
        {icon}
      </div>

      <span className="text-lg">{title}</span>
    </div>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
      <span className="font-semibold text-slate-600">
        {title}
      </span>

      <span className="font-bold text-slate-900">
        {value}
      </span>
    </div>
  );
}