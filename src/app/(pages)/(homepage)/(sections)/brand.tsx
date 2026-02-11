'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { useInView } from 'react-intersection-observer'

const brandList = [
  { src: '/image/brand1.png', link:'/' },
  { src: '/image/brand2.png', link:'/' },
  { src: '/image/brand3.png', link:'/' },
  { src: '/image/brand4.png', link:'/' },
  { src: '/image/brand5.png', link:'/' },
  { src: '/image/brand6.png', link:'/' },
  { src: '/image/brand7.png', link:'/' },
  { src: '/image/brand8.png', link:'/' },
  { src: '/image/brand9.png', link:'/' },
  { src: '/image/brand10.png', link:'/' },
  { src: '/image/brand11.png', link:'/' },
  { src: '/image/brand12.png', link:'/' },
]

export const BrandHomeSection = () => {
   const { ref: brandRef, inView: brandFullyVisible } = useInView({
    threshold: 1,
  })

  const [certifiedVisible, setCertifiedVisible] = useState(false)

  useEffect(() => {
    const certifiedEl = document.getElementById('certified-component')
    if (!certifiedEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setCertifiedVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(certifiedEl)

    return () => observer.disconnect()
  }, [])

  const isWhiteBg = brandFullyVisible || certifiedVisible

  return (
    <section
      ref={brandRef}
      className={`
        py-24 flex flex-col items-center transition-colors duration-700
        ${
          isWhiteBg
            ? 'bg-linear-to-t from-white to-white backdrop-blur-xl'
            : 'bg-linear-to-t from-white to-white/10 backdrop-blur-xl'
        }
      `}
    >
      <h2 className="h2-format title-limiter text-center mb-10 px-10">
        Established Partnerships with Leading{' '}
        <span className="text-brand-red">Global Brands</span>
      </h2>

      <Marquee
        autoFill
        pauseOnHover
      >
        {brandList.slice(0, 6).map((item, index) => (
          <MarqueeComponent
            key={index}
            item={item}
            index={index}
          />
        ))}
      </Marquee>

      <Marquee
        autoFill
        direction="right"
        pauseOnHover
      >
        {brandList.slice(6).map((item, index) => (
          <MarqueeComponent
            key={index}
            item={item}
            index={index}
          />
        ))}
      </Marquee>
    </section>
  )
}


const MarqueeComponent = ({item, index}:{item:{src:string, link:string}, index:number}) => {
  return (
    <Link key={index} href={item.link} className='w-28 ml-12 sm:w-32 sm:ml-14 md:w-36 md:ml-16 lg:w-40 lg:ml-18 xl:w-44 xl:ml-20 block aspect-square hover:bg-neutral-100 rounded-lg'>
      <Image
        src={item.src}
        alt="brand logo"
        width={301}
        height={301}
        className="object-cover object-center"
      />
    </Link>
  )
}
