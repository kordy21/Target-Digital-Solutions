"use client";

import { StaggerContainer, StaggerItem } from "@/components/shared/animations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PhoneIcon from "@/assets/phone.png";
import MessageIcon from "@/assets/message.png";
import LocationIcon from "@/assets/location.png";

export function ContactInfoCards() {
  const t = useTranslations("contactPage.info");

  return (
    <section className="w-full max-w-screen-2xl mx-auto px-6 md:px-24 py-16">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Location Card */}
        <StaggerItem>
          <div className="bg-background rounded-3xl p-8 flex flex-col items-center text-center h-full hover:border-primary/50 transition-colors hover:shadow-md">
            <div className="w-30 h-30 mb-6 flex items-center justify-center relative">
              <Image src={LocationIcon} alt="Location" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-cairo font-bold text-2xl text-primary mb-8">{t("location.title")}</h3>
            
            <div className="flex flex-col gap-4 w-full font-cairo">
              <div className="flex flex-col">
                <span className="text-foreground font-semibold mb-2">{t("location.company")}</span>
                <span className="text-muted-foreground text-sm leading-relaxed">{t("location.address")}</span>
              </div>
            </div>
          </div>
        </StaggerItem>

        {/* Email Card */}
        <StaggerItem>
          <div className="bg-background rounded-3xl p-8 flex flex-col items-center text-center h-full hover:border-primary/50 transition-colors hover:shadow-md">
            <div className="w-30 h-30 mb-6 flex items-center justify-center relative">
              <Image src={MessageIcon} alt="Message" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-cairo font-bold text-2xl text-primary mb-8">{t("email.title")}</h3>
            
            <div className="flex flex-col gap-4 w-full font-cairo">
              <div className="flex flex-col">
                <span className="text-foreground font-semibold mb-1">{t("email.sales")}</span>
                <span className="text-muted-foreground text-sm">{t("email.salesEmail")}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-semibold mb-1">{t("email.careers")}</span>
                <span className="text-muted-foreground text-sm">{t("email.careersEmail")}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-semibold mb-1">{t("email.support")}</span>
                <span className="text-muted-foreground text-sm">{t("email.supportEmail")}</span>
              </div>
            </div>
          </div>
        </StaggerItem>

        {/* Phone Card */}
        <StaggerItem>
          <div className="bg-background rounded-3xl p-8 flex flex-col items-center text-center h-full hover:border-primary/50 transition-colors hover:shadow-md">
            <div className="w-30 h-30 mb-6 flex items-center justify-center relative">
              <Image src={PhoneIcon} alt="Phone" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-cairo font-bold text-2xl text-primary mb-8">{t("phone.title")}</h3>
            
            <div className="flex flex-col gap-4 w-full font-cairo">
              <div className="flex flex-col">
                <span className="text-foreground font-semibold mb-1">{t("phone.sales")}</span>
                <span className="text-muted-foreground text-sm" dir="ltr">{t("phone.salesNum")}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-semibold mb-1">{t("phone.complaints")}</span>
                <span className="text-muted-foreground text-sm" dir="ltr">{t("phone.complaintsNum")}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-semibold mb-1">{t("phone.whatsapp")}</span>
                <span className="text-muted-foreground text-sm" dir="ltr">{t("phone.whatsappNum")}</span>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
