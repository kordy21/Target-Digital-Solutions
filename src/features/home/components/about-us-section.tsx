"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { InteractiveParticles } from "@/components/shared/interactive-particles";
import UsImage from "@/assets/us.png";

export function AboutUsSection() {
  const t = useTranslations("home.about");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20">
        <InteractiveParticles 
          mode="scatter-to-shape" 
          text="i" 
          particleCount={80} 
          interactionRadius={150}
          particleColor="var(--foreground)"
        />
      </div>
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
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
        <StaggerContainer className="order-1 flex flex-col text-start" staggerChildren={0.15}>
          <StaggerItem>
            <span className="text-gray-500 dark:text-gray-400 font-cairo text-[18px] md:text-[20px] font-medium mb-4 block">
              {t("eyebrow")}
            </span>
          </StaggerItem>
          
          <StaggerItem>
            <h2 className="text-[32px] md:text-[45px] lg:text-[55px] font-cairo font-extrabold text-foreground leading-[1.2] mb-8">
              <SplitTextReveal text={t("title")} />
            </h2>
          </StaggerItem>
          
          <StaggerItem>
            <h3 className="text-[22px] md:text-[26px] font-cairo font-bold text-primary mb-4">
              {t("subtitle")}
            </h3>
          </StaggerItem>
          
          <StaggerItem>
            <p className="text-[16px] md:text-[18px] font-cairo text-gray-600 dark:text-gray-300 leading-[1.8] mb-10">
              {t("description")}
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <MagneticButton>
              <button className="flex items-center justify-center gap-3 h-12 px-8 rounded-full border border-black dark:border-white text-black dark:text-white font-cairo font-semibold text-[16px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                {t("cta")}
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </MagneticButton>
          </StaggerItem>
        </StaggerContainer>

      </div>
    </section>
  );
}
