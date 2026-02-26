import { useLanguage } from "@/i18n/LanguageContext";

interface SiblingSite {
  nameKey: string;
  questionKey: string;
  domain: string;
  url: string;
  cardBg: string;
  rotation: string;
  borderRadius: string;
  padding: string;
  attachment: "tape" | "pin";
  pinPosition?: string;
  pinColor?: string;
}

const SIBLING_SITES: SiblingSite[] = [
  {
    nameKey: "footer.cozyCorner",
    questionKey: "footer.cozyCornerQ",
    domain: "cozycorner.place",
    url: "https://cozycorner.place",
    cardBg: "#ddd0b0",
    rotation: "-3deg",
    borderRadius: "4px",
    padding: "p-5 pt-10",
    attachment: "tape",
  },
  {
    nameKey: "footer.fieldGuide",
    questionKey: "footer.fieldGuideQ",
    domain: "outersunset.place",
    url: "https://outersunset.place",
    cardBg: "#7a9db8",
    rotation: "1.5deg",
    borderRadius: "6px",
    padding: "p-6 pt-9",
    attachment: "pin",
    pinPosition: "left-1/2 -translate-x-1/2",
    pinColor: "#3a6e9e",
  },
  {
    nameKey: "footer.supplies",
    questionKey: "footer.suppliesQ",
    domain: "communitysupplies.org",
    url: "https://communitysupplies.org",
    cardBg: "#e8933a",
    rotation: "-1deg",
    borderRadius: "3px",
    padding: "p-5 pt-10",
    attachment: "tape",
  },
  {
    nameKey: "footer.today",
    questionKey: "footer.todayQ",
    domain: "outersunset.today",
    url: "https://outersunset.today",
    cardBg: "#8a9e6b",
    rotation: "2.5deg",
    borderRadius: "5px",
    padding: "p-6 pt-9",
    attachment: "pin",
    pinPosition: "right-4",
    pinColor: "#5a7a52",
  },
];

/* Semi-transparent tape strip */
function TapeStrip({ className }: { className: string }) {
  return (
    <div
      className={`absolute w-10 h-3 rotate-45 pointer-events-none ${className}`}
      style={{
        background: "rgba(255,255,245,0.30)",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: "1px",
      }}
    />
  );
}

/* 3D pushpin with highlight and shadow */
function Pushpin({ position, color }: { position: string; color: string }) {
  return (
    <div className={`absolute top-2 ${position} pointer-events-none`}>
      {/* Shadow under pin */}
      <div
        className="absolute top-[2px] left-[1px] w-4 h-4 rounded-full"
        style={{ background: "rgba(0,0,0,0.25)", filter: "blur(1px)" }}
      />
      {/* Pin body */}
      <div
        className="relative w-4 h-4 rounded-full"
        style={{
          background: `radial-gradient(circle at 40% 35%, ${color}, ${darken(color)})`,
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        {/* Highlight dot */}
        <div
          className="absolute top-[2px] left-[3px] w-[5px] h-[5px] rounded-full"
          style={{ background: "rgba(255,255,255,0.55)" }}
        />
      </div>
    </div>
  );
}

function darken(hex: string): string {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 40);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 40);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 40);
  return `rgb(${r},${g},${b})`;
}

function PinnedCard({ site }: { site: SiblingSite }) {
  const { t } = useLanguage();

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block text-center transition-all duration-200 hover:animate-bounce-hover ${site.padding}`}
      style={{
        backgroundColor: site.cardBg,
        transform: `rotate(${site.rotation})`,
        boxShadow: "2px 3px 8px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.08)",
        borderRadius: site.borderRadius,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "rotate(0deg) scale(1.05) translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${site.rotation})`;
      }}
    >
      {/* Attachment: tape strips or pushpin */}
      {site.attachment === "tape" && site.domain === "cozycorner.place" && (
        <>
          <TapeStrip className="-top-1 -left-2" />
          <TapeStrip className="-bottom-1 -right-2" />
        </>
      )}
      {site.attachment === "tape" && site.domain === "communitysupplies.org" && (
        <>
          <TapeStrip className="-top-1 -left-2" />
          <TapeStrip className="-top-1 -right-2 -rotate-45" />
          <TapeStrip className="-bottom-1 -left-2 -rotate-45" />
          <TapeStrip className="-bottom-1 -right-2" />
        </>
      )}
      {site.attachment === "pin" && site.pinColor && (
        <Pushpin position={site.pinPosition || "left-1/2 -translate-x-1/2"} color={site.pinColor} />
      )}

      {/* Question */}
      <p className="text-xs leading-snug mb-1" style={{ color: "#3a2a1aCC" }}>
        {t(site.questionKey)}
      </p>
      {/* Site name */}
      <h3 className="font-display font-bold text-sm leading-tight" style={{ color: "#3a2a1a" }}>
        {t(site.nameKey)}
      </h3>
      {/* Domain */}
      <p className="mt-2 text-[11px] font-mono" style={{ color: "#3a2a1a99" }}>
        {site.domain}
      </p>
    </a>
  );
}

export function LandscapeFooter() {
  return (
    <div
      style={{
        backgroundColor: "#e8e0d0",
        backgroundImage: `
          radial-gradient(circle, #d4cbb8 1px, transparent 1px),
          radial-gradient(circle, #ebe4d6 0.5px, transparent 0.5px)
        `,
        backgroundSize: "8px 8px, 12px 12px",
        backgroundPosition: "0 0, 4px 4px",
      }}
    >
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
