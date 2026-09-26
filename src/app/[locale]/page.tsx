
import { AboutPreview } from "@/components/shared/about-preview";
import { Hero } from "@/features/home/components/hero";
import { AboutUsSection } from "@/features/home/components/about-us-section";
import dynamic from "next/dynamic";

const ServicesSection = dynamic(() => import("@/features/home/components/services-section").then(mod => mod.ServicesSection));
const PortfolioSection = dynamic(() => import("@/features/home/components/portfolio-section").then(mod => mod.PortfolioSection));
const ToolsSection = dynamic(() => import("@/features/home/components/tools-section").then(mod => mod.ToolsSection));
const StatsSection = dynamic(() => import("@/features/home/components/stats-section").then(mod => mod.StatsSection));
const FeaturesSection = dynamic(() => import("@/features/home/components/features-section").then(mod => mod.FeaturesSection));
const ExperienceSection = dynamic(() => import("@/features/home/components/experience-section").then(mod => mod.ExperienceSection));
const NewsSection = dynamic(() => import("@/features/home/components/news-section").then(mod => mod.NewsSection));
const CertificatesSection = dynamic(() => import("@/features/home/components/certificates-section").then(mod => mod.CertificatesSection));
const TestimonialsSection = dynamic(() => import("@/features/home/components/testimonials-section").then(mod => mod.TestimonialsSection));
const StoriesSection = dynamic(() => import("@/features/home/components/stories-section").then(mod => mod.StoriesSection));
const BlogSection = dynamic(() => import("@/features/home/components/blog-section").then(mod => mod.BlogSection));
const InteractiveLogoSection = dynamic(() => import("@/features/home/components/interactive-logo-section").then(mod => mod.InteractiveLogoSection));
const CtaSection = dynamic(() => import("@/features/home/components/cta-section").then(mod => mod.CtaSection));

import { FadeIn, ZoomIn, SlideIn, ScaleIn, FlipIn } from "@/components/shared/animations";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <div className="flex flex-col w-full gap-12 md:gap-24 md:py-24 py-12 overflow-clip">
        <FadeIn direction="up"><AboutPreview /></FadeIn>
        <ZoomIn delay={0.1}><AboutUsSection /></ZoomIn>
        <SlideIn direction="left" delay={0.1}><ServicesSection /></SlideIn>
        <ScaleIn delay={0.1}><PortfolioSection /></ScaleIn>
        <FlipIn direction="x" delay={0.1}><ToolsSection /></FlipIn>
        <FadeIn direction="up" delay={0.1}><StatsSection /></FadeIn>
        <ScaleIn delay={0.1}><InteractiveLogoSection /></ScaleIn>
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
