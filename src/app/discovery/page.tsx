import DiscoveryHero from "@/components/pages/discovery/DiscoveryHero";
import DiscoveryProblem from "@/components/pages/discovery/DiscoveryProblem";
import DiscoveryProcess from "@/components/pages/discovery/DiscoveryProcess";
import DiscoveryOutcomes from "@/components/pages/discovery/DiscoveryOutcomes";
import DiscoveryFit from "@/components/pages/discovery/DiscoveryFit";
import DiscoveryBooking from "@/components/pages/discovery/DiscoveryBooking";
import DiscoveryCTA from "@/components/pages/discovery/DiscoveryCTA";

export default function DiscoveryPage() {
  return (
    <main className="overflow-hidden">
      <DiscoveryHero />
      <DiscoveryProblem />
      <DiscoveryProcess />
      <DiscoveryOutcomes />
      <DiscoveryFit />
      <DiscoveryBooking />
      <DiscoveryCTA />
    </main>
  );
}