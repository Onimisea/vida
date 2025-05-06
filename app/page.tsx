import { MainNav } from "@/components/main-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { HomesPreviewSection } from "@/components/sections/homes-preview-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ConstructionProgress } from "@/components/sections/construction-progress";
import { PartnerLogos } from "@/components/sections/partner-logos";
import { WhyInvestSection } from "@/components/sections/why-invest-section";
import { LeadCaptureForm } from "@/components/sections/lead-capture-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <MainNav />
      <HeroSection />
      <AboutSection />
      <HomesPreviewSection />
      <FeaturesSection />
      <ConstructionProgress />
      <PartnerLogos />
      <WhyInvestSection />
      <LeadCaptureForm />
      <Footer />
    </main>
  );
}