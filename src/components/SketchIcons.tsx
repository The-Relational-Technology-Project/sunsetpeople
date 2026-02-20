/**
 * Custom hand-drawn / sketch-style SVG icons for the landscape footer cards.
 * Each icon matches the personality of its sibling site.
 */

interface IconProps {
  size?: number;
  className?: string;
}

/** Cozy Corner – a little house with a heart chimney-smoke curl */
export function SketchHome({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* roof */}
      <path d="M6 24L24 8L42 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "url(#sketch)" }} />
      {/* walls */}
      <path d="M10 23V40H38V23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* door */}
      <path d="M20 40V30C20 29 21 28 22 28H26C27 28 28 29 28 30V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* window */}
      <rect x="14" y="28" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
      {/* heart smoke */}
      <path d="M33 18C33 15 36 13 36 11C36 9 34 8 33 9C32 8 30 9 30 11C30 13 33 15 33 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="currentColor" opacity="0.3" />
      {/* wobbly filter */}
      <defs>
        <filter id="sketch">
          <feTurbulence baseFrequency="0.03" numOctaves="4" seed="2" />
          <feDisplacementMap in="SourceGraphic" scale="1" />
        </filter>
      </defs>
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

/** Community Supplies – an open box with items peeking out */
export function SketchBox({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* box body */}
      <path d="M8 20L12 40H36L40 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* box flaps open */}
      <path d="M8 20L4 16H20L24 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 20L28 16H44L40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* items peeking: book */}
      <path d="M16 20V12C16 11 17 10 18 10H20C21 10 22 11 22 12V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="currentColor" opacity="0.15" />
      {/* items peeking: flower */}
      <circle cx="30" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2" />
      <path d="M30 15V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* heart on box */}
      <path d="M24 30C24 28 26 27 26 26C26 25 25 24.5 24 25.5C23 24.5 22 25 22 26C22 27 24 28 24 30Z" fill="currentColor" opacity="0.3" />
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
