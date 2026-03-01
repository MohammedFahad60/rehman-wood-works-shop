"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight, ShoppingCart } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Rustic Pallet Table",
    price: "$299",
    image: "https://images.unsplash.com/photo-1544022613-e87d079f78e9?q=80&w=800&auto=format&fit=crop",
    category: "Furniture"
  },
  {
    id: 2,
    name: "Handcrafted Planter Box",
    price: "$45",
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=800&auto=format&fit=crop",
    category: "Garden"
  },
  {
    id: 3,
    name: "Wood Pallet Wall Art",
    price: "$89",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop",
    category: "Decor"
  },
  {
    id: 4,
    name: "Rustic Coffee Table",
    price: "$185",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800&auto=format&fit=crop",
    category: "Furniture"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212529] tracking-tight mb-4">
              Featured Crafts
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Explore some of our most popular handcrafted pieces. Each one is unique and made with care from reclaimed pallet wood.
            </p>
          </div>
          <Link 
            href="/shop" 
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#212529] hover:text-[#C2A382] transition-colors"
          >
            Shop All Collections
            <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col">
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with Quick Add / View Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <Link 
                    href={`/shop/product/${product.id}`}
                    className="w-full bg-white text-[#212529] py-3 text-center text-sm font-bold uppercase tracking-wider rounded-sm shadow-xl hover:bg-[#C2A382] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C2A382]">
                  {product.category}
                </span>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-[#212529] transition-colors group-hover:text-[#C2A382]">
                    <Link href={`/shop/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <span className="font-bold text-[#212529]">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile-only See All */}
        <div className="mt-16 text-center sm:hidden">
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 bg-[#C2A382] text-white px-8 py-4 rounded-sm font-bold uppercase text-xs tracking-widest"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}