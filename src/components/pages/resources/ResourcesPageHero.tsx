import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function ResourcesPageHero() {
  return (
    <Section className="bg-slate-950 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
            Resources
          </p>

          <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Ideas that help you
            <span className="block text-amber-400">
              think, decide &amp; build better.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Practical frameworks, insights, tools and resources designed
            to help you create greater clarity, better decisions and
            meaningful progress.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#resources"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
            >
              Explore Resources
            </a>

            <a
              href="/discovery"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Discovery Session
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}