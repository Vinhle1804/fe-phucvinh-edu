"use client";

import Image from "next/image";
import {
  Clock,
  FileText,
  Users,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { IProduct } from "@/data/products";
import ProductModal from "./product-modal";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { lessonsCount, hoursCount, studentsCount } = product.infoCourse;

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer min-h-[380px] sm:min-h-[420px]">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
          -{product.discountPercent}%
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3 sm:p-4">
        <h3 className="text-gray-800 font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Stats */}
        <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
            <span>{lessonsCount} bài</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            <span>{hoursCount}h</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
            <span className="truncate">{studentsCount}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">(4.8)</span>
        </div>

        {/* Price */}
        <div className="flex flex-col gap-1 mb-3 sm:mb-4">
          <span className="text-base sm:text-lg md:text-xl font-bold text-red-600">
            {product.finalPrice.toLocaleString()} VNĐ
          </span>
          <span className="text-gray-400 line-through text-xs sm:text-sm md:text-base">
            {product.price.toLocaleString()} VNĐ
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <ProductModal product={product} />

          <button className="hidden sm:block px-3 py-2 sm:px-4 sm:py-2.5 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>

          <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
