import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const resources = [
  {
    type: "Framework",
    title: "The Hiranyakh Framework",
    description:
      "A practical system for thinking better, deciding better and building better.",
    href: "/framework",
    action: "Explore Framework",
  },
  {
    type: "Assessment",
    title: "Freedom Score™",
    description:
      "Understand where you currently stand across the dimensions that influence your freedom.",
    href: "/freedom-score",
    action: "Take the Assessment",
  },
  {
    type: "Session",
    title: "Discovery Session™",
    description:
      "A focused conversation to identify where you are, what is holding you back and what deserves attention next.",
    href: "/discovery",
    action: "Explore Session",
  },
];

export default function FeaturedResources() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Featured
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Begin with the
              <span className="block">core experiences.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600">
            These are the foundational resources for understanding the
            philosophy, frameworks and systems behind the work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-600">
                {resource.type}
              </p>

              <h3 className="mt-5 text-2xl font-black text-slate-950">
                {resource.title}
              </h3>

              <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                {resource.description}
              </p>

              <a
                href={resource.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-black text-slate-950"
              >
                {resource.action}
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}