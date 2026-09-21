import { useTranslations } from "next-intl";

export function IdentitySection() {
  const t = useTranslations("home.identity");

  return (
    <section className="py-24 px-6 w-full flex items-center justify-center bg-muted/10">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 bg-white dark:bg-black rounded-[40px] p-12 shadow-sm border border-border">
        
        {/* Visual Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-75 h-100 bg-primary/10 rounded-[30px] border border-primary/20 flex items-center justify-center">
            <span className="text-primary font-cairo font-bold">Character Illustration</span>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-start">
          <span className="text-primary font-cairo text-[20px] font-bold">{t("eyebrow")}</span>
          <h2 className="text-[40px] md:text-[50px] font-cairo font-extrabold text-foreground leading-[1.2]">
            {t("title")}
          </h2>
          <p className="text-[18px] font-cairo text-muted-foreground max-w-lg">
            {t("description")}
          </p>
          <div className="flex items-center gap-6 mt-6 justify-center lg:justify-start">
             <div className="w-12 h-12 rounded-full bg-blue-500"></div>
             <div className="w-12 h-12 rounded-full bg-pink-500"></div>
             <div className="w-12 h-12 rounded-full bg-purple-500"></div>
             <div className="w-12 h-12 rounded-full bg-emerald-500"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
