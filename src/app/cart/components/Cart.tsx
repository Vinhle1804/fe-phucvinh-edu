"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeItem } from "@/redux/slide/cartSlide";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cart.cart
  ) as CartItem[];

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Giỏ hàng của bạn</h1>

{cartItems.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-12 px-4">
    <Image
      src="/cartEmpty.png"
      alt="Giỏ hàng trống"
      width={250}
      height={250}
      className="mb-6"
    />
    <h2 className="text-xl font-semibold text-gray-800 mb-2">Giỏ hàng trống</h2>
    <p className="text-gray-500 mb-6">Bạn chưa có sản phẩm nào trong giỏ hàng.</p>
    <Link href="/">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
        Tiếp tục mua sắm
      </button>
    </Link>
  </div>
): (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items - Left side on PC, Top on Mobile */}
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl shadow-sm">
            <div className="h-96 md:h-[510px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-transparent space-y-4 pr-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border border-white/50 p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-lg mr-4 border-2 border-white shadow-sm"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-indigo-600 font-medium">
                      Giá: {(item.price * item.quantity).toLocaleString()} đ
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeItem(Number(item.id)))}
                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Xoá
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary - Right side on PC, Bottom on Mobile */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl shadow-lg p-6 sticky top-20 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Tổng đơn hàng
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Tạm tính:</span>
                  <span>{getTotal().toLocaleString()} đ</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Phí vận chuyển:</span>
                  <span className="text-green-600 font-medium">Miễn phí</span>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Tổng cộng:</span>
                    <span className="text-indigo-600">
                      {getTotal().toLocaleString()} đ
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg mb-3">
                Thanh toán
              </button>

              <button className="w-full bg-white text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 border border-gray-300 hover:border-gray-400">
                Tiếp tục mua sắm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}