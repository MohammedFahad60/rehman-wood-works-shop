import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

const SERVICES = [
  {
    title: "Custom Furniture Design",
    description: "From coffee tables to complete dining sets, we work with you to design and build pieces that fit your space perfectly.",
    icon: (
      <svg className="w-12 h-12 text-secondary mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: "Eco-Friendly Outdoor Decor",
    description: "Planter boxes, outdoor seating, and garden accessories built to withstand the elements while keeping your footprint light.",
    icon: (
      <svg className="w-12 h-12 text-secondary mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Wholesale for Businesses",
    description: "We provide rustic display shelving, cafe tables, and decor for restaurants, shops, and offices looking for a sustainable vibe.",
    icon: (
      <svg className="w-12 h-12 text-secondary mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-serif font-bold text-primary mb-6 italic">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              We offer a range of woodworking services focusing on reclaimed materials and handcrafted quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-muted/30 p-10 rounded-2xl border border-muted hover:border-secondary transition-colors group">
                {service.icon}
                <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-secondary transition-colors italic">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8 italic text-primary-foreground">The Custom Process</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-secondary-foreground">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Initial Consultation</h4>
                    <p className="text-primary-foreground/70">We discuss your needs, take measurements, and talk through design ideas.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-secondary-foreground">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Quote & Sourcing</h4>
                    <p className="text-primary-foreground/70">We provide a quote and source the perfect reclaimed pallet wood for your project.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-secondary-foreground">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Handcrafted Build</h4>
                    <p className="text-primary-foreground/70">We build your piece in our workshop, keeping you updated with photos along the way.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold mb-6 italic">Ready to Start?</h3>
              <p className="text-primary-foreground/80 mb-8">
                Every great piece of furniture starts with a conversation. Let&apos;s discuss your next project.
              </p>
              <Link href="/contactus" className="w-full text-center bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-secondary/90 transition-all shadow-xl inline-block">
                Start My Project
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
