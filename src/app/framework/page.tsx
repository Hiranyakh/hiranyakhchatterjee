import FrameworkPageHero from "@/components/pages/framework/FrameworkPageHero";
import ThinkBetterSection from "@/components/pages/framework/ThinkBetterSection";
import DecideBetterSection from "@/components/pages/framework/DecideBetterSection";
import BuildBetterSection from "@/components/pages/framework/BuildBetterSection";
import PurposeSection from "@/components/pages/framework/PurposeSection";
import FrameworkCTA from "@/components/pages/framework/FrameworkCTA";

export default function FrameworkPage() {
  return (
    <main>
      <FrameworkPageHero />

      <ThinkBetterSection />

      <DecideBetterSection />

      <BuildBetterSection />

      <PurposeSection />

      <FrameworkCTA />
    </main>
  );
}