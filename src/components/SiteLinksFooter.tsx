import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export function SiteLinksFooter() {
  const { t } = useLanguage();

  return (
    <div className="py-4 bg-sand-dark">
      <div className="container mx-auto px-6 flex items-center justify-center gap-6">
        <a
          href={`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/neighborhood-api`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors"
          title="Neighborhood API"
        >
          /api
        </a>
        <Link
          to="/llm.txt"
          className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors"
        >
          {t("footer.botLink")}
        </Link>
      </div>
    </div>
  );
}
