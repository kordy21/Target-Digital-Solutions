"use client";

import Bubbles from "@/assets/bubbles.png";
import GlobalHero from "@/assets/globalHero.png";
import { FadeIn, ScaleIn, ZoomIn } from "@/components/shared/animations";
import { PageHero } from "@/components/shared/page-hero";
import { ContactFormSection } from "@/features/contact/components/contact-form-section";
import { ContactInfoCards } from "@/features/contact/components/contact-info-cards";
import { ContactMapSection } from "@/features/contact/components/contact-map-section";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  return (
    <main className="w-full min-h-screen relative overflow-hidden bg-background">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-auto top-[60vh]">
      </div>

      {/* Background Bubbles */}
      <motion.div 
        animate={{ y: [], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 top-[90vh] right-10 h-32 md:h-64 rotate-90 hidden md:block will-change-transform"
      >
        <Image src={Bubbles} alt="Bubbles" style={{ width: 'auto', height: 'auto' }} className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 bottom-80 left-10 h-40 md:h-56 -rotate-90 hidden md:block will-change-transform"
      >
        <Image src={Bubbles} alt="Bubbles" style={{ width: 'auto', height: 'auto' }} className="h-full w-auto object-contain" />
      </motion.div>

      <PageHero 
        title={t("hero.title")} 
        subtitle={t("hero.subtitle")} 
        image={GlobalHero}
      />
      
      <div className="relative z-10 w-full flex flex-col items-center bg-secondary pt-12 md:pt-24 gap-12 md:gap-24">
        <ScaleIn delay={0.1} className="w-full"><ContactInfoCards /></ScaleIn>
        <FadeIn delay={0.1} direction="up" className="w-full"><ContactFormSection /></FadeIn>
        <ZoomIn delay={0.1} className="w-full"><ContactMapSection /></ZoomIn>
      </div>
    </main>
  );
}
