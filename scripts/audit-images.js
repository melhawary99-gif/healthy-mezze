const fs = require("fs");
const path = require("path");

const recipesDir = path.join(__dirname, "..", "src", "data", "recipes");
const imagesDir = path.join(__dirname, "..", "public", "images", "recipes");

const ignore = new Set(["index.ts", "_recipe-template.ts"]);

const imageFiles = fs.readdirSync(imagesDir);
const imageNames = new Set(imageFiles.map(f => path.basename(f, path.extname(f))));

let completed = [];
let missing = [];
let broken = [];
let extra = [];

const recipeFiles = fs
  .readdirSync(recipesDir)
  .filter(f => f.endsWith(".ts"))
  .filter(f => !ignore.has(f));

const referencedImages = new Set();

for (const file of recipeFiles) {
  const fullPath = path.join(recipesDir, file);
  const text = fs.readFileSync(fullPath, "utf8");

  const slug = path.basename(file, ".ts");

  const imageMatch = text.match(/image:\s*["'`](.*?)["'`]/);

  if (!imageMatch) {
    missing.push({
      recipe: slug,
      reason: "No image property"
    });
    continue;
  }

  const imagePath = imageMatch[1];
  const imageName = path.basename(imagePath, path.extname(imagePath));

  referencedImages.add(imageName);

  if (imageNames.has(imageName)) {
    completed.push({
      recipe: slug,
      image: imageName
    });
  } else {
    broken.push({
      recipe: slug,
      image: imageName
    });
  }
}

for (const image of imageNames) {
  if (!referencedImages.has(image)) {
    extra.push(image);
  }
}

console.log("\n====================================");
console.log(" HEALTHY MEZZE IMAGE AUDIT v2");
console.log("====================================\n");

console.log("Recipes :", recipeFiles.length);
console.log("Images  :", imageNames.size);

console.log("\n✅ Working Images :", completed.length);
console.log("❌ Broken Images  :", broken.length);
console.log("⚪ Unused Images  :", extra.length);

console.log("\n---------------------------");
console.log("BROKEN IMAGE REFERENCES");
console.log("---------------------------");

broken.forEach(x =>
  console.log(`${x.recipe}  -->  ${x.image}`)
);

console.log("\n---------------------------");
console.log("UNUSED IMAGES");
console.log("---------------------------");

extra.forEach(i => console.log(i));