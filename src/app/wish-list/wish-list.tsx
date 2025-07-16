"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromWishlist } from "@/redux/slide/wishListSlide";
import Image from "next/image";
import ProductModal from "../(product)/component/product-modal";

export default function WishList() {
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <Sheet>
      <SheetTrigger className="relative group p-2 text-gray-600 hover:text-red-500 transition-all duration-300 hover:bg-red-50 rounded-lg">
        <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        {wishlist.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse shadow-lg">
            {wishlist.length}
          </span>
        )}
      </SheetTrigger>

      <SheetContent
        side="right"
        className="rounded-lg w-full max-w-full sm:w-[90%] sm:max-w-none md:w-[500px] lg:w-[600px] p-6 overflow-hidden bg-gradient-to-br from-white to-gray-50"
      >
        <SheetHeader className="px-6 py-4 border-b bg-white/80 backdrop-blur-sm">
          <SheetTitle className="text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent flex items-center gap-2">
            Danh sách yêu thích
            <span className="text-sm font-normal text-gray-500">
              ({wishlist.length} sản phẩm)
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="h-full overflow-y-auto px-6 py-4">
          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-10 h-10 text-red-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Danh sách trống
              </h3>
              <p className="text-gray-500 text-sm">
                Hãy thêm những sản phẩm yêu thích vào đây
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlist.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-gray-100 hover:border-red-200"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeInUp 0.5s ease-out forwards",
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-gray-100 group-hover:border-red-200 transition-colors">
                      <Image
                        src={item.imageUrl || "/placeholder.jpg"}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 truncate text-base group-hover:text-red-600 transition-colors">
                        {item.name}
                      </h3>
                      {item.price && (
                        <p className="text-lg font-bold text-red-600 mt-1">
                          {item.price.toLocaleString()} VND
                        </p>
                      )}
                      {item.finalPrice && item.finalPrice > item.price && (
                        <p className="text-sm text-gray-400 line-through">
                          {item.finalPrice.toLocaleString()} VND
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                      <ProductModal product={item} />

                      <button
                        onClick={() => {
                          // Add to cart logic here
                          console.log("Add to cart:", item.id);
                        }}
                        className="hidden sm:block p-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 "
                        title="Thêm vào giỏ hàng"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                        title="Xóa khỏi wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons for Non-Empty Wishlist */}
          {wishlist.length > 0 && (
            <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t mt-6 pt-4 space-y-2">
              <button
                onClick={() => {
                  // Clear wishlist logic
                  wishlist.forEach((item) =>
                    dispatch(removeFromWishlist(Number(item.id)))
                  );
                }}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Trash2 className="w-5 h-5" />
                Xóa tất cả
              </button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
