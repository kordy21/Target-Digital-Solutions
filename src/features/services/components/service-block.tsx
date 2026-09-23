"use client";

import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { InteractiveParticles } from "@/components/shared/interactive-particles";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Bubbles from "@/assets/bubbles.png";

interface ServiceCard {
  image: string | StaticImageData;
  title: string;
  desc: string;
}

interface ServiceData {
  id: number;
  title: string;
  desc1: string;
  desc2: string;
  cards: ServiceCard[];
}

interface ServiceBlockProps {
  service: ServiceData;
  index: number;
}

export function ServiceBlock({ service, index }: ServiceBlockProps) {
  const t = useTranslations("servicesPage");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const isEven = index % 2 === 0;

  const bubble1Styles = [
    "top-10 right-10 h-32 md:h-48",
    "top-20 left-20 h-24 md:h-32 rotate-90",
    "top-1/4 right-0 h-40 md:h-56 -rotate-90",
    "top-10 left-1/3 h-32 md:h-48 rotate-180",
    "top-1/3 right-10 h-24 md:h-32",
    "top-0 left-10 h-40 md:h-64 rotate-90",
  ];

  const bubble2Styles = [
    "bottom-10 left-10 h-40 md:h-64",
    "bottom-20 right-20 h-32 md:h-48 rotate-180",
    "bottom-1/4 left-0 h-24 md:h-40 rotate-90",
    "bottom-10 right-1/3 h-40 md:h-56 -rotate-90",
    "bottom-1/3 left-10 h-32 md:h-48 rotate-180",
    "bottom-0 right-10 h-24 md:h-32",
  ];

  const currentBubble1 = bubble1Styles[index % bubble1Styles.length];
  const currentBubble2 = bubble2Styles[index % bubble2Styles.length];

  return (
    <section className="relative w-full py-12 overflow-hidden">
      {/* Alternating Background with Particles */}
      {isEven && (
        <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20">
          <InteractiveParticles 
            mode="scatter-to-shape" 
            text="T" 
            particleCount={60} 
            interactionRadius={150}
            particleColor="var(--primary)"
          />
        </div>
      )}

      {/* Decorative Animated Bubbles */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "absolute pointer-events-none z-0 opacity-40 dark:opacity-20 hidden md:block",
          currentBubble1
        )}
      >
        <Image src={Bubbles} alt="Bubbles Decoration" className="h-full w-auto object-contain" style={{ width: 'auto', height: 'auto' }} />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={cn(
          "absolute pointer-events-none z-0 opacity-30 dark:opacity-10 hidden md:block",
          currentBubble2
        )}
      >
        <Image src={Bubbles} alt="Bubbles Decoration" className="h-full w-auto object-contain" style={{ width: 'auto', height: 'auto' }} />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="w-full bg-background rounded-3xl border border-border shadow-sm p-8 md:p-12 lg:p-16 flex flex-col items-center">
          <div className={cn(
            "flex flex-col gap-12 lg:gap-16 items-center w-full",
            !isEven ? "lg:flex-row-reverse" : "lg:flex-row"
          )}>
          
          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col text-start">
            <FadeIn direction={!isEven ? "right" : "left"}>
              <h2 className="text-2xl md:text-[32px] font-cairo font-bold text-primary mb-6 leading-[1.4]">
                {service.title}
              </h2>
              <p className="text-muted-foreground font-cairo text-[16px] md:text-[18px] leading-[1.8] mb-6">
                {service.desc1}
              </p>
              <p className="text-muted-foreground font-cairo text-[16px] md:text-[18px] leading-[1.8] mb-10">
                {service.desc2}
              </p>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-3 px-8 py-3 rounded-full border border-primary text-foreground hover:bg-primary hover:text-white transition-colors font-cairo text-[16px] font-bold">
                  {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                  {t("learnMore")}
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Cards Side */}
          <div className="w-full lg:w-1/2">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {service.cards.map((card, cardIndex) => (
                <StaggerItem key={cardIndex}>
                  <div className="bg-secondary hover:shadow-lg transition-all duration-300 rounded-[24px] border border-border/40 p-8 flex flex-col items-center text-center group h-full">
                    {/* Image */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: cardIndex * 0.2 }}
                      className="relative w-32 h-32 md:w-40 md:h-40 mb-6 flex justify-center items-center"
                    >
                      <Image 
                        src={card.image} 
                        alt={card.title} 
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 128px, 160px"
                      />
                    </motion.div>
                    
                    {/* Content */}
                    <h3 className="text-[20px] md:text-[22px] font-cairo font-bold text-foreground mb-4">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground font-cairo text-[14px] leading-[1.8]">
                      {card.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
