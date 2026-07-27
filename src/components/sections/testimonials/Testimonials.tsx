"use client";

import Section from "@/components/ui/Section";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./TestimonialsData";

export default function Testimonials() {
  return (
    <Section>

      <div className="text-center">

        <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-[#0F7A5C]">
          SUCCESS STORIES
        </span>

        <h2 className="mt-6 text-5xl font-bold text-slate-900">
          Real People.
          <br />
          Real Transformations.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Every transformation begins with one better decision.
          Here are a few stories from people whose journeys have been
          shaped by applying practical frameworks, consistent action,
          and purposeful growth.
        </p>

      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">

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