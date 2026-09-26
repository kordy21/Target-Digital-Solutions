"use client";

import Image from "next/image";import Bubbles from "@/assets/bubbles.png";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/shared/animations";
import { Play } from "lucide-react";

import AboutVideo from "@/assets/aboutVedio.png";

export function VideoSection() {
  const t = useTranslations("aboutPage.video");

  return (
    <section className="relative w-full overflow-hidden">
      {/* Decorative Animated Bubbles */}
      <motion.div animate={{ y: [0, -40, 0], x: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block top-20 right-10 h-24 md:h-32 will-change-transform">
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div animate={{ y: [0, 30, 0], x: [0, 10, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block bottom-0 left-20 h-32 md:h-40 rotate-180 will-change-transform">
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
        <FadeIn direction="up">
          <div className="relative w-full aspect-video md:aspect-21/9 rounded-[24px] overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300">
            {/* Background Image */}
            <Image 
              src={AboutVideo} 
              alt={t("title")}
              fill
              sizes="(max-width: 1536px) 100vw, 1536px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

            {/* Play Button and Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center mb-6 md:mb-8 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary ml-1 md:ml-2" />
              </div>
              
              <h3 className="text-white font-cairo text-[18px] md:text-[24px] font-bold text-center max-w-3xl drop-shadow-md">
                {t("title")}
              </h3>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
