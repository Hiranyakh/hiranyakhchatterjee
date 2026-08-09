"use client";

import Section from "@/components/ui/Section";
import FreedomGauge from "./FreedomGauge";
import ScoreCard from "./ScoreCard";
import FreedomCTA from "./FreedomCTA";

export default function FreedomScore() {
  return (
    <Section className="overflow-hidden">
      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-14
          py-6
          lg:grid-cols-[1fr_0.9fr]
          lg:gap-20
          lg:py-10
        "
      >
        {/* ========================= */}
        {/* LEFT CONTENT */}
        {/* ========================= */}

        <div className="min-w-0">
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
              tracking-[0.16em]
              text-[#0F7A5C]
              sm:text-sm
            "
          >
            THE FREEDOM SCORE™
          </span>

          <h2
            className="
              mt-5
              max-w-2xl
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
          "
          >
            Discover Where You Stand Today.
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-slate-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Every better future begins with knowing your current position.
            The Freedom Score™ evaluates the key areas that influence your
            ability to build a healthier, wealthier and more meaningful life.
          </p>

          {/* Score Cards */}
          <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            <ScoreCard
              title="Health"
              score={81}
            />

            <ScoreCard
              title="Wealth"
              score={63}
            />

            <ScoreCard
              title="AI Skills"
              score={76}
            />

            <ScoreCard
              title="Purpose"
              score={84}
            />
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10">
            <FreedomCTA />
          </div>
        </div>

        {/* ========================= */}
        {/* FREEDOM GAUGE */}
        {/* ========================= */}

        <div
          className="
            relative
            flex
            min-h-[360px]
            w-full
            items-center
            justify-center
            overflow-visible
            sm:min-h-[440px]
            lg:min-h-[560px]
          "
        >
          <FreedomGauge />
        </div>
      </div>
    </Section>
  );
}