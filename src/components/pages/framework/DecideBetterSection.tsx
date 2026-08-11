"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import DecisionStep from "./DecisionStep";

const decisionSteps = [
  {
    number: "01",
    title: "Know Your Position",
    description:
      "Understand where you are before deciding where you want to go.",
  },
  {
    number: "02",
    title: "Define What Matters",
    description:
      "Identify the priorities, values and outcomes that should guide your decision.",
  },
  {
    number: "03",
    title: "Evaluate Your Options",
    description:
      "Look at opportunities through evidence, consequences, trade-offs and long-term impact.",
  },
  {
    number: "04",
    title: "Commit to the Next Move",
    description:
      "A decision becomes meaningful when it turns into intentional action.",
  },
];

export default function DecideBetterSection() {
  return (
    <section className="bg-[#FAF9F6] py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* LEFT — Decision Pathway */}
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
                bg-white
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0F7A5C]
                shadow-sm
                sm:text-sm
              "
            >
              02 — DECIDE BETTER
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
              Better Decisions
              <br />
              <span className="text-[#0F7A5C]">
                Create Better Direction.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              Better thinking creates clarity. Better decisions turn that
              clarity into direction. This stage helps you understand your
              position, evaluate your choices and commit to the next move.
            </p>

            {/* Decision Pathway */}
            <div className="relative mt-10 space-y-8">
              <div
                className="
                  absolute
                  left-[23px]
                  top-6
                  bottom-6
                  w-px
                  bg-[#D4AF37]/35
                "
              />

              {decisionSteps.map((step) => (
                <DecisionStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Freedom Score */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#D4AF37]/30
              bg-white
              p-7
              shadow-[0_20px_60px_rgba(15,23,42,.08)]
              sm:p-10
            "
          >
            {/* Ambient Glow */}
            <div
              className="
                pointer-events-none
                absolute
                right-[-100px]
                top-[-100px]
                h-[260px]
                w-[260px]
                rounded-full
                bg-[#D4AF37]/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                THE FREEDOM SCORE™
              </span>

              <h3 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Know Where
                <br />
                <span className="text-[#0F7A5C]">You Stand.</span>
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Before making a major decision, understand your current
                position. The Freedom Score™ helps identify the areas that
                influence your ability to create greater health, wealth,
                growth and freedom.
              </p>

              {/* Score Visualization */}
              <div className="my-9 flex justify-center">
                <div
                  className="
                    flex
                    h-40
                    w-40
                    items-center
                    justify-center
                    rounded-full
                    border-[10px]
                    border-[#D4AF37]/20
                    bg-[#FAF9F6]
                    shadow-inner
                  "
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900">
                      ?
                    </div>

                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0F7A5C]">
                      Your Score
                    </div>
                  </div>
                </div>
              </div>

              <Button href="/freedom-score">
                Discover Your Freedom Score™
              </Button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Free Assessment • Instant Insights
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}