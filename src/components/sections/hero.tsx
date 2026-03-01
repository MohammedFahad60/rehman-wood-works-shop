"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  // Ensure this matches your file name exactly: Banner.mp4 vs banner.mp4
  const videoPath = "/videos/Banner.mp4"; 

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden flex items-center bg-[#1A1C1E]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          /* This 'key' forces the browser to re-bind the source on Vercel */
          key={videoPath}
        >
          <source src={videoPath} type="video/mp4" />
          {/* Fallback for older browsers */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-[1]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1320px] mx-auto pt-[180px] pb-[120px]">
          <div className="max-w-xl md:max-w-2xl text-left">
            <h1 className="text-white font-medium text-[42px] leading-[1.1] sm:text-[56px] lg:text-[72px] tracking-[-0.02em] mb-6">
              Sleep Better. <br /> 
              <span className="text-[#c2a382]">Spend Smarter.</span>
            </h1>
            <p className="text-white/95 text-[18px] sm:text-[20px] mb-10 max-w-[540px]">
              Modern pallet beds—durable, stylish, and budget-friendly.
            </p>
            <a 
              href="/shop"
              className="inline-flex items-center bg-[#c2a382] hover:bg-[#b09270] text-white font-medium px-8 py-4 rounded-[4px] group transition-all"
            >
              Shop Now
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Watermark Mask */}
      <div className="absolute bottom-[-1px] right-[-1px] z-30 pointer-events-none select-none">
        <img 
          src="/Images/wave-mask.svg" 
          alt="" 
          className="w-[300px] sm:w-[450px] md:w-[600px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;