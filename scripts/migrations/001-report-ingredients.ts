import { recipes } from "@/data/recipes";
import type { Migration } from ".";

export const reportIngredientsMigration: Migration = {
  id: "001",

  name: "Ingredient Report",

  description: "Reports suspicious ingredient formatting.",

  run() {
    let issues = 0;

    const suspiciousUnits = [
      "large",
      "small",
      "medium",
      "green",
      "red",
      "yellow",
      "romaine",
      "baby",
      "fresh",
      "pita",
    ];

    console.log("");

    for (const recipe of recipes) {
      for (const ingredient of recipe.ingredients) {
        const unit = ingredient.unit.trim().toLowerCase();

        if (suspiciousUnits.includes(unit)) {
          issues++;

          console.log(`⚠ ${recipe.slug}`);
          console.log(`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`);
          console.log("");
        }
      }
    }

    console.log("========================================");
    console.log(`Total issues found: ${issues}`);
    console.log("");
  },
};
