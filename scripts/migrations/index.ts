import { applyNormalizeUnitsMigration } from "./003-apply-normalize-units";
import { removeQuantityFromNameMigration } from "./004-remove-quantity-from-name";
import { validateRecipesMigration } from "./005-validate-recipes";
import { fixDuplicateIdsMigration } from "./006-fix-duplicate-ids";
import { reportIngredientsMigration } from "./001-report-ingredients";
import { normalizeUnitsMigration } from "./002-normalize-units";
import { upgradeRecipeSchemaMigration } from "./007-upgrade-recipe-schema";
import { generateRecipeTranslationsMigration } from "./008-generate-recipe-translations";

export interface Migration {
  id: string;
  name: string;
  description: string;
  run(): Promise<void> | void;
}

export const migrations: Migration[] = [
  applyNormalizeUnitsMigration,
  removeQuantityFromNameMigration,
  fixDuplicateIdsMigration,
  upgradeRecipeSchemaMigration,
  reportIngredientsMigration,
  validateRecipesMigration,
  generateRecipeTranslationsMigration,
];
