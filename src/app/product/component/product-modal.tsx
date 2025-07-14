"use client";

import Image from "next/image";
import {
  Clock,
  FileText,
  Users,
  BookOpen,
  Star,
  Award,
  CheckCircle,
  ShoppingCart,
  Heart,
  Eye,
} from "lucide-react";
import { IProduct } from "@/data/products";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  product: IProduct;
}

export default function ProductModal({ product }: Props) {
  const { lessonsCount, hoursCount, studentsCount, exercisesCount } =
    product.infoCourse;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg hover:shadow-xl">
          <Eye className="w-4 h-4" />
          Xem chi tiết
        </button>
      </DialogTrigger>

      <DialogContent className="w-full h-full max-w-none  overflow-scroll rounded-none p-4 sm:max-w-lg sm:rounded-lg sm:h-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {product.shortDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6">
          {/* Hình ảnh */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{product.discountPercent}%
            </div>
          </div>

          {/* Mô tả */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Mô tả chi tiết</h4>
            <p className="text-gray-600 leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Rating */}
          <div className="bg-yellow-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">4.8/5</span>
            </div>
            <p className="text-sm text-gray-600">Dựa trên 1,234 đánh giá</p>
          </div>

          {/* Quyền lợi */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              Quyền lợi khóa học
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" /> Sở hữu trọn đời
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" /> Chứng chỉ hoàn thành
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" /> Hỗ trợ trực tiếp từ giảng viên
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" /> Cập nhật nội dung mới
              </div>
            </div>
          </div>

          {/* Thông tin */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{lessonsCount}</div>
              <div className="text-sm text-gray-600">Bài giảng</div>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{hoursCount} giờ</div>
              <div className="text-sm text-gray-600">Thời lượng</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{studentsCount}</div>
              <div className="text-sm text-gray-600">Học viên</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl text-center">
              <BookOpen className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{exercisesCount}</div>
              <div className="text-sm text-gray-600">Bài tập</div>
            </div>
          </div>

          {/* Giá */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl font-bold text-red-600">
                {product.finalPrice.toLocaleString()} VNĐ
              </span>
              <span className="text-gray-400 line-through text-xl">
                {product.price.toLocaleString()} VNĐ
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Tiết kiệm {(product.price - product.finalPrice).toLocaleString()} VNĐ
            </p>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold">
                <ShoppingCart className="w-5 h-5" />
                Thêm vào giỏ hàng
              </button>
              <button className="p-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart
                  className={`w-5 h-5 ${product.isFavorite ? "fill-red-500 text-red-500" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
