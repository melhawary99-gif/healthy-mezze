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

export const normalizeUnitsMigration: Migration = {
  id: "002",

  name: "Normalize Ingredient Units",

  description: "Preview moving descriptive words from unit into ingredient name.",

  run() {
    let changes = 0;

    console.log("");

    for (const recipe of recipes) {
      for (const ingredient of recipe.ingredients) {
        const unit = ingredient.unit.trim().toLowerCase();

        if (!(unit in replacements)) {
          continue;
        }

        changes++;

        const before = {
          amount: ingredient.amount,
          unit: ingredient.unit,
          name: ingredient.name,
        };

        const after = {
          amount: ingredient.amount,
          unit: "",
          name: `${replacements[unit]} ${ingredient.name}`.trim(),
        };

        console.log(`📄 ${recipe.slug}`);
        console.log("Before:");
        console.log(before);

        console.log("After:");
        console.log(after);

        console.log("----------------------------------------");
      }
    }

    console.log("");
    console.log(`Preview changes: ${changes}`);
    console.log("");
  },
};
