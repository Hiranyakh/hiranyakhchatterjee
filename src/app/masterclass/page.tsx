"use client";

import { FormEvent, useState } from "react";
import { eventConfig } from "@/lib/eventConfig";

export default function MasterclassPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");

  // -----------------------------------------
  // META COOKIE HELPER
  // -----------------------------------------

  function getMetaCookie(name: string) {
    if (typeof document === "undefined") {
      return null;
    }

    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`));

    return match
      ? decodeURIComponent(match.substring(name.length + 1))
      : null;
  }

  // -----------------------------------------
  // FORM SUBMISSION
  // -----------------------------------------

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // -----------------------------------------
      // META ATTRIBUTION
      // -----------------------------------------

      const fbp = getMetaCookie("_fbp");
      const fbc = getMetaCookie("_fbc");

      // -----------------------------------------
      // REGISTER MASTERCLASS LEAD
      // -----------------------------------------

      const response = await fetch("/api/masterclass/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,

          // Meta attribution
          fbp,
          fbc,

          // Page where registration happened
          eventSourceUrl: window.location.href,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data?.error || "Unable to complete registration."
        );
      }

      // -----------------------------------------
      // META LEAD EVENT
      // -----------------------------------------

      if (
        typeof window !== "undefined" &&
        typeof window.fbq === "function" &&
        data.metaEventId
      ) {
        window.fbq(
          "track",
          "Lead",
          {
            content_name: "AI Powered Side Hustle Masterclass",
          },
          {
            eventID: data.metaEventId,
          }
        );
      }

      setRegistered(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to complete registration."
      );
    } finally {
      setLoading(false);
    }
  }

  // -----------------------------------------
  // SUCCESS / BOOKING SCREEN
  // -----------------------------------------

  if (registered) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-10 text-white md:px-6">
        <section className="mx-auto flex min-h-[90vh] max-w-2xl items-center justify-center">
          <div className="w-full rounded-3xl bg-white p-7 text-center text-slate-900 shadow-2xl md:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
              ✓
            </div>

            <h1 className="mt-6 text-3xl font-black md:text-4xl">
              Registration Confirmed
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Your details have been successfully registered.
              Your next step is to choose a convenient time for
              your private 1-to-1 strategy session.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-left">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Your Next Step
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Choose Your Session Time
              </h2>

              <p className="mt-2 leading-7 text-slate-600">
                Select an available date and time that works for
                you. This is a private 1-to-1 session, not a group
                webinar.
              </p>
            </div>

            {eventConfig.calBookingUrl ? (
              <a
                href={eventConfig.calBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center rounded-xl bg-slate-950 px-6 py-4 text-base font-bold text-white transition hover:bg-slate-800"
              >
                Choose My Session Time
              </a>
            ) : (
              <p className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                Booking link has not been configured yet.
              </p>
            )}

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Your session is complimentary. Simply choose an
              available time on the scheduling page.
            </p>
          </div>
        </section>
      </main>
    );
  }

  // -----------------------------------------
  // MASTERCLASS LANDING PAGE
  // -----------------------------------------

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO + VIDEO */}

      <section className="px-4 pb-12 pt-6 md:px-6 md:pb-20 md:pt-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            {/* VIDEO */}

            <div>
              <div className="overflow-hidden rounded-3xl bg-black shadow-2xl">
                <video
                  src="/masterclass-video.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="block h-auto w-full"
                />
              </div>

              <p className="mt-3 text-center text-xs text-slate-400">
                Watch the short introduction before registering.
              </p>
            </div>

            {/* HERO COPY */}

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Free 1-to-1 Strategy Session
              </p>

              <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                AI-Powered
                <span className="block text-yellow-400">
                  Side Hustle Masterclass
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Explore practical ways to use AI to develop
                valuable skills, discover side-hustle
                opportunities, and build a practical path forward
                with personalized guidance.
              </p>

              <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4">
                <p className="font-bold text-yellow-300">
                  This is a personal 1-to-1 session — not a group
                  webinar.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <span className="mt-1 text-yellow-400">✓</span>
                  <p className="text-slate-300">
                    Practical AI opportunities
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="mt-1 text-yellow-400">✓</span>
                  <p className="text-slate-300">
                    Side-hustle models and ideas
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="mt-1 text-yellow-400">✓</span>
                  <p className="text-slate-300">
                    Personalized practical next steps
                  </p>
                </div>
              </div>

              <div className="mt-8 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
                Limited 1-to-1 slots available this week
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}

      <section className="bg-white px-4 py-14 text-slate-900 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Registration
            </p>

            <div className="mt-4 inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-800">
              Limited 1-to-1 slots available this week
            </div>

            <h2 className="mt-5 text-3xl font-black md:text-4xl">
              Book Your Free 1-to-1 Strategy Session
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Enter your details below to reserve your free
              1-to-1 strategy session. After you register,
              you&apos;ll pick a time that works for you.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-9">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* FULL NAME */}

              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-bold"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      fullName: e.target.value,
                    })
                  }
                  placeholder="Enter full name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter email address"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              {/* PHONE */}

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              {/* ERROR */}

              {error && (
                <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-slate-950 px-6 py-4 text-base font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Securing Your Session..."
                  : "Continue to Choose Your Time"}
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                After registration, you&apos;ll choose an available
                time for your private 1-to-1 session.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SESSION DETAILS */}

      <section className="bg-slate-100 px-4 py-14 text-slate-900 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              What We&apos;ll Explore
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Practical AI &amp; Side-Hustle Direction
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Use the session to explore where AI may fit into
              your skills, interests, and goals — and identify
              practical next steps.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Explore
              </p>

              <h3 className="mt-2 text-xl font-black">
                AI Opportunities
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Understand practical areas where AI can support
                skills, services, and digital work.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Discover
              </p>

              <h3 className="mt-2 text-xl font-black">
                Side-Hustle Models
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Explore different approaches for developing an
                additional income stream around your capabilities.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Plan
              </p>

              <h3 className="mt-2 text-xl font-black">
                Practical Direction
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Identify practical next steps for turning an idea
                into action.
              </p>
            </div>
          </div>

          
        </div>
      </section>
    </main>
  );
}