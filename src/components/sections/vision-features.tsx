"use client";

import React from "react";
import Image from "next/image";

const VisionFeatures = () => {
  const features = [
    {
      title: "Our Purpose",
      description: "Our goal is to enhance your living space with beautiful, functional Pallet furniture.",
      image: "/Images/Vision/Pallet-bed-work.jpg",
      // Simplified to a normal rounded shape
      borderRadius: "2rem", 
      bgColor: "#2c343b",
    },
    {
      title: "For Every Space",
      description: "Thoughtfully crafted pieces designed to complement your lifestyle and elevate your interiors.",
      image: "/Images/Vision/Pallet-sofa-work.jpg",
      borderRadius: "2rem",
      borderColor: "#c2a382",
    },
    {
      title: "Your Satisfaction, Our Priority",
      description: "We invite you to visit our showroom, explore our stunning designs, and meet our dedicated team anytime.",
      image: "/Images/Vision/Home-Decore-work.jpg",
      borderRadius: "2rem",
      bgColor: "#2c343b",
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* Image Container */}
              <div className="relative mb-10 w-full max-w-[300px] aspect-square">
                
                {/* Background Frame (The "Outer" shape) */}
                <div 
                  className="absolute inset-0 z-0 scale-105 opacity-10 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    borderRadius: feature.borderRadius,
                    backgroundColor: feature.bgColor || "transparent",
                    border: feature.borderColor ? `2px solid ${feature.borderColor}` : "none",
                    opacity: feature.borderColor ? 1 : 0.1 // Make border solid, background faint
                  }}
                />
                
                {/* Main Image with Matching Rounded Corners */}
                <div 
                  className="relative z-10 w-full h-full overflow-hidden shadow-xl" 
                  style={{ borderRadius: feature.borderRadius }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="max-w-[320px]">
                <h3 className="text-2xl font-bold text-[#212529] mb-4">
                  {feature.title}
                </h3>
                
                {/* Decorative Line */}
                <div className="flex justify-center mb-6">
                  <div className="h-[2px] w-12 bg-[#c2a382]" />
                </div>

                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionFeatures;