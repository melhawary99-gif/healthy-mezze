import fs from "fs";
import path from "path";

export async function translate(language: string) {
  const translationsDir = path.join(process.cwd(), "src", "translations", language, "recipes");

  if (!fs.existsSync(translationsDir)) {
    console.log("");
    console.log(`Translation folder not found: ${translationsDir}`);
    return;
  }

  const files = fs.readdirSync(translationsDir).filter((file) => file.endsWith(".ts"));

  console.log("");
  console.log(`🌍 Translating ${files.length} recipes to ${language}...`);

  for (const file of files) {
    console.log(`• ${file}`);
  }

  console.log("");
  console.log("✅ Translation pipeline ready.");
}
