# Healthy Mezze — Recipe Refinement Workflow

## Permanent Recipe Refinement Reference

When refining recipes, use the proven Beetroot Salad implementation as the structural reference:

- src/data/recipes/beetroot-salad.ts
- src/data/recipe-translations/en/beetroot-salad.ts
- src/data/recipe-translations/ar/beetroot-salad.ts
- src/types/recipeTranslation.ts
- src/data/recipe-translations/index.ts

Do not invent a new architecture.

---

## Translation Registration

Every completed recipe must have BOTH English and Arabic translations registered in:

src/data/recipe-translations/index.ts

Registration requires TWO things for EACH language:

1. Import the translation from its actual file.
2. Register it in the correct language registry.

Exports alone are NOT registration.

---

## Step 1 — Inspect the Actual Export Names

NEVER guess the exported constant names.

For English:

grep -nE "export|const .*Recipe" "src/data/recipe-translations/en/[slug].ts"

For Arabic:

grep -nE "export|const .*Recipe" "src/data/recipe-translations/ar/[slug].ts"

Use the exact names returned by these commands.

---

## Step 2 — Follow the Existing Beetroot Pattern

Example:

English file:

src/data/recipe-translations/en/beetroot-salad.ts

Export:

beetrootSaladEn

Registration:

import { beetrootSaladEn } from "./en/beetroot-salad";

Then inside enTranslations:

"mediterranean-beetroot-salad": beetrootSaladEn,

Arabic file:

src/data/recipe-translations/ar/beetroot-salad.ts

Export:

beetrootSaladAr

Registration:

import { beetrootSaladAr } from "./ar/beetroot-salad";

Then inside arTranslations:

"mediterranean-beetroot-salad": beetrootSaladAr,

---

## Step 3 — Python Registration Method

The proven method uses Python Path.read_text(), replace(), and write_text().

General structure:

python -c "from pathlib import Path; p=Path('src/data/recipe-translations/index.ts'); s=p.read_text(encoding='utf-8'); s=s.replace('EXISTING IMPORT','EXISTING IMPORT\nNEW IMPORT'); s=s.replace('EXISTING EN REGISTRY ENTRY','EXISTING EN REGISTRY ENTRY\nNEW EN REGISTRY ENTRY'); s=s.replace('EXISTING AR IMPORT','EXISTING AR IMPORT\nNEW AR IMPORT'); s=s.replace('EXISTING AR REGISTRY ENTRY','EXISTING AR REGISTRY ENTRY\nNEW AR REGISTRY ENTRY'); p.write_text(s,encoding='utf-8')"

IMPORTANT:

- Use an existing line as the replacement anchor.
- Do not rewrite the entire index.ts.
- Do not change the architecture.
- Do not guess export names.
- Inspect the actual files first.
- Add both imports.
- Add both registry entries.

---

## Step 4 — Verify Registration

After modifying index.ts:

grep -n -A 5 -B 5 "[recipe-slug]" "src/data/recipe-translations/index.ts"

Confirm that the output contains:

- English import
- Arabic import
- English registry entry
- Arabic registry entry

Then run:

npx tsc --noEmit

Do not continue if TypeScript fails.

---

## Recipe Refinement Order

1. Refine canonical recipe.
2. Run TypeScript.
3. Create rich English translation.
4. Create rich Arabic translation.
5. Register English and Arabic translations.
6. Create or verify six useful visual steps.
7. Convert images to WebP.
8. Verify image files and paths.
9. Run TypeScript again.
10. Test English page.
11. Test Arabic page.
12. Verify category.
13. Run production build.
14. Review changed files.
15. Commit.
16. Push.

---

## Critical Rules

1. Beetroot Salad is the proven structural reference.
2. recipeTranslation.ts is the type source of truth.
3. Never invent unsupported translation fields.
4. Translation exports must also be registered in index.ts.
5. Never guess translation export names.
6. Always inspect the actual English and Arabic exports before registration.
7. Do not change page architecture when the problem is missing translation registration.
8. Do not patch badly corrupted translation files incrementally.
9. Replace a corrupted translation file cleanly when necessary.
10. English and Arabic must have equivalent refinement depth.
11. Visual steps must reflect the actual recipe.
12. Image filenames must exactly match translation paths.
13. Never delete PNGs until WebP conversion is verified.
14. Always run TypeScript before proceeding.
15. Always test both language pages.
16. Always build before committing.
17. Commit and push the complete recipe work together.

---

## Git Workflow

Check:

git status --short

Review:

git diff --stat

Stage:

git add -A

Commit:

git commit -m "Complete [recipe name] recipe, translations, and visuals"

Push:

git push origin feature/i18n
