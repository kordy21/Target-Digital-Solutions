"use client";

import Bubbles from "@/assets/bubbles.png";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { InteractiveParticles } from "@/components/shared/interactive-particles";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import Client1 from "@/assets/client1.png";
import Client2 from "@/assets/client2.png";
import Client3 from "@/assets/client3.png";
import { SplitTextReveal } from "@/components/shared/split-text-reveal";

const CustomPlayIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <mask id="play-mask">
        <rect width="100" height="100" fill="white" />
        <path d="M42 33 L64 50 L42 67 Z" fill="black" />
      </mask>
    </defs>
    <g mask="url(#play-mask)">
      <circle cx="50" cy="50" r="32" fill="white" />
      <rect x="67" y="18" width="12" height="12" fill="white" transform="rotate(45 73 24)" />
    </g>
  </svg>
);

export function ClientVideosSection() {
  const t = useTranslations("clientsPage.videos");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const clients = [
    {
      id: "client1",
      image: Client1,
    },
    {
      id: "client2",
      image: Client2,
    },
    {
      id: "client3",
      image: Client3,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20">
        <InteractiveParticles 
          mode="scatter-to-shape" 
          text="▶" 
          particleCount={80} 
          interactionRadius={150}
          particleColor="var(--primary)"
        />
      </div>

      {/* Background Bubbles */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none z-0 opacity-40 dark:opacity-20 top-20 right-10 h-32 md:h-64 rotate-90 hidden md:block"
      >
        <Image src={Bubbles} alt="Bubbles" style={{ width: 'auto', height: 'auto' }} className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute pointer-events-none z-0 opacity-30 dark:opacity-10 bottom-20 left-10 h-40 md:h-56 -rotate-90 hidden md:block"
      >
        <Image src={Bubbles} alt="Bubbles" style={{ width: 'auto', height: 'auto' }} className="h-full w-auto object-contain" />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="w-full rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col items-center">
          
          {/* Header Section */}
          <FadeIn direction="up" className="flex flex-col items-center w-full mb-12">
            <span className="text-primary font-cairo text-lg md:text-[22px] font-bold mb-2 block text-center">
              {t("eyebrow")}
            </span>
            <h2 className="text-2xl md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.4] text-center max-w-3xl">
              <SplitTextReveal text={t("title")} />
            </h2>
          </FadeIn>

          {/* Videos Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-12">
            {clients.map((client) => (
              <StaggerItem key={client.id} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="relative w-full aspect-4/5 rounded-[24px] overflow-hidden mb-6 bg-secondary">
                  <Image 
                    src={client.image} 
                    alt={t(`${client.id}.name`)} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center"
                    >
                      <CustomPlayIcon className="w-16 h-16 md:w-24 md:h-24 drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]" />
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-cairo font-bold text-foreground mb-2">
                  {t(`${client.id}.name`)}
                </h3>
                <p className="text-muted-foreground font-cairo text-base md:text-lg">
                  {t(`${client.id}.role`)}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Action Button */}
          <button className="flex items-center gap-3 px-8 py-3 rounded-full border border-primary text-foreground hover:bg-primary hover:text-white transition-colors font-cairo text-[16px] font-bold">
            {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            {t("learnMore")}
          </button>

        </div>
      </div>
    </section>
  );
}
