import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import OfferingsGrid from "@/components/OfferingsGrid";
import ToggleSection from "@/components/ToggleSection";
import SocialsFooter from "@/components/SocialsFooter";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ManifestoSection />
      <OfferingsGrid />
      <ToggleSection />
      <SocialsFooter />
    </main>
  );
}

