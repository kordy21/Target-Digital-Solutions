import { MouseFollower } from "@/components/shared/mouse-follower";
import { AboutPreview } from "@/components/shared/about-preview";
import { Hero } from "@/features/home/components/hero";

import { AboutUsSection } from "@/features/home/components/about-us-section";
import { ServicesSection } from "@/features/home/components/services-section";
import { PortfolioSection } from "@/features/home/components/portfolio-section";
import { ToolsSection } from "@/features/home/components/tools-section";
import { StatsSection } from "@/features/home/components/stats-section";
import { FeaturesSection } from "@/features/home/components/features-section";
import { ExperienceSection } from "@/features/home/components/experience-section";
import { NewsSection } from "@/features/home/components/news-section";
import { CertificatesSection } from "@/features/home/components/certificates-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { StoriesSection } from "@/features/home/components/stories-section";
import { BlogSection } from "@/features/home/components/blog-section";
import { CtaSection } from "@/features/home/components/cta-section";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <MouseFollower />
      <Hero />
      <div className="flex flex-col gap-20 md:gap-12 py-20 md:py-32 overflow-hidden">
        <AboutPreview />
        <AboutUsSection />
        <ServicesSection />
        <PortfolioSection />
        <ToolsSection />
        <StatsSection />
        <FeaturesSection />
        <ExperienceSection />
        <NewsSection />
        <CertificatesSection />
        <TestimonialsSection />
        <StoriesSection />
        <BlogSection />
        <CtaSection />
      </div>
    </main>
  );
}
