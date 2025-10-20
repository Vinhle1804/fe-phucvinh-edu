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
    <div className="pt-2 px-0 container mx-auto max-w-7xl">
      {/* Desktop Carousel */}
      <Carousel className="hidden md:block w-full mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {slidesDesktop.map((src, index) => (
            <CarouselItem key={`desktop-${index}`} className="pl-2 md:pl-4">
              <div className="relative w-full h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Desktop Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* Mobile Carousel */}
      <Carousel className="block md:hidden w-full mx-auto">
        <CarouselContent className="-ml-2">
          {slidesMobile.map((src, index) => (
            <CarouselItem key={`mobile-${index}`} className="pl-2">
              <div className="relative w-full h-[600px] sm:h-[700px] rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Mobile Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  )
}