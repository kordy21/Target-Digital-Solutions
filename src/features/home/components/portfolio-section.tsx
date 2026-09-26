"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { FadeIn, ZoomIn } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";

import Bubbles from "@/assets/bubbles.png";
import R2M from "@/assets/R2M.png";
import TRS from "@/assets/trs.png";
import MarkaShip from "@/assets/markship.png";
import { MagneticButton } from "@/components/shared/magnetic-button";

const projects = [
  { id: "trs", image: TRS },
  { id: "marka", image: MarkaShip },
  { id: "r2m", image: R2M },
];

export function PortfolioSection() {
  const t = useTranslations("home.portfolio");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl", align: "start", slidesToScroll: 1 }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Side Bubbles */}
      <motion.div 
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1], rotate: [0, -2, 2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute -top-20 right-0 h-1/2 pointer-events-none hidden md:block z-0"
      >
        <Image 
          src={Bubbles}
          alt="Bubbles Decoration"
          style={{ width: 'auto', height: 'auto' }} 
          className="h-full w-auto object-cover" 
        />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 flex flex-col items-center relative z-10">
        {/* Section Header */}
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

        {/* Carousel Section */}
        <div className="w-full max-w-6xl mx-auto relative flex items-center">
          
          {/* Right Arrow (Prev in RTL) */}
          <button 
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-18 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-800 dark:text-gray-300"
          >
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden w-full px-4" ref={emblaRef} dir="rtl">
            <div className="flex">
              {projects.map((project, index) => (
                <ZoomIn
                  delay={index * 0.1}
                  key={project.id} 
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] min-w-0 flex flex-col items-center px-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full flex items-center justify-center mb-6 cursor-grab active:cursor-grabbing"
                  >
                    <Image 
                      src={project.image} 
                      alt={t(`projects.${project.id}`)} 
                      className="max-w-full h-auto object-contain pr-4"
                    />
                  </motion.div>
                  <h3 className="font-cairo text-xl md:text-2xl font-semibold text-foreground text-center group-hover:-translate-y-1 transition-transform duration-300">
                    {t(`projects.${project.id}`)}
                  </h3>
                </ZoomIn>
              ))}
            </div>
          </div>

          {/* Left Arrow (Next in RTL) */}
          <button 
            onClick={scrollNext}
            className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-4 md:-left-8 lg:-left-18 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-800 dark:text-gray-300"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <div className="mb-2 mt-16 w-full flex justify-center">
          <MagneticButton>
            <Button variant="outline" className="flex items-center gap-3 justify-center w-fit rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group
bg-transparent">
              <span>{t("button")}</span>
              {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
