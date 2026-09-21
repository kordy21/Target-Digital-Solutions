"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroFooter from "@/assets/HeroFooter.png";
import { FloatingThemeToggle } from "@/components/shared/floating-theme-toggle";
import { slidesData } from "../data/hero-slides";

export function Hero() {
  const t = useTranslations("home.hero");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-brand-dark overflow-hidden flex items-center border-b-3 border-black">
      <FloatingThemeToggle />
      
      {/* Dynamic Background Image based on current slide */}
      {slidesData.map((slide, index) => (
        <div 
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          )}
        >
          {/* Background Image */}
          <Image 
            src={slide.image} 
            alt={`Slide ${slide.id + 1}`} 
            fill 
            className="object-cover object-center" 
            priority={index === 0}
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center pb-20">
            
            {/* Text & CTA (Visually Right in RTL) */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-start lg:ml-auto">
              <h1 className="text-[40px] md:text-[60px] lg:text-[70px] font-cairo font-extrabold text-white leading-[1.2] drop-shadow-lg">
                {t(slide.titleKey as Parameters<typeof t>[0])}
              </h1>
              <p className="text-[18px] md:text-[24px] font-cairo text-white/90 leading-relaxed mb-4">
                {t(slide.subtitleKey as Parameters<typeof t>[0])}
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full md:w-auto justify-center lg:justify-start rtl:space-x-reverse">
                {/* Secondary Action (Outlined in design) */}
                <Button className="h-14 px-10 rounded-full text-[18px] font-cairo bg-transparent border border-white text-white hover:bg-white/10 transition-all w-full sm:w-auto">
                  {t(slide.secondaryActionKey as Parameters<typeof t>[0])}
                </Button>
                {/* Primary Action (Solid White in design) */}
                <Button className="h-14 px-10 rounded-full text-[18px] font-cairo bg-white text-black hover:bg-white/90 transition-all w-full sm:w-auto">
                  {t(slide.primaryActionKey as Parameters<typeof t>[0])}
                </Button>
              </div>
            </div>

          </div>
        </div>
      ))}

      {/* Hero Footer Wavy Shape */}
      <div className="absolute -bottom-4 left-0 w-full z-20 pointer-events-none dark:hidden">
        <Image 
          src={HeroFooter} 
          alt="Footer Wave" 
          width={1920} 
          height={150} 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-20 left-12 lg:left-32 z-30 flex items-center gap-6 bg-white/10 dark:bg-black/20 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-white/20">
        <span className="text-white font-cairo text-[22px] font-bold">
          {currentSlide + 1}
        </span>
        
        <div className="w-12 sm:w-12 h-0.5 bg-white rounded-full"></div>
        
        <span className="text-white/50 font-cairo text-[22px] font-medium">
          {slidesData.length}
        </span>
      </div>

    </section>
  );
}
