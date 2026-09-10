import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function ResourcesCTA() {
  return (
    <Section className="bg-slate-950 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            Go deeper
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Information is useful.
            <span className="block text-amber-400">
              Transformation requires action.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            If you already know you need greater clarity around your
            direction, decisions or next move, start with a Discovery
            Session.
          </p>

          <div className="mt-9">
            <a
              href="/discovery"
              className="inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-200"
            >
              Explore Discovery Session →
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}