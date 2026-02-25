import { Input } from "@/components/ui/input";
import { FacebookOutlinedRounded, InstagramOutlinedRounded, LinkedinOutlinedRounded, TiktokOutlinedRounded } from "@lineiconshq/react-lineicons";

import { Search } from "lucide-react";
import Link from "next/link";

const socialMediaList = [
  {
    href: 'https://www.facebook.com/radianelok/',
    icon: <FacebookOutlinedRounded className='size-8 sm:size-10' />
  },
  {
    href: 'https://www.instagram.com/radian.elok.distriversa/',
    icon: <InstagramOutlinedRounded className='size-8 sm:size-10' />
  },
  {
    href: 'https://www.linkedin.com/company/pt-radian-elok-distriversaa/',
    icon: <LinkedinOutlinedRounded className='size-8 sm:size-10' />
  },
  {
    href: 'https://www.tiktok.com/@radianelok',
    icon: <TiktokOutlinedRounded className='size-8 sm:size-10' />
  }
]

export const HeroHomeSection = () => {
  return (
    <section className="h-dvh w-full bg-[url(/image/Alma-Harmony-header.webp)] bg-top bg-cover flex flex-col items-center lg:items-start">
      <div 
        className="
          flex-1 py-32 w-full flex flex-col justify-center 
          max-lg:bg-black/50 lg:bg-linear-to-r lg:from-black/70 lg:from-30% lg:to-70% lg:to-transparent 
          px-14 text-white
        "
      >
        <h1 className="text-3xl md:text-5xl font-bold max-lg:text-center text-brand-red">PT. Radian Elok Distriversa</h1>
        <h2 className="text-lg md:text-2xl text-pretty mt-2 mb-8 max-lg:text-center">Lasers, Cosmeceutical & Medical Aesthetic Devices</h2>
        <div className="relative w-full lg:w-150">
          <Input 
            className="
              w-full  rounded-full pl-4 pr-10 h-12
              text-base! placeholder:text-neutral-300  
              border-2 border-white
              transition-all duration-150
            bg-black/20 backdrop-blur-xs
            " 
            placeholder="Browse Our Products" 
          />
          <Search className="absolute right-4 top-1/2 text-white -translate-y-1/2" size={20} />
        </div>

        <div className="flex max-lg:justify-center items-center gap-4 mt-8 w-full lg:w-150">
          {/* <p className="p-format text-white/80 font-medium! max-lg:hidden">Visit Us</p> */}
          {/* <div className="border-t border-t-white/80 flex-1 max-lg:hidden" /> */}
          {socialMediaList.map((item, index) => {
            return (
              <SocialMediaButton key={index} href={item.href} icon={item.icon} />
            )
          })
          }
        </div>
      </div>
    </section>
  )
}


const SocialMediaButton = ({href, icon}:{href: string, icon: React.ReactNode}) => {
  return (
    <Link href={href} className="hover:text-brand-red  transition-all duration-100" target="_blank">
      {icon}
    </Link>
  )
}

