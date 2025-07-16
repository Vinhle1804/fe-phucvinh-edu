import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Heart } from "lucide-react"

export default function WishList() {
  return (
    <Sheet>
      <SheetTrigger className="p-2 text-black hover:text-gray-600">
        <Heart />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Thanh toán đi cho chi ^^</SheetTitle>
        </SheetHeader>
        <div>
          <p>Danh sách sản phẩm yêu thích sẽ được hiển thị tại đây.</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
