"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

import { Question } from "@/types/freedom";
import ProgressBar from "./ProgressBar";
import OptionCard from "./OptionCard";

interface Props {
  question: Question;
  current: number;
  total: number;
  onAnswer: (value: number) => void;
}

export default function QuestionCard({
  question,
  current,
  total,
  onAnswer,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  function choose(value: number) {
    setSelected(value);

    setTimeout(() => {
      onAnswer(value);
      setSelected(null);
    }, 250);
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-4xl">
        {/* Brand */}
        <div className="mb-7 text-center">
          <p className="text-sm font-bold tracking-[0.18em] text-[#0B132B]">
            HIRANYAKH
          </p>

          <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0F7A5C]">
            Freedom Score™
          </p>
        </div>

        {/* Progress */}
        <div className="mb-7">
          <ProgressBar
            current={current}
            total={total}
          />
        </div>

        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white
            shadow-[0_20px_60px_rgba(15,23,42,.08)]
          "
        >
          {/* Question Header */}
          <div className="border-b border-slate-100 px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/40
                    bg-[#FAF9F6]
                    text-[#D4AF37]
                  "
                >
                  <Compass size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F7A5C]">
                    Pillar
                  </p>

                  <p className="mt-1 text-sm font-bold capitalize text-slate-900">
                    {question.pillar}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Question
                </p>

                <p className="mt-1 text-sm font-bold text-slate-700">
                  {String(current).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </p>
              </div>
            </div>

            <h1
              className="
                mt-8
                max-w-3xl
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                text-slate-900
                sm:text-3xl
                lg:text-4xl
              "
            >
              {question.question}
            </h1>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Choose the response that best reflects your current reality.
            </p>
          </div>

          {/* Options */}
          <div className="px-6 py-7 sm:px-10 sm:py-9">
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <OptionCard
                  key={`${question.id}-${option.value}`}
                  {...option}
                  index={index}
                  selected={selected === option.value}
                  onSelect={choose}
                />
              ))}
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ArrowRight size={13} />
              Selecting an answer automatically continues
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}