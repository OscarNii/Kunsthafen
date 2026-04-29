import React, { useState, useRef, useEffect } from "react";
import { AppEvent } from "../../types";
import { format } from "date-fns";
import { useI18n } from "../../lib/i18n";
import { cn } from "../../lib/utils";
import { MapPin, CalendarDays, Clock, ChevronLeft, ChevronRight } from "lucide-react";

interface EventCardProps {
  event: AppEvent;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  const { lang, t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const startDate = new Date(event.startDate);
  const formattedDate = format(startDate, "dd.MM.yyyy");
  const formattedTime = format(startDate, "HH:mm");

  const hasMultipleImages = event.images && event.images.length > 1;

  const scrollTo = (index: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (scrollRef.current && event.images) {
      if (index < 0) index = event.images.length - 1;
      if (index >= event.images.length) index = 0;
      
      setActiveIndex(index);
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      const index = Math.round(scrollRef.current.scrollLeft / width);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  useEffect(() => {
    if (!hasMultipleImages) return;

    const intervalId = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % event.images!.length;
        if (scrollRef.current) {
          const width = scrollRef.current.clientWidth;
          scrollRef.current.scrollTo({ left: width * nextIndex, behavior: 'smooth' });
        }
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [hasMultipleImages, event.images]);

  return (
    <div className={cn("group cursor-pointer bg-slate-900 border border-white/5 rounded-3xl overflow-hidden shadow-neo hover:shadow-neo-sm transition-all", className)}>
      <div className="aspect-[4/3] w-full overflow-hidden relative group/gallery">
        {event.images && event.images.length > 0 ? (
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="absolute inset-0 flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide hide-scrollbar"
          >
            {event.images.map((img, i) => (
              <div key={i} className="min-w-full h-full snap-center shrink-0 relative overflow-hidden">
                <img 
                  src={img} 
                  alt={`${event.title} - Image ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/gallery:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        
        {hasMultipleImages && (
          <>
            {/* Arrows */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 pointer-events-none">
              <button 
                onClick={(e) => scrollTo(activeIndex - 1, e)}
                className="w-8 h-8 rounded-full bg-slate-900/40 backdrop-blur flex items-center justify-center text-white/70 hover:text-white hover:bg-slate-900/60 pointer-events-auto transition-all"
              >
                <ChevronLeft className="w-5 h-5 ml-[-2px]" />
              </button>
              <button 
                onClick={(e) => scrollTo(activeIndex + 1, e)}
                className="w-8 h-8 rounded-full bg-slate-900/40 backdrop-blur flex items-center justify-center text-white/70 hover:text-white hover:bg-slate-900/60 pointer-events-auto transition-all"
              >
                <ChevronRight className="w-5 h-5 mr-[-2px]" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1.5 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 pointer-events-none">
              {event.images!.map((_, i) => (
                <button 
                  key={i} 
                  onClick={(e) => scrollTo(i, e)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full shadow-sm pointer-events-auto transition-all duration-300",
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
      </div>
      
      <div className="p-6 relative z-10 bg-slate-900 pointer-events-none">
        <h3 className="font-bold text-xl leading-tight mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
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
    </div>
  );
}
