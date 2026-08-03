import { recipes } from "@/data/recipes";

export function normalize() {
  console.log("");
  console.log("🧹 Healthy Mezze Recipe Normalizer");
  console.log("==================================");
  console.log("");

  let issues = 0;

  const suspiciousUnits = [
    "green",
    "red",
    "yellow",
    "romaine",
    "iceberg",
    "baby",
    "fresh",
    "large",
    "small",
    "medium",
    "pita",
  ];

  for (const recipe of recipes) {
    for (const ingredient of recipe.ingredients) {
      if (ingredient.unit && suspiciousUnits.includes(ingredient.unit.toLowerCase())) {
        issues++;

        console.log(`⚠ ${recipe.slug}`);
        console.log(`   Unit "${ingredient.unit}" looks like part of the ingredient name.`);
        console.log(`   Current: ${ingredient.amount} ${ingredient.unit} ${ingredient.name}`);
        console.log("");
      }

      if (/^\d/.test(ingredient.name.trim())) {
        issues++;

        console.log(`⚠ ${recipe.slug}`);
        console.log(`   Ingredient name starts with a number.`);
        console.log(`   Current: ${ingredient.name}`);
        console.log("");
      }
    }
  }

  console.log("==================================");
  console.log(`Potential issues found: ${issues}`);
  console.log("");
}
