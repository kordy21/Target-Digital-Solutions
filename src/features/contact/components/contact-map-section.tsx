"use client";

import { FadeIn } from "@/components/shared/animations";

export function ContactMapSection() {
  return (
    <section className="w-full relative z-10 overflow-hidden">
      <FadeIn direction="up">
        <div className="w-full h-112.5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3356751895194!2d31.19156017501094!3d30.05591121802826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ff7bc1413c41907%3A0x1202735dac5f4ce1!2sTarget%20Digital%20Solutions!5e0!3m2!1sen!2seg!4v1790170432758!5m2!1sen!2seg" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </FadeIn>
    </section>
  );
}
