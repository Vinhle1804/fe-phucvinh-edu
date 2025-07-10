import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo_honda_v1.png";
import { NAVIGATE_MENUS } from "@/constants/navigate-menu";
import MobileNav from "./component/nav-mobile";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex justify-between items-center h-[60px] px-4 xl:px-64">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="h-[30px] w-auto object-contain"
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {NAVIGATE_MENUS.map((menu) => (
            <div key={menu.id} className="relative group">
              {menu.children ? (
                <>
                  <button className="hover:text-red-600 font-semibold flex items-center gap-1">
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
                  className="hover:text-red-600 font-semibold"
                >
                  {menu.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>

      <div className="h-[1px] bg-gray-200 w-full"></div>
    </header>
  );
}
