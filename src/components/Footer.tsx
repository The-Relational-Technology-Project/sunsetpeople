import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-charcoal text-sand">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold mb-1">
              {t("footer.siteName")}
            </p>
            <p className="text-sm text-sand/70">
              {t("footer.tagline")}
            </p>
          </div>

          <a
            href="https://outersunset.today"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sand/80 hover:text-sand transition-colors text-sm"
          >
            outersunset.today
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-sand/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sand/50">
            {t("footer.subtitle")}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/neighborhood-api`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sand/40 hover:text-sand/60 transition-colors"
              title="Neighborhood API"
            >
              /api
            </a>
            <Link
              to="/llm.txt"
              className="text-xs text-sand/40 hover:text-sand/60 transition-colors"
            >
              {t("footer.botLink")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
