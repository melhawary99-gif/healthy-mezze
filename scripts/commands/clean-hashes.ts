import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

import { recipes } from "@/data/recipes";

export async function cleanHashes(language: string) {
  const translationsDir = path.join(process.cwd(), "src", "translations", language, "recipes");

  const files = fs.readdirSync(translationsDir).filter((file) => file.endsWith(".ts"));

  console.log("");
  console.log(`🧹 Cleaning hashes for ${files.length} recipes...`);
  console.log("");

  let removed = 0;
  let kept = 0;

  for (const file of files) {
    const slug = file.replace(".ts", "");

    const englishRecipe = recipes.find((r) => r.slug === slug);

    if (!englishRecipe) {
      console.log(`⚠ Missing English recipe: ${slug}`);
      continue;
    }

    const modulePath = pathToFileURL(path.join(translationsDir, file)).href;

    const translationModule = await import(modulePath);

    const translation = translationModule.default;

    const isTranslated = translation.title !== englishRecipe.title;

    const output = `import { RecipeTranslation } from "@/types/recipe-translation";

${isTranslated ? `export const sourceHash = "${translationModule.sourceHash ?? ""}";` : ""}

const translation: RecipeTranslation = ${JSON.stringify(translation, null, 2)};

export default translation;
`;

    fs.writeFileSync(path.join(translationsDir, file), output, "utf8");

    if (isTranslated) {
      kept++;
      console.log(`✓ ${slug}`);
    } else {
      removed++;
      console.log(`🧹 Removed hash: ${slug}`);
    }
  }

  console.log("");
  console.log(`Removed hashes: ${removed}`);
  console.log(`Kept hashes: ${kept}`);
  console.log("");
  console.log("✅ Done.");
}
