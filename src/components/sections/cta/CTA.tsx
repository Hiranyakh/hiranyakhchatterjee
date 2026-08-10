"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-[#0B132B]
          px-6
          py-14
          text-center
          shadow-[0_30px_80px_rgba(15,23,42,0.25)]
          sm:rounded-[40px]
          sm:px-10
          sm:py-20
        "
      >
        {/* Compass Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
            opacity-[0.045]
          "
        >
          <div
            className="
              text-[260px]
              leading-none
              text-[#D4AF37]
              sm:text-[420px]
            "
          >
            ◎
          </div>
        </div>

        {/* CTA Content */}
        <div className="relative z-10">
          {/* Label */}
          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#D4AF37]/40
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#D4AF37]
              sm:text-sm
            "
          >
            YOUR NEXT STEP
          </span>

          {/* Heading */}
          <h2
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-white
              sm:mt-8
              sm:text-5xl
              lg:text-6xl
            "
          >
            Ready to Discover
            <br />
            <span className="text-[#D4AF37]">
              What&apos;s Possible?
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-300
              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            Start by understanding where you stand today. Discover your
            Freedom Score, identify your biggest opportunities, and take
            your next better step toward greater health, wealth, growth
            and freedom.
          </p>

          {/* CTA */}
          <div className="mt-9 sm:mt-12">
            <Button href="/freedom-score">
              Discover Your Freedom Score™
            </Button>
          </div>

          {/* Trust Line */}
          <p
            className="
              mt-5
              text-xs
              text-slate-400
              sm:mt-6
              sm:text-sm
            "
          >
            Free Assessment • Instant Insights • No Spam
          </p>
        </div>
      </motion.div>
    </Section>
  );
}