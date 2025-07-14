import React from "react";
import ProductCard from "../../product/component/product-card";
import { products } from "@/data/products";

export default function HomeProducts() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-center text-3xl uppercase font-bold mb-8">
        Sản phẩm của chúng tôi
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
