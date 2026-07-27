import FreedomScore from "@/components/sections/freedom/FreedomScore";
import About from "@/components/sections/about/About";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import Framework from "@/components/sections/framework/Framework";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/layout/footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Framework />
        <FreedomScore />
        <About />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}