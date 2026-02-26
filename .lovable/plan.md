
# Playful Bulletin Board Cards

## Overview
Make the bulletin board footer more textured and playful: add a cork-like background texture, mix tape and pushpin attachments across the four cards with irregular sizing, and update all card copy to the new conversational format.

## Card Copy Updates

Each card gets a three-line layout: a casual question line, a bold site name, and the domain.

| Card | Question | Name | Domain |
|------|----------|------|--------|
| Cozy Corner | Live near 48th and Irving? | Cozy Corner Neighbor Hub | cozycorner.place |
| Field Guide | Exploring the neighborhood? | Outer Sunset Field Guide | outersunset.place |
| Supplies | Want to share things with neighbors? | Community Supplies | communitysupplies.org |
| Today | Curious what's happening today? | Outer Sunset Today | outersunset.today |

## Visual Changes

### Cork board texture
- Add a subtle CSS texture to the `#e8e0d0` background using a repeating radial-gradient pattern of tiny speckles (darker and lighter dots) to simulate cork grain
- No image files needed -- pure CSS

### Card irregularity
- Vary card sizes slightly: different padding amounts per card (e.g., one card a bit wider with more horizontal padding, another taller with more vertical padding)
- More varied rotations: -3deg, 1.5deg, -1deg, 2.5deg
- Slightly different border-radius per card (e.g., 4px, 6px, 3px, 5px)

### Attachment styles -- mix of tape and pushpins
Two cards get **tape strips** (diagonal semi-transparent rectangles in the corners), two get **pushpins** (3D-looking circles with a highlight and shadow).

- **Cozy Corner**: Tape in top-left and bottom-right corners (warm semi-transparent strips rotated ~45deg)
- **Field Guide**: Pushpin at top-center (larger than current pin, with a metallic gradient, shadow underneath, and a small highlight dot)
- **Supplies**: Tape in all four corners (criss-cross look)
- **Today**: Pushpin at top-right (offset, not centered)

Pushpin design: ~16px circle with a radial gradient (pin color to darker shade), a 2px dark shadow below, and a small white highlight dot at top-left for 3D effect.

Tape design: ~40px x 12px rectangle, rotated 45deg, with `bg-white/25` and a subtle border, positioned at corners via absolute positioning.

## Files to Modify

### `src/components/LandscapeFooter.tsx`
- Add cork texture CSS to the background div
- Add `questionKey` and `attachment` type ("tape" or "pin") plus `pinPosition` to the `SiblingSite` interface
- Update `SIBLING_SITES` data with new keys, varied rotations, and attachment config
- Split `PinnedCard` rendering to show tape strips or pushpin based on type
- Render the question line above the bold name
- Vary padding and border-radius per card

### `src/i18n/translations.ts`
- Add new question keys in English:
  - `footer.cozyCornerQ`: "Live near 48th and Irving?"
  - `footer.fieldGuideQ`: "Exploring the neighborhood?"
  - `footer.suppliesQ`: "Want to share things with neighbors?"
  - `footer.todayQ`: "Curious what's happening today?"
- Update name keys:
  - `footer.cozyCorner`: "Cozy Corner Neighbor Hub"
- Remove subtitle keys from card rendering (subtitles replaced by questions)
- Add Chinese translations:
  - `footer.cozyCornerQ`: "住在第48大道和Irving街附近？"
  - `footer.fieldGuideQ`: "想探索这个社区？"
  - `footer.suppliesQ`: "想和邻居分享东西？"
  - `footer.todayQ`: "好奇今天有什么活动？"
  - `footer.cozyCorner`: "温馨角落邻里中心"

## Technical Details
- Tape strips are `<div>` elements with absolute positioning, rotated 45deg, using semi-transparent white/cream backgrounds
- Pushpins use a slightly larger circle (w-4 h-4) with `radial-gradient` for the metallic look and a separate shadow element beneath
- Cork texture: `background-image: radial-gradient(circle, #d4cbb8 1px, transparent 1px)` with `background-size: 8px 8px` layered over the base color
- Card padding varies: cards alternate between `p-5 pt-10` and `p-6 pt-9` for irregularity
