import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BackgroundCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  blur?: string;
  opacity?: number;
}

export function BackgroundCarousel({ 
  images, 
  interval = 5000, 
  className = "",
  blur = "blur-md",
  opacity = 0.8
}: BackgroundCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt={`background-${index}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: opacity, scale: 1.15 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ 
            duration: 2, 
            ease: "easeInOut" 
          }}
          className={`absolute inset-0 w-full h-full object-cover ${blur}`}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-slate-950/20" />
    </div>
  );
}
