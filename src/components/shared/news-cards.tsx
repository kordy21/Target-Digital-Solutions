import { SectionHeader } from "./section-header";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
}

export function NewsCards() {
  const news: NewsItem[] = [
    {
      id: "1",
      title: "Target Digital Solutions Wins Best Agency 2026",
      date: "September 15, 2026",
      excerpt: "We are thrilled to announce that we have been recognized as the top digital agency of the year.",
    },
    {
      id: "2",
      title: "New Partnership with Global Tech Leaders",
      date: "August 22, 2026",
      excerpt: "Expanding our horizons by partnering with industry giants to provide even better services.",
    },
    {
      id: "3",
      title: "The Future of AI in Web Development",
      date: "July 10, 2026",
      excerpt: "Exploring how artificial intelligence is shaping the way we build modern web applications.",
    }
  ];

  return (
    <section className="py-24 px-16 w-full flex flex-col items-center gap-16 bg-background">
      <SectionHeader 
        eyebrow="Latest Updates"
        title="News & Insights"
        description="Stay updated with our latest news, announcements, and industry insights."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-360">
        {news.map((item) => (
          <div key={item.id} className="flex flex-col border border-border rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-card">
            <div className="w-full h-60 bg-muted/50 flex items-center justify-center">
              <span className="text-muted-foreground font-cairo">Image Placeholder</span>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <span className="text-sm font-cairo text-primary font-semibold">{item.date}</span>
              <h3 className="text-[24px] font-cairo font-bold text-foreground leading-tight line-clamp-2">{item.title}</h3>
              <p className="text-[16px] font-cairo text-muted-foreground line-clamp-3">{item.excerpt}</p>
              <Button variant="link" className="px-0 w-fit font-cairo text-primary mt-2">Read More →</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
