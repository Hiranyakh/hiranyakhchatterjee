"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface Props {
  completedStage: string;
  nextStage: string;
  onContinue: () => void;
}

export default function StageTransition({
  completedStage,
  nextStage,
  onContinue,
}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F8F6F1] via-white to-[#F8F6F1] px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full rounded-3xl bg-white shadow-2xl border border-slate-200 p-10 text-center"
      >
        <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />

        <h2 className="text-4xl font-bold text-slate-900">
          {completedStage} Complete
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          Excellent work! You've completed the{" "}
          <strong>{completedStage}</strong> assessment.
        </p>

        <div className="mt-10 rounded-2xl bg-amber-50 border border-amber-200 p-6">
          <p className="text-slate-700">
            Next we'll explore your
          </p>

          <h3 className="text-2xl font-bold text-amber-600 mt-2">
            {nextStage}
          </h3>
        </div>

        <button
          onClick={onContinue}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 font-semibold transition-all"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}