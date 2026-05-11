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
    "nav.gallery": "Galerie",
    "nav.programm": "Programm",
    "nav.about": "Über uns",
    "nav.vermietung": "Vermietung",
    "footer.copyright": "© 2024 Kunsthafen",
    "footer.title": "Kreisende Navigation trifft auf die echte Kunsthafen Bildwelt.",
    "footer.description": "Ein neu gestalteter Footer im Circular-Layout mit bewegtem Navigationsring, Kontaktzugang und Bildmaterial direkt aus dem Live-Auftritt von Kunsthafen.",
    "footer.contact": "Kontakt",
    "footer.cta": "Say Hi",
    "footer.visit": "Besuchen",
    "footer.write": "Schreiben",
    "footer.follow": "Folgen",
    "footer.press": "Presse",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
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
    "gallery.eyebrow": "Lichtarchiv",
    "gallery.title": "Galerie",
    "gallery.description": "Bewegen Sie den Cursor durch das Archiv und entdecken Sie Kunsthafen durch Licht, Textur und Bühne.",
    "gallery.hint": "CURSOR BEWEGEN, UM DAS KUNSTHAFEN ARCHIV ZU ILLUMINIEREN",
    "gallery.social": "Seite teilen",
    "gallery.copy": "Link kopieren",
    "gallery.copied": "Link kopiert",
  },
  en: {
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.programm": "Program",
    "nav.about": "About",
    "nav.vermietung": "Rentals",
    "footer.copyright": "© 2024 Kunsthafen",
    "footer.title": "Circular navigation rebuilt around real Kunsthafen imagery.",
    "footer.description": "A redesigned circular footer with a rotating navigation ring, direct contact access, and visual assets pulled from Kunsthafen’s live site.",
    "footer.contact": "Contact",
    "footer.cta": "Say Hi",
    "footer.visit": "Visit",
    "footer.write": "Email",
    "footer.follow": "Follow",
    "footer.press": "Press",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy",
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
    "gallery.eyebrow": "Light Archive",
    "gallery.title": "Gallery",
    "gallery.description": "Move through the archive and discover Kunsthafen in light, texture, and stage atmospheres.",
    "gallery.hint": "MOVE CURSOR TO ILLUMINATE THE KUNSTHAFEN ARCHIVE",
    "gallery.social": "Share this page",
    "gallery.copy": "Copy link",
    "gallery.copied": "Link copied",
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
