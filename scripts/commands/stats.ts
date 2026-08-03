import fs from "node:fs";
import path from "node:path";

export function stats(recipesDir: string) {
  const files = fs
    .readdirSync(recipesDir)
    .filter(
      (file) => file.endsWith(".ts") && file !== "index.ts" && file !== "_recipe-template.ts"
    );

  console.log("");
  console.log("🥗 Healthy Mezze Recipe Statistics");
  console.log("----------------------------------");
  console.log(`Recipes: ${files.length}`);
  console.log("");

  files.sort().forEach((file) => {
    console.log("•", file.replace(".ts", ""));
  });

  console.log("");
}
