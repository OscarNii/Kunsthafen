import React, { useState, useRef, useEffect } from "react";
import { AppEvent } from "../../types";
import { format } from "date-fns";
import { useI18n } from "../../lib/i18n";
import { cn } from "../../lib/utils";
import { MapPin, CalendarDays, Clock, ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ShareModal } from "./ShareModal";

interface EventCardProps {
  event: AppEvent;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  const { lang, t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const startDate = new Date(event.startDate);
  const formattedDate = format(startDate, "dd.MM.yyyy");
  const formattedTime = format(startDate, "HH:mm");

  const hasMultipleImages = event.images && event.images.length > 1;

  const scrollTo = (index: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (event.images) {
      if (index < 0) index = event.images.length - 1;
      if (index >= event.images.length) index = 0;
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (!hasMultipleImages) return;

    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % event.images!.length);
    }, 4000); // Slower interval for slow motion feel

    return () => clearInterval(intervalId);
  }, [hasMultipleImages, event.images]);

  return (
    <div className={cn("group cursor-pointer bg-slate-900 border border-white/5 rounded-3xl overflow-hidden shadow-neo hover:shadow-neo-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-white/10 will-change-transform", className)}>
      <div className="aspect-[4/3] w-full overflow-hidden relative group/gallery">
        {event.images && event.images.length > 0 ? (
          <div className="absolute inset-0 w-full h-full">
            <motion.div 
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex w-full h-full will-change-transform"
            >
              {event.images.map((img, i) => (
                <div key={i} className="min-w-full h-full shrink-0 relative overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${event.title} - Image ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/gallery:scale-110 will-change-transform"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
          />
        )}
        
        {hasMultipleImages && (
          <>
            {/* Arrows */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-1000 pointer-events-none">
              <button 
                onClick={(e) => scrollTo(activeIndex - 1, e)}
                className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-slate-900/80 hover:scale-110 active:scale-90 pointer-events-auto transition-all duration-300 shadow-neo will-change-transform"
              >
                <ChevronLeft className="w-5 h-5 ml-[-2px]" />
              </button>
              <button 
                onClick={(e) => scrollTo(activeIndex + 1, e)}
                className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-slate-900/80 hover:scale-110 active:scale-90 pointer-events-auto transition-all duration-300 shadow-neo will-change-transform"
              >
                <ChevronRight className="w-5 h-5 mr-[-2px]" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1.5 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-1000 pointer-events-none">
              {event.images!.map((_, i) => (
                <button 
                  key={i} 
                  onClick={(e) => scrollTo(i, e)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full shadow-sm pointer-events-auto transition-all duration-300 will-change-transform",
                    i === activeIndex ? "bg-cyan-400 w-3" : "bg-white/50 hover:bg-white/80"
                  )}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="inline-flex items-center px-4 py-1.5 bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-neo rounded-full text-[10px] font-bold uppercase tracking-widest text-cyan-400">
            {t(`events.filter.${event.type}`)}
          </span>
        </div>
        {event.isRecurring && (
          <div className="absolute top-4 right-4 pointer-events-none">
            <span className="inline-flex items-center px-4 py-1.5 bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-neo rounded-full text-[10px] font-bold uppercase tracking-widest text-violet-400">
              {t("events.series")}
            </span>
          </div>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsShareModalOpen(true);
          }}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-400 hover:bg-slate-900/80 hover:scale-110 active:scale-90 transition-all duration-300 shadow-neo z-20 will-change-transform"
          aria-label="Share Event"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-6 relative z-10 bg-slate-900 pointer-events-none">
        <h3 className="font-bold text-xl leading-tight mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
          {event.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
          {event.description}
        </p>

        <div className="space-y-2 mt-auto pt-4 border-t border-slate-800/80">
          <div className="flex items-center text-slate-300 text-sm">
            <CalendarDays className="w-4 h-4 mr-3 opacity-60 text-cyan-400" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center text-slate-300 text-sm">
            <Clock className="w-4 h-4 mr-3 opacity-60 text-cyan-400" />
            <span>{formattedTime} Uhr</span>
          </div>
          {event.location && (
            <div className="flex items-center text-slate-300 text-sm">
              <MapPin className="w-4 h-4 mr-3 opacity-60 text-violet-400" />
              <span>{event.location}</span>
            </div>
          )}
        </div>
      </div>
      <ShareModal 
        event={event} 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />
    </div>
  );
}
