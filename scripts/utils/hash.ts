import crypto from "crypto";

export function recipeHash(recipe: unknown): string {
  return crypto.createHash("sha256").update(JSON.stringify(recipe)).digest("hex");
}
