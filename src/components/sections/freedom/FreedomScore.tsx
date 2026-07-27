"use client";

import Section from "@/components/ui/Section";
import FreedomGauge from "./FreedomGauge";
import ScoreCard from "./ScoreCard";
import FreedomCTA from "./FreedomCTA";

export default function FreedomScore() {
  return (
    <Section>
      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <div>

          <span
            className="
              inline-flex
              rounded-full
              bg-emerald-50
              px-4
              py-2
              text-sm
              font-semibold
              text-[#0F7A5C]
            "
          >
            THE FREEDOM SCORE™
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Discover Where You Stand Today.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Every better future begins with knowing your current position.
            The Freedom Score™ evaluates the key areas that influence your
            ability to build a healthier, wealthier and more meaningful life.
          </p>

          <div className="mt-10 space-y-4">

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

          <div className="mt-10">
            <FreedomCTA />
          </div>

        </div>

        {/* RIGHT */}

        <FreedomGauge />

      </div>
    </Section>
  );
}