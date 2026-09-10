import ResourcesPageHero from "@/components/pages/resources/ResourcesPageHero";
import ResourceCategories from "@/components/pages/resources/ResourceCategories";
import FeaturedResources from "@/components/pages/resources/FeaturedResources";
import ResourcesCTA from "@/components/pages/resources/ResourcesCTA";

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesPageHero />
      <ResourceCategories />
      <FeaturedResources />
      <ResourcesCTA />
    </main>
  );
}