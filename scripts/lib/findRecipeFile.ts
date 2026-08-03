import fs from "node:fs";
import path from "node:path";

export function findRecipeFile(recipesDir: string, slug: string): string | null {
  const files = fs.readdirSync(recipesDir);

  for (const file of files) {
    if (!file.endsWith(".ts")) continue;

    const content = fs.readFileSync(path.join(recipesDir, file), "utf8");

    if (content.includes(`slug: "${slug}"`)) {
      return path.join(recipesDir, file);
    }
  }

  return null;
}
