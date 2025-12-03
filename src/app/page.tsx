import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import OfferingsHorizontal from "@/components/OfferingsHorizontal";
import ToggleSection from "@/components/ToggleSection";
import SocialsFooter from "@/components/SocialsFooter";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ManifestoSection />
      <OfferingsHorizontal />
      <ToggleSection />
      <SocialsFooter />
    </main>
  );
}

