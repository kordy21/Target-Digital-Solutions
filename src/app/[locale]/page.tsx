
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

import { FadeIn, ZoomIn, SlideIn, ScaleIn, FlipIn } from "@/components/shared/animations";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <div className="flex flex-col w-full gap-12 md:gap-26 py-16 md:py-28 overflow-hidden">
        <FadeIn direction="up"><AboutPreview /></FadeIn>
        <ZoomIn delay={0.1}><AboutUsSection /></ZoomIn>
        <SlideIn direction="left" delay={0.1}><ServicesSection /></SlideIn>
        <ScaleIn delay={0.1}><PortfolioSection /></ScaleIn>
        <FlipIn direction="x" delay={0.1}><ToolsSection /></FlipIn>
        <FadeIn direction="up" delay={0.1}><StatsSection /></FadeIn>
        <SlideIn direction="right" delay={0.1}><FeaturesSection /></SlideIn>
        <ZoomIn delay={0.1}><ExperienceSection /></ZoomIn>
        <ScaleIn delay={0.1}><NewsSection /></ScaleIn>
        <FlipIn direction="y" delay={0.1}><CertificatesSection /></FlipIn>
        <FadeIn direction="up" delay={0.1}><TestimonialsSection /></FadeIn>
        <SlideIn direction="left" delay={0.1}><StoriesSection /></SlideIn>
        <ZoomIn delay={0.1}><BlogSection /></ZoomIn>
        <ScaleIn delay={0.1}><CtaSection /></ScaleIn>
      </div>
    </main>
  );
}
