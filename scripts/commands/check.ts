import fs from "node:fs";
import path from "node:path";

export function check(recipesDir: string) {
  const files = fs
    .readdirSync(recipesDir)
    .filter(
      (file) => file.endsWith(".ts") && file !== "index.ts" && file !== "_recipe-template.ts"
    );

  console.log("");
  console.log("🥗 Healthy Mezze Recipe Checker");
  console.log("================================");
  console.log("");

  let complete = 0;
  let incomplete = 0;

  const incompleteFiles: string[] = [];

  for (const file of files) {
    const fullPath = path.join(recipesDir, file);
    const content = fs.readFileSync(fullPath, "utf8");

    const missing: string[] = [];

    if (!content.includes("imageAlt")) missing.push("imageAlt");

    if (!content.includes("longDescription")) missing.push("longDescription");

    if (!content.includes("keywords")) missing.push("keywords");

    if (!content.includes("tags")) missing.push("tags");

    if (!content.includes("healthBenefits")) missing.push("healthBenefits");

    if (missing.length === 0) {
      complete++;
      console.log(`✅ ${file}`);
    } else {
      incomplete++;

      const recipeName = file
        .replace(".ts", "")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      incompleteFiles.push(recipeName);

      console.log(`⚠ ${recipeName}`);

      for (const item of missing) {
        console.log(`   • ${item}`);
      }

      console.log("");
    }
  }

  console.log("================================");
  console.log(`Recipes checked : ${files.length}`);
  console.log(`Complete        : ${complete}`);
  console.log(`Incomplete      : ${incomplete}`);

  if (incompleteFiles.length > 0) {
    console.log("");
    console.log("Recipes needing attention:");
    console.log("");

    incompleteFiles.forEach((name) => {
      console.log(`• ${name}`);
    });
  }

  console.log("");
}
