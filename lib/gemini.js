import { GoogleGenerativeAI } from "@google/generative-ai";

/** Stable model for generateContent; older ids like gemini-1.5-flash return 404 on current API. */
export const GEMINI_MODEL_ID = "gemini-2.5-flash";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");

export const geminiModel = genAI.getGenerativeModel({
  model: GEMINI_MODEL_ID,
});
