"use client";

import { FadeIn } from "@/components/shared/animations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LionBg from "@/assets/lioncta.png";

export function ContactFormSection() {
  const t = useTranslations("contactPage.form");

  return (
    <section className="w-full mx-auto px-6 md:px-20 py-16">
      <div className="text-center mb-12 font-cairo">
        <h4 className="text-primary font-bold text-lg mb-2">{t("eyebrow")}</h4>
        <h2 className="text-foreground font-extrabold text-3xl md:text-4xl">{t("title")}</h2>
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

              <button 
                type="submit" 
                className="w-32 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background font-bold py-3 px-6 rounded-3xl transition-colors mt-2 flex items-center justify-center gap-2 self-start group"
              >
                {t("submit")} <span className="rtl:rotate-180 inline-block transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">&rarr;</span>
              </button>
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
