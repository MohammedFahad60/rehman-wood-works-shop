"use client";

import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const backgroundVideo = "/videos/Banner.mp4"; 

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden flex items-center bg-[#1A1C1E]">
      
      {/* 1. Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1320px] mx-auto pt-[180px] pb-[120px]">
          <div className="max-w-xl md:max-w-2xl text-left">
            <h1 className="text-white font-medium text-[42px] leading-[1.1] sm:text-[56px] lg:text-[72px] tracking-[-0.02em] mb-6">
              Sleep Better. <br /> Spend Smarter.
            </h1>
            <p className="text-white/95 text-[18px] sm:text-[20px] mb-10 max-w-[540px]">
              Upgrade your bedroom with a modern pallet bed—durable, stylish, and budget-friendly.
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

      {/* --- 3. WATERMARK MASK (The local SVG) --- */}
      <div className="absolute bottom-0 right-0 z-30 pointer-events-none select-none">
        <img 
          src="/Images/wave-mask.svg" 
          alt="" 
          /* Adjust these sizes until the "Veo" text is totally gone */
          className="w-[300px] sm:w-[450px] md:w-[600px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;