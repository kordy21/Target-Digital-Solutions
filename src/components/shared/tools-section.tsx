import { SectionHeader } from "./section-header";
import { FeatureCard } from "./feature-card";
import { Monitor, Smartphone, Code, Paintbrush } from "lucide-react";

export function ToolsSection() {
  const tools = [
    {
      id: "1",
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies.",
      icon: Monitor,
    },
    {
      id: "2",
      title: "Mobile Apps",
      description: "Native and cross-platform applications for iOS and Android.",
      icon: Smartphone,
    },
    {
      id: "3",
      title: "Custom Software",
      description: "Tailored software solutions to streamline your business operations.",
      icon: Code,
    },
    {
      id: "4",
      title: "UI/UX Design",
      description: "User-centric designs that enhance engagement and satisfaction.",
      icon: Paintbrush,
    }
  ];

  return (
    <section className="py-24 px-16 w-full flex flex-col items-center gap-16 bg-muted/30">
      <SectionHeader 
        eyebrow="Our Expertise"
        title="Tools & Technologies We Master"
        description="We leverage industry-leading tools to deliver high-quality, scalable digital solutions for our clients."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-360">
        {tools.map((tool) => (
          <FeatureCard 
            key={tool.id}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
          />
        ))}
      </div>
    </section>
  );
}
