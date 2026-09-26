"use client";

import { FadeIn, ZoomIn } from "@/components/shared/animations";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Bubbles from "@/assets/bubbles.png";
import News1Img from "@/assets/news1.png";
import News2Img from "@/assets/news2.png";
import News3Img from "@/assets/news3.png";
import { SplitTextReveal } from "@/components/shared/animations";

const baseNewsItems = [
  { id: "item3", image: News3Img }, // Americana
  { id: "item2", image: News2Img }, // Helwan
  { id: "item1", image: News1Img }, // Misr Travel
];
const newsItems = [...baseNewsItems, ...baseNewsItems, ...baseNewsItems];

export function NewsSection() {
  const t = useTranslations("home.news");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: isRTL ? "rtl" : "ltr", align: "start", slidesToScroll: 1 }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">

      {/* Side Bubbles */}
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute top-0 right-12 h-1/3 pointer-events-none hidden md:block z-0"
      >
        <Image 
          src={Bubbles} 
          alt="Bubbles Decoration"
          style={{ width: 'auto', height: 'auto' }} 
          className="h-full w-auto object-cover scale-x-[-1]" 
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
    <SplitTextReveal text={t("title")} />
</h2>
            </div>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div className="w-full mx-auto overflow-hidden" ref={emblaRef} dir={isRTL ? "rtl" : "ltr"}>
          <div className="flex -mx-4">
            {newsItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] min-w-0 px-4 flex flex-col items-center text-center group cursor-grab active:cursor-grabbing">
                {/* Card Container */}
                <div className="w-full bg-background text-card-foreground rounded-3xl p-4 md:p-6 border border-border mb-6 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-md">
                  <ZoomIn delay={index * 0.1}>
                    <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={t(`items.${item.id}.title`)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Reflection Effect on Hover (Top-Left to Bottom-Right) */}
                      <div className="absolute inset-0 translate-x-[-150%] translate-y-[-150%] group-hover:translate-x-[150%] group-hover:translate-y-[150%] transition-transform duration-1000 ease-in-out bg-linear-to-br from-transparent via-white/40 dark:via-white/10 to-transparent z-10 transform-gpu will-change-transform" />
                    </div>
                  </ZoomIn>
                </div>
                
                {/* Title & Description */}
                <h3 className="font-cairo font-bold text-lg md:text-xl text-foreground px-4 leading-relaxed group-hover:text-primary group-hover:-translate-y-1 transition-all duration-300">
                  {t(`items.${item.id}.title`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
