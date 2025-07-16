import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="relative w-full h-[100px] sm:h-[200px]">
      <Image 
        src="/assets/foot.png"
        alt="Banner"
        fill  
        className="object-cover"
      />
    </div>
  )
}

export default Footer
