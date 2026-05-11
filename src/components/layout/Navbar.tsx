import { Link } from "react-router-dom";
import { useI18n } from "../../lib/i18n";
import { Menu, Globe, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === "de" ? "en" : "de");
  };

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/programm", label: t("nav.programm") },
    { to: "/about", label: t("nav.about") },
    { to: "/vermietung", label: t("nav.vermietung") },
  ];

  return (
    <nav 
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300",
        scrolled ? "top-4" : "top-6"
      )}
    >
      {/* Gradient Border Container */}
      <div className="bg-gradient-to-r from-cyan-500/50 via-violet-500/50 to-cyan-500/50 p-[1px] rounded-full shadow-neo relative overflow-visible group">
        
        {/* Animated gradient effect inside border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-1000 rounded-full" />
        
        {/* Inner Nav Content */}
        <div className="relative bg-slate-900 rounded-full px-6 md:px-8 h-16 flex items-center justify-between transition-shadow duration-300 z-10 w-full">
          
          <Link to="/" className="text-xl font-bold tracking-tighter text-white uppercase flex-shrink-0">
          <span className="text-slate-200">Kunst</span>
          <span className="text-cyan-500">Hafen</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs font-semibold tracking-widest uppercase text-slate-400 hover:text-cyan-400 focus:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {link.label}
            </Link>
          ))}
          <div className="w-[1px] h-4 bg-slate-800 shadow-neo-inner"></div>
          <button
            onClick={toggleLang}
            className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-all duration-300 p-2 rounded-full active:shadow-neo-inner hover:shadow-neo-sm hover:scale-110 active:scale-90"
            aria-label="Toggle Language"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold uppercase">{lang}</span>
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-slate-400 p-3 rounded-full hover:shadow-neo-sm active:shadow-neo-inner transition-all relative z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-neo origin-top mt-2"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleLang();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-3 text-slate-400 hover:text-violet-400 pt-6 border-t border-slate-800 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-bold uppercase">Language: {lang === 'de' ? 'EN' : 'DE'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
