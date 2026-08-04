import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function main() {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "Say hello.",
              },
            ],
          },
        ],
      }),
    }
  );

  console.log("Status:", response.status);
  console.log(await response.text());
}

main().catch(console.error);
