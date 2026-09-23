"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroFooter from "@/assets/HeroFooter.png";
import Herologo from "@/assets/herologo.png";

import { FadeIn } from "@/components/shared/animations";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { FloatingThemeToggle } from "@/components/shared/floating-theme-toggle";
import { slidesData } from "../data/hero-slides";

export function Hero() {
  const t = useTranslations("home.hero");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] bg-brand-dark overflow-hidden flex items-center border-b-3 border-black mt-20">
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
            className="object-cover object-left ltr:-scale-x-100" 
            priority
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 w-full px-6 md:px-20 flex flex-col justify-center pb-20">
            {/* Text & CTA (Visually Right in RTL, Left in LTR) */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-start rtl:lg:ml-auto">
              <h1 className="text-[40px] md:text-[60px] lg:text-[70px] font-cairo font-extrabold text-white leading-[1.2] drop-shadow-lg">
                <SplitTextReveal text={t(slide.titleKey as Parameters<typeof t>[0])} />
              </h1>
              <FadeIn delay={0.4} direction="up">
                <p className="text-[18px] md:text-[24px] font-cairo text-white/90 leading-relaxed mb-4 flex items-center justify-center lg:justify-start gap-3">
                  <Image src={Herologo} alt="Target Logo" className="hidden md:block w-8 h-8 md:w-10 md:h-10 object-contain shrink-0 brightness-0 invert" />
                  {t(slide.subtitleKey as Parameters<typeof t>[0])} 
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full md:w-auto justify-center lg:justify-start rtl:space-x-reverse">
                  {/* Primary Action (Solid White in design) */}
                  <MagneticButton>
                    <Button className="h-14 px-10 rounded-full text-[18px] font-cairo bg-white text-black hover:bg-white/90 hover:scale-105 transition-all w-full sm:w-auto cursor-pointer">
                      {t(slide.primaryActionKey as Parameters<typeof t>[0])}
                    </Button>
                  </MagneticButton>
                  {/* Secondary Action (Outlined in design) */}
                  <MagneticButton>
                    <Button className="h-14 px-10 rounded-full text-[18px] font-cairo bg-transparent border border-white text-white hover:bg-white/10 hover:scale-105 transition-all w-full sm:w-auto cursor-pointer">
                      {t(slide.secondaryActionKey as Parameters<typeof t>[0])}
                    </Button>
                  </MagneticButton>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      ))}

      {/* Hero Footer Wavy Shape */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-8 left-0 w-full z-20 pointer-events-none"
      >
        <Image 
          src={HeroFooter} 
          alt="Footer Wave" 
          width={1920} 
          height={150} 
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Carousel Dots */}
      <div className="absolute bottom-14 rtl:left-6 rtl:md:left-16 ltr:right-6 ltr:md:right-16 z-30 flex items-center gap-6 bg-white/10 dark:bg-black/20 backdrop-blur-md px-8 py-2 rounded-full shadow-lg">
        <span className="text-white font-cairo text-lg font-bold">
          {currentSlide + 1}
        </span>
        
        <div className="w-12 h-0.5 bg-white rounded-full"></div>
        
        <span className="text-white/50 font-cairo text-lg font-medium">
          {slidesData.length}
        </span>
      </div>
      <FloatingThemeToggle />
    </section>
  );
}
