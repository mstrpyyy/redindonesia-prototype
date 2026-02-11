import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProductCarousel() {
  return (
    <Carousel 
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-6 py-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 pl-6 lg:basis-1/4">
            <div className="p-1 min-h-[300px] h-[80vw] sm:h-96 flex flex-col justify-end">
              <div className="relative flex flex-col gap-4 items-center rounded-4xl shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-4 ">
                {/* <div className="absolute w-[70%] aspect-square rounded-full bg-neutral-100 top-5 -translate-y-1/2 left-1/2 -translate-x-1/2 " /> */}
                {/* Image container - half the height extends above the card */}
                <div className="relative w-full -mt-[25vw] sm:-mt-28 mb-4 h-[50vw] sm:h-60">
                  <Image 
                    src="/image/device1.png" 
                    alt="product image" 
                    fill 
                    className="object-contain drop-shadow-lg"  
                  />
                </div>

                {/* Text content */}
                <p className="font-medium text-sm sm:text-base md:text-lg 2xl:text-xl text-center">
                  Product Name
                </p>
                <Button variant={'secondary'} className="font-medium w-full inset-shadow-sm rounded-full">
                  View Details
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}