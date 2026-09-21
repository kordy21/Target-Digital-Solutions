export function TechLogosBanner() {
  const logos = [
    { id: 1, name: "Stripe" },
    { id: 2, name: "Next.js" },
    { id: 3, name: "Vercel" },
    { id: 4, name: "React" },
    { id: 5, name: "Tailwind" },
  ];

  return (
    <div className="w-full bg-background border-b border-border py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <p className="text-muted-foreground font-cairo text-sm uppercase tracking-widest font-semibold">
          نحن فخورون بشراكتنا مع أفضل المنصات
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale">
          {logos.map((logo) => (
            <div key={logo.id} className="text-xl font-bold font-sans text-foreground">
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
