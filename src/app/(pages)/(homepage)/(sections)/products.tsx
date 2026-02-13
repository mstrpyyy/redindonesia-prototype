import { ProductCarousel } from "@/app/components/carousels"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Link from "next/link"


export const ProductHomeSection = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-6 w-full gap-6">
        <h2 className="font-semibold h2-sm-format">
          Alma Laser
        </h2>
        <div className="flex-1 border-t-2 border-t-neutral-200" />
        <Button asChild variant={'outlineSecondary'}>
          <Link href={'/'}>
            See More
            <MoveRight strokeWidth={1.5} size={30} />
          </Link>
        </Button>
      </div>

      <ProductCarousel />
    </section>
  )
}
