"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowLeft, Play } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { InteractiveParticles } from "@/components/shared/interactive-particles";

import PeopleImg from "@/assets/people.png";
import PersonVector from "@/assets/personvector.png";
import PeopleVector from "@/assets/peoplevector.png";

export function ExperienceSection() {
  const t = useTranslations("home.experience");

  return (
    <section className="w-full bg-[#f9f9fb] dark:bg-transparent overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20 hidden lg:block">
        <InteractiveParticles 
          mode="scatter-to-shape" 
          text="~" 
          particleCount={80} 
          interactionRadius={150}
          particleColor="var(--foreground)"
        />
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
        <FadeIn direction="up" delay={0.2} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-140 h-auto flex rounded-t-3xl overflow-hidden shadow-2xl z-20">
          
          {/* Black/Dark Stat */}
          <div className="w-1/2 bg-[#0a0a0a] dark:bg-zinc-900 p-6 md:p-8 flex items-center justify-between">
            <div className="w-24 h-24 hidden sm:block">
              <Image src={PeopleVector} alt="Employees" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div className="flex flex-col text-white">
              <span className="font-cairo font-bold text-[32px] md:text-[40px] leading-none mb-2" dir="ltr">
                {t("stats.employees.value")}
              </span>
              <span className="font-cairo font-semibold text-[14px] text-white/90">
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
              <span className="font-cairo font-bold text-[32px] md:text-[40px] leading-none mb-2" dir="ltr">
                {t("stats.years.value")}
              </span>
              <span className="font-cairo font-semibold text-[14px] text-white/90">
                {t("stats.years.label")}
              </span>
            </div>
          </div>
          
        </FadeIn>
      </div>

      {/* Left Side / Content Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 py-16 md:p-16 lg:p-24 bg-white dark:bg-transparent lg:bg-transparent relative z-10">
        <StaggerContainer className="max-w-xl flex flex-col items-start text-start w-full">
          <StaggerItem>
            <span className="font-cairo text-gray-500 dark:text-gray-400 text-[16px] md:text-[18px] font-semibold mb-4 block">
              {t("eyebrow")}
            </span>
          </StaggerItem>
          
          <StaggerItem>
            <h2 className="text-[32px] md:text-[48px] font-cairo font-extrabold text-foreground leading-[1.3] mb-6">
              <SplitTextReveal text={t("title")} />
            </h2>
          </StaggerItem>
          
          <StaggerItem>
            <h3 className="text-primary font-cairo text-[22px] md:text-[28px] font-semibold mb-6">
              {t("subtitle")}
            </h3>
          </StaggerItem>
          
          <StaggerItem>
            <p className="font-cairo text-[16px] md:text-[18px] text-gray-600 dark:text-gray-300 leading-[1.8] mb-12">
              {t("description")}
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <MagneticButton>
              <button className="flex items-center gap-4 px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-foreground hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors font-cairo font-semibold text-[16px]">
                <ArrowLeft className="w-5 h-5" />
                <span>{t("button")}</span>
              </button>
            </MagneticButton>
          </StaggerItem>
        </StaggerContainer>
      </div>
      </div>

    </section>
  );
}
