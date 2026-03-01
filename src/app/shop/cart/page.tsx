import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-[#2C343B] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            My Cart
          </h1>
          <p className="text-[#C2A382] text-xl max-w-2xl mx-auto font-medium">
            Review your selected products before checkout
          </p>
        </div>
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#C2A382] rounded-full opacity-10" />
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="max-w-3xl mx-auto border border-[#eeeeee] rounded-lg p-10 bg-[#f8f9fa] text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C2A382] text-white flex items-center justify-center">
              <ShoppingBag size={28} />
            </div>
            <h2 className="text-3xl font-semibold text-black mt-6">Your cart is empty</h2>
            <p className="text-[#666666] mt-3 text-lg">
              Start exploring our handcrafted furniture and add your favorites.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-[#C2A382] text-white px-8 py-3 rounded-[4px] font-medium hover:bg-[#b09170] transition-colors"
              >
                Continue Shopping
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center border border-[#C2A382] text-[#C2A382] px-8 py-3 rounded-[4px] font-medium hover:bg-[#C2A382] hover:text-white transition-colors"
              >
                Need Help?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
