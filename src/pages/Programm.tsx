import { useI18n } from "../lib/i18n";
import { EventEngine } from "../components/events/EventEngine";
import { MOCK_EVENTS } from "../data/mockEvents";

export function Programm() {
  const { t } = useI18n();

  return (
    <div>
      <div className="bg-slate-900 border-b border-white/5 shadow-neo py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
            {t("events.title")}
          </h1>
          <p className="text-slate-400 max-w-xl text-lg">
            Discover our upcoming exhibitions, workshops, and performances.
          </p>
        </div>
      </div>
      
      <EventEngine events={MOCK_EVENTS} />
    </div>
  );
}
