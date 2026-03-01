"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { productCategories } from "@/lib/shop-data";

const ProductCategories = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#212529] mb-2">Our Collections</h2>
          <p className="text-gray-500">Handcrafted pieces for every corner of your home.</p>
        </div>

        {/* Improved Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <div 
              key={category.id}
              className="group relative flex flex-col bg-gray-50 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-200">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  // ✅ FIX: Added unoptimized to prevent Supabase timeout errors
                  unoptimized 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Text & Action Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    Explore our {category.name.toLowerCase()} range.
                  </p>
                  
                  <div
                    className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#C2A382] hover:text-white transition-colors"
                  >
                    View Products
                    <MoveRight size={16} />
                  </div>
                </div>
              </div>

              {/* Stretched Link - This makes the whole card clickable */}
              <Link
                href={`/shop/category/${category.id}`}
                className="absolute inset-0 z-20"
                aria-label={`View ${category.name}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;