"use client";

import { FadeIn, SlideIn, StaggerContainer, StaggerItem, ZoomIn } from "@/components/shared/animations";
import { SectionHeading } from "@/components/shared/section-heading";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";

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
      <div className="w-full bg-background rounded-3xl border border-border p-8 md:p-12 lg:p-16 flex flex-col items-center hover:shadow-md transition-shadow duration-300">
        
        {/* Header Section */}
        <FadeIn direction="up" className="w-full mb-0 md:mb-12">
          <SectionHeading 
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
        </FadeIn>

        {/* Content Layout */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Tabs Section (Visual Right in RTL, Visual Left in LTR) - ordered first in DOM so it shows up appropriately depending on dir */}
          <div className="w-full lg:w-1/3 relative flex">
            <div 
              ref={scrollContainerRef}
              className="w-full"
            >
              <div className="flex flex-col gap-4 lg:gap-6 w-full"> 
                {TABS.map((tab, index) => {
                  const animationType = index % 3;
                  const content = (
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "text-start font-cairo text-base md:text-lg lg:text-2xl transition-all duration-300 whitespace-nowrap",
                        activeTab === tab
                          ? "text-primary font-bold"
                          : "text-muted-foreground hover:text-foreground font-semibold"
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
          </div>

          {/* Cards Grid Section */}
          <div className="w-full lg:w-2/3 flex flex-col items-center">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {cards.map((card, index) => (
                <StaggerItem key={card.id}>
                  <div 
                    className="bg-secondary rounded-[20px] p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-md group cursor-default h-full"
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
                      <h4 className="font-cairo font-bold text-xl text-foreground mb-3">
                        {t(`cards.${card.id}.title`)}
                      </h4>
                    </FadeIn>
                    <SlideIn delay={index * 0.1 + 0.2} direction="up">
                      <p className="font-cairo text-sm text-muted-foreground leading-relaxed">
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
