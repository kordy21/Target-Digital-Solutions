"use client";

import Logo from "@/assets/TargetNavBar.png";
import { ZoomIn } from "@/components/shared/animations";
import { InteractiveGrid } from "@/components/shared/interactive-grid";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function InteractiveLogoSection() {
  const t = useTranslations("InteractiveLogo");

  return (
    <section className="relative w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
      {/* 1. اللوجو والعبارة التسويقية في الأعلى مع أنيميشن مستمر (Floating) */}
      <motion.div 
        className="relative z-20 flex flex-col items-center"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >

        <ZoomIn delay={0.4}>
          <div className="relative group overflow-hidden cursor-pointer">
            {/* اللوجو */}
            <Image 
              src={Logo} 
              alt="Target Digital Solution Logo" 
              width={180} 
              height={180}
              className="object-contain dark:brightness-0 dark:invert transition-transform duration-700 group-hover:scale-105"
            />
            {/* تأثير الانعكاس (Shine/Reflection) عند الهوفر */}
            <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/50 dark:via-white/20 to-transparent skew-x-12 z-10 transform-gpu will-change-transform" />
          </div>
        </ZoomIn>

        <ZoomIn delay={0.6}>
          <MagneticButton>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="flex items-center gap-3 justify-center mt-12 w-fit mx-auto rounded-full px-8 h-12 font-cairo text-base border-primary text-black dark:text-white hover:bg-primary hover:text-primary-foreground group
bg-transparent">
                {t("contactUs")}
              </Button>
            </Link>
          </MagneticButton>
        </ZoomIn>
      </motion.div>

      {/* 2. التأثير (Interactive Grid) في الأسفل */}
      <div className="relative w-full h-[40vh] -mt-50 flex flex-col items-center justify-center">
        {/* حواف ناعمة للسكشن من فوق وتحت عشان تندمج مع الصفحة */}
        <div className="absolute inset-0 z-10 pointer-events-none" />
        <InteractiveGrid 
          particleColor="rgba(59, 130, 246, 1)" 
          highlightColor="transparent" 
          particleBaseSize={3} 
          particleSpacing={17} 
          interactionRadius={70}
        />
      </div>
    </section>
  );
}
