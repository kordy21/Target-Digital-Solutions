"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { FadeIn } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

import Logo from "@/assets/logo.svg";
import { getTeamMembers } from "../data/about-data";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function TeamSection() {
  const t = useTranslations("aboutPage.team");
  const locale = useLocale();
  const isRTL = locale === "ar";


  const team = getTeamMembers(t);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
        
        {/* Header */}
        <FadeIn direction="up" className="w-full">
          <div className={`flex flex-col w-full items-center text-center`}>
  <span className="text-primary font-cairo text-lg md:text-xl font-bold mb-4 w-full">
    {t("eyebrow")}
  </span>
  <div className={`w-full flex flex-col items-center text-center mb-10`}>
    <h2 className="mb-6 text-xl md:text-4xl lg:text-4.5xl font-cairo font-extrabold text-foreground leading-tight">
      {t("title")}
    </h2>
  </div>
</div>
        </FadeIn>

        {/* Carousel / Grid Container */}
        <div className="relative w-full flex items-center justify-center">
          
          {/* Left Arrow (Mock for visual) */}
          <button className="hidden lg:flex absolute right-0 translate-x-16 w-10 h-10 items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <FadeIn 
                key={member.id} 
                direction="up" 
                delay={index * 0.1}
                className="w-full"
              >
                <div className="w-full bg-[#8EA3BD] dark:bg-muted rounded-[24px] overflow-hidden flex flex-col border border-border/10 group hover:shadow-md transition-shadow duration-300">
                  
                  {/* Top Image Area */}
                  <div className="relative w-full aspect-4/5 flex items-end justify-center pt-8 overflow-hidden">
                    
                    {/* Watermark Logo */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 z-0">
                      <div className="relative w-[120%] h-[120%] -translate-y-8">
                        <Image 
                          src={Logo} 
                          alt="Background Logo"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-contain brightness-0 invert" 
                        />
                      </div>
                    </div>

                    {/* Person Image */}
                    <div className="relative w-full h-[95%] z-10 overflow-hidden">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Reflection Effect on Hover (Top-Left to Bottom-Right) */}
                      <div className="absolute inset-0 translate-x-[-150%] translate-y-[-150%] group-hover:translate-x-[150%] group-hover:translate-y-[150%] transition-transform duration-1000 ease-in-out bg-linear-to-br from-transparent via-white/40 dark:via-white/10 to-transparent z-10" />
                    </div>
                  </div>

                  {/* Bottom Text Area */}
                  <div className="w-full bg-background flex flex-col items-center justify-center p-6 md:py-8 z-20 border-t border-border/20">
                    <h3 className="text-foreground font-cairo font-bold text-xl mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-cairo text-base">
                      {member.role}
                    </p>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right Arrow (Mock for visual) */}
          <button className="hidden lg:flex absolute left-0 -translate-x-16 w-10 h-10 items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* CTA Button */}
        <FadeIn direction="up" className="w-full flex justify-center mt-16">
          <MagneticButton>
            <Button 
              variant="outline" 
              className="flex items-center gap-3 justify-center w-fit rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group
bg-transparent"
            >
              <span>{t("cta")}</span>
              {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
            </Button>
          </MagneticButton>
        </FadeIn>

      </div>
    </section>
  );
}
