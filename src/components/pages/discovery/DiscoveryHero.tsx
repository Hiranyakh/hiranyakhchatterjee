import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function DiscoveryHero() {
  return (
    <Section className="relative overflow-hidden bg-[#F7F3EA] pt-32 lg:pt-40">
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#D4A84F]/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#1F4D3A]/10 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#A47A24]">
            Discovery Session™
          </p>

          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-[#10263F] sm:text-6xl lg:text-8xl">
            You don&apos;t need another
            <span className="block text-[#1F4D3A]">
              motivational speech.
            </span>
            You need clarity.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            A focused 30-minute one-to-one conversation designed to help you
            understand where you are, identify what is holding you back, and
            determine the next decision that can create meaningful movement.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-[#D4A84F] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#10263F] transition hover:-translate-y-0.5 hover:bg-[#C99B3F]"
            >
              Book Your Discovery Session™
            </Link>

            <Link
              href="#process"
              className="inline-flex items-center justify-center rounded-full border border-[#10263F]/15 px-8 py-4 text-sm font-semibold text-[#10263F] transition hover:border-[#10263F]/30 hover:bg-white"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              "30-Minute One-on-One Session",
              "Personalized Clarity Roadmap",
              "Actionable Next Steps",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#10263F]/10 bg-white/70 px-5 py-5 text-sm font-medium text-[#10263F] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}