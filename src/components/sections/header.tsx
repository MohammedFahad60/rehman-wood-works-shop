"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/contactus", label: "Contact Us" },
];

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle the scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Trigger the change after 50px of scrolling
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine colors based on scroll state
  const navBg = isScrolled ? "bg-white shadow-md border-b border-gray-100 py-2" : "bg-transparent py-4";
  const textColor = isScrolled ? "text-[#212529]" : "text-white";
  const logoInvert = !isScrolled ? "brightness-0 invert" : ""; // Optional: turns logo white if it's dark

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[1030] transition-all duration-300 ease-in-out ${navBg}`}
    >
      <nav className="max-w-[1320px] mx-auto px-6 flex items-center justify-between">
        
        {/* 1. LOGO */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/">
            <img
              src="/Images/Logo.svg" 
              alt="Rehman Wood Works"
              // The "logoInvert" class will turn a black SVG into a white SVG when over video
              className={`h-[45px] md:h-[55px] w-auto object-contain transition-all duration-300 ${logoInvert}`}
            />
          </Link>
        </div>

        {/* 2. DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[14px] font-bold uppercase tracking-tight transition-colors hover:text-[#c2a382] ${
                      isActive ? "text-[#c2a382]" : textColor
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={`flex items-center gap-5 border-l pl-8 transition-colors ${isScrolled ? "border-gray-200" : "border-white/20"}`}>
            <button className={`${textColor} hover:text-[#c2a382] transition-colors`}>
              <Search size={20} />
            </button>
            <Link href="/shop/cart" className={`${textColor} hover:text-[#c2a382] transition-colors`}>
              <ShoppingCart size={20} />
            </Link>
          </div>
        </div>

        {/* 3. MOBILE TOGGLE */}
        <div className="lg:hidden flex items-center gap-4">
          <Link href="/shop/cart" className={textColor}>
            <ShoppingCart size={22} />
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${textColor} p-1`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
      }`}>
        <div className="p-5 space-y-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-4 text-[15px] font-bold border-b border-gray-50 last:border-none ${
                pathname === link.href ? "text-[#c2a382]" : "text-[#212529]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;