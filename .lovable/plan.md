

# Bulletin Board Footer Redesign

## Overview
Replace the landscape photo background with a clean bulletin board aesthetic. Cards become pinned notes with distinct muted colors, sitting on a pale fog-sand background. Simplify the credits section to plain text on the same background.

## Visual Design

### Color Palette (from the user's spec)
- Background: `#e8e0d0` (pale fog-sand)
- Card colors (one per card): Sand `#ddd0b0`, Fog blue `#7a9db8`, Iceplant rust `#9c5a4a` or Sunset amber `#e8933a`, Dune grass `#8a9e6b`
- Pin colors: matching warm tones from the palette
- Text: dark brown/charcoal for readability

### Structure (3 sections remain)

**Part 1: Site Links Strip** -- unchanged (`SiteLinksFooter.tsx`)

**Part 2: Bulletin Board Cards** -- redesigned `LandscapeFooter.tsx`
- Remove the photo background and overlay
- Use `#e8e0d0` as a flat background
- Cards styled as pinned paper notes:
  - Each card gets a unique muted background color from the palette
  - Slight rotation (alternating -2deg, 1deg, -1deg, 2deg) for a casual "pinned to board" feel
  - A small colored circle (pin) at the top of each card
  - Subtle box shadow for depth
  - Font styling: display font for titles (hand-lettered feel), serif-ish subtitles
  - Domain in small monospace text at bottom
- Remove the sketch icons (pins replace them as the visual accent)
- Keep the bounce-hover animation
- Responsive: same grid approach (1 col mobile, 2 col tablet, 4 col desktop)

**Part 3: Credits** -- simplified `CreditsFooter.tsx`
- Remove the blue-teal gradient
- Same `#e8e0d0` background, continuing the bulletin board feel
- Two simple centered lines in muted text:
  - "Made by neighbors, with neighbors, for neighbors"
  - "Remix this for your neighborhood" with "Remix this" linking to studio.relationaltechproject.org
- Remove the "relational tech" link (per the user's updated copy)

## Files to Modify

### `src/components/LandscapeFooter.tsx`
- Remove photo background (`dunesGarden` import and `<img>`)
- Remove sketch icon imports and `icon` from the data array
- Set background to `#e8e0d0`
- Assign each card a unique background color and pin color from the palette
- Add slight CSS rotation per card for the pinned-note effect
- Style cards with paper-like shadows, rounded corners, and a pin dot at top

### `src/components/CreditsFooter.tsx`
- Replace the gradient background with `#e8e0d0`
- Simplify to two lines of dark text
- Update copy: "Made by neighbors, with neighbors, for neighbors" (no "as relational tech" link)
- Keep "Remix this" linking to studio.relationaltechproject.org

### `src/i18n/translations.ts`
- Update `footer.credits1` to "Made by neighbors, with neighbors, for neighbors" (standalone, no trailing "as")
- Remove `footer.creditsLink1` usage (or keep key but unused)
- Update Chinese translations to match

### `tailwind.config.ts`
- No changes needed (bounce-hover animation already exists)

## Technical Notes
- Each card in the `SIBLING_SITES` array gains a `color` and `pinColor` field
- Rotation is applied via inline `style={{ transform: rotate(...) }}` per card, with hover resetting to 0deg for a satisfying "lift off board" effect
- The pin is a small absolute-positioned circle div at top-center of each card
- Dark mode: slightly adjust the background and card opacities for readability

