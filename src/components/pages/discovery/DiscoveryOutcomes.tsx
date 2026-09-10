import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const outcomes = [
  "A clearer understanding of your current situation",
  "Identification of the decision or bottleneck that matters most",
  "A practical direction aligned with your priorities",
  "Specific next steps you can begin implementing",
];

export default function DiscoveryOutcomes() {
  return (
    <Section className="bg-[#F7F3EA]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A47A24]">
              What you walk away with
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#10263F] sm:text-5xl">
              Less noise.
              <span className="block text-[#1F4D3A]">
                More direction.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              The objective is not to give you more things to think about.
              It is to help you think about the right things.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(16,38,63,0.08)] sm:p-10">
            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className="flex items-start gap-5 border-b border-slate-100 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1F4D3A] text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="pt-1 text-base leading-7 text-[#10263F]">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}