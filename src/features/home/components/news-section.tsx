"use client";

import { FadeIn, StaggerContainer, StaggerItem, ZoomIn } from "@/components/shared/animations";
import { SectionHeading } from "@/components/shared/section-heading";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

import Bubbles from "@/assets/bubbles.png";
import News1Img from "@/assets/news1.png";
import News2Img from "@/assets/news2.png";
import News3Img from "@/assets/news3.png";

const newsItems = [
  { id: "item3", image: News3Img }, // Americana
  { id: "item2", image: News2Img }, // Helwan
  { id: "item1", image: News1Img }, // Misr Travel
];

export function NewsSection() {
  const t = useTranslations("home.news");

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
        <FadeIn direction="up" className="w-full mb-0 md:mb-12">
          <SectionHeading 
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
        </FadeIn>

        {/* Cards Grid */}
        <StaggerContainer className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <StaggerItem key={item.id} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Card Container */}
              <div className="w-full bg-card text-card-foreground rounded-3xl p-4 md:p-6 border border-border mb-6 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-md">
                <ZoomIn delay={index * 0.1}>
                  <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-secondary">
                    <Image 
                      src={item.image} 
                      alt={t(`items.${item.id}.title`)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </ZoomIn>
              </div>
              
              {/* Title & Description */}
              <FadeIn delay={index * 0.1 + 0.1}>
                <h3 className="font-cairo font-bold text-lg md:text-xl text-foreground px-4 leading-relaxed group-hover:text-primary group-hover:-translate-y-1 transition-all duration-300">
                  {t(`items.${item.id}.title`)}
                </h3>
              </FadeIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
