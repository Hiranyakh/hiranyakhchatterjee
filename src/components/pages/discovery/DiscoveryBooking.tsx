"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function DiscoveryBooking() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="book" className="bg-[#10263F]">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.18)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#1F4D3A] p-8 text-white sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4A84F]">
                Book your session
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Let&apos;s find the decision that matters.
              </h2>

              <p className="mt-6 leading-8 text-white/70">
                Choose a convenient time and tell me a little about what you
                are currently trying to solve.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "30-minute one-to-one conversation",
                  "Focused on your current situation",
                  "Clear next steps before you leave",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4A84F]" />
                    <span className="text-sm leading-6 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F4D3A] text-xl text-white">
                    ✓
                  </div>

                  <h3 className="mt-6 font-serif text-3xl text-[#10263F]">
                    Request received.
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-slate-600">
                    Thank you. Your Discovery Session™ request has been
                    recorded. We&apos;ll follow up with the next step.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#10263F]"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-[#10263F] outline-none transition placeholder:text-slate-400 focus:border-[#D4A84F] focus:ring-2 focus:ring-[#D4A84F]/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#10263F]"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-[#10263F] outline-none transition placeholder:text-slate-400 focus:border-[#D4A84F] focus:ring-2 focus:ring-[#D4A84F]/20"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="focus"
                      className="mb-2 block text-sm font-semibold text-[#10263F]"
                    >
                      What would you like clarity on?
                    </label>

                    <textarea
                      id="focus"
                      name="focus"
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-[#10263F] outline-none transition placeholder:text-slate-400 focus:border-[#D4A84F] focus:ring-2 focus:ring-[#D4A84F]/20"
                      placeholder="Briefly describe the decision, challenge, or opportunity you are thinking about."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#D4A84F] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#10263F] transition hover:-translate-y-0.5 hover:bg-[#C99B3F]"
                  >
                    Request Discovery Session™
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    No obligation. Your information is used only to respond to
                    your Discovery Session™ request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}