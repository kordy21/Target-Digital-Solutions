import { SectionHeader } from "./section-header";
import { FeatureCard } from "./feature-card";
import { ShieldCheck, Zap, HeartHandshake, Award, Clock, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhyChooseUsGrid() {
  const t = useTranslations("home.why_us");

  const features = [
    {
      id: "quality",
      title: t("items.quality.title"),
      description: t("items.quality.description"),
      icon: Award,
    },
    {
      id: "speed",
      title: t("items.speed.title"),
      description: t("items.speed.description"),
      icon: Zap,
    },
    {
      id: "support",
      title: t("items.support.title"),
      description: t("items.support.description"),
      icon: HeartHandshake,
    },
    {
      id: "security",
      title: t("items.security.title"),
      description: t("items.security.description"),
      icon: ShieldCheck,
    },
    {
      id: "time",
      title: t("items.time.title"),
      description: t("items.time.description"),
      icon: Clock,
    },
    {
      id: "team",
      title: t("items.team.title"),
      description: t("items.team.description"),
      icon: Users,
    }
  ];

  return (
    <section className="py-24 px-6 w-full flex flex-col items-center gap-16 bg-muted/10">
      <SectionHeader 
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {features.map((feature) => (
          <FeatureCard 
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
