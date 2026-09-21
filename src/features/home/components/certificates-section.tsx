"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

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
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center px-4 md:px-12 py-16">
      {/* Top Left Bubbles */}
      <div className="absolute top-0 left-0 h-1/3 pointer-events-none hidden md:block z-0 opacity-80">
        <Image 
          src={Bubbles} 
          alt="Bubbles Decoration" 
          className="h-full w-auto object-cover" 
        />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-cairo text-[18px] md:text-[22px] font-bold mb-4">
            {t("eyebrow")}
          </span>
          <h2 className="text-[28px] md:text-[40px] font-cairo font-extrabold text-foreground leading-[1.3]">
            {t("title")}
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-[24px] shadow-sm hover:shadow-md transition-shadow flex items-center justify-center p-6 md:p-8 aspect-4/3 group"
            >
              <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src={cert.image} 
                  alt="Certificate Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
