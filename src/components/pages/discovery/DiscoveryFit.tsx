import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const audiences = [
  "You are at a professional or personal crossroads.",
  "You want to build an additional income stream or explore a new opportunity.",
  "You have ideas but need help prioritizing them.",
  "You want to use AI and technology more strategically.",
  "You are ready to make a meaningful change but want a clearer starting point.",
];

export default function DiscoveryFit() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A47A24]">
              Is this for you?
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#10263F] sm:text-5xl">
              Come with a question.
              <span className="block text-[#1F4D3A]">
                Leave with a direction.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4">
            {audiences.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 px-6 py-5"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4A84F]" />

                <p className="text-base leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}