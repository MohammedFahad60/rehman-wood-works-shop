import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import {
  formatInr,
  getCategoryById,
  productCategories,
  products,
} from "@/lib/shop-data";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryById(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.categoryId === category.id,
  );

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-[#2C343B] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            {category.name}
          </h1>
          <p className="text-[#C2A382] text-xl max-w-2xl mx-auto font-medium">
            {category.description}
          </p>
        </div>
        <div className="absolute bottom-[-40px] left-[-40px] w-56 h-56 bg-[#C2A382] rounded-full opacity-10" />
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/shop"
              className="px-4 py-2 rounded-[4px] bg-[#C2A382] text-white text-sm font-medium"
            >
              All Products
            </Link>
            {productCategories.map((item) => (
              <Link
                key={item.id}
                href={`/shop/category/${item.id}`}
                className={`px-4 py-2 rounded-[4px] text-sm font-medium border transition-colors ${
                  item.id === category.id
                    ? "bg-[#2C343B] text-white border-[#2C343B]"
                    : "bg-white text-[#666666] border-[#eeeeee] hover:border-[#C2A382] hover:text-[#C2A382]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <div key={product.id} className="group flex flex-col space-y-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#F4F4F4]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-[#C2A382] font-bold uppercase tracking-widest">
                    {category.name}
                  </p>
                  <h3 className="text-xl font-semibold text-black">{product.name}</h3>
                  <p className="text-lg font-bold text-black">{formatInr(product.priceInr)}</p>
                </div>
                <Link
                  href={`/shop/product/${product.id}`}
                  className="inline-flex items-center gap-2 text-[#C2A382] font-semibold text-sm hover:translate-x-1 transition-transform"
                >
                  View Details
                  <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
