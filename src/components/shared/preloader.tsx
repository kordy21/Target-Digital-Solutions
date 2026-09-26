"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TargetGif from "@/assets/Target-GIF.gif";

export function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setTimeout(() => {
        setShow(false);
      }, 0);
      document.documentElement.style.overflow = "";
    } else {
      // It's a new session, let the preloader show for 3.5 seconds
      const timer = setTimeout(() => {
        setShow(false);
        document.documentElement.style.overflow = "";
        sessionStorage.setItem("hasVisited", "true");
      }, 3000);

      return () => {
        clearTimeout(timer);
        document.documentElement.style.overflow = "";
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="global-preloader"
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-99999 flex items-center justify-center bg-background"
        >
          <Image 
            src={TargetGif} 
            alt="Target Digital Solutions Loading"
            width={500} 
            height={500}
            className="object-contain max-w-[80vw]"
            priority
            unoptimized // Essential for GIFs to play correctly in next/image
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
