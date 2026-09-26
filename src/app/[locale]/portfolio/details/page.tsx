import GlobalHeroImg from "@/assets/globalHero.png";
import { PageHero } from "@/components/shared/page-hero";
import { ProjectDetailsContent } from "@/features/portfolio/components/project-details-content";
import { ProjectStatsBanner } from "@/features/portfolio/components/project-stats-banner";
import { ProjectMockups } from "@/features/portfolio/components/project-mockups";
import { ProjectFeatures } from "@/features/portfolio/components/project-features";
import { ProjectTools } from "@/features/portfolio/components/project-tools";
import { ProjectSteps } from "@/features/portfolio/components/project-steps";
import { getProjects } from "@/features/portfolio/data/portfolio-data";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ScaleIn, FadeIn, SlideIn, ZoomIn } from "@/components/shared/animations";
import { CtaSection } from "@/features/home/components/cta-section";

export default async function ProjectDetailsPage() {
  const tHero = await getTranslations("projectPage.hero");
  const tPortfolio = await getTranslations("portfolioPage");
  
  const projects = getProjects(tPortfolio);
  // Using static project data for now since it's a single details template
  const project = projects[0];

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <PageHero 
        title={tHero("title")}
        subtitle={tHero("description")}
        image={GlobalHeroImg}
      />
      
      <div className="flex flex-col w-full gap-12 md:gap-24 py-12 md:py-24 overflow-hidden">
        {/* Details Section */}
        <FadeIn delay={0.1} direction="up" className="w-full"><ProjectDetailsContent project={project} /></FadeIn>

        {/* Stats Banner Section */}
        <ZoomIn delay={0.1} className="w-full"><ProjectStatsBanner project={project} /></ZoomIn>

        {/* Mockups Section */}
        <SlideIn delay={0.1} direction="left" className="w-full"><ProjectMockups project={project} /></SlideIn>

        {/* Steps Section */}
        <FadeIn delay={0.1} direction="up" className="w-full"><ProjectSteps project={project} /></FadeIn>

        {/* Features Section */}
        <SlideIn delay={0.1} direction="left" className="w-full"><ProjectFeatures project={project} /></SlideIn>

        {/* Tools Section */}
        <ScaleIn delay={0.1} className="w-full"><ProjectTools project={project} /></ScaleIn>

        <ScaleIn delay={0.1}><CtaSection /></ScaleIn>
      </div>
    </main>
  );
}
