import { useI18n } from "../lib/i18n";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import FlipText from "../components/ui/flip-text";
import { ImageTrail } from "../components/ui/image-trail";
import { BackgroundCarousel } from "../components/ui/background-carousel";
import { EventCard } from "../components/events/EventCard";
import { MOCK_EVENTS } from "../data/mockEvents";

const trailImages = [
  "https://images.unsplash.com/photo-1718908721930-31120bc1beb5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const carouselImages = [
  "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1652249418530-f5efa38f9d06?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export function Home() {
  const { t } = useI18n();
  const upcomingEvents = MOCK_EVENTS.filter(e => new Date(e.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 3);

  return (
    <div className="relative">
      {/* Hero Section - Editorial layout from design recipe */}
      <ImageTrail images={trailImages} distance={80} className="min-h-[80vh] isolate">
        <BackgroundCarousel images={carouselImages} blur="blur-md" opacity={0.8} />
        <section className="h-full flex flex-col justify-center px-6 max-w-7xl mx-auto relative mb-20 z-10">
          <div className="title-wrapper transform -skew-x-6 relative z-20 pointer-events-none">
            <h1 className="font-bold text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter text-white uppercase bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">
              <FlipText word="KUNST" />
              <FlipText word="HAFEN" />
            </h1>
            <p className="mt-8 text-xl md:text-2xl font-light text-slate-300 max-w-2xl transform skew-x-6">
              {t("about.description")}
            </p>
          </div>
          
          {/* Abstract background shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 blur-[100px] rounded-full z-0 mix-blend-screen pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-violet-900/20 blur-[120px] rounded-full z-0 mix-blend-screen pointer-events-none" />

          <div className="mt-16 transform skew-x-6 relative z-30">
             <Link 
              to="/programm" 
              className="inline-flex items-center space-x-3 bg-slate-900 border border-white/5 text-cyan-400 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-neo hover:shadow-neo-lg active:shadow-neo-inner transition-all hover:scale-105 active:scale-95 hover:border-cyan-500/30"
            >
              <span>{t("nav.programm")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </ImageTrail>

      {/* Grid structure reference */}
      <section className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-6 text-slate-100">{t("about.title")}</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Kunsthafen is a versatile space blending brutalist architecture with fluid artistic expressions. 
              We host exhibitions, workshops, and immersive performances year-round.
            </p>
            <Link to="/about" className="text-violet-400 hover:text-violet-300 inline-flex items-center space-x-2 text-sm uppercase tracking-widest font-semibold pb-1 border-b border-violet-400/30 hover:border-violet-300 transition-all hover:scale-105 active:scale-95 origin-left">
              <span>{t("events.read_more")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative aspect-square md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1718908721930-31120bc1beb5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Gallery Space"
              className="object-cover w-full h-full rounded-3xl border border-white/5 shadow-neo"
            />
          </div>
        </div>
      </section>
      {/* Upcoming Programs */}
      <section className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-slate-100">
                {t("events.title")}
              </h2>
              <p className="text-slate-400 max-w-xl text-lg">
                Discover our next exhibitions, workshops, and performances.
              </p>
            </div>
            <Link 
              to="/programm" 
              className="mt-8 md:mt-0 inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-widest pb-1 border-b border-cyan-500/30 hover:border-cyan-400 transition-all group"
            >
              <span>All Programs</span>
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
