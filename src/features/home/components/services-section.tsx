"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { FadeIn, ZoomIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";

import Serv1 from "@/assets/serv1.png";
import Serv2 from "@/assets/serv2.png";
import Serv3 from "@/assets/serv3.png";
import Serv4 from "@/assets/serv4.png";
import { cn } from "@/lib/utils";

type TabKey = "web" | "programming" | "digital" | "solutions" | "systems" | "hosting";

const TABS: TabKey[] = ["web", "programming", "digital", "solutions", "systems" , "hosting"];

export function ServicesSection() {
  const t = useTranslations("home.services");
  const [activeTab, setActiveTab] = useState<TabKey>("web");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  // Since we only have images for the first tab, we'll reuse them for all tabs for now.
  const getCardsData = () => [
    {
      id: "ui_design",
      image: Serv1,
    },
    {
      id: "web_dev",
      image: Serv2,
    },
    {
      id: "app_dev",
      image: Serv3,
    },
    {
      id: "ecommerce",
      image: Serv4,
    },
  ];

  const cards = getCardsData();

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
      <div className="w-full bg-background rounded-3xl border border-border shadow-sm p-8 md:p-12 lg:p-16 flex flex-col items-center">
        
        {/* Header Section */}
        <FadeIn direction="up" className="flex flex-col items-center w-full mb-6">
          <span className="text-primary font-cairo text-lg md:text-[22px] font-bold mb-2 block">
            {t("eyebrow")}
          </span>
          <h2 className="text-2xl md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.2] text-center mb-8">
            <SplitTextReveal text={t("title")} />
          </h2>
        </FadeIn>

        {/* Content Layout */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Tabs Section (Visual Right in RTL, Visual Left in LTR) - ordered first in DOM so it shows up appropriately depending on dir */}
          <div className="w-full lg:w-1/3 relative flex">
            {/* Left Arrow (Mobile Only) */}
            <button 
              onClick={() => scrollTabs(-200)}
              className="cursor-pointer lg:hidden absolute -left-8 z-20 w-8 h-8 flex items-center justify-center text-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div 
              ref={scrollContainerRef}
              className="w-full overflow-x-auto lg:overflow-visible pb-0 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar:none]"
            >
              <div className="grid grid-rows-2 grid-flow-col auto-cols-max lg:flex lg:flex-col gap-3 lg:gap-6 w-max lg:w-full px-6 lg:px-0"> 
                {TABS.map((tab, index) => {
                  const animationType = index % 3;
                  const content = (
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "text-start font-cairo text-[16px] lg:text-[24px] transition-all duration-300 whitespace-nowrap px-6 py-2.5 lg:px-0 lg:py-0 rounded-full lg:rounded-none",
                        activeTab === tab
                          ? "bg-primary text-primary-foreground lg:text-primary lg:bg-transparent font-bold shadow-md lg:shadow-none"
                          : "bg-secondary text-muted-foreground lg:bg-transparent hover:text-foreground font-semibold hover:bg-secondary/80 lg:hover:bg-transparent"
                      )}
                    >
                      {t(`tabs.${tab}`)}
                    </button>
                  );

                  return animationType === 0 ? (
                    <ZoomIn key={tab} className="shrink-0 snap-start" delay={index * 0.1}>
                      {content}
                    </ZoomIn>
                  ) : animationType === 1 ? (
                    <SlideIn direction="up" key={tab} className="shrink-0 snap-start" delay={index * 0.1}>
                      {content}
                    </SlideIn>
                  ) : (
                    <FadeIn direction="none" key={tab} className="shrink-0 snap-start" delay={index * 0.1}>
                      {content}
                    </FadeIn>
                  );
                })}
              </div>
            </div>

            {/* Right Arrow (Mobile Only) */}
            <button 
              onClick={() => scrollTabs(200)}
              className="cursor-pointer lg:hidden absolute -right-8 z-20 w-8 h-8 flex items-center justify-center text-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Grid Section */}
          <div className="w-full lg:w-2/3 flex flex-col items-center">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {cards.map((card, index) => (
                <StaggerItem key={card.id}>
                  <div 
                    className="bg-secondary rounded-[20px] p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group cursor-default h-full"
                  >
                    <ZoomIn delay={index * 0.1}>
                      <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 transition-transform duration-500 group-hover:scale-110">
                        <Image
                          src={card.image}
                          alt={t(`cards.${card.id}.title`)}
                          fill
                          sizes="128px"
                          className="object-contain"
                        />
                      </div>
                    </ZoomIn>
                    <FadeIn delay={index * 0.1 + 0.1}>
                      <h4 className="font-cairo font-bold text-[20px] text-foreground mb-3">
                        {t(`cards.${card.id}.title`)}
                      </h4>
                    </FadeIn>
                    <SlideIn delay={index * 0.1 + 0.2} direction="up">
                      <p className="font-cairo text-[14px] text-muted-foreground leading-[1.6]">
                        {t(`cards.${card.id}.description`)}
                      </p>
                    </SlideIn>
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
