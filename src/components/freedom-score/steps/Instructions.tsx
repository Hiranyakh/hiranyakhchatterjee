"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Clock3,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
  Target,
  Trophy,
} from "lucide-react";

interface Props {
  onContinue: () => void;
}

const pillars = [
  {
    icon: HeartPulse,
    title: "Health",
    description: "Energy, fitness, nutrition and overall wellbeing.",
  },
  {
    icon: Trophy,
    title: "Wealth",
    description: "Income, financial habits and wealth creation.",
  },
  {
    icon: Brain,
    title: "Growth",
    description: "Learning, AI adoption and continuous improvement.",
  },
  {
    icon: Target,
    title: "Leadership",
    description: "Influence, confidence and decision-making.",
  },
  {
    icon: Lightbulb,
    title: "Purpose",
    description: "Vision, impact and long-term direction.",
  },
];

export default function Instructions({ onContinue }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl rounded-3xl bg-white shadow-2xl overflow-hidden"
      >
        <div className="grid lg:grid-cols-2">

          {/* Left Panel */}

          <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 p-10 text-white">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              <ShieldCheck size={16} />
              Assessment Instructions
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight">
              Your Freedom Journey Starts Now
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              This assessment evaluates the five pillars that contribute
              to long-term personal and financial freedom.
            </p>

            <div className="mt-10 space-y-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4"
                  >
                    <div className="rounded-xl bg-white/15 p-3">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">
                        {pillar.title}
                      </h3>

                      <p className="text-blue-100 text-sm mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Panel */}

          <div className="p-10">

            <h2 className="text-4xl font-black text-slate-900">
              Before You Begin
            </h2>

            <div className="mt-8 space-y-6">

              <InstructionCard
                title="Answer Honestly"
                text="Choose the option that best reflects your current reality, not where you wish to be."
              />

              <InstructionCard
                title="No Right or Wrong Answers"
                text="This is a self-assessment designed to provide insights, not pass or fail."
              />

              <InstructionCard
                title="Complete in One Sitting"
                text="The assessment takes approximately 7 minutes and is best completed without interruptions."
              />

              <InstructionCard
                title="Personalized Results"
                text="Your responses will generate your Freedom Score™, pillar analysis and recommendations."
              />

            </div>

            <div className="mt-10 rounded-2xl bg-blue-50 p-6">
              <div className="flex items-center gap-3">
                <Clock3 className="text-blue-600" />
                <span className="font-bold text-blue-700">
                  Estimated Duration: 7 Minutes
                </span>
              </div>

              <p className="mt-3 text-slate-700 leading-7">
                Once you start, answer all 25 questions for the most
                accurate Freedom Report™.
              </p>
            </div>

            <button
              onClick={onContinue}
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-xl font-bold text-white transition hover:bg-blue-700"
            >
              Begin Assessment
              <ArrowRight />
            </button>

          </div>

        </div>
      </motion.div>
    </div>
  );
}

interface CardProps {
  title: string;
  text: string;
}

function InstructionCard({ title, text }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <h3 className="font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-slate-600 leading-7">
        {text}
      </p>
    </div>
  );
}