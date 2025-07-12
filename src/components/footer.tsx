import Image from "next/image";
import footer from '@/assets/foot.png';

export default function Footer() {
  return (
    <div className="relative w-full h-[100px] sm:h-[200px]">
      <Image 
        src={footer}
        alt="Banner"
        fill  
        className="object-cover"
      />
    </div>
  );
}
