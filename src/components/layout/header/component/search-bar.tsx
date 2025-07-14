"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

export function SearchBar({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative flex items-center">
      {/* //mobile */}
      <div className="flex xl:hidden items-center bg-white border border-gray-300 rounded-full pl-4 pr-2 py-1 w-full overflow-hidden">
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          className="bg-transparent outline-none flex-1 text-sm"
        />
        <Search size={18} className="text-gray-600" />
      </div>

      {/* //desktop */}
      <div
        className={`hidden xl:flex items-center transition-all duration-300 bg-white border border-gray-300 rounded-full overflow-hidden ${
          isOpen ? "w-64 pl-4 pr-2 py-1" : "w-10 p-0.5"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Tìm sản phẩm..."
          className={`bg-transparent outline-none flex-1 text-sm ${
            isOpen ? "block" : "hidden"
          }`}
        />

        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-black"
        >
          {isOpen ? <X size={18} /> : <Search size={18} />}
        </button>
      </div>
    </div>
  );
}
