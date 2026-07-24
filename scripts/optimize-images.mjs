import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const inputDir = path.join(process.cwd(), "public/images");

const MAX_WIDTH = 1200;
const MAX_HEIGHT = 800;
const QUALITY = 82;

async function optimizeDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await optimizeDirectory(fullPath);
      continue;
    }

    if (!entry.name.toLowerCase().endsWith(".webp")) {
      continue;
    }

    console.log(`Optimizing ${entry.name}`);

    const tempPath = fullPath + ".tmp.webp";

    await sharp(fullPath)
      .resize({
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: QUALITY,
        effort: 6,
      })
      .toFile(tempPath);

    await fs.rename(tempPath, fullPath);
  }
}

optimizeDirectory(inputDir)
  .then(() => console.log("\n✅ All recipe images optimized successfully."))
  .catch((err) => console.error(err));