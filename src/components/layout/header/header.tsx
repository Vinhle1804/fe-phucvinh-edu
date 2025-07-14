"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAVIGATE_MENUS } from "@/constants/navigate-menu";
import { SearchBar } from "./component/search-bar";
import { Heart, PersonStanding, ShoppingCart } from "lucide-react";
import MobileNav from "./component/nav-mobile";

export default function Header() {
  const [hideMobileSearch, setHideMobileSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setHideMobileSearch(true);
      } else {
        setHideMobileSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto max-w-[1200px] flex flex-col xl:flex-row justify-between items-center h-auto xl:h-[80px] px-4 py-2">
        {/*DESKTOP*/}
        <div className="hidden xl:flex justify-between items-center w-full">
          <Link href="/home" className="relative w-[80px] h-[80px]">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-8">
            {NAVIGATE_MENUS.map((menu) => (
              <div key={menu.id} className="relative group">
                {menu.children ? (
                  <>
                    <button className="text-black hover:text-gray-600 font-semibold flex items-center gap-1">
                      {menu.label}
                      <span className="text-xs">▼</span>
                    </button>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg top-full min-w-[200px] border rounded">
                      {menu.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            href={child.path ?? "/"}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={menu.path ?? "/"}
                    className="text-black hover:text-gray-600 font-semibold"
                  >
                    {menu.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <SearchBar />

            <Link
              href="/profile"
              className="text-black hover:text-gray-600 p-2"
            >
              <PersonStanding />
            </Link>

            <Link
              href="/wishlist"
              className="text-black hover:text-gray-600 p-2 flex items-center gap-1"
            >
              <Heart />
            </Link>

            <Link
              href="/cart"
              className="text-black hover:text-gray-600 p-2 relative"
            >
              <ShoppingCart />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Link>
          </div>
        </div>

        {/*MOBILE*/}
        <div className="flex flex-col w-full xl:hidden">
          <div className="flex w-full items-center justify-between">
            <MobileNav />

            <Link href="/home" className="relative w-[50px] h-[50px]">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/wishlist"
                className="flex items-center gap-2 text-black"
              >
                <Heart />
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-2 text-black"
              >
                <PersonStanding />
              </Link>
              <Link
                href="/cart"
                className="text-black hover:text-gray-600 p-2 relative"
              >
                <ShoppingCart />
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </Link>
            </div>
          </div>

          {!hideMobileSearch && (
            <div className="flex justify-center">
              <SearchBar defaultOpen />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
