"use client";

import { FadeIn } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { MagneticButton } from "@/components/shared/magnetic-button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { getTeamMembers } from "../data/about-data";

export function TeamSection() {
  const t = useTranslations("aboutPage.team");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const baseTeam = getTeamMembers(t);
  // Duplicate the array so there are enough items to loop even on desktop (which shows 3 at once)
  const team = [...baseTeam, ...baseTeam];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    direction: isRTL ? "rtl" : "ltr",
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10 h-full">
        
        {/* Header */}
        <FadeIn direction="up" className="w-full">
          <div className={`flex flex-col w-full items-center text-center`}>
            <span className="text-primary font-cairo text-lg md:text-xl font-bold mb-4 w-full">
              {t("eyebrow")}
            </span>
            <div className={`w-full flex flex-col items-center text-center mb-2 md:mb-10`}>
              <h2 className="mb-6 text-xl md:text-4xl lg:text-4.5xl font-cairo font-extrabold text-foreground leading-tight">
                {t("title")}
              </h2>
            </div>
          </div>
        </FadeIn>

        {/* Carousel Container */}
        <FadeIn direction="up" className="relative w-full flex items-center justify-center mt-8">
          {/* Prev Arrow */}
          <button 
            onClick={scrollPrev}
            className="hidden lg:flex absolute rtl:right-0 ltr:left-0 w-10 h-10 items-center justify-center text-foreground transition-colors z-20"
          >
            {isRTL ? <ArrowRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden w-full max-w-6xl" ref={emblaRef}>
            <div className="flex -ml-6 rtl:ml-0 rtl:-mr-6">
              {team.map((member, index) => (
                <div 
                  key={`${member.id}-${index}`} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 rtl:pl-0 rtl:pr-6"
                >
                  <div className="w-full rounded-[24px] overflow-hidden flex flex-col border border-border group hover:shadow-md transition-shadow duration-300">
                    <div className="relative w-full aspect-4/5">
                      {/* Person Image */}
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Reflection Effect on Hover (Top-Left to Bottom-Right) */}
                        <div className="absolute inset-0 translate-x-[-150%] translate-y-[-150%] group-hover:translate-x-[150%] group-hover:translate-y-[150%] transition-transform duration-1000 ease-in-out bg-linear-to-br from-transparent via-white/40 dark:via-white/10 to-transparent z-10 transform-gpu will-change-transform" />
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
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button 
            onClick={scrollNext}
            className="hidden lg:flex absolute rtl:left-0 ltr:right-0 w-10 h-10 items-center justify-center text-foreground transition-colors z-20"
          >
            {isRTL ? <ArrowLeft className="w-6 h-6" /> : <ArrowRight className="w-6 h-6" />}
          </button>
        </FadeIn>

        {/* CTA Button */}
        <div className="w-full flex justify-center mt-6 md:mt-12">
          <MagneticButton>
            <Button 
              variant="outline" 
              className="flex items-center gap-3 justify-center w-fit rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group bg-transparent"
            >
              <span>{t("cta")}</span>
              {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
