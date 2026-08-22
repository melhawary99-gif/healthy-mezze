# Healthy Mezze — Recipe Visual Image Rules

## Purpose

This document records a recurring mistake during recipe refinement so it is not repeated.

The problem occurred with the Olive Tapenade recipe.

The actual WebP images existed correctly in:

public/images/recipes/olive-tapenade/

However, some English and Arabic visual-step translations referenced filenames that did NOT exist.

This caused some visual steps to appear while others were missing.

---

## The Exact Mistake

Actual files on disk were:

step-1-prepare-olives.webp
step-2-chop-ingredients.webp
step-3-add-ingredients.webp
step-4-pulse-tapenade.webp
step-5-adjust-seasoning.webp
step-6-serve-tapenade.webp

But the translation files incorrectly referenced:

step-2-pulse-olives.webp
step-3-add-seasonings.webp
step-5-taste-balance.webp
step-6-rest-serve.webp

Those four files did not exist.

Steps 1 and 4 worked because their referenced filenames happened to match the actual files.

---

# PERMANENT RULE

## NEVER INVENT VISUAL IMAGE FILENAMES

The filesystem is the source of truth.

Before writing visualSteps in either translation file, inspect:

public/images/recipes/[slug]/

Use the EXACT filenames that actually exist.

Do not create a filename based on:

- the visual step title
- the description
- what the filename "should" be
- what was originally planned
- what the generated image was supposed to be called

Only use the filename that actually exists on disk.

---

# English and Arabic Must Use Identical Image Paths

English:

src/data/recipe-translations/en/[slug].ts

Arabic:

src/data/recipe-translations/ar/[slug].ts

Both languages must reference the same physical image files.

For example:

/images/recipes/olive-tapenade/step-2-chop-ingredients.webp

must be used in BOTH English and Arabic.

Do not create separate Arabic image filenames.

---

# Required Workflow for Visual Steps

Before creating or editing visualSteps:

1. List the actual files.
2. Copy the exact filenames.
3. Put those exact filenames into the English translation.
4. Put the exact same filenames into the Arabic translation.
5. Verify every referenced file exists.
6. Only then test the recipe page.

---

# Required File Check

Run:

find "public/images/recipes/[slug]" -maxdepth 1 -type f -printf "%f\n" | sort

Never assume the filenames.

---

# Required Translation Path Check

Run this for English:

grep -oE '"/images/recipes/[slug]/[^"]+\.webp"' \
  src/data/recipe-translations/en/[slug].ts

Run this for Arabic:

grep -oE '"/images/recipes/[slug]/[^"]+\.webp"' \
  src/data/recipe-translations/ar/[slug].ts

Then verify every referenced path exists.

---

# Automated Verification

Use:

for lang in en ar; do
  echo
  echo "[$lang]"

  grep -oE '"/images/recipes/[slug]/[^"]+\.webp"' \
    "src/data/recipe-translations/$lang/[slug].ts" |
  while read -r path; do
    clean="${path#\"}"
    clean="${clean%\"}"
    file="public$clean"

    if [ -f "$file" ]; then
      echo "✓ $clean"
    else
      echo "✗ MISSING: $clean"
    fi
  done
done

There must be ZERO:

✗ MISSING

Every image must return:

✓

---

# Six Visual Steps

Every refined recipe should have six useful visual steps.

The six visual steps must:

1. Follow the actual recipe.
2. Show real stages of preparation.
3. Use images that actually exist.
4. Use the exact filenames from the filesystem.
5. Use the same images in English and Arabic.
6. Have valid WebP paths.

---

# WebP Conversion Rule

When converting images:

1. Generate WebP files.
2. Verify the WebP files exist.
3. Verify Sharp can read them.
4. Verify dimensions.
5. Verify file sizes.
6. Update translation paths using the actual filenames.
7. Verify every translation path.
8. Only then remove PNG files.

Never delete PNG files before confirming the WebP files work.

---

# Important Diagnostic Rule

If some visual steps appear and others do not:

DO NOT immediately modify:

- recipe page architecture
- translation loader
- translation registry
- RecipeCard
- routing
- Next.js configuration
- index.ts
- image generation

First check:

1. Actual files in public/images/recipes/[slug]/
2. English visualSteps paths
3. Arabic visualSteps paths
4. Whether every referenced file exists
5. Whether the WebP files can be read

If some images work and some do not, compare the exact filenames first.

---

# Olive Tapenade Incident

Recipe:

olive-tapenade

Actual files:

step-1-prepare-olives.webp
step-2-chop-ingredients.webp
step-3-add-ingredients.webp
step-4-pulse-tapenade.webp
step-5-adjust-seasoning.webp
step-6-serve-tapenade.webp

Incorrect paths:

step-2-pulse-olives.webp
step-3-add-seasonings.webp
step-5-taste-balance.webp
step-6-rest-serve.webp

Correct paths:

step-2-chop-ingredients.webp
step-3-add-ingredients.webp
step-5-adjust-seasoning.webp
step-6-serve-tapenade.webp

The images themselves were valid WebP files.

The problem was the mismatch between the real filenames and the filenames referenced by the translations.

---

# Critical Rule for Future Recipes

NEVER rename or invent image paths just because the visual-step wording is different.

The visual-step text and the physical filename are separate things.

The filename must always come from the actual filesystem.

Example:

Actual:

step-2-chop-ingredients.webp

Visual title may say:

"Pulse the olives and ingredients"

That is completely fine.

DO NOT change the path to:

step-2-pulse-ingredients.webp

unless that file actually exists.

---

# Final Pre-Test Checklist

Before testing /en/recipes/[slug]:

[ ] Six visual images exist.
[ ] All six are WebP.
[ ] Sharp can read all six.
[ ] English uses the exact real filenames.
[ ] Every English image path exists.

Before testing /ar/recipes/[slug]:

[ ] Arabic uses the exact same six image filenames.
[ ] Every Arabic image path exists.

Before build:

[ ] No invented image filenames.
[ ] No missing image paths.
[ ] npx tsc --noEmit passes.
[ ] Both language pages use the same physical images.

---

# Permanent Reminder

DO NOT GUESS IMAGE FILENAMES.

LIST THE FILES FIRST.

COPY THE ACTUAL FILENAMES.

VERIFY BOTH TRANSLATIONS AGAINST THE FILESYSTEM.

The filesystem is the source of truth.
