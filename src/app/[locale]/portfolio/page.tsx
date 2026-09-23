import { useTranslations } from "next-intl";
import { PageHero } from "@/components/shared/page-hero";
import GlobalHero from "@/assets/globalHero.png";
import { PortfolioList } from "@/features/portfolio/components/portfolio-list";

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

      <PortfolioList />
    </main>
  );
}
