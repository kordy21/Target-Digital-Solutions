import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/shared/animations";
import GlobalHeroImg from "@/assets/globalHero.png";
import { SolutionList } from "@/features/solutions/components/solution-list";

export default async function SolutionsPage() {
  const t = await getTranslations("solutionsPage.hero");

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <PageHero 
        title={t("title")}
        subtitle={t("description")}
        image={GlobalHeroImg}
      />
      
      {/* Solutions Grid */}
      <FadeIn direction="up" delay={0.2} className="w-full">
        <SolutionList />
      </FadeIn>
    </main>
  );
}
