import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

console.log("GEMINI_API_KEY =", process.env.GEMINI_API_KEY);
console.log("GOOGLE_API_KEY =", process.env.GOOGLE_API_KEY);
console.log("GOOGLE_GENAI_USE_VERTEXAI =", process.env.GOOGLE_GENAI_USE_VERTEXAI);
console.log("GOOGLE_APPLICATION_CREDENTIALS =", process.env.GOOGLE_APPLICATION_CREDENTIALS);
console.log("GOOGLE_CLOUD_PROJECT =", process.env.GOOGLE_CLOUD_PROJECT);
