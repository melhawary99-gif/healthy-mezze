import fs from "node:fs";
import path from "node:path";

import { recipes } from "@/data/recipes";
import { formatTranslationFile } from "../utils/formatTranslationFile";

export function generate(language: string) {
  const outputDir = path.join(process.cwd(), "src/data/recipe-translations", language);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("");
  console.log(`🌍 Translation Generator (${language})`);
  console.log("====================================");
  console.log("");

  let created = 0;
  let skipped = 0;

  for (const recipe of recipes) {
    const filePath = path.join(outputDir, `${recipe.slug}.ts`);

    if (fs.existsSync(filePath)) {
      skipped++;
      console.log(`⏭ Skipped ${recipe.slug}`);
      continue;
    }

    const fileContent = formatTranslationFile(recipe, language);

    fs.writeFileSync(filePath, fileContent, "utf8");

    created++;
    console.log(`✅ Created ${recipe.slug}`);
  }

  console.log("");
  console.log("====================================");
  console.log(`Recipes           : ${recipes.length}`);
  console.log(`Created           : ${created}`);
  console.log(`Skipped existing  : ${skipped}`);
  console.log("");
}
