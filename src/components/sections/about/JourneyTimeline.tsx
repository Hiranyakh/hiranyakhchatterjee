"use client";

import { motion } from "framer-motion";

const journey = [
  "Engineer",
  "Father",
  "Clinical Nutritionist",
  "AI Entrepreneur",
  "Creator of The HIRANYAKH Compass™",
];

export default function JourneyTimeline() {
  return (
    <div className="relative pl-10 sm:pl-12">
      {/* Timeline Line */}
      <div
        className="
          absolute
          left-[7px]
          top-2
          bottom-2
          w-[2px]
          bg-gradient-to-b
          from-[#D4AF37]
          via-[#D4AF37]/50
          to-transparent
        "
      />

      <div className="space-y-7 sm:space-y-8">
        {journey.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="relative flex min-h-8 items-center"
          >
            {/* Timeline Marker */}
            <div
              className="
                absolute
                -left-10
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                border-2
                border-[#D4AF37]
                bg-white
                shadow-[0_0_12px_rgba(212,175,55,.25)]
                sm:-left-12
              "
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            </div>

            {/* Journey Label */}
            <h4
              className="
                text-base
                font-medium
                tracking-tight
                text-slate-800
                sm:text-lg
              "
            >
              {item}
            </h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
}