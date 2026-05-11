import { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface ImageTrailProps {
  children?: React.ReactNode;
  images: string[];
  distance?: number;
  className?: string;
}

export function ImageTrail({
  children,
  images,
  distance = 50,
  className,
}: ImageTrailProps) {
  const [trail, setTrail] = useState<{ id: number; x: number; y: number; img: string }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);
  const imageIndex = useRef(0);
  const idCounter = useRef(0);
  const throttleTimer = useRef<NodeJS.Timeout | null>(null);
  const maxTrailLength = 10; // Limit trail elements

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    // Throttle mouse events to 32ms (roughly 30fps)
    if (throttleTimer.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (!lastMousePos.current || calculateDistance(lastMousePos.current.x, lastMousePos.current.y, x, y) > distance) {
      const newId = idCounter.current++;
      const currentImage = images[imageIndex.current % images.length];
      imageIndex.current++;

      setTrail((prev) => {
        const updated = [...prev, { id: newId, x, y, img: currentImage }];
        // Keep only the last maxTrailLength elements
        return updated.length > maxTrailLength ? updated.slice(-maxTrailLength) : updated;
      });
      lastMousePos.current = { x, y };
      
      // Auto-remove after animation (500ms instead of 1000ms)
      const timeoutId = setTimeout(() => {
        setTrail((prev) => prev.filter((item) => item.id !== newId));
      }, 500);

      throttleTimer.current = setTimeout(() => {
        throttleTimer.current = null;
      }, 32);

      return () => {
        if (throttleTimer.current) clearTimeout(throttleTimer.current);
        clearTimeout(timeoutId);
      };
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden w-full h-full", className)}
    >
      {children}
      <AnimatePresence>
        {trail.map((item) => (
          <motion.img
            key={item.id}
            src={item.img}
            alt="trail"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ 
              x: item.x - 80, 
              y: item.y - 112,
              willChange: "transform, opacity"
            }}
            className="absolute top-0 left-0 pointer-events-none object-cover w-40 h-56 rounded-xl border border-white/10 shadow-2xl z-50"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
