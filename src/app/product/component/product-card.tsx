"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, FileText, Users, BookOpen, Infinity } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { IProduct } from "@/data/products";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  // ✅ Destructure ra cho gọn
  const { lessonsCount, hoursCount, studentsCount, exercisesCount } = product.infoCourse;

  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <div
          tabIndex={0}
          className="max-w-sm mt-8 bg-white rounded-xl shadow-lg overflow-hidden
          transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl cursor-pointer outline-none"
        >
          {/* Image */}
          <div className="relative h-64">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />

            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{product.discountPercent}%
            </div>

            {/* Decorations */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-400 rounded-full transform translate-x-16 translate-y-16 opacity-20"></div>
            <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-32 right-12 w-3 h-3 bg-cyan-400 rounded-full"></div>
          </div>

          {/* Info */}
          <div className="p-6">
            <h3 className="text-gray-800 font-bold text-lg mb-4 leading-tight">
              {product.name}
            </h3>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                <span>{lessonsCount} bài giảng</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{hoursCount} giờ</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-red-600">
                {product.finalPrice.toLocaleString()} VNĐ
              </span>
              <span className="text-gray-400 line-through text-lg">
                {product.price.toLocaleString()} VNĐ
              </span>
            </div>
          </div>
        </div>
      </HoverCardTrigger>

      <HoverCardContent
        side="right"
        align="center"
        className="w-100 h-auto p-6 bg-white border border-gray-200 rounded-xl shadow-xl"
      >
        <div className="flex gap-2 mb-4">
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
            -{product.discountPercent}%
          </span>
        </div>

        <h4 className="font-bold text-lg mb-3 text-gray-800 leading-tight">
          {product.name}
        </h4>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <FileText className="w-4 h-4" />
            <span>{lessonsCount} bài giảng</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{hoursCount} giờ</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{studentsCount} học viên</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span>{exercisesCount} bài tập</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <Infinity className="w-4 h-4" />
          <span>Sở hữu trọn đời</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {product.longDescription}
        </p>

        <Link
          href={`/product/${product.id}`}
          className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Xem chi tiết khoá học
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
}
