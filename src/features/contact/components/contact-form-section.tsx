"use client";

import { FadeIn } from "@/components/shared/animations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LionBg from "@/assets/lioncta.png";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function ContactFormSection() {
  const t = useTranslations("contactPage.form");

  return (
    <section className="w-full mx-auto px-6 md:px-20 py-16">
      <div className="w-full mb-12">
        <SectionHeading 
          eyebrow={t("eyebrow")}
          title={t("title")}
        />
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-12 items-center justify-between">
        {/* Form */}
        <div className="w-full md:w-1/2">
          <FadeIn direction="up">
            <form className="flex flex-col gap-4 font-cairo" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder={t("firstName")} 
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground" 
              />
              <input 
                type="text" 
                placeholder={t("lastName")} 
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground" 
              />

              <input 
                type="email" 
                placeholder={t("email")} 
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground rtl:text-right" 
              />
              
              <input 
                type="tel" 
                placeholder={t("phone")} 
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground rtl:text-right" 
              />
              
              <input 
                type="text" 
                placeholder={t("company")} 
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground" 
              />
              
              <input 
                type="text" 
                placeholder={t("subject")} 
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground" 
              />
              
              <textarea 
                placeholder={t("message")} 
                rows={4}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none" 
              />

              <Button 
                type="submit" 
                variant="outline"
                className="w-32 rounded-3xl mt-2 flex items-center justify-center gap-2 self-start group border-foreground text-foreground hover:bg-foreground hover:text-background h-12 text-base font-bold font-cairo"
              >
                {t("submit")} <span className="rtl:rotate-180 inline-block transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">&rarr;</span>
              </Button>
            </form>
          </FadeIn>
        </div>

        {/* Lion Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <FadeIn direction="left" delay={0.2}>
            <Image 
              src={LionBg} 
              alt="Contact Illustration" 
              className="w-full object-contain"
            />
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
