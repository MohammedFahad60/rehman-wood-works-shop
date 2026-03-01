"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { MapPin, Mail, Phone, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactUsPage() {
  // Use the verified address for Rehman Wood Work
  const shopAddress = "108, AM Road, New Bamboo Bazaar, Shivaji Nagar, Bengaluru, Karnataka 560051";
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.643329124446!2d77.6023808745469!3d12.991493387325515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1722fd7b6eeb%3A0xef5b746cddec77c9!2sRehman%20wood%20work!5e0!3m2!1sen!2sin!4v1740833158000!5m2!1sen!2sin";

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Header />
      
      {/* Hero Header */}
      <section className="bg-[#212529] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Let's Build Something <span className="text-[#C2A382]">Unique</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Transform your space with sustainable, handcrafted pallet furniture.
          </p>
        </div>
        <div className="absolute bottom-[-30px] left-[-30px] w-64 h-64 bg-[#C2A382] rotate-45 opacity-5" />
      </section>

      <section className="py-24 max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              {/* Workshop & Map */}
              <div className="space-y-6">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-[#C2A382]/10 rounded-2xl flex items-center justify-center text-[#C2A382] border border-[#C2A382]/20 flex-shrink-0 transition-colors group-hover:bg-[#C2A382] group-hover:text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#212529] mb-1">Our Workshop</h4>
                    <p className="text-gray-500 leading-snug">{shopAddress}</p>
                  </div>
                </div>

                {/* --- GOOGLE MAP EMBED --- */}
                <div className="w-full h-[300px] rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                  <iframe
                    src={googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              {/* WhatsApp & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100 flex-shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#212529] mb-1">WhatsApp</h4>
                    <p className="text-gray-500">+91 NUMBERS </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-[#C2A382]/10 rounded-2xl flex items-center justify-center text-[#C2A382] border border-[#C2A382]/20 flex-shrink-0 transition-colors group-hover:bg-[#C2A382] group-hover:text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#212529] mb-1">Email</h4>
                    <p className="text-gray-500">rehmanwoodworks.in@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
            <h3 className="text-2xl font-bold text-[#212529] mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-[#C2A382] outline-none" placeholder="Your Name" />
                <input type="email" className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-[#C2A382] outline-none" placeholder="Email Address" />
              </div>
              <input type="tel" className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-[#C2A382] outline-none" placeholder="Phone Number" />
              <textarea rows={5} className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-[#C2A382] outline-none resize-none" placeholder="What project do you have in mind?"></textarea>
              <button type="button" className="w-full bg-[#C2A382] text-white font-bold py-5 rounded-2xl hover:bg-[#212529] transition-all shadow-lg flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}