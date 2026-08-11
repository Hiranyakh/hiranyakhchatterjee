"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FrameworkCTA() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            bg-[#0B132B]
            px-6
            py-14
            text-center
            shadow-[0_30px_80px_rgba(15,23,42,.20)]
            sm:px-12
            sm:py-20
          "
        >
          {/* Ambient Compass Glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[360px]
              w-[360px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#D4AF37]/10
              opacity-60
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#D4AF37]/5
              blur-3xl
            "
          />

          <div className="relative z-10">
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
              "
            >
              YOUR NEXT DECISION
            </span>

            <h2
              className="
                mx-auto
                mt-7
                max-w-3xl
                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Your Next Decision
              <br />
              <span className="text-[#D4AF37]">
                Starts Here.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-slate-300
                sm:text-lg
                sm:leading-8
              "
            >
              Understand where you stand. Identify what matters.
              Choose your next move and begin building with greater
              clarity, intention and purpose.
            </p>

            <div className="mt-9">
              <Button href="/freedom-score">
                Discover Your Freedom Score™
              </Button>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Free Assessment • Instant Insights • No Spam
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}