"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Counter } from "@/components/shared/counter";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { SectionHeading } from "@/components/shared/section-heading";
import HandsImg from "@/assets/hands.png";
import { motion } from "framer-motion";

export function StatsSection() {
  const t = useTranslations("home.stats");

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center pb-12">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 relative z-10">
        
        {/* Left Side (Image & Badge) */}
        <div className="relative w-full lg:w-5/12 rounded-2xl flex justify-center lg:justify-start">
          <FadeIn direction="right" delay={0.2} className="relative w-full aspect-4/5 rounded-2xl overflow-hidden">
            <div className="relative w-full h-full transition-transform duration-700 hover:scale-105">
              <Image 
                src={HandsImg} 
                alt="Team Hands" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Satisfaction Badge */}
          <div className="absolute -bottom-12 -left-6 md:-left-12 lg:left-12 z-20">
            <FadeIn direction="up" delay={0.5}>
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white dark:bg-zinc-900 shadow-xl flex flex-col items-center justify-center hover:scale-110 transition-transform duration-500 cursor-pointer relative"
              >
                {/* SVG Progress Ring */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ transform: 'rotate(-70deg)' }}>
                  {/* Background track */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#cbd5e1" strokeWidth="16" />
                  {/* Progress track (97%) */}
                  <circle 
                    cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="16"
                    className="text-primary transition-all duration-1000 ease-out"
                    strokeDasharray="238.76"
                    strokeDashoffset={238.76 - (238.76 * 97) / 100}
                  />
                </svg>
                <div className="flex flex-col items-center justify-center relative z-10 pt-1 max-w-[65%]">
                  <span className="font-cairo font-bold text-3xl md:text-4xl text-foreground leading-none mb-1 flex items-center justify-center gap-1" dir="ltr">
                    <Counter value={parseInt(t("satisfaction.value")) || 97} delay={0.6} />
                    <span className="text-primary">%</span>
                  </span>
                  <span className="font-cairo font-bold text-xs md:text-sm text-foreground text-center leading-tight">
                    {t("satisfaction.label")}
                  </span>
                </div>
                {/* The white pointer notch */}
                <div className="absolute -top-3 right-8 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-zinc-900 rounded-md -z-10" style={{ transform: 'rotate(20deg)' }}></div>
              </motion.div>
            </FadeIn>
          </div>
        </div>

        {/* Right Side (Content) */}
        <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-start pt-12 lg:pt-0">
          
          <FadeIn direction="up" delay={0.1} className="w-full mb-16 lg:max-w-2xl">
            <SectionHeading 
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
              align="left"
              className="lg:items-start lg:text-start items-center text-center"
            />
          </FadeIn>

          {/* Stats Grid */}
          <StaggerContainer className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {["clients", "projects", "team", "data"].map((key) => {
              const value = t(`items.${key}.value`);
              // Extract number part (including decimals and commas) and any letters (like TB, K, M)
              const numMatch = value.match(/([\d.,]+)([a-zA-Z]*)/);
              const rawString = numMatch ? numMatch[1].replace(/,/g, "") : value.replace(/[^\d.]/g, "");
              const parsedValue = parseFloat(rawString);
              const finalValue = isNaN(parsedValue) ? 0 : parsedValue;
              const suffix = numMatch ? numMatch[2] : "";
              const hasPlus = value.includes("+");

              return (
                <StaggerItem key={key} className="flex flex-col items-center text-center group">
                  <div className="w-full h-px bg-muted-foreground/30 mb-6 group-hover:bg-primary/50 transition-colors duration-500"></div>
                  <div className="font-cairo font-bold text-3xl md:text-4xl text-foreground mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" dir="ltr">
                    <Counter value={finalValue} delay={0} />
                    {(suffix || hasPlus) && (
                      <span className="text-primary ml-1">
                        {suffix}{hasPlus ? "+" : ""}
                      </span>
                    )}
                  </div>
                  <span className="font-cairo font-semibold text-sm md:text-base text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {t(`items.${key}.label`)}
                  </span>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          
        </div>
      </div>
    </section>
  );
}
