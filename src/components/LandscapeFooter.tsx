import { Home, Map, Package, Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { LucideIcon } from "lucide-react";

interface SiblingSite {
  nameKey: string;
  subtitleKey: string;
  domain: string;
  url: string;
  icon: LucideIcon;
}

const SIBLING_SITES: SiblingSite[] = [
  {
    nameKey: "footer.cozyCorner",
    subtitleKey: "footer.cozyCornerSub",
    domain: "cozycorner.place",
    url: "https://cozycorner.place",
    icon: Home,
  },
  {
    nameKey: "footer.fieldGuide",
    subtitleKey: "footer.fieldGuideSub",
    domain: "outersunset.place",
    url: "https://outersunset.place",
    icon: Map,
  },
  {
    nameKey: "footer.supplies",
    subtitleKey: "footer.suppliesSub",
    domain: "communitysupplies.org",
    url: "https://communitysupplies.org",
    icon: Package,
  },
  {
    nameKey: "footer.today",
    subtitleKey: "footer.todaySub",
    domain: "outersunset.today",
    url: "https://outersunset.today",
    icon: Calendar,
  },
];

function SiteCard({ site }: { site: SiblingSite }) {
  const { t } = useLanguage();
  const Icon = site.icon;

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-white/40 dark:border-white/10 p-5 text-center transition-all duration-200 hover:animate-bounce-hover hover:shadow-lg"
    >
      <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-sunset/10 flex items-center justify-center text-sunset group-hover:bg-sunset/20 transition-colors">
        <Icon size={20} />
      </div>
      <h3 className="font-display font-bold text-sm text-foreground leading-tight">
        {t(site.nameKey)}
      </h3>
      <p className="mt-1 text-xs text-foreground/60 leading-snug">
        {t(site.subtitleKey)}
      </p>
      <p className="mt-2 text-[11px] text-foreground/40 font-mono">
        {site.domain}
      </p>
    </a>
  );
}

export function LandscapeFooter() {
  return (
    <div className="relative overflow-hidden">
      {/* Sky layer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(200 60% 82%) 0%, hsl(200 50% 88%) 35%, hsl(40 40% 82%) 60%, hsl(40 35% 78%) 75%, hsl(145 30% 55%) 90%, hsl(145 35% 45%) 100%)",
        }}
      />

      {/* Wavy dune divider using SVG */}
      <div className="absolute inset-x-0 top-[30%] pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="hsl(40 35% 78% / 0.5)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 py-12 md:py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {SIBLING_SITES.map((site) => (
              <SiteCard key={site.domain} site={site} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
