import { Recipe } from "@/types/recipe";
import { createTranslationTemplate } from "./createTranslationTemplate";

function toPascalCase(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export function formatTranslationFile(recipe: Recipe, language: string): string {
  const template = createTranslationTemplate(recipe);

  const variableName =
    toPascalCase(recipe.slug) + language.charAt(0).toUpperCase() + language.slice(1);

  return `import { RecipeTranslation } from "@/types/recipeTranslation";

export const ${variableName}: RecipeTranslation = ${JSON.stringify(template, null, 2)};
`;
}
