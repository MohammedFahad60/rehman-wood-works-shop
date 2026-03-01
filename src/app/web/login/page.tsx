import Link from "next/link";
import { Lock, Mail } from "lucide-react";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-[#2C343B] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Sign in
          </h1>
          <p className="text-[#C2A382] text-xl max-w-2xl mx-auto font-medium">
            Access your account to track orders and manage requests
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="max-w-md mx-auto border border-[#eeeeee] rounded-lg bg-[#f8f9fa] p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-black uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" size={16} />
                <input
                  type="email"
                  className="w-full bg-white border border-[#eeeeee] pl-10 pr-4 py-3 rounded-[4px] focus:ring-1 focus:ring-[#C2A382] outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-black uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" size={16} />
                <input
                  type="password"
                  className="w-full bg-white border border-[#eeeeee] pl-10 pr-4 py-3 rounded-[4px] focus:ring-1 focus:ring-[#C2A382] outline-none transition-all"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-[#C2A382] text-white font-semibold py-3 rounded-[4px] hover:bg-[#b09170] transition-all"
            >
              Sign in
            </button>

            <p className="text-sm text-[#666666] text-center">
              Need help with login?{" "}
              <Link href="/contactus" className="text-[#C2A382] font-medium hover:underline">
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
