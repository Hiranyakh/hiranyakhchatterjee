"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BuildAreaCard from "./BuildAreaCard";

const buildAreas = [
  {
    number: "01",
    title: "Build Your Health",
    description:
      "Create the physical and mental foundation required to perform, contribute and live well.",
  },
  {
    number: "02",
    title: "Build Your Wealth",
    description:
      "Develop the skills, income, assets and financial thinking that create greater independence.",
  },
  {
    number: "03",
    title: "Build Your Growth",
    description:
      "Continuously develop yourself, your capabilities and the opportunities available to you.",
  },
  {
    number: "04",
    title: "Build Your Freedom",
    description:
      "Design systems and choices that give you greater control over your time, energy and future.",
  },
];

export default function BuildBetterSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
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
            03 — BUILD BETTER
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
            Turn Better Decisions
            <br />
            <span className="text-[#0F7A5C]">
              Into Better Results.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            Turn intentional decisions into better health, wealth, growth
            and freedom. Building better means converting clarity and
            commitment into meaningful progress.
          </p>
        </motion.div>

        {/* Four Build Areas */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {buildAreas.map((area) => (
            <BuildAreaCard
              key={area.number}
              number={area.number}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>

        {/* Freedom Blueprint */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[32px]
            border
            border-[#D4AF37]/30
            bg-[#0B132B]
            px-6
            py-10
            sm:px-10
            sm:py-12
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              right-[-80px]
              top-[-100px]
              h-[260px]
              w-[260px]
              rounded-full
              bg-[#D4AF37]/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#D4AF37]
                "
              >
                THE FREEDOM BLUEPRINT™
              </span>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-4xl
                "
              >
                Turn Direction
                <br />
                Into a Designed Life.
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-slate-300
                  sm:text-base
                "
              >
                A practical roadmap for converting better decisions into
                measurable progress and a more intentional life.
              </p>
            </div>

            <div className="shrink-0">
              <Button href="/freedom-score">
                Start Building Better
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}