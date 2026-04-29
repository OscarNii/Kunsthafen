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
  duration = 1.5,
  delayMultiple = 0.1,
  framerProps = {
    hidden: { rotateX: 0 },
    visible: { rotateX: 360 },
  },
  className,
}: FlipTextProps) {
  return (
    <div className="flex justify-start">
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
              repeatDelay: 3,
              ease: "easeInOut"
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
