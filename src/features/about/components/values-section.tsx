"use client";

import Image from "next/image";
import Bubbles from "@/assets/bubbles.png";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { getValues } from "../data/about-data";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function ValuesSection() {
  const t = useTranslations("aboutPage.values");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const values = getValues(t);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Decorative Animated Bubbles */}
      <motion.div animate={{ y: [0, 40, 0], x: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block top-10 left-10 h-32 md:h-48 rotate-45">
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div animate={{ y: [0, -30, 0], x: [0, -15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 hidden md:block bottom-10 right-10 h-40 md:h-64 -rotate-90">
        <Image src={Bubbles} alt="Bubbles" className="h-full w-auto object-contain" />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
        {/* Grid and routing wrapper */}

        <div className="flex flex-col relative z-10">
          {values.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.id}
                className="relative flex flex-col lg:flex-row items-center py-12 group"
              >
                {/* Desktop Snake Line Border Segment */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "calc(100% + 4px)", opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={cn(
                    "absolute top-0 hidden lg:block z-[-1] border-primary border-dashed",
                    // Odd indices (0, 2) -> Left side curve
                    // Even indices (1, 3) -> Right side curve
                    isEven 
                      ? "right-1/2 left-0 border-4 border-r-0 rounded-l-full" 
                      : "left-1/2 right-0 border-4 border-l-0 rounded-r-full"
                  )}
                />

                {/* Mobile Vertical Line Segment */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "100%", opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute left-1/2 top-0 w-0.5 border-l-4 border-dashed border-primary/40 -translate-x-1/2 lg:hidden z-[-1]" 
                />

                {/* Content Container (flex-row for even, flex-row-reverse for odd to match screenshot in RTL) */}
                <div className={cn(
                  "flex w-full flex-col lg:flex-row items-center gap-8 lg:gap-16 px-10",
                  !isEven ? "lg:flex-row-reverse" : ""
                )}>
                  {/* Image */}
                  <FadeIn 
                    direction={isEven ? "left" : "right"} 
                    className="w-full lg:w-1/2 flex justify-center"
                  >
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        sizes="(max-width: 768px) 192px, 256px"
                        className="object-contain drop-shadow-xl"
                      />
                    </div>
                  </FadeIn>

                  {/* Text */}
                  <FadeIn 
                    direction={isEven ? "right" : "left"} 
                    className="w-full flex flex-col text-center lg:text-start"
                  >
                    <h3 className="text-xl md:text-4xl font-cairo font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-lg font-cairo text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>

        <MagneticButton>
          <Button 
            variant="outline" 
            className="flex items-center gap-3 justify-center mt-12 w-fit mx-auto rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group"
          >
            {t("cta")}
            {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
          </Button>
        </MagneticButton>
      </div>
    </section>
  );
}
