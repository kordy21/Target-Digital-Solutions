"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { InteractiveParticles } from "@/components/shared/interactive-particles";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";

import Bubbles from "@/assets/bubbles.png";
import LionImg from "@/assets/lion.png";

export function CtaSection() {
  const t = useTranslations("home.cta");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-4 md:px-12 pt-12 group">
      {/* Background Interactive Particles (Group to Scatter) */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-40">
        <InteractiveParticles 
          mode="group-to-scatter" 
          text="؟" 
          particleCount={100} 
          interactionRadius={200}
          particleColor="var(--foreground)"
        />
      </div>
      <div className="relative w-full bg-background rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col lg:flex-row items-stretch min-h-100">
        
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
          <StaggerItem>
            <span className="text-primary font-cairo text-[16px] md:text-[18px] font-bold mb-4 block">
              {t("eyebrow")}
            </span>
          </StaggerItem>
          
          <StaggerItem>
            <h2 className="text-[28px] md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.3] mb-6">
              <SplitTextReveal text={t("title")} />
            </h2>
          </StaggerItem>
          
          <StaggerItem>
            <p className="font-cairo text-[15px] md:text-[16px] text-muted-foreground leading-[1.8] mb-10 max-w-md">
              {t("description")}
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <MagneticButton>
              <button className="flex items-center gap-3 px-8 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95 font-cairo font-semibold text-[16px]">
                <span>{t("button")}</span>
                {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </button>
            </MagneticButton>
          </StaggerItem>
        </StaggerContainer>

        {/* Image Side (Left in visual) */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-end justify-center pt-10 px-10 order-1 lg:order-0 bg-[#f8f9fc]/50 dark:bg-transparent lg:bg-transparent">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-100 aspect-square"
          >
            <Image 
              src={LionImg} 
              alt="CTA Mascot" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="object-contain" 
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
