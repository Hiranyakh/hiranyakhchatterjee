"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Testimonial } from "./TestimonialsData";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{ duration: 0.3 }}
      className="
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(15,23,42,.06)]
        transition-all
        duration-300
        hover:border-[#D4AF37]/40
        hover:shadow-[0_20px_45px_rgba(15,23,42,.10)]
        sm:p-8
      "
    >
      {/* Gold Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-full
          bg-gradient-to-r
          from-[#D4AF37]
          via-[#F6E6A7]
          to-transparent
        "
      />

      {/* Quote Mark */}
      <div
        className="
          text-5xl
          font-serif
          leading-none
          text-[#D4AF37]/70
        "
      >
        “
      </div>

      {/* Quote */}
      <p
        className="
          mt-3
          flex-1
          text-base
          italic
          leading-7
          text-slate-600
          sm:text-lg
          sm:leading-8
        "
      >
        {testimonial.quote}
      </p>

      {/* Profile */}
      <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-6">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={60}
          height={60}
          className="
            h-[60px]
            w-[60px]
            shrink-0
            rounded-full
            border-2
            border-[#D4AF37]
            object-cover
          "
        />

        <div className="min-w-0">
          <h4 className="truncate font-semibold text-slate-900">
            {testimonial.name}
          </h4>

          <p className="mt-0.5 text-sm text-slate-500">
            {testimonial.role}
          </p>

          <p
            className="
              mt-1
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#0F7A5C]
            "
          >
            {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}