"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const purposeAreas = [
  {
    title: "Health",
    description: "Have the energy and capability to live the life you value.",
  },
  {
    title: "Wealth",
    description: "Create greater financial capability, independence and choice.",
  },
  {
    title: "Growth",
    description: "Keep becoming more capable, aware and intentional.",
  },
  {
    title: "Freedom",
    description: "Create greater control over your time, decisions and direction.",
  },
];

export default function PurposeSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-24 sm:py-32">
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-3xl
        "
      />

      <Container>
        <div className="relative z-10">
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
                border
                border-[#D4AF37]/40
                bg-white/80
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#0F7A5C]
                sm:text-sm
              "
            >
              04 — PURPOSE
            </span>

            <h2
              className="
                mt-7
                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-slate-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              Build a Life
              <br />
              <span className="text-[#0F7A5C]">
                That Means Something.
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
              Every better decision ultimately leads you toward a life of
              purpose. Purpose gives direction to what you build and meaning
              to why you build it.
            </p>
          </motion.div>

          {/* Central Purpose Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              mx-auto
              mt-14
              max-w-4xl
              rounded-[36px]
              border
              border-[#D4AF37]/30
              bg-white
              px-6
              py-10
              text-center
              shadow-[0_20px_70px_rgba(15,23,42,.08)]
              sm:px-12
              sm:py-14
            "
          >
            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#D4AF37]
                text-2xl
                text-white
                shadow-[0_10px_30px_rgba(212,175,55,.25)]
              "
            >
              ★
            </div>

            <p
              className="
                mt-7
                text-2xl
                font-semibold
                leading-relaxed
                text-slate-900
                sm:text-3xl
              "
            >
              Better thinking creates clarity.
              <br />
              Better decisions create direction.
              <br />
              Better building creates progress.
              <br />
              <span className="text-[#0F7A5C]">
                Purpose gives it meaning.
              </span>
            </p>
          </motion.div>

          {/* Purpose Dimensions */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {purposeAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/80
                  p-6
                  text-center
                "
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Compass Connection */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              mx-auto
              mt-12
              max-w-3xl
              text-center
            "
          >
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#D4AF37]
              "
            >
              THE HIRANYAKH COMPASS™
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The Compass brings the framework together — helping you
              understand where you are, decide where you want to go, and
              build toward a life that aligns with what matters most.
            </p>

            <div className="mt-8">
              <Button href="/freedom-score">
                Discover Your Freedom Score™
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}