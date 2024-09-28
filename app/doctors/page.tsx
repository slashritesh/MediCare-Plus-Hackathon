import MaxwidthWrapper from '@/components/MaxwidthWrapper'
import React from 'react'

const page = () => {
  return (
    <MaxwidthWrapper className='flex flex-col'>
        <div className="flex items-center flex-col">
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
    </MaxwidthWrapper>
  )
}

export default page