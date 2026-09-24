"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import PeopleImg from "@/assets/people.png";
import PeopleVector from "@/assets/peoplevector.png";
import PersonVector from "@/assets/personvector.png";

export function ExperienceSection() {
  const t = useTranslations("home.experience");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className="w-full bg-[#f9f9fb] dark:bg-transparent overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20 hidden lg:block">
      </div>
      
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row relative z-10">
      {/* Right Side / Image Area (First in DOM so it's right in RTL) */}
      <div className="w-full lg:w-1/2 relative h-125 lg:h-auto min-h-125 lg:min-h-175">
        <FadeIn direction="up" delay={0.1} className="w-full h-full relative">
          <Image 
            src={PeopleImg} 
            alt="Team Working" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="object-cover"
          />
        </FadeIn>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pb-20">
          <MagneticButton>
            <button className="w-20 h-20 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 group border border-transparent dark:border-white/10">
              <Play className="w-8 h-8 text-black dark:text-white fill-black dark:fill-white ml-1 group-hover:text-primary group-hover:fill-primary dark:group-hover:text-primary dark:group-hover:fill-primary transition-colors" />
            </button>
          </MagneticButton>
        </div>

        {/* Stats Box Overlay */}
        <FadeIn direction="up" delay={0.2} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-140 h-auto flex rounded-t-3xl overflow-hidden z-20 hover:shadow-md transition-shadow duration-300">
          
          {/* Black/Dark Stat */}
          <div className="w-1/2 bg-[#0a0a0a] dark:bg-zinc-900 p-6 md:p-8 flex items-center justify-between">
            <div className="w-24 h-24 hidden sm:block">
              <Image src={PeopleVector} alt="Employees" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div className="flex flex-col text-white">
              <span className="font-cairo font-bold text-3xl md:text-4xl leading-none mb-2" dir="ltr">
                {t("stats.employees.value")}
              </span>
              <span className="font-cairo font-semibold text-sm text-white/90">
                {t("stats.employees.label")}
              </span>
            </div>
          </div>

          {/* Blue Stat */}
          <div className="w-1/2 bg-[#002df2] p-6 md:p-8 flex items-center justify-between">
            <div className="w-24 h-24 hidden sm:block">
              <Image src={PersonVector} alt="Years" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div className="flex flex-col text-white">
              <span className="font-cairo font-bold text-3xl md:text-4xl leading-none mb-2" dir="ltr">
                {t("stats.years.value")}
              </span>
              <span className="font-cairo font-semibold text-sm text-white/90">
                {t("stats.years.label")}
              </span>
            </div>
          </div>
          
        </FadeIn>
      </div>

      {/* Left Side / Content Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 py-16 md:p-16 lg:p-24 bg-white dark:bg-transparent lg:bg-transparent relative z-10">
        <StaggerContainer className="max-w-xl flex flex-col items-start text-start w-full">
          <StaggerItem className="w-full mb-8">
            <SectionHeading 
              eyebrow={t("eyebrow")}
              title={t("title")}
              subtitle={t("subtitle")}
              description={t("description")}
              align="left"
              className="items-start text-start"
            />
          </StaggerItem>
          
          <StaggerItem>
            <MagneticButton>
              <Button variant="outline" className="flex items-center gap-3 justify-center w-fit rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group">
                <span>{t("button")}</span>
                {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </Button>
            </MagneticButton>
          </StaggerItem>
        </StaggerContainer>
      </div>
      </div>

    </section>
  );
}

