import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

const GALLERY_ITEMS = [
  { id: 1, title: "Outdoor Sofa Set", image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800&auto=format&fit=crop", category: "Outdoor" },
  { id: 2, title: "Herringbone Coffee Table", image: "https://images.unsplash.com/photo-1544022613-e87d079f78e9?q=80&w=800&auto=format&fit=crop", category: "Living Room" },
  { id: 3, title: "Floating Wall Shelves", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop", category: "Decor" },
  { id: 4, title: "Raised Garden Beds", image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=800&auto=format&fit=crop", category: "Outdoor" },
  { id: 5, title: "Rustic TV Stand", image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&auto=format&fit=crop", category: "Living Room" },
  { id: 6, title: "Pallet Wood Accent Wall", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop", category: "Decor" },
  { id: 7, title: "Custom Wine Rack", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop", category: "Kitchen" },
  { id: 8, title: "Entryway Bench", image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop", category: "Furniture" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 italic">Our Gallery</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            A showcase of our handcrafted pallet wood creations. Every piece tells a story of transformation and sustainability.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-xl font-serif font-bold text-primary mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
