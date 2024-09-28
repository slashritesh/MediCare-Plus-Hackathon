"use client";
import React, { useState } from "react";

import { createOpenAI } from "@ai-sdk/openai";
import { generateId, generateText, readDataStream } from "ai";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateAction } from "@/actions/generateAction";
import { readStreamableValue } from "ai/rsc";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Dish {
  description: string;
  ingredients: string[]; // array of strings for ingredients
  dishname: string; // name of the dish
  nutrician: {
    protein: string; // amount of protein in the dish
    carbs: string; // amount of carbs
    fats: string; // amount of fats
    calories: string; // amount of calories
  };
}

type DishArray = Dish[]; // array of objects conforming to the Dish interface

export const maxDuration = 30;

const page = () => {
  const [input, setInput] = useState<string>();
  const [AllData, setallData] = useState<DishArray>();

  return (
    <div className="flex items-center flex-col">
      <h1 className="font-semibold text-center text-4xl my-10">
        "Smart AI Nutrition Tool <br /> <span className="text-blue-700">Your Personal Meal Optimizer</span> "
      </h1>
      <p className="w-[80ch] my-2 mb-10 text-sm text-center">
        Our AI Nutrition Tool helps you effortlessly analyze meals, providing
        instant insights into protein, carbs, fats, and calories. Perfect for
        dieticians, fitness enthusiasts, and anyone looking to optimize their
        nutrition with precision and ease!
      </p>
      <div className="flex justify-center w-full gap-5">
        <Input
          placeholder="Enter Your Fitness Goals"
          className="w-1/6 bg-white p-6"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          className="p-6 text-base"
          onClick={async () => {
            const { response } = await generateAction(input!);
            setallData(response.response);
          }}
        >
          Submit
        </Button>
      </div>
      <div className="p-2 my-10 grid grid-cols-2 gap-5">
        {AllData?.map((item) => {
          return (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>{item.dishname}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3>Ingredients : </h3>
                  <div className="flex gap-5">
                    {item.ingredients.map((tag) => {
                      return (
                        <div className="p-2 border w-fit rounded-full text-sm">
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
                <CardFooter>
                  <h1>Protein : {item.nutrician.protein}</h1>
                  <h2>Crabs : {item.nutrician.carbs}</h2>
                  <h2>Fats : {item.nutrician.fats} </h2>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default page;
