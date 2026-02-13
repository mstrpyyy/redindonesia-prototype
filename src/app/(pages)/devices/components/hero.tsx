import { Breadcrumbs } from '@/app/components/breadcrumbs'
import Image from 'next/image'

export const HeroDevice = () => {
  return (
    <section className='w-full min-h-[70vh] sm:aspect-3/1 sm:min-h-96 relative flex flex-col px-5 sm:px-20 pb-24'>
      <div className='text-white mt-24 z-30'>
        <Breadcrumbs />
      </div>
      <div className='text-brand-peach z-30 text-shadow my-auto'>
        <h1 className='h2-format'>
          Alma Harmony
        </h1>
        <h2 className='h2-sm-format text-base! sm:text-2xl!'>
          Effortlessly Integrating Technologies
        </h2>
      </div>
      <Image
        src={'/image/Alma-Harmony-header.jpg'}
        alt='alma-harmony'
        fill
        className='object-cover object-top z-0'
      />
    </section>
  )
}
