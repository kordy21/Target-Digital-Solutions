import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-background w-full border border-border rounded-2xl flex items-center justify-between p-6 text-start transition-colors"
      >
        <h3 className="font-cairo font-bold text-lg md:text-2xl text-foreground">{question}</h3>
        <ChevronDown className={cn("w-6 h-6 text-muted-foreground transition-transform duration-300 shrink-0 ml-4 rtl:mr-4 rtl:ml-0", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-secondary text-muted-foreground font-cairo text-base md:text-xl leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
