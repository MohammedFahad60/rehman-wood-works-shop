"use client";

import React, { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { Filter, ChevronRight, ShoppingCart, Eye, Search, SlidersHorizontal } from "lucide-react";

import {
  formatInr,
  getCategoryById,
  productCategories,
  products,
} from "@/lib/shop-data";

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState(20000);

  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      <Header />

      {/* Hero Header - More immersive and modern */}
      <section className="relative bg-[#1A1C1E] py-24 md:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C2A382] opacity-5 skew-x-12 translate-x-20" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#C2A382] rounded-full blur-[120px] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-[#C2A382] text-sm font-bold uppercase tracking-[0.2em] mb-4">
              <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
              <ChevronRight size={14} />
              <span>Shop</span>
            </nav>
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              The <span className="text-[#C2A382]">Pallet</span> Collection
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Sustainable, handcrafted pinewood furniture designed for the modern Bangalore home. Quality you can feel, prices you can afford.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Main Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar - Redesigned for better UX */}
            <aside className="w-full lg:w-72 space-y-10 flex-shrink-0">
              
              {/* Search Bar */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search furniture..." 
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 px-11 text-sm focus:ring-2 focus:ring-[#C2A382] focus:border-transparent outline-none transition-all"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>

              {/* Categories */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Categories</h3>
                  <SlidersHorizontal size={16} className="text-slate-400" />
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/shop"
                      className="group flex items-center justify-between text-[#C2A382] font-bold text-sm"
                    >
                      All Collections
                      <span className="bg-[#C2A382]/10 px-2 py-0.5 rounded text-[10px]">{products.length}</span>
                    </Link>
                  </li>
                  {productCategories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/shop/category/${category.id}`}
                        className="group flex items-center justify-between text-slate-500 hover:text-[#C2A382] transition-colors text-sm font-medium"
                      >
                        {category.name}
                        <span className="bg-slate-100 group-hover:bg-[#C2A382]/10 group-hover:text-[#C2A382] px-2 py-0.5 rounded text-[10px] transition-colors">
                          {/* This would ideally be a count from your data */}
                          {Math.floor(Math.random() * 10) + 2}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">
                  Price Filter
                </h4>
                <div className="space-y-4">
                  <input
                    type="range"
                    className="w-full accent-[#C2A382] cursor-pointer"
                    min="1000"
                    max="50000"
                    step="500"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                    <span className="text-xs font-bold text-slate-400">UP TO</span>
                    <span className="text-sm font-bold text-slate-900">{formatInr(priceRange)}</span>
                  </div>
                </div>
              </div>

              {/* Promo Widget */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                <Image 
                  src="/api/placeholder/400/600" // Replace with a nice lifestyle shot
                  alt="Custom Order"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <p className="text-[#C2A382] font-bold text-xs uppercase tracking-widest mb-2">Made to Order</p>
                  <h4 className="text-white font-bold text-xl mb-4">Custom Dimensions Available</h4>
                  <button className="text-white text-sm font-bold border-b border-white w-fit pb-1 hover:text-[#C2A382] hover:border-[#C2A382] transition-colors">
                    Inquire Now
                  </button>
                </div>
              </div>
            </aside>

            {/* Product Grid Area */}
            <div className="flex-grow space-y-10">
              
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-100 pb-6">
                <p className="text-slate-500 font-medium">
                  Showing <span className="text-slate-900 font-bold">{products.length}</span> unique pieces
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Sort:</span>
                    <select className="bg-transparent border-none text-sm font-bold text-slate-900 outline-none cursor-pointer focus:ring-0">
                      <option>Latest Arrivals</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Most Popular</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                {products.map((product) => (
                  <div key={product.id} className="group">
                    {/* Image Container */}
                    <div className="relative aspect-[1/1] overflow-hidden rounded-2xl bg-[#F4F4F4] mb-6">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Hover Overlay Actions */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        <button className="bg-white text-slate-900 h-11 px-6 rounded-full shadow-xl font-bold text-sm hover:bg-[#C2A382] hover:text-white transition-all flex items-center gap-2">
                          <ShoppingCart size={16} />
                          Add
                        </button>
                        <button className="bg-white text-slate-900 w-11 h-11 rounded-full shadow-xl flex items-center justify-center hover:bg-black hover:text-white transition-all">
                          <Eye size={18} />
                        </button>
                      </div>

                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                          New Entry
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] text-[#C2A382] font-black uppercase tracking-[0.2em] mb-1">
                          {getCategoryById(product.categoryId)?.name}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 transition-colors">
                          <Link href={`/shop/product/${product.id}`}>{product.name}</Link>
                        </h3>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <p className="text-xl font-black text-slate-900">
                          {formatInr(product.priceInr)}
                        </p>
                        {/* Optional Fake Discount */}
                        <p className="text-sm text-slate-400 line-through">
                          {formatInr(product.priceInr + 2500)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center pt-12">
                <nav className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:border-[#C2A382] hover:text-[#C2A382] transition-all">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#C2A382] text-white font-bold">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:border-[#C2A382] hover:text-[#C2A382] transition-all">
                    3
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}