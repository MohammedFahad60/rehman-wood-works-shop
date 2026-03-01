"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// --- Animated Digit Component ---
const DigitBox = ({ value }: { value: string }) => (
  <div className="relative flex h-16 w-10 items-center justify-center rounded-lg bg-[#2C343B] text-[2.5rem] font-bold text-white shadow-2xl md:h-20 md:w-14 md:text-[3rem]">
    {/* Middle line for scoreboard effect */}
    <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/10" />
    {value}
  </div>
);

const StatsCTA: React.FC = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const targetValue = 8147; // Your specific target number

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = targetValue;
          const duration = 2000; // 2 seconds
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Format count to 4 digits (e.g., 0814)
  const countStr = count.toString().padStart(4, '0');

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F4F1EE] py-24">
      {/* Background Decorations */}
      <div className="absolute left-[5%] top-10 hidden lg:block opacity-30">
        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f8f0758c-4a87-40f1-8a54-96430877f400-global-wood-works-odoo-com/assets/images/14-19.svg" alt="" width={120} height={120} />
      </div>
      <div className="absolute right-[5%] bottom-10 hidden lg:block opacity-30">
        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f8f0758c-4a87-40f1-8a54-96430877f400-global-wood-works-odoo-com/assets/images/06-18.svg" alt="" width={100} height={100} />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-[900px]">
          
          <h2 className="mb-8 font-sans text-3xl font-bold text-[#212529] md:text-4xl">
            Our Growing Community
          </h2>

          {/* --- SCOREBOARD COUNTER --- */}
          <div className="mb-10 flex items-center justify-center gap-2 md:gap-4">
            {countStr.split('').map((digit, idx) => (
              <React.Fragment key={idx}>
                <DigitBox value={digit} />
                {/* Add a comma after the first digit for thousands separator */}
                {idx === 0 && <span className="self-end text-4xl font-bold text-[#2C343B]">,</span>}
              </React.Fragment>
            ))}
            <span className="ml-2 text-2xl font-bold text-[#C2A382] md:text-4xl">+</span>
          </div>

          <p className="mb-12 text-xl font-medium text-[#212529]">
            Satisfied customers have transformed their homes with our <span className="text-[#C2A382]">handcrafted pallet furniture</span>.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <p className="max-w-md text-gray-500">
              Trust us to furnish your home with style and comfort, so you can relax and enjoy your space.
            </p>
            <a
              href="/contactus"
              className="inline-flex h-[60px] min-w-[200px] items-center justify-center rounded-full bg-[#C2A382] px-10 text-lg font-bold text-white shadow-xl transition-all hover:bg-[#2C343B] hover:scale-105 active:scale-95"
            >
              Contact us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsCTA;