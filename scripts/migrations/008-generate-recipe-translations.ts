import fs from "fs";
import path from "path";

import { recipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";

export const generateRecipeTranslationsMigration = {
  id: "008",

  name: "Generate Recipe Translation Files",

  description: "Creates translation files from the English recipes.",

  run() {
    const locale = "ar";

    const outputDir = path.join(process.cwd(), "src", "translations", locale, "recipes");

    fs.mkdirSync(outputDir, { recursive: true });

    let generated = 0;

    recipes.forEach((recipe: Recipe) => {
      const translation = {
        title: recipe.title,
        description: recipe.description,
        longDescription: recipe.longDescription ?? "",
        ingredients: recipe.ingredients.map((i) => i.name),
        instructions: recipe.instructions,
        healthBenefits: recipe.healthBenefits ?? [],
        keywords: recipe.keywords ?? [],
        tags: recipe.tags ?? [],
      };

      const file = `import { RecipeTranslation } from "@/types/recipe-translation";

const translation: RecipeTranslation = ${JSON.stringify(translation, null, 2)};

export default translation;
`;

      fs.writeFileSync(path.join(outputDir, `${recipe.slug}.ts`), file);

      generated++;
    });

    console.log("");
    console.log(`Generated translation files: ${generated}`);
  },
};
