import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const problems = [
  {
    number: "01",
    title: "Too many options",
    description:
      "You can see multiple paths forward, but choosing the right one feels harder than it should.",
  },
  {
    number: "02",
    title: "Unclear priorities",
    description:
      "Everything feels important, which makes it difficult to determine what deserves your attention first.",
  },
  {
    number: "03",
    title: "Stuck between knowing and doing",
    description:
      "You already know many things you could do. The real challenge is deciding what to do next.",
  },
];

export default function DiscoveryProblem() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A47A24]">
              The real problem
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#10263F] sm:text-5xl">
              Sometimes the next step isn&apos;t more information.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              It is seeing your situation clearly enough to make a better
              decision.
            </p>
          </div>

          <div className="grid gap-5">
            {problems.map((problem) => (
              <div
                key={problem.number}
                className="group rounded-3xl border border-slate-200 bg-[#F7F3EA]/50 p-7 transition hover:-translate-y-1 hover:border-[#D4A84F]/50"
              >
                <div className="flex gap-6">
                  <span className="font-serif text-2xl text-[#D4A84F]">
                    {problem.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#10263F]">
                      {problem.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}