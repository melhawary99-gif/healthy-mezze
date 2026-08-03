import fs from "node:fs";
import path from "node:path";

import { recipes } from "@/data/recipes";
import { findRecipeFile } from "../lib/findRecipeFile";
import type { Migration } from ".";

export const removeQuantityFromNameMigration: Migration = {
  id: "004",

  name: "Remove Quantity From Ingredient Name",

  description: "Removes duplicated quantities from ingredient names.",

  run() {
    const recipesDir = path.join(process.cwd(), "src/data/recipes");

    let changes = 0;

    console.log("");

    for (const recipe of recipes) {
      const file = findRecipeFile(recipesDir, recipe.slug);

      if (!file) continue;

      let content = fs.readFileSync(file, "utf8");

      let modified = false;

      for (const ingredient of recipe.ingredients) {
        const escapedName = ingredient.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

        const quantityRegex = /^(\d+(?:[./]\d+)?(?:\s+\d+\/\d+)?)\s+/;

        if (!quantityRegex.test(ingredient.name)) {
          continue;
        }

        const cleanedName = ingredient.name.replace(quantityRegex, "").trim();

        const escapedCleaned = cleanedName.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

        const pattern = new RegExp(`name:\\s*"${escapedName}"`, "g");

        const replacement = `name: "${cleanedName}"`;

        if (pattern.test(content)) {
          content = content.replace(pattern, replacement);
          modified = true;
          changes++;
        }
      }

      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`✅ ${recipe.slug}`);
      }
    }

    console.log("");
    console.log(`Removed duplicated quantities: ${changes}`);
    console.log("");
  },
};
