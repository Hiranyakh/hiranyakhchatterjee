"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FrameworkPageHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6]">
      {/* Ambient Gold Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-3xl
        "
      />

      <Container>
        <div className="relative z-10 flex min-h-[620px] flex-col items-center justify-center py-24 text-center sm:py-28 lg:min-h-[700px]">
          
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              rounded-full
              border
              border-[#D4AF37]/40
              bg-white/70
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#0F7A5C]
              sm:text-sm
            "
          >
            THE HIRANYAKH FRAMEWORK™
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="
              mt-7
              max-w-5xl
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-7xl
          "
          >
            Think Better.
            <br />
            <span className="text-[#0F7A5C]">
              Decide Better.
            </span>
            <br />
            Build Better.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            A practical framework for making better decisions,
            creating meaningful progress, and building a life with
            greater health, wealth, growth, freedom and purpose.
          </motion.p>

          {/* Stage Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              sm:gap-5
            "
          >
            <span className="text-[#D4AF37]">
              Think
            </span>

            <span className="text-slate-300">→</span>

            <span className="text-[#0F7A5C]">
              Decide
            </span>

            <span className="text-slate-300">→</span>

            <span className="text-[#D4AF37]">
              Build
            </span>

            <span className="text-slate-300">→</span>

            <span className="text-[#0F7A5C]">
              Purpose
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-10"
          >
            <Button href="/freedom-score">
              Discover Your Freedom Score™
            </Button>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}