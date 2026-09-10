import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const categories = [
  {
    number: "01",
    title: "Frameworks",
    description:
      "Mental models and structured frameworks for thinking more clearly and making better decisions.",
  },
  {
    number: "02",
    title: "Guides & Playbooks",
    description:
      "Practical resources that turn ideas into actions you can apply in your work and life.",
  },
  {
    number: "03",
    title: "AI & Technology",
    description:
      "Practical insights into using AI and emerging technology to create leverage.",
  },
  {
    number: "04",
    title: "Tools & Templates",
    description:
      "Useful tools, worksheets and templates designed to reduce friction and accelerate execution.",
  },
];

export default function ResourceCategories() {
  return (
    <Section id="resources" className="bg-white">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Explore
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Start with what
            <span className="block">you need right now.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.number}
              className="group bg-white p-8 transition hover:bg-slate-950 hover:text-white md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-black tracking-widest text-slate-400 transition group-hover:text-amber-400">
                  {category.number}
                </span>

                <span className="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-black">
                {category.title}
              </h3>

              <p className="mt-4 max-w-md text-base leading-7 text-slate-600 transition group-hover:text-slate-300">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}