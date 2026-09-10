import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const CAL_BOOKING_URL =
  "https://cal.com/hiranyak-chatterjee-iajpeu/1-1-free-30-mins-discovery-session";

export default function DiscoveryCTA() {
  return (
    <Section
      id="book"
      className="relative overflow-hidden bg-[#10263F] text-white"
    >
      {/* Decorative geometry */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#D4A84F]/20" />
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#D4A84F]/10" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#1F4D3A]/30 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A84F]">
            Discovery Session™
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Come with a question.
            <span className="block text-[#D4A84F]">
              Leave with a direction.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Take 30 minutes to step back, gain clarity, identify what matters
            most, and determine the next move that can create meaningful
            progress.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#D4A84F] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#10263F] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#C99B3F] sm:w-auto"
            >
              Book Your Free Discovery Session™
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/50">
            <span>30 Minutes</span>
            <span className="hidden sm:inline">•</span>
            <span>One-to-One</span>
            <span className="hidden sm:inline">•</span>
            <span>Complimentary</span>
          </div>

          <p className="mt-8 text-sm italic text-white/40">
            No pressure. No obligation. Just a focused conversation about
            what comes next.
          </p>
        </div>
      </Container>
    </Section>
  );
}