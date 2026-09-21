import { AboutPreview } from "@/components/shared/about-preview";
import { CertificatesSection } from "@/components/shared/certificates-section";
import { ContactCtaBanner } from "@/components/shared/contact-cta-banner";
import { FooterCta } from "@/components/shared/footer-cta";
import { IdentitySection } from "@/components/shared/identity-section";
import { PartnersLogosGrid } from "@/components/shared/partners-logos-grid";
import { PortfolioCarousel } from "@/components/shared/portfolio-carousel";
import { ServicesGrid } from "@/components/shared/services-grid";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { SocialMediaGallery } from "@/components/shared/social-media-gallery";
import { StatsSection } from "@/components/shared/stats-section";
import { TechLogosBanner } from "@/components/shared/tech-logos-banner";
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel";
import { WhyChooseUsGrid } from "@/components/shared/why-choose-us-grid";
import { Hero } from "@/features/home/components/hero";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  const dummyPartners = [
    { id: "1", name: "Partner One" },
    { id: "2", name: "Partner Two" },
    { id: "3", name: "Partner Three" },
    { id: "4", name: "Partner Four" },
    { id: "5", name: "Partner Five" },
    { id: "6", name: "Partner Six" },
    { id: "7", name: "Partner Seven" },
    { id: "8", name: "Partner Eight" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 relative">
        <Hero />
        <TechLogosBanner />
        <AboutPreview />
        
        <ServicesGrid />
        <PortfolioCarousel />
        <IdentitySection />
        
        <StatsSection />
        <WhyChooseUsGrid />
        <ContactCtaBanner />
        
        <CertificatesSection />
        
        <section className="py-24 px-16 w-full flex flex-col items-center gap-16 bg-background">
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-[40px] md:text-[50px] font-cairo font-extrabold text-foreground">{t("partners.title")}</h2>
          </div>
          <PartnersLogosGrid partners={dummyPartners} />
        </section>

        <TestimonialsCarousel />
        
        <SocialMediaGallery />
        
        <FooterCta />

      </main>
      <SiteFooter />
    </div>
  );
}
