import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We look at where you are today, what you are trying to achieve, and what has been getting in the way.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "We separate the symptoms from the actual bottleneck so you can focus on the decision that matters.",
  },
  {
    number: "03",
    title: "Clarify",
    description:
      "We bring structure to the options in front of you and identify the direction that best fits your situation.",
  },
  {
    number: "04",
    title: "Move",
    description:
      "You leave with practical next steps instead of another list of things you should probably do.",
  },
];

export default function DiscoveryProcess() {
  return (
    <Section id="process" className="bg-[#10263F] text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4A84F]">
            The session
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Clarity is a process.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/65">
            The Discovery Session™ is designed to move from confusion to
            clarity, and from clarity to a decision you can actually act on.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#10263F] p-7 lg:p-8"
            >
              <span className="font-serif text-3xl text-[#D4A84F]">
                {step.number}
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}