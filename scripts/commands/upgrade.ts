import fs from "node:fs";
import path from "node:path";

export function upgrade(recipesDir: string) {
  const files = fs
    .readdirSync(recipesDir)
    .filter(
      (file) => file.endsWith(".ts") && file !== "index.ts" && file !== "_recipe-template.ts"
    );

  const fields = ["longDescription", "imageAlt", "healthBenefits", "keywords", "tags"];

  console.log("");
  console.log("🛠 Healthy Mezze Upgrade (Dry Run)");
  console.log("==================================");
  console.log("");

  let upgrades = 0;

  for (const file of files) {
    const fullPath = path.join(recipesDir, file);
    const content = fs.readFileSync(fullPath, "utf8");

    const missing = fields.filter((field) => !content.includes(field));

    if (missing.length === 0) continue;

    upgrades++;

    const recipeName = file
      .replace(".ts", "")
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    console.log(`⚠ ${recipeName}`);
    console.log("Would add:");

    missing.forEach((field) => {
      console.log(`   • ${field}`);
    });

    console.log("");
  }

  console.log("==================================");
  console.log(`${upgrades} recipe(s) would be upgraded.`);
  console.log("");
  console.log("This is a dry run.");
  console.log("No files were modified.");
  console.log("");
}
