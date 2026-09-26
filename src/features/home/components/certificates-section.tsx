"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/shared/animations";
import { motion } from "framer-motion";

import Bubbles from "@/assets/bubbles.png";

import Dell from "@/assets/Dell.png";
import Android from "@/assets/android.png";
import Aws from "@/assets/aws.png";
import Comodo from "@/assets/comodo.png";
import CPanel from "@/assets/cpanel.png";
import DirectAdmin from "@/assets/directadmin.png";
import GeoTrust from "@/assets/geotrust.png";
import GoDaddy from "@/assets/godaddy.png";
import Google from "@/assets/google.png";
import Ios from "@/assets/ios.png";
import Iso1 from "@/assets/iso1.png";
import Iso2 from "@/assets/iso2.png";
import Kaparesky from "@/assets/kaparesky.png";
import Linux from "@/assets/linux.png";
import Microsoft from "@/assets/microsoft.png";
import Mysql from "@/assets/mysql.png";
import Norton from "@/assets/norton.png";
import Plesx from "@/assets/plesx.png";
import Ssl from "@/assets/ssl.png";
import { SplitTextReveal } from "@/components/shared/animations";

const certificates = [
  // Row 1 (Visual Right to Left)
  { id: "directadmin1", image: DirectAdmin },
  { id: "ssl", image: Ssl },
  { id: "cpanel", image: CPanel },
  { id: "godaddy", image: GoDaddy },
  { id: "mysql", image: Mysql },
  
  // Row 2
  { id: "iso2", image: Iso2 },
  { id: "iso1", image: Iso1 },
  { id: "linux", image: Linux },
  { id: "comodo", image: Comodo },
  { id: "norton", image: Norton },

  // Row 3
  { id: "kaparesky", image: Kaparesky },
  { id: "dell", image: Dell },
  { id: "aws", image: Aws },
  { id: "google", image: Google },
  { id: "plesx", image: Plesx },

  // Row 4
  { id: "microsoft", image: Microsoft },
  { id: "android", image: Android },
  { id: "ios", image: Ios },
  { id: "geotrust", image: GeoTrust },
  { id: "directadmin2", image: DirectAdmin },
];

export function CertificatesSection() {
  const t = useTranslations("home.certificates");

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Top Left Bubbles */}
      <motion.div 
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1], rotate: [0, -2, 2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-40 dark:opacity-20 absolute top-0 left-0 h-1/3 pointer-events-none hidden md:block z-0 will-change-transform"
      >
        <Image 
          src={Bubbles} 
          alt="Bubbles Decoration"
          style={{ width: 'auto', height: 'auto' }} 
          className="h-full w-auto object-cover" 
        />
      </motion.div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 flex flex-col items-center relative z-10">
        {/* Section Header */}
        <FadeIn direction="up" className="w-full">
            <div className={`flex flex-col w-full items-center text-center`}>
              <span className="text-primary font-cairo text-lg md:text-xl font-bold w-full">
                {t("eyebrow")}
              </span>
              <div className={`w-full flex flex-col items-center text-center mb-2 md:mb-10`}>
                <h2 className="mb-6 text-xl md:text-4xl lg:text-4.5xl font-cairo font-extrabold text-foreground leading-tight">
    <SplitTextReveal text={t("title")} />
</h2>
              </div>
            </div>
        </FadeIn>

        {/* Certificates Rows */}
        <div className="w-full relative py-4 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {certificates.map((cert, index) => {
              const rowIndex = Math.floor(index / 5);
              const direction = rowIndex % 2 === 0 ? "right" : "left";
              
              return (
                <FadeIn key={cert.id} direction={direction} delay={0.05 * (index % 5)} className="w-full h-full">
                  <div 
                    className="bg-background text-card-foreground rounded-[24px] hover:shadow-md hover:-translate-y-2 transition-all duration-300 flex items-center justify-center p-6 md:p-8 aspect-4/3 group w-full border border-border/50 h-full"
                  >
                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                      <Image 
                        src={cert.image} 
                        alt="Certificate Logo"
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
