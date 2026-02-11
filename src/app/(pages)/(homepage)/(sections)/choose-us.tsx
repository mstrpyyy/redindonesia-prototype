"use client"

import { BookOpenText, CircleStar, Globe, HeartHandshake, ShieldCheck, UserRoundCog } from 'lucide-react'
import Image from 'next/image'

const qualityList = [
  {
    icon: <Globe size={40} strokeWidth={2} className='text-brand-red'  />,
    title: 'Good Network',
    description: 'Dedicated for more than 21 years in Aesthetic Medical Devices and Cosmoceutical Industries, we manage and serve more than 6,000 medical practitioners, high-end clinics, and hospitals in Indonesia.',
  },
  {
    icon: <CircleStar size={40} strokeWidth={2} className='text-brand-red'  />,
    title: 'Established Brand',
    description: 'Working with brands such as ALMA LASERS, INNOAESTHETICS, ME-LINE, and TEGODER COSMETICS. We value trust and professionalism in our work to maintain the highest possible product quality and aftersales service.',
  },
  {
    icon: <BookOpenText size={40} strokeWidth={2} className='text-brand-red'  />,
    title: 'Extended Training',
    description: 'We provide high quality service and clinical education to our customers from our key opinion leader doctors and professional in-house trainers through workshop events and training visit programs.',
  },
  {
    icon: <UserRoundCog size={40} strokeWidth={2} className='text-brand-red'  />,
    title: 'Experienced Service Support',
    description: 'Our certified technicians provide the best quality service solution, maintenance, and repair all included under our one-year warranty.',
  },
  {
    icon: <HeartHandshake size={40} strokeWidth={2} className='text-brand-red'  />,
    title: 'Aftersales Services',
    description: 'Committed to creating long-term customer relationships and product satisfaction, we provide aftersales service for our equipment, marketing programs, and materials to help you best achieve your goals.',
  },
  {
    icon: <ShieldCheck size={40} strokeWidth={2} className='text-brand-red'  />,
    title: 'Registered Products',
    description: 'We comply with the highest industry standards and regulatory requirements. We are committed to good corporate governance, emphasizing transparency and responsibility.',
  },
]

export const ChooseUsHomeSection = () => {

  return (
    <section className='flex relative gap-20 py-20'>
      <div className=' flex-1'>
        <h2 className='mb-10 h2-format'>
          Why Leading Aesthetic Medical Practitioners <span className='text-brand-red'>Choose Us</span>
        </h2>

         {qualityList.map((item, index) => {
          return (
            <div
              key={index}
              className='flex flex-col gap-4 border-t border-t-neutral-200 py-10'
              data-aos="zoom-in-right"
              data-aos-easing="ease-out"
              data-aos-duration="500"
              data-aos-offset="250"
            
            >
              <div className='flex items-center gap-4'>
                {item.icon}
                <h3 className='h3-format'>{item.title}</h3>
              </div>
              <p className='p-format'>{item.description}</p>
            </div>
          )
        })
        }

      </div>

      <div className='flex-1 relative max-lg:hidden'>
        <Image
          alt='fixed image'
          src='/image/fixed-hand.png'
          width={683}
          height={715}
          className='fixed bottom-0 h-[48vw] w-[48vw] right-0 -z-40' 
        />
      </div>

      <div className='w-screen h-screen fixed top-0 left-0 -z-40'/>


    </section>
  )
}
