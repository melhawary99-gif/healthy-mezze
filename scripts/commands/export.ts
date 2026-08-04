import fs from "fs";
import path from "path";

import { recipes } from "@/data/recipes";

export function exportTranslations(language: string) {
  const outputDir = path.join(process.cwd(), "translations-export");

  fs.mkdirSync(outputDir, { recursive: true });

  const batch = recipes.map((recipe) => ({
    slug: recipe.slug,
    title: recipe.title,
    description: recipe.description,
    longDescription: recipe.longDescription ?? "",
    imageAlt: recipe.imageAlt ?? "",
    ingredients: recipe.ingredients.map((i) => i.name),
    instructions: recipe.instructions,
    healthBenefits: recipe.healthBenefits ?? [],
    keywords: recipe.keywords ?? [],
    tags: recipe.tags ?? [],
  }));

  const file = path.join(outputDir, `${language}-batch-001.json`);

  fs.writeFileSync(file, JSON.stringify(batch, null, 2));

  console.log("");
  console.log(`✅ Exported ${batch.length} recipes`);
  console.log(file);
}
