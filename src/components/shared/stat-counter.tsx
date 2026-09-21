interface StatCounterProps {
  value: string;
  label: string;
}

export function StatCounter({ value, label }: StatCounterProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center p-6 bg-card border border-border rounded-[20px] shadow-sm hover:shadow-md transition-shadow">
      <span className="text-[50px] font-cairo font-extrabold text-primary">{value}</span>
      <span className="text-[20px] font-cairo text-muted-foreground font-semibold">{label}</span>
    </div>
  );
}
