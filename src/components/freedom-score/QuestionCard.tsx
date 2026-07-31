"use client";

import { useState } from "react";

import { Question } from "@/types/freedom";

import ProgressBar from "./ProgressBar";
import OptionCard from "./OptionCard";

interface Props {
  question: Question;
  current: number;
  total: number;
  onAnswer: (value: number) => void;
}

const options = [
  {
    label: "Never",
    value: 1,
  },
  {
    label: "Rarely",
    value: 2,
  },
  {
    label: "Sometimes",
    value: 3,
  },
  {
    label: "Often",
    value: 4,
  },
  {
    label: "Always",
    value: 5,
  },
];

export default function QuestionCard({
  question,
  current,
  total,
  onAnswer,
}: Props) {
  const [selected, setSelected] = useState<number | null>(
    null
  );

  function choose(value: number) {
    setSelected(value);

    setTimeout(() => {
      onAnswer(value);
      setSelected(null);
    }, 250);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <ProgressBar
        current={current}
        total={total}
      />

      <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-10">

        <div className="uppercase tracking-wider text-sm font-semibold text-amber-600">

          {question.pillar}

        </div>

        <h2 className="text-3xl font-bold mt-4 mb-10 leading-snug">

          {question.question}

        </h2>

        <div className="space-y-4">

          {options.map((option) => (
            <OptionCard
              key={option.value}
              {...option}
              selected={selected === option.value}
              onSelect={choose}
            />
          ))}

        </div>

      </div>

    </div>
  );
}