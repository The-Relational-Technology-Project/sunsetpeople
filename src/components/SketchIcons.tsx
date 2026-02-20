/**
 * Custom hand-drawn / sketch-style SVG icons for the landscape footer cards.
 * Each icon matches the personality of its sibling site.
 */

interface IconProps {
  size?: number;
  className?: string;
}

/** Cozy Corner – a small cluster of houses / duplexes together */
export function SketchHome({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* left small house */}
      <path d="M4 30L10 24L16 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 29.5V38H14V29.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="32" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      {/* center tall duplex */}
      <path d="M14 26L22 16L30 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 25.5V40H28V25.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* duplex divider */}
      <path d="M22 40V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* duplex windows */}
      <rect x="17.5" y="29" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="23.5" y="29" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      {/* duplex doors */}
      <path d="M19 40V36C19 35.5 19.3 35 20 35C20.7 35 21 35.5 21 36V40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M23 40V36C23 35.5 23.3 35 24 35C24.7 35 25 35.5 25 36V40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* right small house */}
      <path d="M30 28L36 22L42 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 27.5V38H40V27.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="34" y="30" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M35.5 38V34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* ground line */}
      <path d="M2 40H46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* chimney smoke on center */}
      <path d="M26 16C26 14 27 13 27 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

/** Field Guide – a compass with a wavy path */
export function SketchCompass({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* compass circle */}
      <circle cx="24" cy="22" r="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 0" />
      {/* compass needle N */}
      <path d="M24 10L21 22H27L24 10Z" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* compass needle S */}
      <path d="M24 34L27 22H21L24 34Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* N marker */}
      <text x="24" y="9" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">N</text>
      {/* wavy path below */}
      <path d="M10 42C14 38 18 42 22 38C26 34 30 42 34 38C38 34 42 40 42 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

/** Community Supplies – a folding chair (matching the app icon) */
export function SketchBox({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* seat */}
      <path d="M12 22H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* backrest */}
      <path d="M14 22V8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 8H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* backrest slats */}
      <path d="M18 8V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M22 8V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M26 8V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* front legs */}
      <path d="M32 22L36 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* back legs */}
      <path d="M16 22L12 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* cross brace */}
      <path d="M15 30L33 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M15 34L33 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* seat slats */}
      <path d="M16 22H32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M14 20H34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

/** Outer Sunset Today – a calendar with a little sun */
export function SketchCalendar({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* calendar body */}
      <rect x="8" y="14" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* calendar top bar */}
      <path d="M8 22H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* rings */}
      <path d="M16 10V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 10V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* little sun in calendar */}
      <circle cx="24" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.25" />
      {/* sun rays */}
      <path d="M24 26V27M24 37V38M18 32H19M29 32H30M20 28L20.7 28.7M27.3 35.3L28 36M20 36L20.7 35.3M27.3 28.7L28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
