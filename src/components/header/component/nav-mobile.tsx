"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAVIGATE_MENUS } from "@/constants/navigate-menu";

export default function MobileNav() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 border rounded">☰</button>
      </SheetTrigger>

      <SheetContent side="right" className="p-4">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <ul className="space-y-2 mt-4">
          {NAVIGATE_MENUS.map((menu) => (
            <li key={menu.id}>
              <div
                className="flex justify-between items-center font-semibold cursor-pointer text-red-700"
                onClick={() => handleToggle(menu.id)}
              >
                <span>{menu.label}</span>
                {menu.children && (
                  <span className="ml-2">
                    {openMenuId === menu.id ? "▲" : "▼"}
                  </span>
                )}
              </div>
                 <div className="h-[1px] bg-red-600 w-full"></div>

              {menu.children && openMenuId === menu.id && (
                <ul className="ml-4 mt-2 space-y-1">
                  {menu.children.map((child) => (
                    <li key={child.id}>
                      <Link href={child.path ?? "/"} className="block ">
                        {child.label}
                 <div className="h-[1px] bg-black w-full"></div>

                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        
      </SheetContent>
    </Sheet>
  );
}
