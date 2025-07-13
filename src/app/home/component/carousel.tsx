import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../../../components/ui/carousel'

import slide1 from '../../../../public/assets/carousel/carousel1.jpg'
import slide2 from '../../../../public/assets/carousel/carousel2.jpg'
import slide3 from '../../../../public/assets/carousel/crs3.jpeg'
import slide4 from '../../../../public/assets/carousel/crs4.jpeg'

const slidesDesktop = [slide1, slide2]
const slidesMobile = [slide3, slide4]

export default function CarouselPage() {
  return (
    <div className="pt-2 container mx-auto">
      <Carousel className="hidden md:block w-full max-w-[1200px] mx-auto relative rounded-lg overflow-hidden">
        <CarouselContent>
          {slidesDesktop.map((src, index) => (
            <CarouselItem
              key={`desktop-${index}`}
              className="
                relative flex items-center justify-center 
                w-full overflow-hidden
                h-[300px] lg:h-[500px]
              "
            >
              <Image
                src={src}
                alt={`Desktop Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="100vw"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="
          w-10 h-10 
          absolute left-2 top-1/2 -translate-y-1/2
          bg-white shadow rounded-full flex items-center justify-center
        " />

        <CarouselNext className="
          w-10 h-10 
          absolute right-2 top-1/2 -translate-y-1/2
          bg-white shadow rounded-full flex items-center justify-center
        " />
      </Carousel>

      <Carousel className="block md:hidden w-full max-w-[1200px] mx-auto relative">
        <CarouselContent>
          {slidesMobile.map((src, index) => (
            <CarouselItem
              key={`mobile-${index}`}
              className="
                relative flex items-center justify-center 
                w-full overflow-hidden
                h-[800px]
              "
            >
              <Image
                src={src}
                alt={`Mobile Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="100vw"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="
          w-10 h-10 
          absolute left-2 top-1/2 -translate-y-1/2
          bg-white shadow rounded-full flex items-center justify-center
        " />

        <CarouselNext className="
          w-10 h-10 
          absolute right-2 top-1/2 -translate-y-1/2
          bg-white shadow rounded-full flex items-center justify-center
        " />
      </Carousel>
    </div>
  )
}
