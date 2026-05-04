import { useState } from "react";
import { useI18n } from "../lib/i18n";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const elasticImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
    title: "Brutalist Space",
    description: "Raw concrete architecture providing an imposing backdrop for delicate art."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Contemporary Art",
    description: "Curated collections from emerging global talents and visionaries."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=800&auto=format&fit=crop",
    title: "Immersive Experiences",
    description: "Light, sound, and space merge in our interactive installations."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop",
    title: "Creative Workshops",
    description: "Hands-on sessions guiding you through new mediums and techniques."
  }
];

export function About() {
  const { t } = useI18n();
  const [activeItem, setActiveItem] = useState(0);
  
  return (
    <div>
      {/* Editorial layout reference */}
      <section className="py-24 border-b border-white/5 shadow-neo relative z-10 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-bold text-[8vw] leading-[0.85] tracking-tighter text-white uppercase text-center mb-12">
            THE<br />VISION
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-8 text-lg text-slate-300 leading-relaxed font-light mt-16 text-center">
            <p>
              Kunsthafen is more than a gallery. It is an experimental laboratory where brutalist 
              architecture meets fluid, ever-changing contemporary art.
            </p>
            <p>
              Founded in 2024, our mission is to provide an accessible platform for emerging artists, 
              fostering dialogue across disciplines through exhibitions, immersive performances, and 
              hands-on workshops.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-slate-100">
              Our Spaces
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl text-lg">
              Explore the unique environments that make up the Kunsthafen experience.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="flex flex-col md:flex-row w-full h-[600px] gap-4 md:gap-6"
          >
            {elasticImages.map((item, i) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className={cn(
                  "relative rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-neo transition-all duration-300 group",
                  activeItem === i ? "shadow-neo-inner" : "hover:shadow-neo-sm"
                )}
                layout
                initial={false}
                animate={{ 
                  flex: activeItem === i ? 3 : 1,
                  height: "100%" 
                }}
                transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                onMouseEnter={() => setActiveItem(i)}
                onClick={() => setActiveItem(i)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out",
                    activeItem === i ? "grayscale-0 scale-100" : "grayscale opacity-50 scale-110 group-hover:opacity-75"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
                  <motion.div
                    initial={false}
                    animate={{ 
                      opacity: activeItem === i ? 1 : 0, 
                      y: activeItem === i ? 0 : 20 
                    }}
                    transition={{ duration: 0.15, delay: activeItem === i ? 0.05 : 0 }}
                    className={cn(
                      "mt-auto",
                      activeItem !== i && "hidden md:block pointer-events-none"
                    )}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="w-8 h-[2px] bg-cyan-400"></span>
                      <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tighter mb-3 leading-none">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base hidden md:block max-w-sm">
                      {item.description}
                    </p>
                  </motion.div>
                  
                  {/* Vertical title for non-active items on desktop */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: activeItem !== i ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "absolute bottom-8 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-8 whitespace-nowrap md:-rotate-90 md:origin-bottom-left transition-all",
                      activeItem === i && "hidden"
                    )}
                  >
                    <span className="text-sm font-bold tracking-widest uppercase text-slate-300">
                      {item.title}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
