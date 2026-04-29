import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    "nav.home": "Startseite",
    "nav.programm": "Programm",
    "nav.about": "Über uns",
    "nav.vermietung": "Vermietung",
    "footer.copyright": "© Kunsthafen. Alle Rechte vorbehalten.",
    "events.title": "Programm & Events",
    "events.filter.all": "Alle Veranstaltungen",
    "events.filter.exhibition": "Ausstellung",
    "events.filter.workshop": "Workshop",
    "events.filter.performance": "Performance",
    "events.view.list": "Liste",
    "events.view.calendar": "Kalender",
    "events.recurring": "Regelmäßige Veranstaltungen",
    "events.series": "Event-Reihe",
    "events.no_results": "Keine Veranstaltungen gefunden.",
    "events.read_more": "Mehr erfahren",
    "about.title": "Über Kunsthafen",
    "about.description": "Ein offener Raum für Kunst, Kultur und Experimente.",
    "vermietung.title": "Raum Mieten",
    "vermietung.description": "Mieten Sie unsere Räumlichkeiten für Ihre nächste Veranstaltung.",
  },
  en: {
    "nav.home": "Home",
    "nav.programm": "Program",
    "nav.about": "About",
    "nav.vermietung": "Rentals",
    "footer.copyright": "© Kunsthafen. All rights reserved.",
    "events.title": "Program & Events",
    "events.filter.all": "All Events",
    "events.filter.exhibition": "Exhibition",
    "events.filter.workshop": "Workshop",
    "events.filter.performance": "Performance",
    "events.view.list": "List",
    "events.view.calendar": "Calendar",
    "events.recurring": "Recurring Events",
    "events.series": "Event Series",
    "events.no_results": "No events found.",
    "events.read_more": "Read More",
    "about.title": "About Kunsthafen",
    "about.description": "An open space for art, culture, and experiments.",
    "vermietung.title": "Rent a Space",
    "vermietung.description": "Rent our spaces for your next event.",
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("de");

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
