"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/animations";

import Bubbles from "@/assets/bubbles.png";
import R2M from "@/assets/R2M.png";
import TRS from "@/assets/trs.png";
import MarkaShip from "@/assets/markship.png";

const projects = [
  { id: "trs", image: TRS },
  { id: "marka", image: MarkaShip },
  { id: "r2m", image: R2M },
];

export function PortfolioSection() {
  const t = useTranslations("home.portfolio");
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
        className="absolute -top-20 right-0 h-1/2 pointer-events-none hidden md:block z-0"
      >
        <Image 
          src={Bubbles}
          alt="Bubbles Decoration" 
          className="h-full w-auto object-cover" 
        />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
        {/* Section Header */}
        <FadeIn direction="up" className="flex flex-col items-center w-full">
          <span className="text-primary font-cairo text-[20px] md:text-[24px] font-bold mb-2">
            {t("eyebrow")}
          </span>
          <h2 className="text-xl md:text-[45px] font-cairo font-extrabold text-foreground leading-[1.2] text-center mb-16">
            {t("title")}
          </h2>
        </FadeIn>

        {/* Carousel Section */}
        <div className="w-full relative flex items-center">
          
          {/* Right Arrow (Prev in RTL) */}
          <button 
            onClick={scrollPrev}
            className="absolute right-4 z-20 w-10 h-10 flex items-center justify-center text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden w-full px-4" ref={emblaRef} dir="rtl">
            <div className="flex">
              {projects.map((project) => (
                <div 
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
                      className="max-w-full h-auto object-contain"
                    />
                  </motion.div>
                  <h3 className="font-cairo text-[20px] md:text-[24px] font-semibold text-foreground text-center">
                    {t(`projects.${project.id}`)}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow (Next in RTL) */}
          <button 
            onClick={scrollNext}
            className="absolute left-4 z-20 w-10 h-10 flex items-center justify-center text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Learn More Button */}
        <div className="mt-16">
          <button className="flex items-center gap-3 px-8 py-3 rounded-full border border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-cairo font-semibold text-[18px]">
            <ArrowLeft className="w-5 h-5" />
            <span>{t("button")}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
