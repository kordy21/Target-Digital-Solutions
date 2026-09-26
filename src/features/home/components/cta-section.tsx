"use client";

import { StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import Bubbles from "@/assets/bubbles.png";
import LionImg from "@/assets/lion.png";
import { SplitTextReveal } from "@/components/shared/animations";

export function CtaSection() {
  const t = useTranslations("home.cta");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-20 relative z-10">
      <div className="relative w-full bg-background rounded-3xl border border-border overflow-hidden flex flex-col lg:flex-row items-stretch min-h-100 transition-all duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none will-change-transform">
          {/* We can use the bubbles pattern tiled, or just stretched */}
          <motion.div 
            animate={{ backgroundPosition: ["0px 0px", "200px 200px"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            style={{ 
              backgroundImage: `url(${Bubbles.src})`, 
              backgroundSize: '200px', 
              backgroundRepeat: 'repeat' 
            }}
          />
        </div>

        {/* Content Side */}
        <StaggerContainer className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center items-start text-start p-10 md:p-16 order-2 lg:order-0">
          <StaggerItem className="w-full">
            <div className={`flex flex-col w-full`}>
              <span className="text-primary font-cairo text-lg md:text-xl font-bold mb-4 w-full">
                {t("eyebrow")}
              </span>
              <div className={`w-full flex flex-col `}>
                <h2 className="mb-6 text-xl md:text-4xl lg:text-4.5xl font-cairo font-extrabold text-foreground leading-tight">
    <SplitTextReveal text={t("title")} />
</h2>
              </div>
              <p className="font-cairo text-muted-foreground text-sm md:text-base leading-relaxed w-full max-w-2xl">
                {t("description")}
              </p>
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <MagneticButton>
              <Button 
                variant="outline" 
                className="flex items-center gap-3 justify-center mt-6 w-fit mx-auto rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group bg-transparent"
              >
                <span>{t("button")}</span>
                {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </Button>
            </MagneticButton>
          </StaggerItem>
        </StaggerContainer>

        <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center md:py-6">
          <motion.div 
            animate={{ y: [], x: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-100 aspect-square group overflow-hidden rounded-3xl"
          >
            <Image 
              src={LionImg} 
              alt="CTA Mascot" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="object-contain transition-transform duration-500 group-hover:scale-105" 
            />
            {/* Reflection Effect on Hover (Top-Left to Bottom-Right) */}
            <div className="absolute inset-0 translate-x-[-150%] translate-y-[-150%] group-hover:translate-x-[150%] group-hover:translate-y-[150%] transition-transform duration-1000 ease-in-out bg-linear-to-br from-transparent via-white/40 dark:via-white/10 to-transparent z-10 transform-gpu will-change-transform" />
          </motion.div>
        </div>

      </div>
      </div>
    </section>
  );
}
