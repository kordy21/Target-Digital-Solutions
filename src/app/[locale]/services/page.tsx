import { useTranslations } from "next-intl";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceBlock } from "@/features/services/components/service-block";
import { getServices } from "@/features/services/data/services-data";
import ServicesHero from "@/assets/servicesHero.png";

export default function ServicesPage() {
  const t = useTranslations("servicesPage");
  const services = getServices(t);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <PageHero 
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image={ServicesHero}
      />

      {/* Services Blocks */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <ServiceBlock 
            key={service.id} 
            service={service} 
            index={index} 
          />
        ))}
      </div>
    </main>
  );
}
