import { SectionHeader } from "./section-header";
import { FeatureCard } from "./feature-card";
import { Monitor, Smartphone, PenTool, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function ServicesGrid() {
  const t = useTranslations("home.services");

  const services = [
    {
      id: "ui-ux",
      title: t("items.ui_ux.title"),
      description: t("items.ui_ux.description"),
      icon: PenTool,
    },
    {
      id: "web",
      title: t("items.web.title"),
      description: t("items.web.description"),
      icon: Monitor,
    },
    {
      id: "mobile",
      title: t("items.mobile.title"),
      description: t("items.mobile.description"),
      icon: Smartphone,
    },
    {
      id: "marketing",
      title: t("items.marketing.title"),
      description: t("items.marketing.description"),
      icon: TrendingUp,
    }
  ];

  return (
    <section className="py-24 px-6 w-full flex flex-col items-center gap-16 bg-muted/20">
      <SectionHeader 
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {services.map((service) => (
          <FeatureCard 
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            className="bg-white hover:-translate-y-1 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}
