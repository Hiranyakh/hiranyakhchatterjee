"use client";

import ProfileFrame from "./ProfileFrame";
import Section from "@/components/ui/Section";
import StoryCard from "./StoryCard";
import JourneyTimeline from "./JourneyTimeline";

export default function About() {
  return (
    <Section className="overflow-hidden">
      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-12
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-16
          xl:gap-24
        "
      >
        {/* ========================= */}
        {/* LEFT — STORY */}
        {/* ========================= */}

        <div className="min-w-0">
          {/* Section Label */}
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
            ABOUT
          </span>

          {/* Heading */}
          <h2
            className="
              mt-5
              max-w-3xl
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            My Journey Didn&apos;t Change My Career.
            <br />
            <span className="text-[#0F7A5C]">
              It Changed My Mission.
            </span>
          </h2>

          {/* Story */}
          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            I began my professional journey as an Electronics &amp;
            Telecommunication Engineer. Over time, personal experiences
            reshaped my perspective on health, purpose, and the impact of
            better decisions. That journey led me into clinical nutrition,
            AI, entrepreneurship, and ultimately to creating The HIRANYAKH
            Compass™—a framework designed to help people think better, decide
            better, and build better lives.
          </p>

          {/* Journey */}
          <div className="mt-9 sm:mt-12">
            <JourneyTimeline />
          </div>
        </div>

        {/* ========================= */}
        {/* RIGHT — PROFILE */}
        {/* ========================= */}

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-5
            lg:items-center
            lg:gap-4
          "
        >
          {/* Portrait */}
          <div className="w-full max-w-[380px]">
            <ProfileFrame
              src="/images/about-portrait.png"
              alt="Hiranyakh"
            />
          </div>

          {/* Purpose Card */}
          <div className="w-full max-w-[380px]">
            <StoryCard
              title="Purpose Beyond Profession"
              description="Today my mission is to help individuals create healthier lives, stronger careers, smarter businesses, and greater freedom by making better decisions every day."
            />
          </div>
        </div>
      </div>
    </Section>
  );
}