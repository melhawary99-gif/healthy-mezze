import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function main() {
  const MODEL = "gemini-flash-latest";

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY!,
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
