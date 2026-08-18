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
    description:
      "Energy, fitness, nutrition and overall wellbeing.",
  },
  {
    icon: Trophy,
    title: "Wealth",
    description:
      "Income, financial habits and wealth creation.",
  },
  {
    icon: Brain,
    title: "Growth & AI",
    description:
      "Learning, AI adoption and continuous improvement.",
  },
  {
    icon: Target,
    title: "Leadership",
    description:
      "Influence, confidence and decision-making.",
  },
  {
    icon: Lightbulb,
    title: "Purpose",
    description:
      "Vision, impact and long-term direction.",
  },
];

const principles = [
  {
    number: "01",
    title: "Answer Honestly",
    text: "Choose the option that best reflects your current reality, not where you wish to be.",
  },
  {
    number: "02",
    title: "There Are No Right Answers",
    text: "This is a self-assessment designed to provide insights, not to pass or fail you.",
  },
  {
    number: "03",
    title: "Complete It in One Sitting",
    text: "The assessment takes approximately 7 minutes and is best completed without interruptions.",
  },
];

export default function Instructions({
  onContinue,
}: Props) {
  return (
    <main className="min-h-screen bg-[#FAF9F6] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-10"
        >
          <p className="text-lg font-bold tracking-[0.16em] text-[#0B132B]">
            HIRANYAKH
          </p>

          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0F7A5C]">
            Freedom Score™
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white
            shadow-[0_25px_80px_rgba(15,23,42,.10)]
          "
        >
          {/* Header */}
          <div className="relative overflow-hidden bg-[#0B132B] px-6 py-12 text-center sm:px-10 sm:py-16">
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[360px]
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#D4AF37]/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[220px]
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D4AF37]/5
                blur-3xl
              "
            />

            <div className="relative z-10">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D4AF37]/40
                  bg-white/5
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#D4AF37]
                "
              >
                <ShieldCheck size={15} />
                Before You Begin
              </span>

              <h1
                className="
                  mx-auto
                  mt-7
                  max-w-3xl
                  text-4xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Five Areas.
                <br />
                <span className="text-[#D4AF37]">
                  One Clearer Picture.
                </span>
              </h1>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-slate-300
                  sm:text-lg
                  sm:leading-8
                "
              >
                Your Freedom Score™ evaluates five areas that contribute
                to your current position and your ability to create
                greater freedom.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="px-6 py-10 sm:px-10 sm:py-12">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F7A5C]">
                The Five Pillars
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                What We Will Explore
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-[#FAF9F6]
                      p-5
                      text-center
                    "
                  >
                    <div
                      className="
                        mx-auto
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D4AF37]/40
                        bg-white
                        text-[#D4AF37]
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Principles */}
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                  "
                >
                  <span className="text-xs font-bold tracking-[0.18em] text-[#D4AF37]">
                    {principle.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Assessment Info */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-5
                rounded-2xl
                border
                border-[#D4AF37]/25
                bg-[#FAF9F6]
                p-6
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-8
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B132B]
                    text-[#D4AF37]
                  "
                >
                  <Clock3 size={20} />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Approximately 7 Minutes
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    25 questions • Complete in one sitting
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0F7A5C]">
                  Personalized Insights
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Your answers shape your Freedom Score™
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={onContinue}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-[#0F7A5C]
                  px-8
                  py-4
                  text-base
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(15,122,92,.18)]
                  transition-all
                  duration-200
                  hover:bg-[#0B664C]
                  hover:shadow-[0_16px_35px_rgba(15,122,92,.25)]
                  sm:w-auto
                  sm:min-w-[280px]
                "
              >
                Begin My Freedom Assessment
                <ArrowRight size={19} />
              </button>

              <p className="mt-4 text-xs text-slate-400">
                Answer honestly. Think about where you are today.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}