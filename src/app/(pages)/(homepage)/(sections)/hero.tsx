import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const HeroHomeSection = () => {
  return (
    <section className="min-h-screen w-full bg-[url(/image/Alma-Harmony-header.webp)] bg-top bg-cover flex flex-col items-center lg:items-start">
      <div className="flex-1 py-32 w-full flex flex-col justify-center max-lg:bg-black/50 lg:bg-linear-to-r lg:from-black/80 lg:to-transparent px-14 text-white">
        <h1 className="text-3xl md:text-5xl font-bold max-lg:text-center">PT. Radian Elok Distriversa</h1>
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
      </div>
    </section>
  )
}
