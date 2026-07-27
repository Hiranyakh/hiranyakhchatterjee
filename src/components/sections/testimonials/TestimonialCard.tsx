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
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        hover:border-[#D4AF37]/40
        hover:shadow-xl
      "
    >
      <div className="text-5xl text-[#D4AF37] leading-none">
        “
      </div>

      <p className="mt-4 leading-8 text-slate-600 italic">
        {testimonial.quote}
      </p>

      <div className="mt-8 flex items-center gap-4">

        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full border-2 border-[#D4AF37] object-cover"
        />

        <div>

          <h4 className="font-semibold text-slate-900">
            {testimonial.name}
          </h4>

          <p className="text-sm text-slate-500">
            {testimonial.role}
          </p>

          <p className="text-xs uppercase tracking-widest text-[#0F7A5C]">
            {testimonial.location}
          </p>

        </div>

      </div>
    </motion.div>
  );
}