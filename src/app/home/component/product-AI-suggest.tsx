"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles, Star, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AISuggestProduct } from "@/data/products";
import ProductModal from "@/app/(product)/component/product-modal";

export default function AISuggestionButton() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(AISuggestProduct);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const handleCallApiFake = async () => {
  setLoading(true);
  setError("");
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setData(AISuggestProduct);
  } catch (err) {
    console.error(err);
    setError("Không thể lấy gợi ý lúc này. Vui lòng thử lại sau.");
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <div className="fixed top-40 right-6 lg:right-26 z-50">
        <button
          onClick={async () => {
            setOpen(true);
            await handleCallApiFake();
          }}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg hover:shadow-xl text-white flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        >
          <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full h-full max-w-none rounded-none p-0 sm:p-4 sm:w-[95vw] sm:h-[95vh] sm:max-w-4xl sm:rounded-xl overflow-hidden">
          <DialogHeader className="px-6 py-4 border-b bg-white/80 backdrop-blur-sm">
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-2">
              Gợi ý sản phẩm AI
              <span className="text-sm font-normal text-gray-500">
                ({!loading && !error ? data.length : "loading.."})
              </span>
            </DialogTitle>
          </DialogHeader>

          <div className="h-full overflow-y-auto px-6 py-4">
            {loading ? (
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-white rounded-xl shadow-sm p-4 border border-gray-100"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-xl" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                        <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <XCircle className="w-10 h-10 text-red-400 mb-4" />
                <p className="text-gray-600">{error}</p>
              </div>
            ) : (
              <div className="space-y-4">
      {data.map((item) => (
  <div
    key={item.id}
    className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-gray-100 hover:border-blue-200"
  >
    <div className="flex items-center justify-between gap-4">
      {/* Image + Info */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Hình */}
        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-gray-100 group-hover:border-blue-200 transition-colors">
          <Image
            src={item.imageUrl || "/placeholder.jpg"}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Info */}
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-800 truncate text-base group-hover:text-blue-600 transition-colors">
            {item.name}
          </h3>
          <p className="text-lg font-bold text-blue-600 mt-1">
            {item.price.toLocaleString()}₫
          </p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">4.5</span>
          </div>
        </div>
      </div>

      {/* Actions bên phải */}
      <div className="h-14 w-14 flex flex-row items-center bg-gradient-to-r from-blue-300 to-teal-600 p-1 rounded-2xl gap-2">
        <ProductModal product={item} />
      </div>
    </div>

    {/* Hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
))}

              </div>
            )}
          </div>

          <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t mt-6 pt-4 px-6 pb-4 text-center">
            <p className="text-xs text-gray-500">
              💡 Sản phẩm được gợi ý tự động dựa trên hành vi của bạn
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
