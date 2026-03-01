"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Aman Sharma", role: "Homeowner", text: "The pallet bed I ordered exceeded my expectations. Sturdy, eco-friendly, and it looks amazing in my room.", rating: 5, initial: "A" },
  { id: 2, name: "Priya V.", role: "Interior Designer", text: "Excellent craftsmanship. I've used their furniture for two of my projects now.", rating: 5, initial: "P" },
  { id: 3, name: "Rahul Mehra", role: "Studio Owner", text: "Found them on Instagram and was skeptical at first, but the study table is solid.", rating: 4, initial: "R" },
  { id: 4, name: "Sneha Kapoor", role: "Garden Enthusiast", text: "The vertical pallet planters changed my balcony game! They look so rustic and beautiful.", rating: 5, initial: "S" },
  { id: 5, name: "Vikram Singh", role: "Cafe Owner", text: "Ordered 10 custom low-seating pallet benches for my cafe. They handle heavy usage daily.", rating: 5, initial: "V" },
  { id: 6, name: "Ananya D.", role: "First-time Buyer", text: "Affordable and stylish. It's hard to find furniture this durable at this price point.", rating: 5, initial: "A" }
];

// Duplicate the list to allow for seamless infinite scrolling
const extendedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cardWidth = 474; // Card width (450) + Gap (24)

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 1500); // 1.5 Second interval

    return () => resetTimeout();
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Logic to handle the "Infinite" loop jump
  useEffect(() => {
    if (currentIndex >= testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // Wait for transition to finish
    } else if (currentIndex < 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length - 1);
      }, 700);
    }
  }, [currentIndex]);

  return (
    <section className="py-24 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[#212529] tracking-tight mb-4">Community Stories</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Sustainable, handcrafted pallet wood furniture loved by 500+ families.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button onClick={handlePrev} className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="p-4 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* The Carousel Track */}
        <div className="relative">
          <div 
            className={`flex gap-6 transition-transform ${isTransitioning ? 'duration-700 ease-in-out' : 'duration-0'}`}
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {extendedTestimonials.map((item, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full md:w-[450px] bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 relative group"
              >
                <Quote className="absolute top-8 right-10 text-gray-50 group-hover:text-[#C2A382]/10 transition-colors" size={80} />
                
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill={i < item.rating ? "#C2A382" : "transparent"} color={i < item.rating ? "#C2A382" : "#E5E7EB"} />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    <BadgeCheck size={14} /> Verified
                  </div>
                </div>

                <p className="text-[19px] text-[#212529] leading-relaxed mb-10 min-h-[120px]">"{item.text}"</p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C2A382] to-[#a68b6d] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {item.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-400 font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;