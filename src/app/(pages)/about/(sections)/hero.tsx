import { NavbarBg } from '@/app/components/navbar/navbar-bg'
import Image from 'next/image'
import React from 'react'

export const AboutHero = () => {
  return (
    <section className="h-[65vh] min-h-[300px] w-full relative">
      <NavbarBg />
      <Image 
        src={'/image/about/hero-about3.jpg'}
        alt='about-hero'
        fill
        priority
        sizes="100vw "
        className='object-cover object-center -z-10 brightness-75'
      />

      <h1 className="text-shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl sm:text-6xl lg:text-8xl font-bold">
        <span className='text-white'>About</span>
        {" "}
        <span className='text-brand-red2'>RED</span>
      </h1>      
    </section>
  )
}
