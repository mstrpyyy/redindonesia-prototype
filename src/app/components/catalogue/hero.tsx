import { Breadcrumbs } from '@/app/components/breadcrumbs'
import Image from 'next/image'

interface IHeroDevice {
  title: string
  description: string
  imgUrl: string
  imgAlt: string
}

export const HeroDevice = ({title, description, imgUrl, imgAlt}:IHeroDevice) => {
  return (
    <section className='w-full min-h-[80vh] relative flex flex-col px-5 sm:px-20 pb-24'>
      <div className='text-white mt-24 z-30'>
        <Breadcrumbs />
      </div>
      <div className='text-brand-peach z-30 text-shadow my-auto'>
        <h1 className='h2-format'>
          {title}
        </h1>
        <h2 className='h2-sm-format text-base! sm:text-2xl!'>
          {description}
        </h2>
      </div>
      <Image
        src={imgUrl}
        alt={imgAlt}
        fill
        className='object-cover object-top z-0'
      />
    </section>
  )
}
