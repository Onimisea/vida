// "use client";

import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { AboutSection } from "@/components/sections/about-section";
import { ConstructionProgress } from "@/components/sections/construction-progress";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomesPreviewSection } from "@/components/sections/homes-preview-section";
import { LeadCaptureForm } from "@/components/sections/lead-capture-form";
import { WhyInvestSection } from "@/components/sections/why-invest-section";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col">
      <MainNav />
      <HeroSection />
      <AboutSection />
      <HomesPreviewSection />
      <FeaturesSection />
      <ConstructionProgress />
      <WhyInvestSection />
      <LeadCaptureForm />
      <Footer />
    </section>
  );
}
