import { recipes } from "@/data/recipes";
import type { Migration } from ".";

export const validateRecipesMigration: Migration = {
  id: "005",

  name: "Validate Recipes",

  description: "Checks every recipe against the Healthy Mezze schema.",

  run() {
    let issues = 0;

    const ids = new Set<number>();
    const slugs = new Set<string>();

    const validCategories = new Set([
      "salads",
      "soups",
      "main-dishes",
      "vegetarian",
      "vegan",
      "breakfast",
      "desserts",
      "drinks",
      "sandwiches-wraps",

      "mezze",
      "snack",
      "dips-sauces",
    ]);

    const validDifficulty = new Set(["Easy", "Medium", "Hard"]);

    console.log("");

    for (const recipe of recipes) {
      const problems: string[] = [];

      // ---------- IDs ----------
      if (ids.has(recipe.id)) problems.push(`Duplicate id (${recipe.id})`);
      ids.add(recipe.id);

      // ---------- Slugs ----------
      if (slugs.has(recipe.slug)) problems.push(`Duplicate slug (${recipe.slug})`);
      slugs.add(recipe.slug);

      // ---------- Images ----------
      if (!recipe.image) problems.push("Missing image");

      if (!recipe.imageAlt) problems.push("Missing imageAlt");

      // ---------- SEO ----------
      if (!recipe.keywords || recipe.keywords.length < 5) problems.push("Less than 5 keywords");

      // ---------- Health ----------
      if (!recipe.healthBenefits || recipe.healthBenefits.length < 5)
        problems.push("Less than 5 health benefits");

      // ---------- Ingredients ----------
      if (!recipe.ingredients || recipe.ingredients.length < 2)
        problems.push("Too few ingredients");

      // ---------- Instructions ----------
      if (!recipe.instructions || recipe.instructions.length < 5)
        problems.push("Too few instructions");

      // ---------- Nutrition ----------
      if (!recipe.nutrition) problems.push("Missing nutrition");
      else {
        if (!recipe.nutrition.calories) problems.push("Missing calories");

        if (!recipe.nutrition.protein) problems.push("Missing protein");

        if (!recipe.nutrition.carbs) problems.push("Missing carbs");

        if (!recipe.nutrition.fat) problems.push("Missing fat");

        if (!recipe.nutrition.fiber) problems.push("Missing fiber");

        if (!recipe.nutrition.sugar) problems.push("Missing sugar");

        if (!recipe.nutrition.sodium) problems.push("Missing sodium");
      }

      // ---------- Category ----------
      if (!validCategories.has(recipe.category))
        problems.push(`Invalid category (${recipe.category})`);

      // ---------- Difficulty ----------
      if (!validDifficulty.has(recipe.difficulty))
        problems.push(`Invalid difficulty (${recipe.difficulty})`);

      // ---------- Times ----------
      if (!recipe.prepTime) problems.push("Missing prepTime");

      if (!recipe.cookTime) problems.push("Missing cookTime");

      if (!recipe.totalTime) problems.push("Missing totalTime");

      // ---------- Servings ----------
      if (!recipe.servings || recipe.servings <= 0) problems.push("Invalid servings");

      if (problems.length > 0) {
        issues++;

        console.log(`❌ ${recipe.slug}`);

        for (const problem of problems) console.log(`   • ${problem}`);

        console.log("");
      }
    }

    console.log("========================================");

    if (issues === 0) {
      console.log("✅ All recipes passed validation.");
    } else {
      console.log(`❌ Recipes with issues: ${issues}`);
    }

    console.log("========================================");
  },
};
