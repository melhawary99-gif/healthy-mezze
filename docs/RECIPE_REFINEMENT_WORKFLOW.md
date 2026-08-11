# Healthy Mezze — Recipe Refinement Workflow

This is the permanent workflow for refining Healthy Mezze recipes.

## Reference Architecture

When uncertain, use the proven Beetroot Salad implementation:

- src/data/recipes/beetroot-salad.ts
- src/data/recipe-translations/en/beetroot-salad.ts
- src/data/recipe-translations/ar/beetroot-salad.ts
- src/types/recipeTranslation.ts
- src/data/recipe-translations/index.ts

Do not invent a new architecture.

## Standard Workflow

Every recipe must follow this order:

1. Canonical recipe
2. TypeScript check
3. Rich English translation
4. Rich Arabic translation
5. Register both translations
6. Six useful visual steps
7. Convert images to WebP
8. Verify image files and paths
9. TypeScript check
10. Test English page
11. Test Arabic page
12. Verify category
13. Build
14. Commit
15. Push

## 1. Canonical Recipe

File:

src/data/recipes/[slug].ts

Check and refine:

- id
- title
- slug
- description
- longDescription
- image
- imageAlt
- cuisine
- category
- vegetarian
- vegan
- prepTime
- cookTime
- totalTime
- servings
- difficulty
- ingredients
- instructions
- nutrition
- healthBenefits
- keywords
- tags
- featured

Ingredients should contain useful preparation notes where appropriate.

Instructions should provide enough practical detail for a successful cooking journey.

After canonical changes:

npx tsc --noEmit

Do not continue if TypeScript fails.

## 2. TypeScript Source of Truth

Before creating translations, inspect:

src/types/recipeTranslation.ts

Never invent properties.

The supported rich translation sections are:

- story
- cookingGuide
- adaptations
- visualSteps
- recipeRescue
- whatIf
- storage
- serving
- faq

The type definitions in recipeTranslation.ts are authoritative.

## 3. Rich English Translation

File:

src/data/recipe-translations/en/[slug].ts

Use the Beetroot Salad English translation as the structural reference.

Include useful recipe-specific information for:

- title
- description
- longDescription
- imageAlt
- ingredients
- instructions
- healthBenefits
- keywords
- tags
- story
- cookingGuide
- adaptations
- visualSteps
- recipeRescue
- whatIf
- storage
- serving
- faq

Do not use generic filler.

Explain unfamiliar ingredients when relevant.

## 4. Rich Arabic Translation

File:

src/data/recipe-translations/ar/[slug].ts

Mirror the English refinement structure.

Use natural Arabic.

Include the same level of useful cooking information as English.

The Arabic export name must match the actual export used by the project.

## 5. Translation Registration

File:

src/data/recipe-translations/index.ts

Both translations must be imported AND registered.

Example:

import { recipeEn } from "./en/recipe";
import { RecipeAr } from "./ar/recipe";

Then:

"recipe-slug": recipeEn,

and:

"recipe-slug": RecipeAr,

Exports alone are NOT registration.

Always verify the registry before testing the page.

## 6. Visual Steps

Every refined recipe has six useful cooking visuals.

Each language translation contains:

visualSteps: [
  {
    step: 1,
    title: "...",
    description: "...",
    image: "...",
    imageAlt: "...",
    tip: "...",
  }
]

The six steps must follow the actual recipe.

Do not invent ingredients, cooking methods, utensils, colors, or preparation stages.

English and Arabic use the same image files.

## 7. Image Naming

Images belong in:

public/images/recipes/[slug]/

Use:

step-1-...
step-2-...
step-3-...
step-4-...
step-5-...
step-6-...

Final website images should be WebP.

Translation paths must exactly match the real filenames.

## 8. Image Conversion

Convert source images to WebP using Sharp.

Verify the WebP files exist before deleting PNG files.

Never delete PNG files before verifying the WebP conversion succeeded.

## 9. Verification

Verify the translation sections in English and Arabic.

Verify all six visual image paths.

Then run:

npx tsc --noEmit

Do not continue if TypeScript fails.

## 10. Page Testing

Test:

/en/recipes/[slug]

and:

/ar/recipes/[slug]

Verify:

- canonical information
- rich translation
- ingredients
- instructions
- story
- cooking guide
- adaptations
- six visual steps
- recipe rescue
- what-if scenarios
- storage
- serving
- FAQ
- images

If the page displays only the canonical recipe, check:

src/data/recipe-translations/index.ts

before changing page architecture.

## 11. Category

Verify the canonical category:

category: "..."

Do not change categories just to make a recipe appear.

Follow the existing category architecture.

## 12. Build

Run:

npm run build

Do not commit a recipe with a failing build.

## 13. Git

Check:

git status --short

Review the changed files.

Then:

git add -A

Commit:

git commit -m "Complete [recipe name] recipe, translations, and visuals"

Push:

git push origin feature/i18n

## Critical Rules

1. Beetroot Salad is the proven structural reference.
2. recipeTranslation.ts is the type source of truth.
3. Never invent unsupported translation fields.
4. Translation exports must also be registered in index.ts.
5. Do not change page architecture when the problem is missing translation registration.
6. Do not patch a badly corrupted translation incrementally.
7. If a translation is incomplete or corrupted, replace the complete file cleanly.
8. English and Arabic should have equivalent refinement depth.
9. Visual steps must reflect the actual recipe.
10. Image filenames must exactly match translation paths.
11. Do not delete PNGs until WebP conversion is verified.
12. Always run TypeScript before proceeding.
13. Always test both language pages.
14. Always build before committing.
15. Commit and push the complete recipe work together.

## Permanent Reference

For future recipes, the primary reference implementation is:

src/data/recipes/beetroot-salad.ts
src/data/recipe-translations/en/beetroot-salad.ts
src/data/recipe-translations/ar/beetroot-salad.ts
src/types/recipeTranslation.ts
src/data/recipe-translations/index.ts
