import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ShoppingCart } from "lucide-react";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { formatInr, getCategoryById, products } from "@/lib/shop-data";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.categoryId);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="flex items-center gap-2 text-sm text-[#666666] mb-8">
            <Link href="/shop" className="hover:text-[#C2A382] transition-colors">
              Shop
            </Link>
            <ChevronRight size={14} />
            {category && (
              <>
                <Link
                  href={`/shop/category/${category.id}`}
                  className="hover:text-[#C2A382] transition-colors"
                >
                  {category.name}
                </Link>
                <ChevronRight size={14} />
              </>
            )}
            <span className="text-black font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-[#F4F4F4]">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <p className="text-xs text-[#C2A382] font-bold uppercase tracking-widest">
                {category?.name}
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-black">{formatInr(product.priceInr)}</p>
              <p className="text-lg text-[#666666] leading-relaxed">{product.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-[#eeeeee] py-6">
                <div>
                  <p className="text-sm text-[#666666] mb-1">Material</p>
                  <p className="font-semibold text-black">{product.material}</p>
                </div>
                <div>
                  <p className="text-sm text-[#666666] mb-1">Finish</p>
                  <p className="font-semibold text-black">{product.finish}</p>
                </div>
                <div>
                  <p className="text-sm text-[#666666] mb-1">Lead Time</p>
                  <p className="font-semibold text-black">{product.leadTime}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop/cart"
                  className="inline-flex items-center justify-center gap-2 bg-[#C2A382] text-white px-8 py-3 rounded-[4px] font-medium hover:bg-[#b09170] transition-colors"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </Link>
                <Link
                  href="/contactus"
                  className="inline-flex items-center justify-center border border-[#C2A382] text-[#C2A382] px-8 py-3 rounded-[4px] font-medium hover:bg-[#C2A382] hover:text-white transition-colors"
                >
                  Request Customization
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
