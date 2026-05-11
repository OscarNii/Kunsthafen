import { AnimatePresence, motion, Variants } from "motion/react";
import { cn } from "../../lib/utils";

interface FlipTextProps {
  word: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function FlipText({
  word,
  duration = 1.2,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}: FlipTextProps) {
  return (
    <div 
      className="flex justify-start will-change-transform"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <AnimatePresence mode="wait">
        {word.split("").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ 
              duration, 
              delay: i * delayMultiple,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
              WebkitBackfaceVisibility: "hidden",
              WebkitTransformStyle: "preserve-3d",
              willChange: "transform"
            }}
            className={cn("origin-center drop-shadow-sm inline-block", className)}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
