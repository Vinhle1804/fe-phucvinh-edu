"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "w-48" : "w-0"
        }`}
      >
        <Input
          ref={inputRef}
          type="text"
          placeholder="Tìm sản phẩm"
          className="w-full"
        />
      </div>

       
        <Button
          type="button"
          variant="outline"
          onClick={handleToggle}
          className="ml-2"
        >
          <Search />
        </Button>
      
    </div>
  );
}
