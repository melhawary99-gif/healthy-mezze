import fs from "node:fs";
import { recipes } from "@/data/recipes";
import { findRecipeFile } from "../lib/findRecipeFile";
import type { Migration } from ".";

export const fixDuplicateIdsMigration: Migration = {
  id: "006",

  name: "Fix Duplicate Recipe IDs",

  description: "Automatically assigns unique IDs to duplicated recipes.",

  run() {
    const recipesDir = "src/data/recipes";

    const usedIds = new Set<number>();

    let nextId = 1;
    let fixed = 0;

    console.log("");

    for (const recipe of recipes) {
      if (!usedIds.has(recipe.id)) {
        usedIds.add(recipe.id);

        if (recipe.id >= nextId) {
          nextId = recipe.id + 1;
        }

        continue;
      }

      while (usedIds.has(nextId)) {
        nextId++;
      }

      const file = findRecipeFile(recipesDir, recipe.slug);

      if (!file) {
        console.log(`❌ ${recipe.slug}`);
        continue;
      }

      let content = fs.readFileSync(file, "utf8");

      content = content.replace(/id:\s*\d+/, `id: ${nextId}`);

      fs.writeFileSync(file, content);

      console.log(`✅ ${recipe.slug}: ${recipe.id} → ${nextId}`);

      usedIds.add(nextId);

      nextId++;

      fixed++;
    }

    console.log("");
    console.log(`Duplicate IDs fixed: ${fixed}`);
    console.log("");
  },
};
