"use client";

import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Bubbles from "@/assets/bubbles.png";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";

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
    <section className="relative w-full overflow-hidden">
      {/* Alternating Background with Particles */}

      {/* Decorative Animated Bubbles */}
      <motion.div 
        animate={{ y: [], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "absolute pointer-events-none z-0 opacity-40 dark:opacity-20 hidden md:block",
          currentBubble1
        )}
      >
        <Image src={Bubbles} alt="Bubbles Decoration" className="h-full w-auto object-contain" style={{ width: 'auto', height: 'auto' }} />
      </motion.div>

      <motion.div 
        animate={{ y: [], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={cn(
          "absolute pointer-events-none z-0  dark:hidden md:block",
          currentBubble2
        )}
      >
        <Image src={Bubbles} alt="Bubbles Decoration" className="h-full w-auto object-contain" style={{ width: 'auto', height: 'auto' }} />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-8 md:px-18 relative z-10">
        <div className="w-full flex flex-col items-center">
          <div className={cn(
            "flex flex-col gap-12 lg:gap-16 items-center w-full",
            !isEven ? "lg:flex-row-reverse" : "lg:flex-row"
          )}>
          
          {/* Text Side */}
          <div className="w-full lg:w-[45%] flex flex-col text-start">
            <FadeIn direction={!isEven ? "right" : "left"}>
              <h2 className="text-2xl md:text-3xl font-cairo font-bold text-primary mb-6 leading-snug hover:-translate-y-1 transition-transform duration-300 cursor-default">
                {service.title}
              </h2>
              <p className="text-muted-foreground font-cairo text-base md:text-lg leading-relaxed mb-6 hover:-translate-y-1 transition-transform duration-300 cursor-default">
                {service.desc1}
              </p>
              <p className="text-muted-foreground font-cairo text-base md:text-lg leading-relaxed mb-10 hover:-translate-y-1 transition-transform duration-300 cursor-default">
                {service.desc2}
              </p>
              
              <div className="flex items-center gap-4">
                <MagneticButton>
                  <Button variant="outline" className="flex items-center gap-3 justify-center w-fit rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group bg-transparent">
                    <span>{t("learnMore")}</span>
                    {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
                  </Button>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          {/* Cards Side */}
          <div className="w-full lg:w-1/2">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {service.cards.map((card, cardIndex) => (
                <StaggerItem key={cardIndex}>
                  <div className="bg-background hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-[24px] border border-border p-8 flex flex-col items-center text-center group h-full">
                    {/* Image */}
                    <motion.div 
                      animate={{ y: [], x: [0, 15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: cardIndex * 0.2 }}
                      className="relative w-26 h-26 mb-2 flex justify-center items-center"
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
                    <h3 className="text-xl md:text-xl font-cairo font-bold text-foreground mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground font-cairo text-sm leading-relaxed group-hover:-translate-y-1 transition-transform duration-300 delay-75">
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
