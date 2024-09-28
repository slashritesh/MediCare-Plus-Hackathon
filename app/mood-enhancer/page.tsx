"use client";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { generateMoodEnancer } from "@/actions/generateMoodEnhancer";
import Image from "next/image";
import Link from "next/link";

const TypeMoods = [
  "Happy",
  "Sad",
  "Anxious",
  "Excited",
  "Calm",
  "Frustrated",
  "Content",
  "Stressed",
];

const page = () => {
  const [mood, setMood] = useState<string>();
  const [videos,setVideos] = useState<Video[]>()

  const handleSelectChange = (value: string) => {
    setMood(value);
  };

  const handleOnclick = async () => {
    const res = await generateMoodEnancer(mood as string);
    setVideos(res)
    console.log(res);
    
  };

  return (
    <MaxwidthWrapper className="flex items-center flex-col">
      <div className="">
        <h1 className="text-4xl text-center font-semibold my-5">
          "Transform Your Mood Instantly <br /> with{" "}
          <span className="text-blue-700">AI-Powered Insights</span>"
        </h1>
        <p className="my-5 w-[80ch] text-center text-sm mb-10">
          "Discover how your emotions impact your well-being with our AI-driven
          Mood Enhancer. Track your mood, receive personalized insights, and
          unlock tips to boost your mental health.
        </p>
      </div>
      <div className="my-10 flex items-center gap-5">
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-[400px] bg-white py-5">
            <SelectValue placeholder="Select your moood"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            {TypeMoods.map((val) => (
              <SelectItem value={val}>{val}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleOnclick} className="my-5 bg-blue-700">
          Submit
        </Button>
      </div>
      <div className="grid grid-cols-3">
        {videos?.map((item,index)=>{
          return (
            <div className="p-2" key={index}>
              <Image width={500} height={400} className="rounded-lg" src={item.snippet.thumbnails.default.url} alt="thumbnails" />
              <h3 className="text-sm">{item.snippet.title}</h3>
              <Link href={`https://www.youtube.com/watch?v=${item.id.videoId}`}></Link>
            </div>
          )
        })}
      </div>
    </MaxwidthWrapper>
  );
};

export interface VideoSnippet {
  title: string;
  description: string;
  thumbnails: {
      default: {
          url: string;
          width: number;
          height: number;
      };
      medium: {
          url: string;
          width: number;
          height: number;
      };
      high: {
          url: string;
          width: number;
          height: number;
      };
  };
  channelTitle: string;
  publishedAt: string;
}

export interface Video {
  id: {
      videoId: string;
  };
  snippet: VideoSnippet;
}

export interface VideoState {
  videos: Video[];
  error: string;
}

export default page;
