"use client";

import React, { useEffect, useState } from "react";
import { PRODUCTS, CourseType } from "@/data/products";
import ProductCard from "../../component/product-card";
import { ChevronDown } from "lucide-react";

export default function HomeCourses() {
  const [filters, setFilters] = useState<{
    type: CourseType | null;
    minPrice: number | null;
    maxPrice: number | null;
    sort: "asc" | "desc" | null;
  }>({
    type: null,
    minPrice: null,
    maxPrice: null,
    sort: null,
  });

  const [products, setProducts] = useState(PRODUCTS);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      let filtered = [...PRODUCTS];

      // Lọc theo loại
      if (filters.type) {
        filtered = filtered.filter((p) => p.type === filters.type);
      }

      // Lọc theo min/max price
      if (filters.minPrice !== null) {
        filtered = filtered.filter((p) => p.finalPrice >= filters.minPrice!);
      }
      if (filters.maxPrice !== null) {
        filtered = filtered.filter((p) => p.finalPrice <= filters.maxPrice!);
      }

      // Sắp xếp giá
      if (filters.sort === "asc") {
        filtered.sort((a, b) => a.finalPrice - b.finalPrice);
      } else if (filters.sort === "desc") {
        filtered.sort((a, b) => b.finalPrice - a.finalPrice);
      }

      setProducts(filtered);
      setIsLoading(false);
    }, 300);
  }, [filters]);

  const filterOptions = [
    { type: null, label: "Tất cả" },
    { type: "english" as CourseType, label: "Tiếng Anh" },
    { type: "programming" as CourseType, label: "Lập Trình" },
    { type: "earlybird" as CourseType, label: "Xuất Phát Sớm" },
    { type: "photography" as CourseType, label: "Nhiếp Ảnh" },
  ];

  const priceRanges = [
    { label: "Tất cả", min: null, max: null },
    { label: "Dưới 500K", min: null, max: 500000 },
    { label: "500K – 1 triệu", min: 500000, max: 1000000 },
    { label: "Trên 1 triệu", min: 1000000, max: null },
  ];

  // Xác định label đang chọn cho dropdown
  const getCurrentDropdownLabel = () => {
    if (filters.sort === "asc") return "Giá tăng dần";
    if (filters.sort === "desc") return "Giá giảm dần";
    const range = priceRanges.find(
      (r) => r.min === filters.minPrice && r.max === filters.maxPrice
    );
    if (range && range.label !== "Tất cả") return range.label;
    return "Chọn sắp xếp / giá";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-[1200px] mx-auto px-4 py-6 md:px-6 md:py-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 md:mb-4">
            Khám Phá Khóa Học
          </h1>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            Nâng cao kỹ năng của bạn với các khóa học chất lượng cao từ những chuyên gia hàng đầu
          </p>
        </div>

        {/* Filter by type */}
        <div className="mb-8 md:mb-10">
          <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
              Danh Mục Khóa Học
            </h2>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map(({ type, label }) => (
                <button
                  key={label}
                  className={`
                    px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-colors duration-200
                    ${filters.type === type
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                  `}
                  onClick={() => setFilters({ ...filters, type })}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

{/* Filter + Label + Dropdown bên phải */}
<div className="flex items-center justify-between px-2 mb-6">
  {/* Kết quả bên trái */}
  <div className="text-xl text-gray-600">
    Kết quả: <br />
    <span className="font-bold text-xl">{products.length} sản phẩm</span>
  </div>

  {/* Label + Icon + Dropdown bên phải */}
  <div className="relative flex items-center space-x-2">
    {/* Label */}
    <span className="border-2 border-red-500 rounded-full px-4 py-2 text-gray-700">
      {getCurrentDropdownLabel()}
    </span>

    {/* Icon mở dropdown */}
    <button
      onClick={() => setShowDropdown(!showDropdown)}
      className="border-2 border-red-500 rounded-full p-2 hover:bg-gray-100 transition"
    >
      <ChevronDown className="w-5 h-5" />
    </button>

    {/* Dropdown */}
    {showDropdown && (
      <div className="absolute right-0 top-full mt-2 bg-white border shadow-lg rounded-lg w-52 z-50">
        <button
          onClick={() => {
            setFilters({
              ...filters,
              sort: "asc",
              minPrice: null,
              maxPrice: null,
            });
            setShowDropdown(false);
          }}
          className="w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          Giá tăng dần
        </button>
        <button
          onClick={() => {
            setFilters({
              ...filters,
              sort: "desc",
              minPrice: null,
              maxPrice: null,
            });
            setShowDropdown(false);
          }}
          className="w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          Giá giảm dần
        </button>
        <hr />
        {priceRanges.map((range) => (
          <button
            key={range.label}
            onClick={() => {
              setFilters({
                ...filters,
                sort: null,
                minPrice: range.min,
                maxPrice: range.max,
              });
              setShowDropdown(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            {range.label}
          </button>
        ))}
      </div>
    )}
  </div>
</div>



        {/* Products grid */}
        <div className={`
          transition-all duration-500 
          ${isLoading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}
        `}>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-20">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4">🔍</div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2 px-4">
                Không tìm thấy khóa học nào
              </h3>
              <p className="text-gray-500 mb-4 md:mb-6 px-4 text-sm md:text-base">
                Hãy thử chọn danh mục khác hoặc quay lại tất cả khóa học
              </p>
              <button
                onClick={() =>
                  setFilters({ type: null, minPrice: null, maxPrice: null, sort: null })
                }
                className="bg-blue-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium text-sm md:text-base hover:bg-blue-600 transition-colors duration-200"
              >
                Xem Tất Cả Khóa Học
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
