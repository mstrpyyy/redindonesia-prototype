import { Button } from "@/components/ui/button"
import { MoveRight, SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const aboutMenuList = [
  {
    name: 'who',
    href: '/',
    bgImgUrl: '/image/about-image1.jpg',
    labelImgUrl: '/image/red-who.png'
  },
  {
    name: 'what',
    href: '/',
    bgImgUrl: '/image/about-image2.jpg',
    labelImgUrl: '/image/red-what.png'
  },
  {
    name: 'what',
    href: '/',
    bgImgUrl: '/image/about-image3.jpg',
    labelImgUrl: '/image/red-work.png'
  }
]


export const AboutHomeSection = () => {
  return (
    <section className="flex max-lg:flex-col-reverse gap-15">
      {/* MENU */}
      <div className="lg:w-78 xl:w-84 space-y-6 space-x-4 flex flex-col md:flex-row lg:flex-col">
        {aboutMenuList.map((item, index) => (
          <Link
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-duration="500"
            data-aos-delay={(index*150).toString()}
            key={index}
            href={item.href}
            className="relative w-full h-36 sm:h-44 bg-cover bg-center rounded-2xl overflow-hidden shadow-md"
            style={{ backgroundImage: `url(${item.bgImgUrl})` }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-white to-transparent" />

            <Image
              src={item.labelImgUrl}
              alt={item.name}
              width={1376}
              height={200}
              className="h-10 lg:h-14 w-fit absolute bottom-4 left-4"
            />

            <div className="absolute right-2 top-2 bg-white/70 text-black flex items-center gap-2 px-2 py-1 rounded-full text-sm font-medium">
              Read
              <SquareArrowOutUpRight strokeWidth={2} size={15} />
            </div>
          </Link>
        ))}
      </div>

      {/* ABOUT */}
      <div 
        className="flex-2 flex flex-col justify-between"
        data-aos="fade-zoom-in" 
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <h2 className="h2-format">
          <span className="text-brand-red text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl">21 Years</span>
          <br />
            of Trusted Experience in{' '}
          <br  />
           Medical Aesthetics
        </h2>

        <p className="p-format max-lg:mb-8 mt-4">
          Established in 2004, PT. Radian Elok Distriversa has many years of experience and a broad network in the field of trading and distribution for medical aesthetic devices, medical laser devices, and cosmoceutical products. Headquartered in Jakarta, Indonesia, we work with many of the world’s leading companies in Europe and USA. Our clients include leading local plastic surgeons, dermatologists, and aesthetic general practitioners.
        </p>

        <div className="max-lg:hidden flex-1 border-l-2 border-l-neutral-300 my-4" />

        <div className="max-lg:ml-auto flex items-center w-full">
          <div className="lg:hidden flex-1 border-t-2 border-t-neutral-300 mr-6" />
          <Button asChild variant="outlineSecondary">
            <Link href="/about">
              About Us
              <MoveRight strokeWidth={1.5} size={30} />
            </Link>
          </Button>
        </div>

      </div>

    </section>
  )
}
