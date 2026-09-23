"use client";

import { FadeIn, ZoomIn, SlideIn, ScaleIn, FlipIn } from "@/components/shared/animations";
import GlobalHero from "@/assets/globalHero.png";
import Bubbles from "@/assets/bubbles.png";
import { PageHero } from "@/components/shared/page-hero";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { ContactInfoCards } from "@/features/contact/components/contact-info-cards";
import { ContactFormSection } from "@/features/contact/components/contact-form-section";
import { ContactMapSection } from "@/features/contact/components/contact-map-section";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  return (
    <main className="w-full min-h-screen relative overflow-hidden bg-background">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20 top-[60vh]">
      </div>

      {/* Background Bubbles */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none z-0 opacity-40 dark:opacity-20 top-[90vh] right-10 h-32 md:h-64 rotate-90 hidden md:block"
      >
        <Image src={Bubbles} alt="Bubbles" style={{ width: 'auto', height: 'auto' }} className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute pointer-events-none z-0 opacity-30 dark:opacity-10 bottom-80 left-10 h-40 md:h-56 -rotate-90 hidden md:block"
      >
        <Image src={Bubbles} alt="Bubbles" style={{ width: 'auto', height: 'auto' }} className="h-full w-auto object-contain" />
      </motion.div>

      <PageHero 
        title={t("hero.title")} 
        subtitle={t("hero.subtitle")} 
        image={GlobalHero}
      />
      
      <div className="relative z-10 w-full flex flex-col items-center bg-secondary">
        <ScaleIn delay={0.1}><ContactInfoCards /></ScaleIn>
        <FadeIn delay={0.1} direction="up"><ContactFormSection /></FadeIn>
        <ZoomIn delay={0.1}><ContactMapSection /></ZoomIn>
      </div>
    </main>
  );
}
