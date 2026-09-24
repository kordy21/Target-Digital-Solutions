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
import { ScaleIn } from "@/components/shared/animations";
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
      
      {/* Details Section */}
      <ProjectDetailsContent project={project} />

      {/* Stats Banner Section */}
      <ProjectStatsBanner project={project} />

      {/* Mockups Section */}
      <ProjectMockups project={project} />

      {/* Steps Section */}
      <ProjectSteps project={project} />

      {/* Features Section */}
      <ProjectFeatures project={project} />

      {/* Tools Section */}
      <ProjectTools project={project} />

      <ScaleIn delay={0.1}><CtaSection /></ScaleIn>
    </main>
  );
}
