"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/contactus", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Bar */}
        <div className="flex justify-between items-center h-[70px] md:h-[85px]">
          
          {/* 1. LOGO (Far Left) */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="block">
              {/* Standard <img> is best for SVGs to keep them sharp.
                  h-[45px] on mobile, md:h-[55px] on desktop 
              */}
              <img
                src="/Images/Logo.svg"
                alt="Rehman Wood Works Logo"
                className="h-[45px] md:h-[55px] w-auto object-contain block"
                style={{ imageRendering: 'crisp-edges' }} 
              />
            </Link>
          </div>

          {/* 2. DESKTOP NAVIGATION (Right) */}
          <div className="hidden lg:flex items-center gap-x-8">
            <ul className="flex items-center gap-x-7 list-none m-0 p-0">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[14px] font-semibold uppercase tracking-wider transition-colors hover:text-[#c2a382] ${
                      pathname === link.href ? "text-[#c2a382]" : "text-[#212529]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Desktop Icons */}
            <div className="flex items-center gap-5 ml-4 border-l pl-6 border-gray-200">
                <Search size={19} className="cursor-pointer hover:text-[#c2a382] transition-colors" />
                <Link href="/shop/cart" className="relative group">
                    <ShoppingCart size={19} className="group-hover:text-[#c2a382] transition-colors" />
                </Link>
            </div>
          </div>

          {/* 3. MOBILE ACTION BUTTONS */}
          <div className="lg:hidden flex items-center gap-4">
            <Link href="/shop/cart" className="p-1">
                <ShoppingCart size={22} className="text-[#212529]" />
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-[#212529] hover:text-[#c2a382] transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Drop-down) */}
      <div 
        className={`lg:hidden absolute top-[70px] left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-5 opacity-0 invisible"
        }`}
      >
        <div className="px-5 pt-3 pb-8 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-4 text-[15px] font-bold border-b border-gray-50 last:border-none ${
                pathname === link.href ? "text-[#c2a382]" : "text-[#212529]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}