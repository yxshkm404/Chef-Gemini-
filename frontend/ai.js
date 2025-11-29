
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has
and suggests a recipe. Do not require every ingredient. Format in markdown.
`;

export  async function getRecipeFromGemini(ingredients) {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: SYSTEM_PROMPT,
  });

  const prompt = `Here are the ingredients I have: ${ingredients.join(
    ", "
  )}. Suggest a recipe.`;



  const result = await model.generateContent(prompt);
  const text = await result.response.text();


  return text;
}
