"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { FadeIn, ZoomIn, SlideIn, ScaleIn } from "@/components/shared/animations";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";
import UsImage from "@/assets/us.png";

export function AboutUsSection() {
  const t = useTranslations("home.about");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Image Section (Visual Left in RTL) */}
        <FadeIn direction="up" className="order-2 flex flex-col items-center gap-8">
          <div className="relative w-full aspect-4/3 md:aspect-16/10 lg:aspect-auto lg:h-125">
            <Image 
              src={UsImage} 
              alt="About Us" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain" 
            />
          </div>
        </FadeIn>

        {/* Text Content (Visual Right in RTL) */}
        <div className="order-1 flex flex-col text-start">
          <ZoomIn delay={0.1}>
            <span className="text-muted-foreground font-cairo text-lg md:text-xl font-medium mb-4 block">
              {t("eyebrow")}
            </span>
          </ZoomIn>
          
          <div className="mb-8">
            <h2 className="text-2xl md:text-4.5xl lg:text-5.5xl font-cairo font-extrabold text-foreground leading-tight">
              <SplitTextReveal text={t("title")} />
            </h2>
          </div>
          
          <SlideIn direction="right" delay={0.3}>
            <h3 className="text-2xl md:text-3xl font-cairo font-bold text-primary mb-4">
              {t("subtitle")}
            </h3>
          </SlideIn>
          
          <ScaleIn delay={0.4}>
            <p className="text-base md:text-lg font-cairo text-muted-foreground leading-loose mb-10">
              {t("description")}
            </p>
          </ScaleIn>
          
          <FadeIn direction="up" delay={0.5}>
            <MagneticButton>
              <Button variant="outline" className="flex items-center gap-3 justify-center w-fit rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group">
                {t("cta")}
                {isRtl ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
