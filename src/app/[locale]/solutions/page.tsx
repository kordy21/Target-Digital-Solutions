import GlobalHeroImg from "@/assets/globalHero.png";
import { PageHero } from "@/components/shared/page-hero";
import { SolutionList } from "@/features/solutions/components/solution-list";
import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/shared/animations";

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
        <div className="w-full py-12 md:py-24">
          <SolutionList />
        </div>
      </FadeIn>
    </main>
  );
}
