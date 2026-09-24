import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Job } from "@/data/careers";
import { Link } from "@/i18n/routing";
import { StaggerContainer, StaggerItem } from "@/components/shared/animations";

export function JobCard({ job }: { job: Job }) {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const t = useTranslations("careersPage.card");

  return (
    <StaggerContainer 
      delayChildren={0.1}
      staggerChildren={0.1}
      className="flex flex-col bg-background rounded-3xl border border-border p-6 md:p-8 hover:shadow-md transition-shadow duration-300 min-h-75 h-full"
    >
      {/* Category Name */}
      <StaggerItem className="flex justify-start w-full mb-6">
        <span className="text-primary font-cairo font-bold text-sm md:text-base">
          {isRTL ? job.categoryNameAr : job.categoryNameEn}
        </span>
      </StaggerItem>

      {/* Badges */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-8">
        <StaggerItem><Badge icon={<MapPin className="w-3.5 h-3.5" />} text={isRTL ? job.locationAr : job.locationEn} /></StaggerItem>
        <StaggerItem><Badge icon={<Briefcase className="w-3.5 h-3.5" />} text={isRTL ? job.experienceAr : job.experienceEn} /></StaggerItem>
        <StaggerItem><Badge icon={<GraduationCap className="w-3.5 h-3.5" />} text={isRTL ? job.educationAr : job.educationEn} /></StaggerItem>
      </div>

      {/* Title */}
      <StaggerItem className="flex-1 flex items-start justify-start text-start mb-8">
        <h3 className="font-cairo font-bold text-lg md:text-xl text-foreground leading-snug">
          {isRTL ? job.titleAr : job.titleEn}
        </h3>
      </StaggerItem>

      {/* Action Link */}
      <StaggerItem className="flex justify-start w-full mt-auto">
        <Link 
          href={`/careers/${job.id}`} 
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-cairo font-semibold text-sm group"
        >
          <span>{t("viewDetails")}</span>
          {isRTL ? (
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          ) : (
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          )}
        </Link>
      </StaggerItem>
    </StaggerContainer>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/10 px-3 py-1.5 rounded-full text-muted-foreground">
      {icon}
      <span className="font-cairo text-xs font-semibold">{text}</span>
    </div>
  );
}
