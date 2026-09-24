"use client";

import { StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import Bubbles from "@/assets/bubbles.png";
import LionImg from "@/assets/lion.png";

export function CtaSection() {
  const t = useTranslations("home.cta");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-12 pb-16 md:pb-24 group">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-20 relative z-10">
      <div className="relative w-full bg-background rounded-3xl border border-border overflow-hidden flex flex-col lg:flex-row items-stretch min-h-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
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
        <StaggerContainer className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center items-start text-start p-10 md:p-16 lg:p-20 order-2 lg:order-0">
          <StaggerItem className="w-full mb-8">
            <SectionHeading 
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
              align="left"
              className="items-start text-start"
            />
          </StaggerItem>
          
          <StaggerItem>
            <MagneticButton>
              <Button 
                variant="outline" 
                className="flex items-center gap-3 justify-center mt-12 w-fit mx-auto rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group"
              >
                <span>{t("button")}</span>
                {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </Button>
            </MagneticButton>
          </StaggerItem>
        </StaggerContainer>

        {/* Image Side (Left in visual) */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-end justify-center pt-10 px-10 order-1 lg:order-0 bg-[#f8f9fc]/50 dark:bg-transparent lg:bg-transparent">
          <motion.div 
            animate={{ y: [], x: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-100 aspect-square"
          >
            <Image 
              src={LionImg} 
              alt="CTA Mascot" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </motion.div>
        </div>

      </div>
      </div>
    </section>
  );
}
