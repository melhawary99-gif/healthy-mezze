const fs = require("fs");
const path = require("path");

const recipesDir = path.join(__dirname, "..", "src", "data", "recipes");
const imagesDir = path.join(__dirname, "..", "public", "images", "recipes");

const ignore = new Set([
  "index.ts",
  "_recipe-template.ts",
]);

const imageNames = new Set(
  fs.readdirSync(imagesDir).map(file =>
    path.basename(file, path.extname(file))
  )
);

function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/healthy-/g, "")
    .replace(/authentic-/g, "")
    .replace(/classic-/g, "")
    .replace(/traditional-/g, "")
    .replace(/mediterranean-/g, "")
    .replace(/egyptian-/g, "")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findLikelyMatch(target, imageNames) {
  const normalizedTarget = normalizeName(target);

  for (const image of imageNames) {
    const normalizedImage = normalizeName(image);

    if (normalizedTarget === normalizedImage) {
      return image;
    }

    if (
      normalizedTarget.includes(normalizedImage) ||
      normalizedImage.includes(normalizedTarget)
    ) {
      return image;
    }
  }

  return null;
}

const rows = [];

for (const file of fs.readdirSync(recipesDir)) {

  if (!file.endsWith(".ts")) continue;
  if (ignore.has(file)) continue;

  const text = fs.readFileSync(
    path.join(recipesDir, file),
    "utf8"
  );

  const slug = path.basename(file, ".ts");

  const title =
    (text.match(/title:\s*["'`](.*?)["'`]/) || [,""])[1];

  const category =
    (text.match(/category:\s*["'`](.*?)["'`]/) || [,""])[1];

  const image =
    (text.match(/image:\s*["'`](.*?)["'`]/) || [,""])[1];

  const imageName = image
    ? path.basename(image, path.extname(image))
    : "";

  let status = "";
  let action = "";
  let notes = "";

  if (!image) {

  status = "❌ No Image Field";
  action = "Add image property";

} else if (imageNames.has(imageName)) {

  status = "✅ Complete";
  action = "None";

} else {

  const match = findLikelyMatch(imageName, imageNames);

  if (match) {

    status = "🟡 Rename Existing Image";
    action = `Rename ${match}.webp → ${imageName}.webp`;
    notes = "Existing image appears reusable";

  } else {

    status = "🔴 Generate New Image";
    action = "Create new recipe photo";

  }

}

  rows.push({
    category,
    title,
    slug,
    image: imageName,
    status,
    action,
    created: "",
    approved: "",
    notes
  });
}

rows.sort((a, b) => {

  if (a.category !== b.category) {
    return a.category.localeCompare(b.category);
  }

  return a.title.localeCompare(b.title);

});

let csv =
`Category,Title,Slug,Image File,Status,Action,Existing Match,Image Created,Image Approved,Notes\n`;


for (const row of rows) {

  const match = findLikelyMatch(row.image, imageNames);

  csv += `"${row.category}",`;
  csv += `"${row.title}",`;
  csv += `"${row.slug}",`;
  csv += `"${row.image}",`;
  csv += `"${row.status}",`;
  csv += `"${row.action}",`;
  csv += `"${match || ""}",`;
  csv += `"${row.created}",`;
  csv += `"${row.approved}",`;
  csv += `"${row.notes}"\n`;

}

const output = path.join(__dirname, "..", "recipe-audit.csv");

fs.writeFileSync(output, csv);

console.log("");
console.log("==================================");
console.log("Healthy Mezze Recipe Audit Created");
console.log("==================================");
console.log("");
console.log(output);
console.log("");
console.log(`Recipes: ${rows.length}`);
console.log(`Images : ${imageNames.size}`);