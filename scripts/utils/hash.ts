import crypto from "crypto";

export function recipeHash(recipe: Record<string, any>): string {
  const translatableContent = {
    title: recipe.title,
    description: recipe.description,
    longDescription: recipe.longDescription,
    imageAlt: recipe.imageAlt,

    ingredients: recipe.ingredients,

    instructions: recipe.instructions,

    healthBenefits: recipe.healthBenefits,

    keywords: recipe.keywords,

    tags: recipe.tags,
  };

  return crypto.createHash("sha256").update(JSON.stringify(translatableContent)).digest("hex");
}
