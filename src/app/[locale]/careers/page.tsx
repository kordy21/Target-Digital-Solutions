import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import GlobalHeroImg from "@/assets/globalHero.png";
import { JobList } from "@/features/careers/components/job-list";
import { FadeIn } from "@/components/shared/animations";

export default async function CareersPage() {
  const t = await getTranslations("careersPage.hero");

  return (
    <main className="flex min-h-screen flex-col items-center bg-secondary">
      {/* Hero Section */}
      <PageHero 
        title={t("title")}
        subtitle={t("description")}
        image={GlobalHeroImg}
      />
      {/* Jobs Section */}
      <FadeIn direction="up" delay={0.2} className="w-full">
        <JobList />
      </FadeIn>
    </main>
  );
}
