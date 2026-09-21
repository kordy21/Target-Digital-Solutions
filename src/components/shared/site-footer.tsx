import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-footer-bg text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        
        {/* Branding & Contact Info */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <div className="w-30 h-12.5 bg-white/10 rounded-md flex items-center justify-center">
            <span className="font-cairo text-white font-bold">Logo</span>
          </div>
          <p className="text-white/70 font-cairo text-sm leading-relaxed max-w-xs">
            {t("description")}
          </p>
          <div className="flex flex-col gap-2 mt-4 font-cairo text-sm text-white/90">
            <span>{t("phone")}: +1 234 567 890</span>
            <span>{t("email")}: info@targetdigital.com</span>
          </div>
        </div>

        {/* Links Columns */}
        <div className="flex flex-wrap gap-16 w-full md:w-2/3 justify-start md:justify-end">
          
          <div className="flex flex-col gap-4">
            <h4 className="font-cairo font-bold text-lg mb-2">{t("company")}</h4>
            <FooterLink href="/about">{t("about")}</FooterLink>
            <FooterLink href="/services">{t("services")}</FooterLink>
            <FooterLink href="/portfolio">{t("portfolio")}</FooterLink>
            <FooterLink href="/careers">{t("careers")}</FooterLink>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-cairo font-bold text-lg mb-2">{t("support")}</h4>
            <FooterLink href="/faq">{t("faq")}</FooterLink>
            <FooterLink href="/contact">{t("contact")}</FooterLink>
            <FooterLink href="/privacy">{t("privacy")}</FooterLink>
            <FooterLink href="/terms">{t("terms")}</FooterLink>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/50 font-cairo text-sm">
          {t("copyright")}
        </p>
        <div className="flex gap-4">
           {/* Social Icons Placeholders */}
           <div className="w-8 h-8 rounded-full bg-white/10"></div>
           <div className="w-8 h-8 rounded-full bg-white/10"></div>
           <div className="w-8 h-8 rounded-full bg-white/10"></div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white/70 hover:text-white font-cairo text-sm transition-colors">
      {children}
    </Link>
  );
}
