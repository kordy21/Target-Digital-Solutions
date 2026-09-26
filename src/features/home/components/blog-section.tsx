"use client";

import { FadeIn, SlideIn, ZoomIn } from "@/components/shared/animations";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import BlogHoverImg from "@/assets/bloghover.png";
import Bubbles from "@/assets/bubbles.png";
import EngAmrImg from "@/assets/engamr.png";

const baseBlogItems = [
  { id: "item3" },
  { id: "item2" },
  { id: "item1" },
];
const blogItems = [...baseBlogItems, ...baseBlogItems, ...baseBlogItems];

export function BlogSection() {
  const t = useTranslations("home.blog");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: isRTL ? "rtl" : "ltr", align: "start", slidesToScroll: 1 }, 
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-auto ">
      </div>
      {/* Side Bubbles */}
      <motion.div 
        animate={{ y: [0, 15, 0], scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute top-0 right-12 h-1/3 pointer-events-none hidden md:block z-0"
      >
        <Image 
          src={Bubbles} 
          alt="Bubbles Decoration"
          style={{ width: 'auto', height: 'auto' }} 
          className="h-full w-auto object-cover scale-x-[-1]" 
        />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
      <div className="w-full bg-background rounded-3xl border border-border p-8 md:p-12 lg:p-16 flex flex-col items-center hover:shadow-md transition-shadow duration-300">
        {/* Section Header */}
        <FadeIn direction="up" className="flex flex-col items-center text-center mb-8 w-full">
          <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-xl md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.3]">
            <SplitTextReveal text={t("title")} />
          </h2>
        </FadeIn>

        {/* Carousel */}
        <div className="w-full max-w-6xl mx-auto overflow-hidden" ref={emblaRef} dir={isRTL ? "rtl" : "ltr"}>
          <div className="flex -mx-4">
            {blogItems.map((item, index) => {
              const tags: string[] = t.raw(`items.${item.id}.tags`);

              return (
                <div key={`${item.id}-${index}`} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] min-w-0 px-4 flex flex-col items-center group cursor-grab active:cursor-grabbing">
                  <div className="relative group w-full h-112.5 md:h-125 rounded-[24px] overflow-hidden border border-border bg-card text-card-foreground hover:shadow-md transition-all duration-500 hover:-translate-y-2">
                    {/* Background Image (Always visible) */}
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={BlogHoverImg} 
                        alt="Blog Post Background" 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      {/* Dark Overlay for better text readability on hover */}
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between rtl:text-right ltr:text-left">
                      
                      {/* Top section: Author */}
                      <div className="flex items-center gap-3 self-start rtl:self-end">
                        <div className="flex flex-col items-end rtl:items-start ltr:items-end">
                          <FadeIn delay={0.2}>
                            <span className="text-[12px] md:text-[13px] text-white/80 transition-colors font-cairo">
                              {t("publishedBy")}
                            </span>
                          </FadeIn>
                          <SlideIn delay={0.3} direction="up">
                            <span className="text-[14px] md:text-[16px] font-bold text-white transition-all duration-300 font-cairo group-hover:-translate-y-0.5 inline-block">
                              {t("author")}
                            </span>
                          </SlideIn>
                        </div>
                        <ZoomIn delay={0.4}>
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 border border-transparent group-hover:border-primary transition-colors">
                            <Image src={EngAmrImg} alt={t("author")} className="w-full h-full object-cover" />
                          </div>
                        </ZoomIn>
                      </div>

                      {/* Bottom section: Title & Tags */}
                      <div className="flex flex-col items-start w-full">
                        <FadeIn delay={0.5}>
                          <h3 className="text-[20px] md:text-[24px] font-bold font-cairo text-white transition-all duration-300 leading-normal mb-6 group-hover:-translate-y-1">
                            {t(`items.${item.id}.title`)}
                          </h3>
                        </FadeIn>
                        
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag: string, idx: number) => (
                            <span 
                              key={idx} 
                              className="px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-semibold font-cairo bg-white/20 text-white backdrop-blur-md transition-transform duration-300 border border-white/30 group-hover:-translate-y-1 group-hover:scale-105"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
