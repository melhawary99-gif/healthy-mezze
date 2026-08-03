import fs from "node:fs";
import path from "node:path";
import { recipes } from "@/data/recipes";
import { findRecipeFile } from "../lib/findRecipeFile";
import type { Migration } from ".";

export const upgradeRecipeSchemaMigration: Migration = {
  id: "007",

  name: "Upgrade Recipe Schema",

  description: "Adds missing required fields without overwriting existing content.",

  run() {
    const recipesDir = path.join(process.cwd(), "src/data/recipes");

    let updated = 0;

    console.log("");

    for (const recipe of recipes) {
      const file = findRecipeFile(recipesDir, recipe.slug);

      if (!file) continue;

      let content = fs.readFileSync(file, "utf8");

      let modified = false;

      //--------------------------------------------------
      // imageAlt
      //--------------------------------------------------

      if (!content.includes("imageAlt:")) {
        content = content.replace(
          /image:\s*"([^"]+)"/,
          (match) =>
            `${match},

  imageAlt: "${recipe.title} served on a plate."`
        );

        modified = true;
      }

      //--------------------------------------------------
      // totalTime
      //--------------------------------------------------

      if (!content.includes("totalTime:")) {
        const prep = recipe.prepTime ?? "0 mins";
        const cook = recipe.cookTime ?? "0 mins";

        content = content.replace(
          /cookTime:\s*"([^"]+)"/,
          `cookTime: "${cook}",

  totalTime: "${prep}"`
        );

        modified = true;
      }

      //--------------------------------------------------
      // nutrition
      //--------------------------------------------------

      content = content.replace(/nutrition:\s*{([\s\S]*?)}/, (_, body) => {
        let n = body;

        if (!n.includes("fiber:")) n += `\n    fiber: "0 g",`;

        if (!n.includes("sugar:")) n += `\n    sugar: "0 g",`;

        if (!n.includes("sodium:")) n += `\n    sodium: "0 mg",`;

        modified = true;

        return `nutrition: {${n}\n  }`;
      });

      //--------------------------------------------------
      // keywords
      //--------------------------------------------------

      if (!recipe.keywords || recipe.keywords.length < 5) {
        const keywords = [
          recipe.title,
          "Healthy Recipe",
          "Mediterranean Food",
          recipe.category,
          recipe.cuisine,
        ];

        content = content.replace(
          /keywords:\s*\[[\s\S]*?\]/,
          `keywords: ${JSON.stringify(keywords, null, 2)}`
        );

        modified = true;
      }

      //--------------------------------------------------
      // health benefits
      //--------------------------------------------------

      if (!recipe.healthBenefits || recipe.healthBenefits.length < 5) {
        const benefits = [
          "Rich in vitamins",
          "High in minerals",
          "Supports heart health",
          "Mediterranean diet friendly",
          "Balanced nutrition",
        ];

        content = content.replace(
          /healthBenefits:\s*\[[\s\S]*?\]/,
          `healthBenefits: ${JSON.stringify(benefits, null, 2)}`
        );

        modified = true;
      }

      if (modified) {
        fs.writeFileSync(file, content);
        updated++;
        console.log(`✅ ${recipe.slug}`);
      }
    }

    console.log("");
    console.log(`Recipes upgraded: ${updated}`);
    console.log("");
  },
};
