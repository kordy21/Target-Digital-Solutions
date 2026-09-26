"use client";

import { useTranslations } from "next-intl";
import Bubbles from "@/assets/bubbles.png";
import { motion } from "framer-motion";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { FadeIn, ZoomIn, SlideIn, ScaleIn } from "@/components/shared/animations";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";
import UsImage from "@/assets/us.png";

export function AboutUsSection() {
  const t = useTranslations("home.about");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative Animated Bubbles */}
      <motion.div animate={{ y: [0, 20, 0], x: [0, 30, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block top-0 left-5 h-40 md:h-60">
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div animate={{ y: [0, -20, 0], x: [0, -30, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block bottom-20 right-0 h-32 md:h-48 -rotate-45">
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-18 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-52 items-center justify-between relative z-10">
        {/* Image Section (Visual Left in RTL) */}
        <FadeIn direction="up" className="order-2 flex flex-col items-center">
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full aspect-4/3 md:aspect-16/10 lg:aspect-auto lg:h-125 group overflow-hidden rounded-3xl"
          >
            <Image 
              src={UsImage} 
              alt="About Us" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain" 
            />
            {/* Reflection Effect on Hover (Top-Left to Bottom-Right) */}
            <div className="absolute inset-0 translate-x-[-150%] translate-y-[-150%] group-hover:translate-x-[150%] group-hover:translate-y-[150%] transition-transform duration-1000 ease-in-out bg-linear-to-br from-transparent via-white/40 dark:via-white/10 to-transparent z-10" />
          </motion.div>
        </FadeIn>

        {/* Text Content (Visual Right in RTL) */}
        <div className="order-1 flex flex-col text-start">
          <ZoomIn delay={0.1}>
            <span className="text-muted-foreground font-cairo text-lg md:text-xl font-medium mb-4 block">
              {t("eyebrow")}
            </span>
          </ZoomIn>
          
          <div className="mb-4 md:mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-4.5xl font-cairo font-extrabold text-foreground leading-tight">
              <SplitTextReveal text={t("title")} />
            </h2>
          </div>
          
          <SlideIn direction="right" delay={0.3}>
            <h3 className="text-2xl md:text-3xl font-cairo font-bold text-primary mb-4">
              {t("subtitle")}
            </h3>
          </SlideIn>
          
          <ScaleIn delay={0.4}>
            <p className="text-base md:text-lg font-cairo text-muted-foreground leading-loose mb-10">
              {t("description")}
            </p>
          </ScaleIn>
          
          <FadeIn direction="up" delay={0.5}>
            <MagneticButton>
              <Button variant="outline" className="flex items-center gap-3 justify-center w-fit rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group bg-transparent">
                {t("cta")}
                {isRtl ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
