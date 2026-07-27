"use client";

import Image from "next/image";
import ProfileFrame from "./ProfileFrame";
import Section from "@/components/ui/Section";

import StoryCard from "./StoryCard";
import JourneyTimeline from "./JourneyTimeline";

export default function About() {
  return (
    <Section >

      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-[#0F7A5C]">
            ABOUT
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            My Journey Didn't Change My Career.
            <br />
            It Changed My Mission.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I began my professional journey as an Electronics & Telecommunication Engineer.
            Over time, personal experiences reshaped my perspective on health, purpose,
            and the impact of better decisions. That journey led me into clinical nutrition,
            AI, entrepreneurship, and ultimately to creating The HIRANYAKH Compass™—
            a framework designed to help people think better, decide better, and build better lives.
          </p>

          <div className="mt-12">
            <JourneyTimeline />
          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

            <ProfileFrame
  src="/images/about-portrait.png"
  alt="Hiranyakh"
/>

          </div>

          <StoryCard
            title="Purpose Beyond Profession"
            description="Today my mission is to help individuals create healthier lives, stronger careers, smarter businesses, and greater freedom by making better decisions every day."
          />

        </div>

      </div>

    </Section>
  );
}