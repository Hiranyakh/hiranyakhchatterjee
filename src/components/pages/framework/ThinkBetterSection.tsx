"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import PrincipleCard from "./PrincipleCard";

const principles = [
  {
    number: "01",
    title: "Ask Better Questions",
    description:
      "The quality of your questions determines the quality of the possibilities you can see.",
  },
  {
    number: "02",
    title: "Learn Continuously",
    description:
      "Keep expanding your understanding, skills and perspective so you can continue to grow.",
  },
  {
    number: "03",
    title: "Challenge Assumptions",
    description:
      "Question what you believe, why you believe it, and whether it still serves you.",
  },
  {
    number: "04",
    title: "Build Mental Clarity",
    description:
      "Reduce noise, identify what matters, and create space for intentional thinking.",
  },
];

export default function ThinkBetterSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        {/* Section Introduction */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="
                inline-flex
                rounded-full
                bg-emerald-50
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0F7A5C]
                sm:text-sm
              "
            >
              01 — THINK BETTER
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-slate-900
                sm:text-5xl
              "
            >
              Clarity Begins
              <br />
              <span className="text-[#0F7A5C]">
                With Better Thinking.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-md
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              Develop clarity through awareness, learning and better
              questions. Before changing your life, learn to see it
              clearly.
            </p>

            {/* Decision Compass */}
            <div
              className="
                mt-8
                rounded-2xl
                border
                border-[#D4AF37]/30
                bg-[#FAF9F6]
                p-5
                sm:p-6
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                THE DECISION COMPASS™
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                A way to understand the forces influencing your decisions
                and find the direction that matters.
              </p>
            </div>
          </motion.div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {principles.map((principle) => (
              <PrincipleCard
                key={principle.number}
                number={principle.number}
                title={principle.title}
                description={principle.description}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}