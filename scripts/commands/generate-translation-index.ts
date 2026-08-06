import fs from "fs";
import path from "path";

export function generateTranslationIndex(language: string) {
  const dir = path.join(process.cwd(), "src", "translations", language, "recipes");

  if (!fs.existsSync(dir)) {
    console.log(`Translation folder not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".ts") && file !== "index.ts");

  const imports: string[] = [];
  const recipes: string[] = [];

  files.forEach((file, index) => {
    const name = `recipe${index}`;
    const slug = file.replace(".ts", "");

    imports.push(`import ${name} from "./${slug}";`);
    recipes.push(name);
  });

  const output = `${imports.join("\n")}

export const recipes = [
${recipes.map((r) => `  ${r},`).join("\n")}
];
`;

  fs.writeFileSync(path.join(dir, "index.ts"), output, "utf8");

  console.log(`✅ Generated index.ts (${files.length} recipes)`);
}
