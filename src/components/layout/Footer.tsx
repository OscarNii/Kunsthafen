import { motion } from "motion/react";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "../../lib/i18n";

const ringText = [
  "Programm",
  "Galerie",
  "Kontakt",
  "Kunsthafen",
  "Rhenania",
  "Koeln",
];

const sponsorImages = [
  {
    src: "https://kunsthafen.com/wp-content/uploads/2022/10/KOE_VM_Logo_Kulturamt_RGB_POS_72pdi.jpg",
    alt: "Stadt Köln",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://kunsthafen.com/wp-content/uploads/2020/10/Gaffel-Logo-300x300.jpg",
    alt: "Gaffel Kölsch",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://kunsthafen.com/wp-content/uploads/2020/10/biozisch-voelkel-300x152.png",
    alt: "Biozisch",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://kunsthafen.com/wp-content/uploads/2024/11/GIF-5.gif",
    alt: "Kunsthafen visual",
    className: "col-span-2 row-span-1",
  },
];

const socialLinks = [
  {
    label: "@kunsthafen",
    href: "http://www.instagram.com/kunsthafen",
    icon: Instagram,
  },
  {
    label: "Kunsthafen im Rhenania",
    href: "https://www.facebook.com/Kunsthafenimrhenania/",
    icon: Facebook,
  },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.18),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-400/75">
              Kunsthafen
            </p>
            <h2 className="max-w-2xl text-4xl font-black uppercase tracking-[-0.08em] text-white sm:text-6xl">
              {t("footer.title")}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              {t("footer.description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/programm"
                className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/15"
              >
                {t("nav.programm")}
              </Link>
              <Link
                to="/vermietung"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-slate-200 transition hover:border-violet-400/40 hover:text-white"
              >
                {t("footer.contact")}
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                <MapPin className="h-5 w-5 text-cyan-300" />
                <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  {t("footer.visit")}
                </p>
                <p className="mt-2 text-sm text-slate-200">Rhenania, Köln</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                <Mail className="h-5 w-5 text-violet-300" />
                <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  {t("footer.write")}
                </p>
                <a
                  href="mailto:info@kunsthafen.com"
                  className="mt-2 block text-sm text-slate-200 transition hover:text-white"
                >
                  info@kunsthafen.com
                </a>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                <Phone className="h-5 w-5 text-cyan-300" />
                <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  {t("footer.follow")}
                </p>
                <p className="mt-2 text-sm text-slate-200">Instagram / Facebook</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center xl:justify-self-center">
            <div className="relative mx-auto flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/20 bg-white/[0.02] shadow-[0_0_80px_rgba(6,182,212,0.08)]"
              >
                <svg viewBox="0 0 100 100" className="absolute h-full w-full overflow-visible">
                  <path
                    id="footerCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                  <text className="fill-white text-[7px] font-bold uppercase tracking-[0.45em]">
                    <textPath href="#footerCirclePath" startOffset="0%">
                      {ringText.join(" • ")} •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="absolute z-10 flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-cyan-500 to-violet-500 px-6 text-center text-xs font-black uppercase tracking-[0.3em] text-white shadow-[0_18px_60px_rgba(6,182,212,0.3)] transition hover:scale-105"
              >
                {t("footer.cta")}
              </a>
            </div>

            <div className="mt-12 grid w-full max-w-lg grid-cols-2 gap-4">
              {sponsorImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                  className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm ${image.className}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full rounded-[1.2rem] object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="text-center text-xs uppercase tracking-[0.35em] text-slate-500">
            {t("footer.copyright")}
          </div>

          <div className="flex flex-wrap justify-start gap-5 text-xs uppercase tracking-[0.3em] text-slate-500 lg:justify-end">
            <a href="http://kunsthafen.com/presse" target="_blank" rel="noreferrer" className="transition hover:text-slate-200">
              {t("footer.press")}
            </a>
            <a href="http://kunsthafen.com/impressum" target="_blank" rel="noreferrer" className="transition hover:text-slate-200">
              {t("footer.imprint")}
            </a>
            <a href="http://kunsthafen.com/datenschutz" target="_blank" rel="noreferrer" className="transition hover:text-slate-200">
              {t("footer.privacy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
