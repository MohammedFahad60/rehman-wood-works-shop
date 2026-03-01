"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

/**
 * FAQItem component for individual accordion entries
 * Updated with a card-style layout and smoother hover transitions.
 */
const FAQItem = ({
  question,
  children,
  isOpen,
  onClick,
}: {
  question: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={`mb-4 transition-all duration-300 border rounded-xl overflow-hidden ${
        isOpen 
          ? "border-amber-500 bg-amber-50/30 shadow-sm" 
          : "border-slate-200 bg-white hover:border-amber-200"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full py-5 px-6 text-left flex justify-between items-center group transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className={`text-lg leading-snug font-semibold transition-colors duration-200 ${
          isOpen ? "text-amber-900" : "text-slate-800"
        }`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-1.5 rounded-full transition-all duration-300 ${
          isOpen ? "bg-amber-500 text-white rotate-180" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
        }`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-[1rem] leading-relaxed text-slate-600 font-normal border-t border-amber-100/50 pt-4 mt-1">
          {children}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a pallet bed?",
      answer:
        "A pallet bed is a modern bed made using solid pinewood pallets. It offers a minimal, sturdy, and stylish look while being affordable, durable, and easy to set up—perfect for urban homes in Bangalore.",
    },
    {
      question: "Why should I choose pallet furniture from Global Wood Works?",
      answer: (
        <>
          <p className="mb-3">
            At Global Wood Works, we are direct manufacturers of pallet furniture. This allows us to offer:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Factory-direct pricing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Strong, durable wood
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Custom sizes & designs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Timely delivery (Bangalore)
            </li>
          </ul>
          <p className="p-3 bg-white/50 rounded-lg border border-amber-100 italic">
            We’ve successfully delivered to 8,000+ customers across the city.
          </p>
        </>
      ),
    },
    {
      question: "What types of pallet furniture do you manufacture?",
      answer: (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2">
          {[
            "Pallet Beds", "Pallet Sofas", "Center Tables", 
            "TV Units", "Shoe Racks", "Computer Tables", 
            "Study Tables", "Custom Pieces"
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              {item}
            </div>
          ))}
        </div>
      ),
    },
    {
      question: "Do you only sell pallet furniture in Bangalore?",
      answer:
        "Yes, our primary service area is Bangalore. However, for bulk or special orders, we may arrange delivery outside Bangalore upon request, with delivery charges applicable.",
    },
    {
      question: "Are your pallet beds strong and durable?",
      answer:
        "Absolutely. Our pallet beds are made from high-quality solid wood and are designed to support daily use comfortably. They are strong, stable, and long-lasting when used under normal household conditions.",
    },
    {
      question: "What bed sizes are available?",
      answer: (
        <>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Single", "Double", "Queen", "King"].map(size => (
              <span key={size} className="px-3 py-1 bg-slate-100 rounded-md text-slate-700 text-sm font-medium">
                {size}
              </span>
            ))}
          </div>
          <p className="text-amber-700 font-medium">
            Need something unique? You can contact us to get a customized pallet bed made specifically for your space.
          </p>
        </>
      ),
    },
    {
      question: "Are mattresses or cushions included with the pallet bed?",
      answer:
        "No. Mattresses and cushions are not included in the price unless specifically mentioned. This allows customers to choose a mattress based on their personal comfort preference.",
    },
    {
      question: "What color will the pallet furniture be?",
      answer:
        "By default, our pallet furniture comes in a natural pinewood finish. Painting or special coatings are not included unless requested as a customization.",
    },
    {
      question: "Can I customize my pallet furniture?",
      answer: (
        <>
          <p className="mb-2">Yes! We offer customization in:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Size & Height</li>
            <li>Design & Layout</li>
            <li>Finish (on request)</li>
          </ul>
          <p className="text-sm text-slate-500">For custom orders, please contact us directly before placing your order.</p>
        </>
      ),
    },
    {
      question: "Is pallet furniture easy to install?",
      answer:
        "Yes. Our pallet beds and furniture are designed for easy setup and do not require complex installation. They are lightweight, practical, and ideal for rented homes or frequent relocations.",
    },
    {
      question: "Is pallet furniture suitable for rented homes?",
      answer: (
        <ul className="space-y-2">
          <li className="flex gap-2">✅ Budget-friendly for transient living</li>
          <li className="flex gap-2">✅ Extremely easy to move</li>
          <li className="flex gap-2">✅ Minimal drilling or complex installation required</li>
          <li className="flex gap-2">✅ Perfect for apartments, PGs, and shared spaces</li>
        </ul>
      ),
    },
    {
      question: "How long does delivery take in Bangalore?",
      answer: (
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
            <span className="font-medium text-slate-700">Standard Products</span>
            <span className="text-amber-600 font-bold">3–7 Working Days</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
            <span className="font-medium text-slate-700">Customized Orders</span>
            <span className="text-amber-600 font-bold">7–12 Working Days</span>
          </div>
        </div>
      ),
    },
    {
      question: "Do you offer cash on delivery (COD)?",
      answer:
        "Usually payment mode is prepaid but COD availability depends on the order value and location. Please contact us to confirm payment options before placing your order.",
    },
    {
      question: "How do I place an order with Global Wood Works?",
      answer: (
        <div className="space-y-3">
          <p>You can place an order by:</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <span className="bg-amber-100 text-amber-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <span>Directly Add to Cart and Purchase</span>
            </div>
            <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <span className="bg-amber-100 text-amber-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <span>Contacting us via email or WhatsApp</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      question: "Is pallet furniture eco-friendly?",
      answer:
        "Yes. Pallet furniture promotes sustainable living by using wood efficiently and focusing on long-lasting, reusable designs—making it an eco-conscious furniture choice.",
    },
    {
      question: "Do you provide warranty or after-sales support?",
      answer:
        "We ensure quality craftsmanship and provide basic after-sales support for manufacturing-related issues. Please reach out to us immediately if you face any concerns after delivery.",
    },
    {
      question: "Who should buy pallet furniture?",
      answer: (
        <div className="flex flex-wrap gap-2">
          {["New Homeowners", "Renters", "Students", "Professionals", "Minimalists"].map(tag => (
            <span key={tag} className="px-3 py-1 border border-slate-200 rounded-full text-sm text-slate-600">
              {tag}
            </span>
          ))}
        </div>
      ),
    },
    {
      question: "Why are pallet beds more affordable than traditional beds?",
      answer:
        "Since we manufacture directly and use efficient designs, pallet beds eliminate unnecessary costs like heavy storage structures and middleman markups—making them stylish yet affordable.",
    },
    {
      question: "How can I contact Global Wood Works?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>Our team is ready to assist you with product details, customization, and orders.</p>
          <button className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg transition-all font-medium w-full sm:w-max">
            <MessageCircle className="w-5 h-5" />
            Contact Support Now
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Title column */}
          <div className="lg:w-[35%]">
            <div className="sticky top-24">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-bold uppercase tracking-widest rounded-full mb-6">
                Support
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 mb-6">
                Got questions? <br />
                <span className="text-amber-600">We've got answers.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Everything you need to know about our handcrafted pallet furniture and delivery process in Bangalore.
              </p>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <p className="font-semibold text-slate-900 mb-2">Can't find what you're looking for?</p>
                <p className="text-slate-500 text-sm mb-4">Our team is available 10am - 7pm to help you with your custom needs.</p>
                <a href="#" className="text-amber-600 font-bold hover:underline">Get in touch →</a>
              </div>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="lg:w-[65%]">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  isOpen={openIndex === index}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.answer}
                </FAQItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;