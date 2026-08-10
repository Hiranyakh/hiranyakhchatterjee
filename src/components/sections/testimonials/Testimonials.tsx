"use client";

import Section from "@/components/ui/Section";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./TestimonialsData";

export default function Testimonials() {
  return (
    <Section className="overflow-hidden">
      {/* ========================= */}
      {/* SECTION HEADER */}
      {/* ========================= */}

      <div className="text-center">
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
            tracking-[0.18em]
            text-[#0F7A5C]
            sm:text-sm
          "
        >
          SUCCESS STORIES
        </span>

        <h2
          className="
            mt-5
            text-4xl
            font-bold
            leading-[1.08]
            tracking-tight
            text-slate-900
            sm:text-5xl
          "
        >
          Real People.
          <br />
          <span className="text-[#0F7A5C]">
            Real Transformations.
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-7
            text-slate-600
            sm:mt-6
            sm:text-lg
            sm:leading-8
          "
        >
          Every transformation begins with one better decision. Here are a
          few stories from people whose journeys have been shaped by applying
          practical frameworks, consistent action, and purposeful growth.
        </p>
      </div>

      {/* ========================= */}
      {/* TESTIMONIAL GRID */}
      {/* ========================= */}

      <div
        className="
          mt-12
          grid
          grid-cols-1
          gap-6
          sm:mt-16
          sm:gap-8
          lg:grid-cols-3
        "
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </div>
    </Section>
  );
}