import ProductCard from "@/app/(product)/component/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";

export default function ProductList() {
  return (
    <div className="w-full px-4 py-6  sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl shadow-xl">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
          Khóa học nổi bật
        </h2>
        <p className="text-blue-100 text-sm sm:text-base">
          Khám phá những khóa học được yêu thích nhất
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {PRODUCTS.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 sm:pl-4 basis-1/2 lg:basis-2/9"
              >
                <div className="h-full">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6 bg-white/90 hover:bg-white border-white/20 text-blue-600 hover:text-blue-700 shadow-lg hover:shadow-xl transition-all duration-200" />
          <CarouselNext className="hidden sm:flex -right-4 lg:-right-6 bg-white/90 hover:bg-white border-white/20 text-blue-600 hover:text-blue-700 shadow-lg hover:shadow-xl transition-all duration-200" />
        </Carousel>

 
        <div className="mt-4 text-center">
         <Link href={"/course"} className="text-blue-100 text-sm">
         <p className="text-blue-100 text-sm"> Click để xem thêm khóa học</p>
         
         </Link> 
        </div>
      </div>

      {/* Indicators
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(products.length / 4) }).map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/60 transition-colors cursor-pointer"
          />
        ))}
      </div> */}
    </div>
  );
}
