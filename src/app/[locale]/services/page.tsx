import GlobalHero from "@/assets/globalHero.png";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceBlock } from "@/features/services/components/service-block";
import { getServices } from "@/features/services/data/services-data";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/shared/animations";

export default function ServicesPage() {
  const t = useTranslations("servicesPage");
  const services = getServices(t);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <PageHero 
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image={GlobalHero}
      />

      {/* Services Blocks */}
      <FadeIn direction="up" delay={0.2} className="w-full">
        <div className="flex flex-col gap-12 py-12 md:py-24">
          {services.map((service, index) => (
            <ServiceBlock 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </FadeIn>
    </main>
  );
}
