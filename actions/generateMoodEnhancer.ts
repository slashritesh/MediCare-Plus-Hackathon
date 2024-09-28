"use server"

import { createOpenAI } from "@ai-sdk/openai";
import { generateObject, generateText } from "ai";
import { z } from "zod";

const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: "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",
});

const API_KEY = 'AIzaSyDy3Axqpt5L_VmlbG7YMOT7WCz4gI74_Rk'; // Replace with your actual API key
// const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export async function generateMoodEnancer(mood : string){
  const {object} = await generateObject({
    model : groq('llama3-8b-8192'),
    system : "generate user search query for youtube musice based upon the user mood to fix it",
    prompt : `user mood : ${mood} by usa artists`,
    schema : z.object({
      query : z.string()
    })
  })  

  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(object.query)}&type=video&maxResults=5&key=${API_KEY}`);
  const data = await response.json()
  

  return data.items
}