import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Filter } from "lucide-react"


export default function FilterSheet() {
  return (
    <div>
        <Sheet>
  <SheetTrigger asChild>
            <Filter className="text-gray-500 border-2 h-16 w-16 border-red-500 rounded-full p-3 text-5xl" />

  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Choose price</SheetTitle>
      <SheetDescription>
<Slider defaultValue={[33]} max={100} step={1} />
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      
    </div>
  )
}
