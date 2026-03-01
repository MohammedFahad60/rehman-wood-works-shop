import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl shadow-2xl z-10 w-full aspect-square overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1544022613-e87d079f78e9?q=80&w=1000&auto=format&fit=crop"
              alt="Craftsman working with pallet wood"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary rounded-2xl -z-0 hidden md:block" />
          </div>
          
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6 italic">Sustainable Woodcraft for Your Home</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Pallet Wood Works, we believe that old wood has the best stories to tell. We take discarded pallets and transform them into beautiful, functional pieces of furniture and home decor.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every item we create is unique, showing off the natural grain, knots, and nail holes that give reclaimed wood its unmistakable character. By choosing our pieces, you&apos;re not just getting a beautiful item for your home; you&apos;re also making a sustainable choice for the planet.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-muted">
              <div>
                <h4 className="text-3xl font-serif font-bold text-primary mb-2 italic">100%</h4>
                <p className="text-muted-foreground font-bold text-sm uppercase tracking-widest">Reclaimed Wood</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-primary mb-2 italic">Unique</h4>
                <p className="text-muted-foreground font-bold text-sm uppercase tracking-widest">Handcrafted Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
