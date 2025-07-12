import React from 'react'
import ProductCard from '../../product/component/product-card'
import { products } from '@/data/products'

export default function HomeProducts() {
  return (
    <div className='max-w-[1200px] mx-auto '>
      <h1>HomeProduct</h1>
      <div></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  )
}
