"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import Serv1 from "@/assets/serv1.png";
import Serv2 from "@/assets/serv2.png";
import Serv3 from "@/assets/serv3.png";
import Serv4 from "@/assets/serv4.png";
import { cn } from "@/lib/utils";

type TabKey = "web" | "hosting" | "programming" | "digital" | "solutions" | "systems";

const TABS: TabKey[] = ["web", "hosting", "programming", "digital", "solutions", "systems"];

export function ServicesSection() {
  const t = useTranslations("home.services");
  const [activeTab, setActiveTab] = useState<TabKey>("web");

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
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto bg-background rounded-3xl border border-border shadow-sm p-8 md:p-12 lg:p-16 flex flex-col items-center">
        
        {/* Header Section */}
        <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-2">
          {t("eyebrow")}
        </span>
        <h2 className="text-[28px] md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.2] text-center mb-16">
          {t("title")}
        </h2>

        {/* Content Layout */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Tabs Section (Visual Right in RTL, Visual Left in LTR) - ordered first in DOM so it shows up appropriately depending on dir */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-start font-cairo text-[20px] md:text-[24px] transition-colors duration-200",
                  activeTab === tab
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground font-semibold"
                )}
              >
                {t(`tabs.${tab}`)}
              </button>
            ))}
          </div>

          {/* Cards Grid Section */}
          <div className="w-full lg:w-2/3 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {cards.map((card) => (
                <div 
                  key={card.id} 
                  className="bg-secondary rounded-[20px] p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1"
                >
                  <div className="relative w-32 h-32 mb-6">
                    <Image
                      src={card.image}
                      alt={t(`cards.${card.id}.title`)}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-cairo font-bold text-[20px] text-foreground mb-3">
                    {t(`cards.${card.id}.title`)}
                  </h4>
                  <p className="font-cairo text-[14px] text-muted-foreground leading-[1.6]">
                    {t(`cards.${card.id}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
