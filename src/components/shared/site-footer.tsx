"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Mail 
} from "lucide-react";
import FooterBg from "@/assets/footer.png";
import TargetFooterLogo from "@/assets/targetfooter.png";
import { Link } from "@/i18n/routing";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/shared/animations";

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="relative w-full text-white overflow-hidden">
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          backgroundImage: `url(${FooterBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative z-30 w-full mx-auto px-6 md:px-20 py-16 lg:py-24">
        {/* Top Section - 5 Columns */}
        <StaggerContainer delayChildren={0.2} staggerChildren={0.15} className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 rtl:space-x-reverse">
          
          {/* Column 1: Logo & Socials */}
          <StaggerItem className="flex flex-col items-start lg:w-1/5 shrink-0 text-start">
            <div className="w-48 h-auto mb-6">
              <Image 
                src={TargetFooterLogo} 
                alt="Target Digital Solutions" 
                className="w-full h-auto object-contain" 
              />
            </div>
            <p className="font-cairo text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-50">
              {t("desc")}
            </p>
            <div className="flex items-center justify-start gap-3">
              <SocialIcon><FacebookIcon className="w-4 h-4" /></SocialIcon>
              <SocialIcon><TwitterIcon className="w-4 h-4" /></SocialIcon>
              <SocialIcon><InstagramIcon className="w-4 h-4" /></SocialIcon>
              <SocialIcon><Phone className="w-4 h-4" /></SocialIcon>
              <SocialIcon><MessageCircle className="w-4 h-4" /></SocialIcon>
            </div>
          </StaggerItem>

          {/* Column 2: Services */}
          <StaggerItem className="flex flex-col lg:w-1/6">
            <h4 className="font-cairo font-bold text-lg mb-6 text-white">{t("services")}</h4>
            <div className="flex flex-col gap-4">
              <FooterListLink>{t("servicesList.webDev")}</FooterListLink>
              <FooterListLink>{t("servicesList.hosting")}</FooterListLink>
              <FooterListLink>{t("servicesList.programming")}</FooterListLink>
              <FooterListLink>{t("servicesList.digital")}</FooterListLink>
              <FooterListLink>{t("servicesList.solutions")}</FooterListLink>
              <FooterListLink>{t("servicesList.systems")}</FooterListLink>
            </div>
          </StaggerItem>

          {/* Column 3: Company */}
          <StaggerItem className="flex flex-col lg:w-1/6">
            <h4 className="font-cairo font-bold text-lg mb-6 text-white">{t("company")}</h4>
            <div className="flex flex-col gap-4">
              <FooterListLink href="/about">{t("companyList.about")}</FooterListLink>
              <FooterListLink href="/portfolio">{t("companyList.portfolio")}</FooterListLink>
              <FooterListLink href="/contact">{t("companyList.contact")}</FooterListLink>
              <FooterListLink href="/blog">{t("companyList.blog")}</FooterListLink>
              <FooterListLink href="/careers">{t("companyList.careers")}</FooterListLink>
              <FooterListLink href="/faq">{t("companyList.terms")}</FooterListLink>
            </div>
          </StaggerItem>

          {/* Column 4: Contact Info */}
          <StaggerItem className="flex flex-col lg:w-1/4">
            <h4 className="font-cairo font-bold text-lg mb-6 text-white">{t("contactInfo")}</h4>
            <div className="flex flex-col gap-5 text-sm text-white/80 font-cairo">
              
              <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                <Phone className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                <span dir="ltr">{t("contactList.phone1")}</span>
              </div>
              
              <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                <Phone className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                <span dir="ltr">{t("contactList.phone2")}</span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                <span dir="ltr">{t("contactList.phone3")}</span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                <span dir="ltr">{t("contactList.whatsapp")}</span>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                <MapPin className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 mt-1" />
                <span className="leading-[1.6]">{t("contactList.address")}</span>
              </div>
            </div>
          </StaggerItem>

          {/* Column 5: Newsletter */}
          <StaggerItem className="flex flex-col lg:w-1/3">
            <h4 className="font-cairo font-bold text-lg mb-6 text-white">{t("newsletter")}</h4>
            <p className="font-cairo text-white/80 text-xs leading-relaxed mb-6">
              {t("newsletterText")}
            </p>
            
            <div className="relative w-full mb-6">
              <input 
                type="email" 
                placeholder={t("placeholder")}
                className="w-full bg-transparent border border-white/30 rounded-full pr-12 pl-6 rtl:pl-12 rtl:pr-6 py-3 font-cairo text-sm text-white outline-none focus:border-white transition-colors placeholder:text-white/40"
              />
              <button className="absolute top-1/2 -translate-y-1/2 right-2 rtl:right-auto rtl:left-2 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Send className="w-4 h-4 text-[#2D2D2D] rtl:-scale-x-100" />
              </button>
            </div>

            <EmailBox email={t("email1")} />
            <EmailBox email={t("email2")} />
          </StaggerItem>

        </StaggerContainer>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full bg-secondary text-secondary-foreground border-t border-border">
        <div className="w-full mx-auto px-6 py-4 flex items-center justify-center">
          <p className="font-cairo text-xs font-semibold tracking-wide">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>

    </footer>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors">
      {children}
    </button>
  );
}

function FooterListLink({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 group cursor-pointer text-white/70 hover:text-white transition-colors">
      <div className="w-0 h-0 border-y-4 border-y-transparent border-r-[6px] border-r-white/50 group-hover:border-r-white transition-colors rtl:rotate-0 rotate-180" />
      <span className="font-cairo text-sm">{children}</span>
    </Link>
  );
}

function EmailBox({ email }: { email: string }) {
  return (
    <div className="flex items-center justify-between border border-white/20 rounded-full px-5 py-3 mb-3 group cursor-pointer hover:border-white/50 transition-colors">
      <div className="flex items-center gap-3">
        <Mail className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        <span className="font-cairo text-xs text-white/80 group-hover:text-white transition-colors">{email}</span>
      </div>
      <Copy className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
    </div>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
