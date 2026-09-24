import GlobalHero from "@/assets/globalHero.png";
import { FadeIn } from "@/components/shared/animations";
import { PageHero } from "@/components/shared/page-hero";
import { PortfolioList } from "@/features/portfolio/components/portfolio-list";
import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("portfolioPage");

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <PageHero 
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image={GlobalHero}
      />

      <FadeIn direction="up" delay={0.1}><PortfolioList /></FadeIn>
    </main>
  );
}
