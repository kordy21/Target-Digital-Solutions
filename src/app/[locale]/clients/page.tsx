import { FadeIn, ZoomIn, SlideIn, ScaleIn, FlipIn } from "@/components/shared/animations";
import GlobalHero from "@/assets/globalHero.png";
import { PageHero } from "@/components/shared/page-hero";
import { CertificatesSection } from "@/features/home/components/certificates-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { ClientVideosSection } from "@/features/clients/components/client-videos-section";
import { useTranslations } from "next-intl";

export default function ClientsPage() {
  const t = useTranslations("clientsPage");

  return (
    <main className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <PageHero 
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image={GlobalHero}
      />

      {/* Clients Content */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 py-16 relative z-10">
        <FlipIn delay={0.1} direction="x"><CertificatesSection /></FlipIn>
        <FadeIn delay={0.1} direction="up"><TestimonialsSection /></FadeIn>
        <SlideIn delay={0.1} direction="left"><ClientVideosSection /></SlideIn>
      </div>
    </main>
  );
}
