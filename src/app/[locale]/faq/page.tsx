"use client";

import Bubbles from "@/assets/bubbles.png";
import GlobalHero from "@/assets/globalHero.png";
import { StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { PageHero } from "@/components/shared/page-hero";
import { FAQItem } from "@/features/faq/components/faq-item";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FAQPage() {
  const t = useTranslations("faqPage");

  const faqs = Array.from({ length: 13 }).map((_, idx) => ({
    q: t(`questions.${idx}.q`),
    a: t(`questions.${idx}.a`),
  }));

  return (
    <main className="w-full min-h-screen relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-10 dark:opacity-20 top-[60vh]">
      </div>

      {/* Background Bubbles */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none z-0 opacity-40 dark:opacity-20 top-[70vh] right-10 h-32 md:h-64 rotate-90 hidden md:block"
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

      <PageHero 
        title={t("hero.title")} 
        subtitle={t("hero.subtitle")} 
        image={GlobalHero}
      />
      <div className="w-full mx-auto px-6 md:px-24 py-16 relative z-10">
        <StaggerContainer className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <StaggerItem key={idx}>
              <FAQItem question={faq.q} answer={faq.a} defaultOpen={idx === 0} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}


