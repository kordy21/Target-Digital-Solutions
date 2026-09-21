import { AboutPreview } from "@/components/shared/about-preview";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { Hero } from "@/features/home/components/hero";

import { AboutUsSection } from "@/features/home/components/about-us-section";
import { ServicesSection } from "@/features/home/components/services-section";
import { PortfolioSection } from "@/features/home/components/portfolio-section";
import { ToolsSection } from "@/features/home/components/tools-section";
import { StatsSection } from "@/features/home/components/stats-section";
import { FeaturesSection } from "@/features/home/components/features-section";
import { ExperienceSection } from "@/features/home/components/experience-section";
import { NewsSection } from "@/features/home/components/news-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 relative flex flex-col space-y-24 pb-24 bg-secondary">
        <Hero />
        <AboutPreview />
        <AboutUsSection />
        <ServicesSection />
        <PortfolioSection />
        <ToolsSection />
        <StatsSection />
        <FeaturesSection />
        <ExperienceSection />
        <NewsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
