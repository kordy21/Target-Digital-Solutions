"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/animations";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";

import Bubbles from "@/assets/bubbles.png";
import Story1Img from "@/assets/story1.png";
import Story2Img from "@/assets/story2.png";
import Story3Img from "@/assets/story3.png";
import { SplitTextReveal } from "@/components/shared/animations";

const baseStories = [
  { id: "story3", image: Story3Img },
  { id: "story2", image: Story2Img },
  { id: "story1", image: Story1Img },
];
const stories = [...baseStories, ...baseStories, ...baseStories];

export function StoriesSection() {
  const t = useTranslations("home.stories");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: isRTL ? "rtl" : "ltr", align: "start", slidesToScroll: 1 }, 
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Side Bubbles */}
      <motion.div 
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute top-0 left-0 h-1/3 pointer-events-none hidden md:block z-0 will-change-transform"
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
    <SplitTextReveal text={t("title")} />
</h2>
  </div>
</div>
        </FadeIn>

        {/* Carousel */}
        <div className="w-full mx-auto overflow-hidden" ref={emblaRef} dir={isRTL ? "rtl" : "ltr"}>
          <div className="flex -mx-4">
            {stories.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] min-w-0 px-4 flex flex-col items-center text-center group cursor-grab active:cursor-grabbing">
                {/* Image Container */}
                <div className="relative w-full aspect-4/5 rounded-[32px] overflow-hidden mb-6 group-hover:shadow-md transition-all duration-500 group-hover:-translate-y-4">
                  <Image 
                    src={item.image} 
                    alt={t(`items.${item.id}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-500">
                    <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-125 border border-border/10">
                      <Play className="w-6 h-6 text-foreground fill-foreground ml-1 group-hover:text-primary group-hover:fill-primary transition-colors" />
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-cairo font-semibold text-lg md:text-xl text-foreground px-4 leading-relaxed group-hover:text-primary transition-colors">
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
