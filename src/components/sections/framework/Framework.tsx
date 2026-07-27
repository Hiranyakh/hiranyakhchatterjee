import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FrameworkHeader from "./FrameworkHeader";
import FrameworkTimeline from "./FrameworkTimeline";

export default function Framework() {
  return (
    <Section className="bg-white">
      <Container>
        <FrameworkHeader />
        <FrameworkTimeline />
      </Container>
    </Section>
  );
}