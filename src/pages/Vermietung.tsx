import { useI18n } from "../lib/i18n";
import { ArrowRight } from "lucide-react";

export function Vermietung() {
  const { t } = useI18n();

  return (
    <div className="lg:h-[calc(100vh-80px)] overflow-hidden flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800">
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase mb-8">
          {t("vermietung.title")}
        </h1>
        <p className="text-xl text-slate-400 mb-12 max-w-md leading-relaxed font-light">
          {t("vermietung.description")} Our brutalist main hall and versatile studio spaces are 
          available for private events, photoshoots, and corporate retreats.
        </p>

        <form className="space-y-8 max-w-md">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 ml-2">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-slate-900 shadow-neo-inner border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder-slate-600"
              placeholder="hello@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 ml-2">Event Type</label>
            <select className="w-full bg-slate-900 shadow-neo-inner border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none">
              <option>Corporate Event</option>
              <option>Photoshoot / Film</option>
              <option>Private Party</option>
              <option>Exhibition</option>
            </select>
          </div>
          <button 
            type="button"
            className="w-full bg-slate-900 shadow-neo hover:shadow-neo-sm active:shadow-neo-inner border border-white/5 text-cyan-400 rounded-2xl px-6 py-4 font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 mt-4"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply z-10" />
        <img 
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop" 
          alt="Event Space"
          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute top-12 right-12 z-20">
          <div className="w-24 h-24 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center transform rotate-12">
            <span className="text-[10px] uppercase tracking-widest font-bold text-white text-center">
              Available<br />Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
