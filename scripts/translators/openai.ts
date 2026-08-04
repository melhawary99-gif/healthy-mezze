import { Translator } from "./translator";
import { RecipeTranslation } from "@/types/recipe-translation";

const MODEL = "gemini-3.6-flash";

export class OpenAITranslator implements Translator {
  async translateRecipe(recipe: RecipeTranslation): Promise<RecipeTranslation> {
    console.log(`Translating ${recipe.title}`);

    const prompt = `
Translate the following recipe into Modern Standard Arabic.

Rules:
- Return ONLY valid JSON.
- Do not use markdown.
- Keep exactly the same JSON structure.
- Translate every string.
- Preserve arrays.
- Do not translate numbers.

${JSON.stringify(recipe, null, 2)}
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent`,
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
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      // Retry once if we hit the rate limit
      if (response.status === 429) {
        console.log("⏳ Rate limit reached. Waiting 10 seconds...");

        await new Promise((resolve) => setTimeout(resolve, 10000));

        return this.translateRecipe(recipe);
      }

      throw new Error(errorText);
    }

    const json = await response.json();

    const text = json.candidates[0].content.parts[0].text;

    // Remove markdown if Gemini returns ```json ... ```
    const cleaned = text
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```$/i, "")
      .trim();

    try {
      const translatedRecipe = JSON.parse(cleaned) as RecipeTranslation;
      return translatedRecipe;
    } catch (error) {
      console.error("Gemini returned invalid JSON:");
      console.error(cleaned);
      throw error;
    }
  }
}
