import Container from "@/components/ui/Container";

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";
import HeroPortrait from "./HeroPortrait";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-background py-40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[44%_56%]">
          <div>
            <HeroBadge />

            <HeroHeading />

            <HeroDescription />

            <HeroActions />
          </div>

          <HeroPortrait />
        </div>
      </Container>
    </section>
  );
}
<div className="absolute bottom-0 left-0 w-full overflow-hidden">
  <svg
    viewBox="0 0 1440 120"
    className="w-full text-white"
    preserveAspectRatio="none"
  >
    <path
      fill="currentColor"
      d="M0,32L120,48C240,64,480,96,720,96C960,96,1200,64,1320,48L1440,32V120H0Z"
    />
  </svg>
</div>