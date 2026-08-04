import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

import { recipes } from "@/data/recipes";
import { recipeHash } from "../utils/hash";

export async function syncHashes(language: string) {
  const translationsDir = path.join(process.cwd(), "src", "translations", language, "recipes");

  const files = fs.readdirSync(translationsDir).filter((file) => file.endsWith(".ts"));

  console.log("");
  console.log(`🔄 Syncing hashes for ${files.length} recipes...`);
  console.log("");

  for (const file of files) {
    const slug = file.replace(".ts", "");

    const englishRecipe = recipes.find((r) => r.slug === slug);

    if (!englishRecipe) {
      console.log(`⚠ Missing English recipe: ${slug}`);
      continue;
    }

    const currentHash = recipeHash(englishRecipe);

    const modulePath = pathToFileURL(path.join(translationsDir, file)).href;

    const translationModule = await import(modulePath);

    const translation = translationModule.default;

    const output = `import { RecipeTranslation } from "@/types/recipe-translation";

export const sourceHash = "${currentHash}";

const translation: RecipeTranslation = ${JSON.stringify(translation, null, 2)};

export default translation;
`;

    fs.writeFileSync(path.join(translationsDir, file), output, "utf8");

    console.log(`✓ ${slug}`);
  }

  console.log("");
  console.log("✅ Hash synchronization complete.");
}
