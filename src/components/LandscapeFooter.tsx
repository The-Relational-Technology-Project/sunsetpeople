import { useLanguage } from "@/i18n/LanguageContext";

interface SiblingSite {
  nameKey: string;
  subtitleKey: string;
  domain: string;
  url: string;
  cardBg: string;
  pinColor: string;
  rotation: string;
}

const SIBLING_SITES: SiblingSite[] = [
  {
    nameKey: "footer.cozyCorner",
    subtitleKey: "footer.cozyCornerSub",
    domain: "cozycorner.place",
    url: "https://cozycorner.place",
    cardBg: "#ddd0b0",
    pinColor: "#9c5a4a",
    rotation: "-2deg",
  },
  {
    nameKey: "footer.fieldGuide",
    subtitleKey: "footer.fieldGuideSub",
    domain: "outersunset.place",
    url: "https://outersunset.place",
    cardBg: "#7a9db8",
    pinColor: "#3a6e9e",
    rotation: "1deg",
  },
  {
    nameKey: "footer.supplies",
    subtitleKey: "footer.suppliesSub",
    domain: "communitysupplies.org",
    url: "https://communitysupplies.org",
    cardBg: "#e8933a",
    pinColor: "#9c5a4a",
    rotation: "-1deg",
  },
  {
    nameKey: "footer.today",
    subtitleKey: "footer.todaySub",
    domain: "outersunset.today",
    url: "https://outersunset.today",
    cardBg: "#8a9e6b",
    pinColor: "#5a7a52",
    rotation: "2deg",
  },
];

function PinnedCard({ site }: { site: SiblingSite }) {
  const { t } = useLanguage();

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-md p-5 pt-8 text-center transition-all duration-200 hover:animate-bounce-hover"
      style={{
        backgroundColor: site.cardBg,
        transform: `rotate(${site.rotation})`,
        boxShadow: "2px 3px 8px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "rotate(0deg) scale(1.05) translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${site.rotation})`;
      }}
    >
      {/* Pin */}
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-sm"
        style={{
          backgroundColor: site.pinColor,
          boxShadow: `0 1px 2px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)`,
        }}
      />

      <h3 className="font-display font-bold text-sm leading-tight" style={{ color: "#3a2a1a" }}>
        {t(site.nameKey)}
      </h3>
      <p className="mt-1 text-xs leading-snug" style={{ color: "#3a2a1aCC" }}>
        {t(site.subtitleKey)}
      </p>
      <p className="mt-2 text-[11px] font-mono" style={{ color: "#3a2a1a99" }}>
        {site.domain}
      </p>
    </a>
  );
}

export function LandscapeFooter() {
  return (
    <div style={{ backgroundColor: "#e8e0d0" }}>
      <div className="py-12 md:py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {SIBLING_SITES.map((site) => (
              <PinnedCard key={site.domain} site={site} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
