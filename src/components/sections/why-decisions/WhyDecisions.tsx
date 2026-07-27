import Container from "@/components/ui/Container";
import SectionHeader from "./SectionHeader";
import PrincipleCard from "./PrincipleCard";

export default function WhyDecisions() {
  return (
    <section className="bg-white py-32">
      <Container>
        <SectionHeader />

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <PrincipleCard
            title="Think Better"
            description="Great decisions begin with clear thinking. Learn how to ask better questions and see opportunities more clearly."
          />

          <PrincipleCard
            title="Decide Better"
            description="Confidence comes from having a framework. Make choices based on purpose rather than pressure."
          />

          <PrincipleCard
            title="Build Better"
            description="Small intentional decisions compound into meaningful progress, creating lasting personal and professional growth."
          />
        </div>
      </Container>
    </section>
  );
}