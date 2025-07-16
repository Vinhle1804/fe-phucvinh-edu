import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../../../components/ui/carousel'

const slidesDesktop = [
  '/assets/carousel/crss3.png',
  '/assets/carousel/srss4.png'
]

const slidesMobile = [
  '/assets/carousel/crss1.png',
  '/assets/carousel/crss2.png'
]

export default function CarouselPage() {
  return (
    <div className="pt-2 container mx-auto">
      <Carousel className="hidden md:block w-full max-w-[1200px] mx-auto relative rounded-lg overflow-hidden">
        <CarouselContent>
          {slidesDesktop.map((src, index) => (
            <CarouselItem key={`desktop-${index}`} className="relative flex items-center justify-center w-full overflow-hidden h-[300px] lg:h-[500px]">
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

        <CarouselPrevious className="..." />
        <CarouselNext className="..." />
      </Carousel>

      <Carousel className="block md:hidden w-full max-w-[1200px] mx-auto relative">
        <CarouselContent>
          {slidesMobile.map((src, index) => (
            <CarouselItem key={`mobile-${index}`} className="relative flex items-center justify-center w-full overflow-hidden h-[800px]">
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

        <CarouselPrevious className="..." />
        <CarouselNext className="..." />
      </Carousel>
    </div>
  )
}
