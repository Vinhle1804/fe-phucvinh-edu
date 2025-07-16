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
import { addToCart } from "@/redux/slide/cartSlide";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { toggleWishlist } from "@/redux/slide/wishListSlide";

interface Props {
  product: IProduct;
}

export default function ProductModal({ product }: Props) {
  const dispatch = useDispatch<AppDispatch>();
    const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const isWishlisted = wishlist.some((item) => item.id === product.id);
    const handleToggleWishlist = () => {
      dispatch(toggleWishlist(product));
    };
  

  const { lessonsCount, hoursCount, studentsCount, exercisesCount } =
    product.infoCourse;
      const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart({
      id: product.id, quantity: 1,
      name: product.name,
      price: product.finalPrice,
      image: product.imageUrl,
    }));
    toast.success("Thêm vào giỏ hàng!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button title="Xem chi tiết" className="flex-1 flex items-center justify-center  gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base">
          <Eye className="w-4 h-4" />
          <span className="sm:hidden">Chi tiết</span>
        </button>
      </DialogTrigger>

      <DialogContent className="w-full h-full max-w-none rounded-none p-0 sm:p-4 sm:w-[95vw] sm:h-[95vh] sm:max-w-4xl sm:rounded-xl overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="p-4 sm:p-6">
            <DialogHeader className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                {product.name}
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {product.shortDescription}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 sm:space-y-6">
              {/* Hình ảnh */}
              <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                  -{product.discountPercent}%
                </div>
              </div>

              {/* Mô tả */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-semibold text-base sm:text-lg text-gray-800">
                  Mô tả chi tiết
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Rating */}
              <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-gray-800">
                    4.8/5
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Dựa trên 1,234 đánh giá
                </p>
              </div>

              {/* Quyền lợi */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                  Quyền lợi khóa học
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    <span>Sở hữu trọn đời</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    <span>Chứng chỉ hoàn thành</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    <span>Hỗ trợ từ giảng viên</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    <span>Cập nhật nội dung mới</span>
                  </div>
                </div>
              </div>

              {/* Thông tin */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-gray-800">
                    {lessonsCount}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Bài giảng</div>
                </div>
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-gray-800">
                    {hoursCount}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Giờ học</div>
                </div>
                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-gray-800">
                    {studentsCount}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Học viên</div>
                </div>
                <div className="bg-orange-50 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-gray-800">
                    {exercisesCount}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Bài tập</div>
                </div>
              </div>

              {/* Giá */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-blue-100">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600">
                    {product.finalPrice.toLocaleString()} VNĐ
                  </span>
                  <span className="text-gray-400 line-through text-lg sm:text-xl">
                    {product.price.toLocaleString()} VNĐ
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  Tiết kiệm {(product.price - product.finalPrice).toLocaleString()} VNĐ
                </p>
                
                {/* Buttons */}
                <div className="flex flex-row gap-2 ">
                  <button 
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base">
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                    Thêm vào giỏ hàng
                  </button>
                 <button
            onClick={handleToggleWishlist}
            className={`p-4 rounded-full ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <Heart  className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}