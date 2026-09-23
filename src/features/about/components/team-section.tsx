"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/shared/animations";
import { InteractiveParticles } from "@/components/shared/interactive-particles";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Logo from "@/assets/logo.svg";
import { getTeamMembers } from "../data/about-data";

export function TeamSection() {
  const t = useTranslations("aboutPage.team");


  const team = getTeamMembers(t);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20">
        <InteractiveParticles 
          mode="scatter-to-shape" 
          text="T" 
          particleCount={80} 
          interactionRadius={150}
          particleColor="var(--foreground)"
        />
      </div>
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <FadeIn direction="up">
            <span className="text-primary font-cairo font-bold text-[14px] md:text-[16px] mb-4 block">
              {t("eyebrow")}
            </span>
            <h2 className="text-foreground font-cairo font-bold text-[28px] md:text-[36px] max-w-2xl leading-[1.4]">
              {t("title")}
            </h2>
          </FadeIn>
        </div>

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
                <div className="w-full bg-[#8EA3BD] dark:bg-muted rounded-[24px] overflow-hidden flex flex-col shadow-lg border border-border/10 group">
                  
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
                    <div className="relative w-full h-[95%] z-10">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Bottom Text Area */}
                  <div className="w-full bg-background flex flex-col items-center justify-center p-6 md:py-8 z-20 border-t border-border/20">
                    <h3 className="text-foreground font-cairo font-bold text-[20px] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-cairo text-[16px]">
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
          <Button 
            variant="outline" 
            className="rounded-full px-8 h-12 font-cairo text-[16px] border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {t("cta")}
          </Button>
        </FadeIn>

      </div>
    </section>
  );
}
