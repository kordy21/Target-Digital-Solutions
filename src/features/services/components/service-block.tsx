"use client";

import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { InteractiveParticles } from "@/components/shared/interactive-particles";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

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

  return (
    <section className="relative w-full py-16 md:py-18 overflow-hidden">
      {/* Alternating Background with Particles */}
      {isEven && (
        <div className="absolute inset-0 z-0 bg-secondary">
          <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20">
            <InteractiveParticles 
              mode="scatter-to-shape" 
              text="T" 
              particleCount={60} 
              interactionRadius={150}
              particleColor="var(--primary)"
            />
          </div>
        </div>
      )}

      <div className="w-full mx-auto px-6 md:px-12 relative z-10">
        <div className={cn(
          "flex flex-col gap-12 lg:gap-16 items-center",
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
                  <div className="bg-card hover:shadow-lg transition-all duration-300 rounded-[24px] border border-border/40 p-8 flex flex-col items-center text-center group h-full">
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
    </section>
  );
}
