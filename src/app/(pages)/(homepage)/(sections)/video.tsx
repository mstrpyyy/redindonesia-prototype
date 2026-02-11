"use client"

import { useState } from "react"


export const VideoHomeSection = () => {
  const [play, setPlay] =  useState(false)
  return (
    <section className="flex max-lg:flex-col gap-10 2xl:gap-20 overflow-hidden body-container-limit">  
      <div className="lg:w-70 xl:w-82.5 text-center lg:text-justify text-pretty">
        <h2 className="h2-sm-format">
          Providing you with the best medical aesthetic{' '}
          <span className="text-brand-red whitespace-nowrap">
            products and services
          </span>
          {' '}for your clinics
        </h2>

        <p className="text-lg xl:text-xl mt-6 xl:leading-8">
          We value trust and professionalism in our work to maintain the highest possible product quality and aftersales service.
        </p>
      </div>

      <div className="flex-1 rounded-2xl">
        <iframe
          loading="lazy"  
          className="w-full rounded-xl aspect-video"
          src="https://www.youtube-nocookie.com/embed/CAwiqMRYGqM"
          title="YouTube video"
          allowFullScreen
        />
      </div>

      
    </section>
  )
}
