import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function main() {
  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models", {
    headers: {
      "x-goog-api-key": process.env.GEMINI_API_KEY!,
    },
  });

  console.log("Status:", response.status);
  console.log(await response.text());
}

main().catch(console.error);
