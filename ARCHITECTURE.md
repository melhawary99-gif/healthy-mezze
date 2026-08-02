# Healthy Mezze Architecture

Version: 1.0

---

# Vision

Healthy Mezze is a multilingual recipe platform focused on healthy Egyptian and Lebanese cuisine, designed to scale to thousands of recipes and multiple languages without requiring architectural changes.

---

# Core Principles

- English is the canonical source.
- Arabic is the first translated language.
- Future languages (Russian, French, German, Turkish, etc.) should require no architecture changes.
- UI translations use next-intl.
- Recipe translations are stored separately from recipe metadata.
- Components never know which language they are rendering.

---

# Project Structure

src/

    app/

    components/

    data/

        recipes/

        recipe-translations/

    lib/

    types/

---

# Recipes

Recipe files contain:

- slug
- cuisine
- category
- prep time
- cook time
- total time
- servings
- nutrition
- difficulty
- featured
- image
- SEO dates

English content is stored here.

---

# Recipe Translations

Only translated languages have translation files.

Example:

recipe-translations/

    ar/

        greek-salad.ts

Later:

    ru/

    fr/

    de/

No duplicated English translations.

---

# Translation Loader

Every page loads recipes using:

getLocalizedRecipe(slug, locale)

The page never loads translations directly.

---

# Fallback Strategy

English is always available.

If a translation exists:

English recipe + translation = localized recipe

If a translation does not exist:

English recipe is returned automatically.

---

# Components

Components receive a complete Recipe object.

They never care which language is currently active.

---

# SEO

Metadata always uses the localized recipe.

This automatically localizes:

- title
- description
- image alt
- keywords

---

# Future Languages

Adding a language requires:

1. Create folder:

recipe-translations/<locale>

2. Add translated recipe files.

No other code changes.

---

# Future CMS

If Healthy Mezze later moves to a CMS or database, the website should continue using:

getLocalizedRecipe()

Only the data source changes.

---

# Architecture Status

Frozen.

Future work should follow this document.
