import Container from "@/components/ui/Container";
import FreedomCompass from "./FreedomCompass";
import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div
          className="
            grid
            min-h-[calc(100vh-88px)]
            grid-cols-1
            items-center
            gap-10
            py-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-4
            lg:py-16
          "
        >
          {/* ========================= */}
          {/* HERO CONTENT */}
          {/* ========================= */}

          <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
            <HeroBadge />

            <HeroHeading />

            <HeroDescription />

            <HeroActions />
          </div>

          {/* ========================= */}
          {/* FREEDOM COMPASS */}
          {/* ========================= */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[360px]
              items-center
              justify-center
              overflow-visible
              lg:min-h-[580px]
            "
          >
            {/* Desktop Compass */}
            <div className="hidden lg:flex items-center justify-center">
              <FreedomCompass />
            </div>

            {/* Mobile Compass */}
            <div
              className="
                flex
                h-[360px]
                w-[360px]
                items-center
                justify-center
                overflow-visible
                lg:hidden
              "
            >
              <div className="scale-[0.62]">
                <FreedomCompass />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}