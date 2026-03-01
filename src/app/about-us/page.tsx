import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-[#2C343B] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            About Us
          </h1>
          <p className="text-[#C2A382] text-xl max-w-2xl mx-auto font-medium">
            Sustainable Craftsmanship for Modern Homes
          </p>
        </div>
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#C2A382] rounded-full opacity-10" />
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f8f0758c-4a87-40f1-8a54-96430877f400-global-wood-works-odoo-com/assets/images/images_1.png"
                alt="Our Workshop"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-black tracking-tight">
                Our Story &amp; Mission
              </h2>
              <div className="space-y-6 text-[#666666] leading-relaxed text-lg">
                <p>
                  We are Bangalore-based manufacturers specializing in high-quality pallet
                  furniture designed for modern living. From sturdy pallet beds and sofas
                  to center tables, TV units, shoe racks, computer tables, and study
                  tables, we create functional pieces that blend style, durability, and
                  affordability.
                </p>
                <p>
                  With craftsmanship at our core, we&apos;ve proudly delivered customized
                  pallet furniture to{" "}
                  <span className="font-bold text-black">
                    8,000+ happy customers across Bangalore
                  </span>
                  , helping them upgrade their homes with smart, sustainable designs.
                </p>
                <p>
                  Our goal is to enhance your living space with beautiful, functional
                  pallet furniture. Each piece is thoughtfully selected to meet your needs
                  and elevate your home&apos;s aesthetic.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/shop"
                  className="inline-flex h-[54px] min-w-[160px] items-center justify-center rounded-[4px] bg-[#C2A382] px-10 py-3 text-[1.1rem] font-medium text-white transition-all duration-200 hover:bg-[#b09170]"
                >
                  Explore Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-24">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <h2 className="text-center text-3xl font-semibold mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Factory-Direct Pricing",
                desc: "No middlemen. You get high-quality furniture directly from our workshop at the best prices.",
              },
              {
                title: "Sustainable Wood",
                desc: "We use high-quality pinewood pallets, promoting eco-friendly and sustainable living.",
              },
              {
                title: "Customized for You",
                desc: "Need a specific size or design? We specialize in custom orders tailored to your space.",
              },
            ].map((value, i) => (
              <div key={value.title} className="bg-white p-8 rounded-lg shadow-sm text-center space-y-4">
                <div className="w-12 h-12 bg-[#C2A382] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-[#666666]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
