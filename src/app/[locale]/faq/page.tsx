"use client";

import Bubbles from "@/assets/bubbles.png";
import GlobalHero from "@/assets/globalHero.png";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/shared/animations";
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
      <div className="absolute inset-0 z-0 pointer-events-auto top-[60vh]">
      </div>

      {/* Background Bubbles */}
      <motion.div 
        animate={{ y: [], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 top-[70vh] right-10 h-32 md:h-64 rotate-90 hidden md:block will-change-transform"
      >
        <Image src={Bubbles} alt="Bubbles" style={{ width: 'auto', height: 'auto' }} className="h-full w-auto object-contain" />
      </motion.div>
      <motion.div 
        animate={{ y: [], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="opacity-40 dark:opacity-20 absolute pointer-events-none z-0 bottom-20 left-10 h-40 md:h-56 -rotate-90 hidden md:block will-change-transform"
      >
        <Image src={Bubbles} alt="Bubbles" style={{ width: 'auto', height: 'auto' }} className="h-full w-auto object-contain" />
      </motion.div>

      <PageHero 
        title={t("hero.title")} 
        subtitle={t("hero.subtitle")} 
        image={GlobalHero}
      />
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-24 py-12 md:py-24 relative z-10">
        <FadeIn direction="up" delay={0.2} className="w-full">
          <StaggerContainer className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <StaggerItem key={idx}>
                <FAQItem question={faq.q} answer={faq.a} defaultOpen={idx === 0} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </main>
  );
}


