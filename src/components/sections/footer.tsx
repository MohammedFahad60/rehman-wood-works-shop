import Link from "next/link";
import { Facebook, Linkedin, Home, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2C343B] text-white pt-[72px] pb-[48px] font-sans">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          <div className="flex flex-col">
            <h4 className="text-[1.25rem] font-semibold mb-6 tracking-wide">Useful Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-[#C2A382] hover:text-white transition-colors duration-200 text-[1rem]">
                Home
              </Link>
              <Link href="/shop" className="text-[#C2A382] hover:text-white transition-colors duration-200 text-[1rem]">
                Shop
              </Link>
              <Link href="/gallery" className="text-[#C2A382] hover:text-white transition-colors duration-200 text-[1rem]">
                Gallery
              </Link>
              <Link href="/services" className="text-[#C2A382] hover:text-white transition-colors duration-200 text-[1rem]">
                Services
              </Link>
              <Link href="/about-us" className="text-[#C2A382] hover:text-white transition-colors duration-200 text-[1rem]">
                About Us
              </Link>
              <Link href="/contactus" className="text-[#C2A382] hover:text-white transition-colors duration-200 text-[1rem]">
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[1.25rem] font-semibold mb-6 tracking-wide">About us</h4>
            <p className="text-[#E0E0E0] text-[0.95rem] leading-[1.66] text-justify">
              We are Bangalore-based manufacturers specializing in high-quality pallet
              furniture designed for modern living. From sturdy pallet beds and sofas to
              center tables, TV units, shoe racks, computer tables, and study tables, we
              create functional pieces that blend style, durability, and affordability.
              With craftsmanship at our core, we&apos;ve proudly delivered customized pallet
              furniture to{" "}
              <span className="font-bold text-white">
                8,000+ happy customers across Bangalore
              </span>
              , helping them upgrade their homes with smart, sustainable designs.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[1.25rem] font-semibold mb-6 tracking-wide">Connect with us</h4>

            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-white" />
                <a href="tel:+917019707276" className="text-[#E0E0E0] hover:text-[#C2A382] transition-colors text-[0.95rem]">
                  +91 7019707276
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <a href="mailto:globalwoodworks.in@gmail.com" className="text-[#E0E0E0] hover:text-[#C2A382] transition-colors text-[0.95rem]">
                  globalwoodworks.in@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white" />
                <a href="tel:+917019707276" className="text-[#E0E0E0] hover:text-[#C2A382] transition-colors text-[0.95rem]">
                  +91 7019707276
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://facebook.com"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2C343B] hover:bg-[#C2A382] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2C343B] hover:bg-[#C2A382] hover:text-white transition-all duration-300"
                aria-label="X"
              >
                <span className="font-bold text-lg">X</span>
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2C343B] hover:bg-[#C2A382] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <Link
                href="/"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2C343B] hover:bg-[#C2A382] hover:text-white transition-all duration-300"
                aria-label="Home"
              >
                <Home size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
