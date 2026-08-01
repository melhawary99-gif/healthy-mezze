import fs from "fs";
import path from "path";

const recipesDir = path.join(process.cwd(), "src/data/recipes");

const replacements = {
  '"Breakfast"': '"breakfast"',
  '"Salads"': '"salads"',
  '"Soups"': '"soups"',
  '"Main Dishes"': '"main-dishes"',
  '"Vegetarian"': '"vegetarian"',
  '"Vegan"': '"vegan"',
  '"Sandwiches & Wraps"': '"sandwiches-wraps"',
  '"Snack"': '"snack"',
  '"Mezze"': '"mezze"',
  '"Drinks"': '"drinks"',
  '"Desserts"': '"desserts"',
  '"Dips & Sauces"': '"dips-sauces"',
};

const files = fs
  .readdirSync(recipesDir)
  .filter((file) => file.endsWith(".ts") && file !== "index.ts" && file !== "_recipe-template.ts");

for (const file of files) {
  const filePath = path.join(recipesDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  for (const [from, to] of Object.entries(replacements)) {
    content = content.replaceAll(`category: ${from}`, `category: ${to}`);
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✓ Updated ${file}`);
}

console.log("\n🎉 Category migration complete!");
