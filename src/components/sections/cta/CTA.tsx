"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-[#0B132B]
          px-10
          py-20
          text-center
          shadow-[0_30px_80px_rgba(15,23,42,0.25)]
        "
      >
        {/* Compass Glow */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            opacity-5
          "
        >
          <div className="text-[420px] text-[#D4AF37]">
            ◎
          </div>
        </div>

        <div className="relative z-10">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#D4AF37]/40
              px-4
              py-2
              text-sm
              font-semibold
              tracking-widest
              text-[#D4AF37]
            "
          >
            YOUR NEXT STEP
          </span>

          <h2
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-5xl
              font-bold
              leading-tight
              text-white
            "
          >
            Build A Better Future.
            <br />
            One Better Decision At A Time.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            Discover your current position, identify your biggest
            opportunities, and start building a healthier,
            wealthier and more meaningful future.
          </p>

          <div className="mt-12">

            <Button href="/freedom-score">
              Take Your Freedom Score™
            </Button>

          </div>

          <p className="mt-6 text-sm text-slate-400">
            Free Assessment • Instant Insights • No Spam
          </p>

        </div>

      </motion.div>

    </Section>
  );
}