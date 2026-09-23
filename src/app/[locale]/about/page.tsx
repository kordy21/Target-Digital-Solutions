import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import AboutHeroImg from "@/assets/aboutHero.png";
import { AboutUsSection } from "@/features/home/components/about-us-section";
import { ValuesSection } from "@/features/about/components/values-section";
import { VideoSection } from "@/features/about/components/video-section";
import { TeamSection } from "@/features/about/components/team-section";
import { ProcessSection } from "@/features/about/components/process-section";
import { ToolsSection } from "@/features/home/components/tools-section";
import { NewsSection } from "@/features/home/components/news-section";
import { CertificatesSection } from "@/features/home/components/certificates-section";
import { CtaSection } from "@/features/home/components/cta-section";

export default async function AboutPage() {
  const t = await getTranslations("aboutPage.hero");

  return (
    <main className="w-full min-h-screen overflow-hidden bg-background relative z-10">
      <PageHero 
        title={t("title")} 
        subtitle={t("subtitle")} 
        image={AboutHeroImg} 
      />
      <div className="flex flex-col gap-12 md:gap-26 py-16 md:py-28">
        <AboutUsSection />
        <ValuesSection />
        <VideoSection />
        <TeamSection />
        <ToolsSection />
        <NewsSection />
        <ProcessSection />
        <CertificatesSection />
        <CtaSection />
      </div>
    </main>
  );
}
