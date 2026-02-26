import { useLanguage } from "@/i18n/LanguageContext";

export function CreditsFooter() {
  const { t } = useLanguage();

  return (
    <div className="py-8 text-center" style={{ backgroundColor: "#e8e0d0" }}>
      <div className="container mx-auto px-6 space-y-1">
        <p className="text-sm" style={{ color: "#3a2a1aBB" }}>
          {t("footer.credits1")}
        </p>
        <p className="text-sm" style={{ color: "#3a2a1a99" }}>
          <a
            href="https://studio.relationaltechproject.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity font-semibold"
            style={{ color: "#3a2a1aBB" }}
          >
            {t("footer.creditsLink2")}
          </a>{" "}
          {t("footer.credits2")}
        </p>
      </div>
    </div>
  );
}
