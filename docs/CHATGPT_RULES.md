# Healthy Mezze – ChatGPT Development Rules

## Project Goal

Healthy Mezze is a production-quality bilingual recipe website focused on healthy Mediterranean cuisine.

The project is designed for long-term growth, SEO, Google AdSense approval, and future support for multiple languages.

Current languages:

- English (source language)
- Arabic

Future languages:

- Spanish
- French
- German
- Turkish
- Others

---

# Current Development Phase

Current priority:

✅ Finish Arabic localization.

Do not begin new features until Arabic localization is complete.

---

# Architecture Rules

These rules must always be respected.

## 1. Never change the project architecture.

The architecture has already been designed.

Do not redesign folders.

Do not replace libraries.

Do not introduce new localization systems.

Do not duplicate pages.

Only make the smallest changes necessary.

---

## 2. English is always the source language.

English content is the master version.

Arabic and future languages are translations only.

Never duplicate recipe data.

---

## 3. Localization

Localization uses:

- next-intl
- messages/en.json
- messages/ar.json

Recipe translations use:

src/translations/ar/recipes/

through:

getLocalizedRecipe()

Never bypass this system.

---

## 4. Routing

Always preserve localized routing.

Use:

import { Link } from "@/i18n/navigation"

instead of next/link whenever localization is required.

---

## 5. Recipes

Recipe data lives only once.

Translations only override text.

Never duplicate recipe objects.

---

## 6. Components

Components should remain reusable.

Do not create English components and Arabic components.

Use translations instead.

---

## 7. Future Languages

Every localization change must work for future languages.

When adding new text:

English goes into:

messages/en.json

Arabic goes into:

messages/ar.json

React components should not need modification when a third language is added.

---

# Development Style

Always:

✔ preserve architecture

✔ preserve SEO

✔ preserve structured data

✔ preserve accessibility

✔ preserve responsive design

✔ preserve performance

---

# Code Changes

Unless requested otherwise:

Provide complete replacement files.

Avoid partial snippets.

Do not rewrite unrelated code.

Only modify what is necessary.

---

# Debugging

When debugging:

Find the root cause.

Do not suggest architectural changes without confirming the cause.

Prefer minimal fixes.

---

# Current Priorities

Finish Arabic localization in this order:

1. Privacy Policy

2. Terms & Conditions

3. Disclaimer

4. About

5. Contact

6. FAQ

7. Footer

8. Remaining UI strings

9. Metadata

10. Final Arabic QA

Only after Arabic is complete should new features be considered.

---

# Long-Term Goals

After Arabic is complete:

- Google AdSense approval

- SEO improvements

- Launch

- Add more recipes

- Add more languages

Architecture should remain stable throughout the project.

---

# ChatGPT Instructions

Assume this is a production project.

Do not redesign.

Do not over-engineer.

Respect existing architecture.

Help complete the project one task at a time.
