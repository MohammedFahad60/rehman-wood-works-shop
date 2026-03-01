"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  // IMPORTANT: Ensure this path matches your folder exactly (lowercase vs uppercase)
  const backgroundVideo = "/videos/Banner.mp4"; 
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      // Force a reload to ensure Vercel's served path is captured
      videoRef.current.load();
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Autoplay prevented:", error);
        });
      }
    }
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden flex items-center bg-[#1A1C1E]">
      
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <video
          key={backgroundVideo} // Forces re-render on mount to fix Vercel pathing
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1320px] mx-auto pt-[180px] pb-[120px]">
          <div className="max-w-xl md:max-w-2xl text-left">
            <h1 className="text-white font-medium text-[42px] leading-[1.1] sm:text-[56px] lg:text-[72px] tracking-[-0.02em] mb-6">
              Sleep Better. <br /> 
              <span className="text-[#c2a382]">Spend Smarter.</span>
            </h1>
            <p className="text-white/90 text-[18px] sm:text-[20px] mb-10 max-w-[540px]">
              Handcrafted pallet beds delivered across Bangalore. Durable, stylish, and budget-friendly.
            </p>
            <a 
              href="/shop"
              className="inline-flex items-center bg-[#c2a382] hover:bg-[#b09270] text-white font-semibold px-8 py-4 rounded-[4px] group transition-all"
            >
              Shop Collection
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