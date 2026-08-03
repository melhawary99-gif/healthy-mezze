import fs from "node:fs";
import path from "node:path";
import { findRecipeFile } from "../lib/findRecipeFile";
import { recipes } from "@/data/recipes";
import type { Migration } from ".";

const replacements: Record<string, string> = {
  large: "Large",
  medium: "Medium",
  small: "Small",
  green: "Green",
  red: "Red",
  yellow: "Yellow",
  romaine: "Romaine",
  baby: "Baby",
  fresh: "Fresh",
  pita: "Pita",
};

export const applyNormalizeUnitsMigration: Migration = {
  id: "003",

  name: "Apply Unit Normalization",

  description: "Moves descriptive units into the ingredient name and clears the unit field.",

  run() {
    const recipesDir = path.join(process.cwd(), "src/data/recipes");

    let changes = 0;

    console.log("");

    for (const recipe of recipes) {
      const file = findRecipeFile(recipesDir, recipe.slug);

      if (!file) {
        console.log(`❌ Cannot locate file for ${recipe.slug}`);
        continue;
      }

      let content = fs.readFileSync(file, "utf8");

      let modified = false;

      for (const ingredient of recipe.ingredients) {
        const unit = ingredient.unit.trim().toLowerCase();

        if (!(unit in replacements)) {
          continue;
        }

        const escapedName = ingredient.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

        const escapedUnit = ingredient.unit.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

        const pattern = new RegExp(
          `unit:\\s*"${escapedUnit}"\\s*,\\s*\\n\\s*name:\\s*"${escapedName}"`,
          "g"
        );

        const replacement = `unit: "",
    name: "${replacements[unit]} ${ingredient.name}"`;

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
    console.log(`Applied ${changes} ingredient updates.`);
    console.log("");
  },
};
