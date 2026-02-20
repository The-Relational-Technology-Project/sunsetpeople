import { useLanguage } from "@/i18n/LanguageContext";

export function CreditsFooter() {
  const { t } = useLanguage();

  return (
    <div
      className="py-8 text-center"
      style={{
        background:
          "linear-gradient(135deg, hsl(200 55% 48%) 0%, hsl(180 40% 45%) 50%, hsl(195 50% 42%) 100%)",
      }}
    >
      <div className="container mx-auto px-6 space-y-2">
        <p className="text-sm text-white/90">
          {t("footer.credits1")}{" "}
          <a
            href="https://relationaltechproject.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white transition-colors font-semibold"
          >
            {t("footer.creditsLink1")}
          </a>
        </p>
        <p className="text-sm text-white/80">
          <a
            href="https://studio.relationaltechproject.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white transition-colors font-semibold"
          >
            {t("footer.creditsLink2")}
          </a>{" "}
          {t("footer.credits2")}
        </p>
      </div>
    </div>
  );
}
