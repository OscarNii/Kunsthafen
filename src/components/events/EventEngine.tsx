import { useState, useMemo } from "react";
import { AppEvent, EventType } from "../../types";
import { useI18n } from "../../lib/i18n";
import { EventCard } from "./EventCard";
import { EventCalendarView } from "./EventCalendarView";
import { LayoutGrid, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";

interface EventEngineProps {
  events: AppEvent[];
}

type ViewMode = "list" | "calendar";

export function EventEngine({ events }: EventEngineProps) {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState<EventType | "all">("all");
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  const filteredEvents = useMemo(() => {
    return events.filter(e => activeFilter === "all" || e.type === activeFilter)
                 .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  }, [events, activeFilter]);

  const filters: (EventType | "all")[] = ["all", "exhibition", "workshop", "performance"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-6 md:space-y-0">
        
        {/* Filters */}
        <div className="flex flex-wrap p-1.5 md:p-2 bg-slate-900 shadow-neo-inner rounded-[2rem] border border-white/5 mx-auto md:mx-0 w-full md:w-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "relative px-4 md:px-6 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest outline-none z-10 flex-1 md:flex-none text-center transition-all duration-300 hover:scale-105 active:scale-95",
                activeFilter === filter
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilterTab"
                  className="absolute inset-0 bg-slate-900 shadow-neo rounded-full -z-10 border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
                />
              )}
              <span className="relative z-10">{t(`events.filter.${filter}`)}</span>
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex items-center p-1.5 md:p-2 bg-slate-900 shadow-neo-inner rounded-full border border-white/5 mx-auto md:mx-0">
          <button
            onClick={() => setViewMode("list")}
            className={cn(
              "relative flex items-center justify-center p-3 rounded-full outline-none z-10 transition-all duration-300 hover:scale-110 active:scale-90",
              viewMode === "list" ? "text-cyan-400" : "text-slate-500 hover:text-slate-300"
            )}
            aria-label="List View"
          >
            {viewMode === "list" && (
              <motion.div
                layoutId="activeViewMode"
                className="absolute inset-0 bg-slate-900 shadow-neo rounded-full -z-10 border border-white/10"
                transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
              />
            )}
            <LayoutGrid className="w-5 h-5 relative z-10" />
          </button>
          <button
            onClick={() => setViewMode("calendar")}
            className={cn(
              "relative flex items-center justify-center p-3 rounded-full outline-none z-10 transition-all duration-300 hover:scale-110 active:scale-90",
              viewMode === "calendar" ? "text-cyan-400" : "text-slate-500 hover:text-slate-300"
            )}
            aria-label="Calendar View"
          >
            {viewMode === "calendar" && (
              <motion.div
                layoutId="activeViewMode"
                className="absolute inset-0 bg-slate-900 shadow-neo rounded-full -z-10 border border-white/10"
                transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
              />
            )}
            <CalendarIcon className="w-5 h-5 relative z-10" />
          </button>
        </div>
      </div>

      {/* Content Rendering */}
      {viewMode === "list" ? (
        filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-slate-500 bg-slate-900/50 border border-slate-800 rounded-2xl">
            {t("events.no_results")}
          </div>
        )
      ) : (
        <EventCalendarView events={filteredEvents} />
      )}
    </div>
  );
}
