import fs from "node:fs";

export function updateRecipeFile(filePath: string, before: string, after: string) {
  const content = fs.readFileSync(filePath, "utf8");

  if (!content.includes(before)) {
    return false;
  }

  const updated = content.replace(before, after);

  fs.writeFileSync(filePath, updated);

  return true;
}
