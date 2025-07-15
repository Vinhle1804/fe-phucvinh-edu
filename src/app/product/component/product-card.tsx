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
    <div className="group relative max-w-sm mt-8 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer border border-gray-100">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          -{product.discountPercent}%
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-gray-800 font-bold text-lg mb-3 leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FileText className="w-4 h-4 text-blue-500" />
            <span>{lessonsCount} bài</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-green-500" />
            <span>{hoursCount}h</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-purple-500" />
            <span>{studentsCount}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">(4.8)</span>
        </div>

        {/* Price */}
     <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-4">
          <span className="text-xl sm:text-2xl font-bold text-red-600">
            {product.finalPrice.toLocaleString()} VNĐ
          </span>
          <span className="text-gray-400 line-through text-base sm:text-lg">
            {product.price.toLocaleString()} VNĐ
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
       <ProductModal product={product} />

          <button className="hidden sm:block lg:block px-4 py-2.5 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
            <Heart className="w-4 h-4" />
          </button>

          <button className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
