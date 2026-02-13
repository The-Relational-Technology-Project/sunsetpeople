import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "zh" : "en")}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md border border-border"
      aria-label="Toggle language"
    >
      {language === "en" ? "中文" : "EN"}
    </button>
  );
}
