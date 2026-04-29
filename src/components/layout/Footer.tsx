import { useI18n } from "../../lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/5 bg-slate-900 shadow-neo text-slate-500 py-12 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold tracking-tighter text-slate-300 uppercase mb-4">Kunsthafen</h2>
          <p className="text-sm max-w-sm">{t("about.description")}</p>
        </div>
        <div className="md:text-right flex flex-col justify-end">
          <p className="text-xs uppercase tracking-widest">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
