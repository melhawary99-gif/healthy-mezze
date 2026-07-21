import fs from "fs";
import path from "path";

const recipesDir = "./src/data/recipes";

const files = fs
  .readdirSync(recipesDir)
  .filter((f) => f.endsWith(".ts"));

function convertIngredient(line) {
  line = line.trim();

  if (!line.startsWith('"')) return null;

  const text = line.replace(/^"/, "").replace(/",?$/, "");

  const match = text.match(
    /^([\d/.]+)\s+([A-Za-z]+)\s+(.+)$/
  );

  if (!match) {
    return `{
    amount: 1,
    unit: "",
    name: "${text}"
  }`;
  }

  let [, amount, unit, name] = match;

  amount = eval(amount);

  return `{
    amount: ${amount},
    unit: "${unit}",
    name: "${name}"
  }`;
}

for (const file of files) {
  const full = path.join(recipesDir, file);

  let src = fs.readFileSync(full, "utf8");

  src = src.replace(
    /ingredients:\s*\[([\s\S]*?)\],\s*instructions:/m,
    (_, body) => {
      const converted = body
        .split("\n")
        .map(convertIngredient)
        .filter(Boolean)
        .join(",\n");

      return `ingredients: [
${converted}
],

instructions:`;
    }
  );

  fs.writeFileSync(full, src);
  console.log("✓", file);
}