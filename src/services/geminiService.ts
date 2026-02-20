import { GoogleGenAI, Type } from "@google/genai/web";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY,
  // @ts-ignore - explicitly passing fetch to avoid global detection issues
  fetch: (...args: any[]) => fetch(...args)
});

export const getDentalAdvice = async (query: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: query,
    config: {
      systemInstruction: "You are a helpful dental assistant for 'Dental Parlor & Implant Clinic' in Islamabad. Provide professional, friendly, and concise advice. Always recommend booking a consultation for specific medical issues. The clinic is located in G-13/3, Islamabad.",
    },
  });
  return response.text;
};
