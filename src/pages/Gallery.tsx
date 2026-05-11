import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Copy,
  Expand,
  Facebook,
  Linkedin,
  Mail,
  X,
  Share2,
  MessageCircle,
} from "lucide-react";
import { useI18n } from "../lib/i18n";

type GalleryItem = {
  title: string;
  location: string;
  image: string;
  span: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Industrial Atrium",
    location: "Main Hall",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Spotlight Form",
    location: "North Wing",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Texture Study",
    location: "Concrete Lab",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Night Installation",
    location: "Dock Stage",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Monochrome Passage",
    location: "East Corridor",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Audience Pulse",
    location: "Performance Deck",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Archive Shadows",
    location: "Studio Vault",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Light Geometry",
    location: "Gallery Annex",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Silent Projection",
    location: "Signal Room",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Brutalist Rhythm",
    location: "South Platform",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Smoke and Frame",
    location: "Black Box",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Blue Interval",
    location: "Riverside Deck",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Curated Echo",
    location: "Private Studio",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
];

const socialPlatforms = [
  {
    label: "X",
    buildUrl: (url: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
    icon: Share2,
  },
  {
    label: "Facebook",
    buildUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    buildUrl: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    buildUrl: (url: string) =>
      `https://wa.me/?text=${encodeURIComponent(url)}`,
    icon: MessageCircle,
  },
  {
    label: "Email",
    buildUrl: (url: string) =>
      `mailto:?subject=${encodeURIComponent("Kunsthafen Gallery")}&body=${encodeURIComponent(url)}`,
    icon: Mail,
  },
];

export function Gallery() {
  const { t } = useI18n();
  const [pointer, setPointer] = useState({ x: 50, y: 50, active: false });
  const [pageUrl, setPageUrl] = useState("https://kunsthafen.example/gallery");
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage]);

  const overlayMask = useMemo(() => {
    if (!pointer.active) {
      return "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.94) 140px)";
    }

    return `radial-gradient(circle 220px at ${pointer.x}% ${pointer.y}%, rgba(0,0,0,0) 0, rgba(0,0,0,0.1) 32%, rgba(0,0,0,0.92) 72%)`;
  }, [pointer]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y, active: true });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.14),_transparent_28%)]" />

      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-400/80">
              {t("gallery.eyebrow")}
            </p>
            <h1 className="text-5xl font-black uppercase tracking-[-0.08em] text-white sm:text-7xl lg:text-[7rem]">
              {t("gallery.title")}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              {t("gallery.description")}
            </p>
          </div>

          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Share2 className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  {t("gallery.social")}
                </p>
                <p className="text-sm text-slate-300">kunsthafen.gallery</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {socialPlatforms.map(({ label, buildUrl, icon: Icon }) => (
                <a
                  key={label}
                  href={buildUrl(pageUrl)}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  <ArrowUpRight className="h-4 w-4 opacity-40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={copyLink}
              className="mt-3 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-400/40 hover:bg-white/10"
            >
              <Copy className="h-4 w-4" />
              <span>{copied ? t("gallery.copied") : t("gallery.copy")}</span>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onPointerMove={handlePointerMove}
          onPointerEnter={() => setPointer((current) => ({ ...current, active: true }))}
          onPointerLeave={() => setPointer((current) => ({ ...current, active: false }))}
          className="relative flex-1 overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-950 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.55)]"
        >
          <div className="grid auto-rows-[180px] grid-cols-1 gap-3 md:grid-cols-4 md:auto-rows-[160px]">
            {galleryItems.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setSelectedImage(item)}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: 0.08 + index * 0.04,
                }}
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/5 bg-slate-900 text-left transition duration-300 hover:border-cyan-400/30 ${item.span}`}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover saturate-[0.9]"
                  whileHover={{ scale: 1.08, rotate: -0.6, filter: "saturate(1.05) brightness(1.05)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_50%,transparent_80%)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100 -translate-x-full" />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/80 opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </div>
                <motion.div
                  className="absolute inset-x-0 bottom-0 p-5"
                  initial={{ opacity: 0.9, y: 0 }}
                  whileHover={{ opacity: 1, y: -4 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">
                    {item.location}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h2>
                </motion.div>
              </motion.button>
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-0 bg-black/95 transition-opacity duration-150"
            style={{
              WebkitMaskImage: overlayMask,
              maskImage: overlayMask,
            }}
          />

          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10" />
          <div className="pointer-events-none absolute left-6 top-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[10px] uppercase tracking-[0.45em] text-white/70 backdrop-blur-md">
            Kunsthafen Archive
          </div>
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/55 px-5 py-3 text-center text-[10px] uppercase tracking-[0.45em] text-slate-300 backdrop-blur-md">
            {t("gallery.hint")}
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-md"
              aria-label="Close expanded gallery image"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-[91] flex items-center justify-center p-4 sm:p-8"
            >
              <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white transition hover:border-cyan-400/40"
                  aria-label="Close expanded gallery image"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
                  <div className="relative bg-black">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="max-h-[80vh] w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col justify-between border-t border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.98))] p-6 lg:border-l lg:border-t-0">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">
                        {selectedImage.location}
                      </p>
                      <h2 className="mt-3 text-3xl font-bold uppercase tracking-[-0.05em] text-white">
                        {selectedImage.title}
                      </h2>
                      <p className="mt-4 text-sm leading-6 text-slate-400">
                        Kunsthafen keeps the same editorial archive language in the expanded view, so each image can be inspected without losing the page atmosphere.
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedImage(null)}
                        className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300 transition hover:border-violet-400/40 hover:text-white"
                      >
                        <span>Close preview</span>
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
