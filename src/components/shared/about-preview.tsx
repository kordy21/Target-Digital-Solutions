"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/animations";
import Bubbles from "@/assets/bubbles.png";
import Part1 from "@/assets/part1.png";
import Part10 from "@/assets/part10.png";
import Part2 from "@/assets/part2.png";
import Part3 from "@/assets/part3.png";
import Part4 from "@/assets/part4.png";
import Part5 from "@/assets/part5.png";
import Part6 from "@/assets/part6.png";
import Part7 from "@/assets/part7.png";
import Part8 from "@/assets/part8.png";
import Part9 from "@/assets/part9.png";

const partners = [Part1, Part2, Part3, Part4, Part5, Part6, Part7, Part8, Part9, Part10];

// Group partners into pairs for a 2-row layout in the carousel
const groupedPartners: StaticImageData[][] = [];
for (let i = 0; i < partners.length; i += 2) {
  groupedPartners.push(partners.slice(i, i + 2));
}

export function AboutPreview() {
  const t = useTranslations("home.partners");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl", align: "start", slidesToScroll: 1 }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
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
        animate={{ y: [0, 20, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute top-2 left-0 h-1/2 pointer-events-none hidden md:block z-0"
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
  <div className={`w-full flex flex-col items-center text-center mb-2 md:mb-10`}>
    <h2 className="mb-6 text-xl md:text-4xl lg:text-4.5xl font-cairo font-extrabold text-foreground leading-tight">
      {t("title")}
    </h2>
  </div>
</div>
        </FadeIn>

        {/* Carousel Section */}
        <div className="w-full relative flex items-center">
          
          {/* Right Arrow (Prev in RTL) */}
          <button 
            onClick={scrollPrev}
            className="absolute right-0 z-20 w-10 h-10 flex items-center justify-center text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden w-full px-4 py-1" ref={emblaRef} dir="rtl">
            <div className="flex">
              {groupedPartners.map((group, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_20%] min-w-0 flex flex-col gap-12 items-center px-4"
                >
                  {group.map((imgSrc, imgIndex) => {
                    return (
                      <motion.div 
                        key={imgIndex} 
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-full flex items-center justify-center h-12 md:h-20 cursor-grab active:cursor-grabbing py-1"
                      >
                        <Image 
                          src={imgSrc} 
                          alt={`Partner ${index * 2 + imgIndex + 1}`} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow (Next in RTL) */}
          <button 
            onClick={scrollNext}
            className="absolute left-0 z-20 w-10 h-10 flex items-center justify-center text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

        </div>
      </div>
    </section>
  );
}
