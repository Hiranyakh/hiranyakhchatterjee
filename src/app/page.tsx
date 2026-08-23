import FreedomScore from "@/components/sections/freedom/FreedomScore";
import About from "@/components/sections/about/About";
import Hero from "@/components/sections/hero/Hero";
import Framework from "@/components/sections/framework/Framework";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import CTA from "@/components/sections/cta/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Framework />
      <FreedomScore />
      <About />
      <Testimonials />
      <CTA />
    </main>
  );
}