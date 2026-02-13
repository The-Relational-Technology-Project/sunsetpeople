
# Add Chinese / English Language Toggle

## Overview
Add a language toggle (English / Chinese) to the navigation bar, defaulting to English. All visible text on the site will be translatable, with a React context providing the current language and translation function throughout the app.

## Approach
Use a lightweight, custom i18n solution (no external library needed) built with React Context. A single translations file will hold all English and Chinese strings, and every component will pull text from this context instead of hardcoding strings.

## What will be created

### 1. Translation data file (`src/i18n/translations.ts`)
A single file containing all English and Chinese text organized by section:
- **Navigation**: "outer sunset community", "local groups", "more fun", "suggest a group", "contact"
- **Hero**: heading, subtitle
- **Local Groups**: section title, subtitle, all category names, all group names and descriptions
- **More Fun**: heading, description, button text
- **Suggest Group Form**: heading, description, all form labels, placeholders, button text, success/error toasts
- **Contact Form**: heading, description, all form labels, placeholders, button text, success/error toasts, captcha label
- **Footer**: site name, tagline, subtitle, bot link text

### 2. Language context (`src/i18n/LanguageContext.tsx`)
- A React context that stores the current language ("en" or "zh")
- A `useLanguage()` hook returning `{ language, setLanguage, t }` where `t` is a translation lookup function
- Language preference saved to `localStorage` so it persists across visits

### 3. Language toggle component (`src/components/LanguageToggle.tsx`)
- A small toggle button showing "EN | 中文" in the navigation bar
- Placed to the right of the desktop nav links and inside the mobile menu
- Styled to match the existing nav aesthetic

### 4. Updated components
Every component with visible text will be updated to use the `t()` function instead of hardcoded strings:
- `Navigation.tsx` -- nav link labels and site name
- `Hero.tsx` -- heading and subtitle
- `LocalGroups.tsx` -- section title, subtitle, category names, group names and descriptions
- `MoreFun.tsx` -- all text content
- `SuggestGroupForm.tsx` -- heading, labels, placeholders, toast messages
- `ContactSection.tsx` -- heading, labels, placeholders, toast messages
- `Footer.tsx` -- all text
- `App.tsx` -- wrap the app in `LanguageProvider`

### 5. What stays in English only
- Group website links (external URLs)
- Structured data / JSON-LD (keeps English for SEO)
- The `/llm.txt` route content
- Form validation error messages from Zod (these are technical)
- The math captcha numbers (universal)

## Technical Details

The translation keys will use dot notation like `nav.localGroups`, `hero.title`, `groups.outdoors.surfSpots.name`, etc.

The `t()` function signature: `t(key: string) => string`. It looks up the key in the current language's translation object and falls back to English if a key is missing.

Group data translations will be structured so each group has a translated name and description keyed by a stable identifier derived from the group name.

The `LanguageProvider` wraps the app at the top level in `App.tsx`, making translations available everywhere without prop drilling.
