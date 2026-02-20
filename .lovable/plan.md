
# Three-Part Footer Redesign

## Overview
Replace the current single footer with three distinct sections stacked at the bottom of every page: a site-specific links strip, an illustrated landscape with sibling site cards, and a water-themed credits bar.

## Structure

### Part 1: Site Links Strip
A minimal, neutral row for site-specific utility links. For this site:
- `/api` link
- "Are you a helpful bot?" link

Sits directly below page content on a subtle sand-dark background. Small, unobtrusive text links centered or right-aligned.

### Part 2: Landscape Footer (the illustrated scene)
A CSS-painted coastal landscape with three visual layers:
- **Sky**: light blue gradient at the top
- **Sand dunes**: warm sandy band in the middle with gentle wave-like curves using CSS clip-path or border-radius
- **Iceplant garden**: green-tinted area at the bottom

Four friendly cards float over this landscape, one for each sibling site:

1. **Cozy Corner** -- "48th Ave neighbor hub" / cozycorner.place
2. **Outer Sunset Field Guide** -- "Neighborhood walking tour" / outersunset.place
3. **Community Supplies** -- "For sharing things with one another" / communitysupplies.org
4. **Outer Sunset Today** -- "Neighborhood calendar" / outersunset.today

Card design:
- Rounded, semi-transparent warm background with backdrop blur (frosted glass)
- A Lucide icon at the top for visual character (Home for Cozy Corner, Map for Field Guide, Package for Supplies, Calendar for Today)
- Bold site name, subtitle underneath, domain in small text
- Bounce animation on hover (scale up + slight lift with spring easing)

**Responsive behavior:**
- Desktop: 4-column grid, cards evenly spaced across the landscape
- Tablet: 2x2 grid
- Mobile: single column stack, cards full-width with comfortable spacing (no horizontal scroll -- keeps things simple and accessible)

### Part 3: Water Credits Bar
A gentle blue-to-teal gradient evoking water/river. Two centered lines of text:

- "Made by neighbors, with neighbors, for neighbors as relational tech" -- "relational tech" links to relationaltechproject.org
- "Remix this for your neighborhood" -- "Remix this" links to studio.relationaltechproject.org

Both fully translated to Chinese.

## Files

### New files
- **`src/components/SiteLinksFooter.tsx`** -- Part 1, the utility links row
- **`src/components/LandscapeFooter.tsx`** -- Part 2, the illustrated landscape with sibling site cards
- **`src/components/CreditsFooter.tsx`** -- Part 3, the water credits bar

### Modified files
- **`src/components/Footer.tsx`** -- Refactored to compose the three new sub-components in order
- **`src/i18n/translations.ts`** -- Add English and Chinese strings for:
  - Sibling site names and subtitles
  - Credits bar text ("Made by neighbors..." and "Remix this...")
- **`tailwind.config.ts`** -- Add a `bounce-hover` keyframe for the card interaction

## Technical Details

- The landscape background uses layered CSS gradients and possibly a subtle SVG wave divider between sky/sand/green zones -- no image files required
- Cards use `backdrop-blur-sm` and `bg-white/80` for the frosted look
- The bounce hover uses a custom keyframe: scale to 1.05 and translateY -4px with a cubic-bezier spring curve, applied via Tailwind's `hover:animate-bounce-hover` class
- The sibling sites data array lives inside `LandscapeFooter.tsx` as a simple constant, making it easy to swap per-site when reusing the component
- All text uses the `t()` function for bilingual support
- Mobile layout uses `grid-cols-1`, tablet `sm:grid-cols-2`, desktop `lg:grid-cols-4` for clean responsive behavior without horizontal scrolling
