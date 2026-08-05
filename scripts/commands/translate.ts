import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { writeFileSync } from "fs";

import { OpenAITranslator } from "../translators/openai";
import { recipeHash } from "../utils/hash";
import { recipes } from "@/data/recipes";

export async function translate(language: string) {
  const translationsDir = path.join(process.cwd(), "src", "translations", language, "recipes");

  if (!fs.existsSync(translationsDir)) {
    console.log(`Translation folder not found: ${translationsDir}`);
    return;
  }

  const files = fs.readdirSync(translationsDir).filter((file) => file.endsWith(".ts"));

  console.log("");
  console.log(`🌍 ${files.length} recipe translation files found.`);
  console.log("");

  const translator = new OpenAITranslator();

  for (const file of files) {
    const slug = file.replace(".ts", "");

    try {
      const englishRecipe = recipes.find((recipe) => recipe.slug === slug);

      if (!englishRecipe) {
        console.log(`⚠ Missing English recipe: ${slug}`);
        continue;
      }

      const modulePath = pathToFileURL(path.join(translationsDir, file)).href;

      const translationModule = await import(modulePath);
      const translation = translationModule.default;

      const currentHash = recipeHash(englishRecipe);

      // Skip if already translated and the English recipe hasn't changed

      const isTranslated = translation.title !== englishRecipe.title;
      const isUpToDate = translationModule.sourceHash === currentHash;

      if (isTranslated && isUpToDate) {
        console.log(`⏭ ${slug} is already up to date`);
        continue;
      }

      const translated = await translator.translateRecipe(translation);

      const output = `import { RecipeTranslation } from "@/types/recipe-translation";

export const sourceHash = "${currentHash}";

const translation: RecipeTranslation = ${JSON.stringify(translated, null, 2)};

export default translation;
`;

      writeFileSync(path.join(translationsDir, file), output, "utf8");

      console.log(`✓ ${slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${slug}`);
      console.error(error);
    }

    // Stay within Gemini free-tier limits
    await new Promise((resolve) => setTimeout(resolve, 13000));
  }

  console.log("");
  console.log("Done.");
}
