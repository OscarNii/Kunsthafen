import { useState } from "react";
import { AppEvent } from "../../types";
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  isToday 
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { useI18n } from "../../lib/i18n";

interface EventCalendarViewProps {
  events: AppEvent[];
}

export function EventCalendarView({ events }: EventCalendarViewProps) {
  const { lang, t } = useI18n();
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const dateFormat = "MMMM yyyy";
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const weekDays = lang === "de" 
    ? ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-slate-900 border border-white/5 rounded-3xl overflow-hidden shadow-neo mb-12">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/5 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.h2 
            key={format(currentDate, "yyyy-MM")}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="text-xl font-bold uppercase tracking-widest text-slate-100"
          >
            {format(currentDate, dateFormat)}
          </motion.h2>
        </AnimatePresence>
        <div className="flex space-x-4">
          <button 
            onClick={prevMonth}
            className="p-3 border border-white/5 bg-slate-900 shadow-neo rounded-full text-slate-400 hover:text-cyan-400 hover:shadow-neo-sm active:shadow-neo-inner transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextMonth}
            className="p-3 border border-white/5 bg-slate-900 shadow-neo rounded-full text-slate-400 hover:text-cyan-400 hover:shadow-neo-sm active:shadow-neo-inner transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 border-b border-white/5 bg-slate-900">
        {weekDays.map(day => (
          <div key={day} className="py-4 text-center text-xs font-bold uppercase tracking-widest text-slate-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={format(currentDate, "yyyy-MM")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="grid grid-cols-7 auto-rows-[130px] bg-white/5 gap-[1px]"
        >
          {days.map((day, idx) => {
            const dayEvents = events.filter(e => isSameDay(new Date(e.startDate), day));
            const hasEvents = dayEvents.length > 0;
            const isCurrentMonth = isSameMonth(day, monthStart);
            
            return (
              <div
                key={day.toString() + idx}
                className={cn(
                  "p-3 bg-slate-900 relative transition-all duration-500 overflow-hidden group",
                  !isCurrentMonth ? "opacity-40" : "hover:bg-slate-800/40",
                  hasEvents && isCurrentMonth && "bg-cyan-500/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
                )}
              >
                {hasEvents && isCurrentMonth && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-50" />
                )}
                <div className="flex justify-end mb-2">
                  <span className={cn(
                    "w-8 h-8 flex items-center justify-center text-sm font-medium rounded-full transition-all duration-500",
                    isToday(day) ? "bg-slate-900 shadow-neo-inner text-cyan-400 font-bold border border-white/5" : "text-slate-400",
                    hasEvents && isCurrentMonth && !isToday(day) && "text-slate-200"
                  )}>
                    {format(day, "d")}
                  </span>
                </div>
              
              <div className="flex flex-col space-y-1 overflow-y-auto max-h-[70px] no-scrollbar">
                {dayEvents.map(event => (
                  <div 
                    key={event.id}
                    title={event.title}
                    className={cn(
                      "text-[10px] uppercase font-semibold tracking-wider p-1.5 px-2 rounded-md truncate cursor-pointer",
                      event.type === 'exhibition' ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" :
                      event.type === 'workshop' ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" :
                      "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                    )}
                  >
                    {format(new Date(event.startDate), "HH:mm")} - {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
