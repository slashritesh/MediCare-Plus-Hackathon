'use server';

import { generateObject, streamText } from 'ai';
import { createOpenAI, openai } from '@ai-sdk/openai';
import { createStreamableValue } from 'ai/rsc';
import { object, z } from 'zod';

const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: "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",
  });
  

export async function generateAction(input: string) {

  
    const { object : response  } = await generateObject({
      model: groq('llama3-8b-8192'),
      system : "Give me diet list plan for completing my daily protein intake and all micro nutrician based on my goal. include details about dish name , nutrician values , protein , carbs,fats",
      prompt: `my goal is : ${input}`,
      schema : z.object({
        response : z.array(
            z.object({
                description : z.string(),
                ingredients : z.array(z.string().describe("short names of ingredients")),
        dishname : z.string().describe("name of dish"),
        nutrician : z.object({
            protein : z.string(),
            carbs : z.string(),
            fats : z.string(),
            calories : z.string()
        })
            })
        )
      })
    });


    return { response };
  

  
}


