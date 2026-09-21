interface Partner {
  id: string;
  name: string;
  logoUrl?: string; // Replace with Image when actual assets exist
}

interface PartnersLogosGridProps {
  partners: Partner[];
}

export function PartnersLogosGrid({ partners }: PartnersLogosGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
      {partners.map((partner) => (
        <div key={partner.id} className="w-30 h-15 bg-muted/50 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
          <span className="font-cairo text-sm text-muted-foreground">{partner.name}</span>
        </div>
      ))}
    </div>
  );
}
