import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-wood-brown">
      {/* Background image overlay could go here */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1920&auto=format&fit=crop')" }}
      />
      
      <div className="relative z-20 text-center text-primary-foreground max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
          Handcrafted <br />
          Rustic Furniture
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-md">
          Unique, sustainable, and eco-friendly woodcraft made from 100% reclaimed pallets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/gallery" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl">
            View Gallery
          </Link>
          <Link href="/contact" className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-md font-bold text-lg hover:bg-primary-foreground hover:text-primary transition-all shadow-lg hover:shadow-xl">
            Custom Orders
          </Link>
        </div>
      </div>
    </section>
  );
}
