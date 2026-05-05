import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { properties, heroImage, galleryImages } from "@/data/properties";
import { StatsBand } from "@/components/StatsBand";
import { InvestmentProcess } from "@/components/InvestmentProcess";
import { EmiCalculator } from "@/components/EmiCalculator";
import { Faq } from "@/components/Faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Capital Investors — The Real Investment" },
      { name: "description", content: "Own your land in Amaravati's growth corridor. Premium CRDA approved plots." },
    ],
  }),
  component: Home,
});

function Home() {
  const top = properties.slice(0, 3);
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[92vh] -mt-20 flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Capital Investors Luxury Land" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="section-label mb-6">The Real Investment</p>
          <h1 className="font-display text-6xl md:text-8xl leading-none">
            <span className="text-foreground">Capital </span>
            <em className="text-gold not-italic font-medium italic">Investors</em>
          </h1>
          <p className="mt-6 uppercase tracking-[0.3em] text-sm text-muted-foreground">
            Own Your Land in Amaravati's Growth Corridor
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/properties" className="btn-gold">View Properties <ArrowRight size={16}/></Link>
            <Link to="/contact" className="btn-outline-gold">Enquire Now <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={galleryImages[0]} alt="Premium Estate" className="rounded-lg aspect-[3/4] object-cover" />
            <img src={galleryImages[1]} alt="Luxury Land" className="rounded-lg aspect-[3/4] object-cover mt-10" />
          </div>
          <div>
            <p className="section-label mb-4">The Luxury Standard</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Landscapes of <em className="text-gold">Distinction</em></h2>
            <p className="text-muted-foreground leading-relaxed">
              Sunsiri Projects Pvt Ltd offers premium CRDA approved open plots across Vijayawada and Amaravathi —
              the capital region of Andhra Pradesh. Invest in land with clear titles and full legal compliance.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {["Clear Titles", "Prime Locations", "Rapid Appreciation", "Gated Communities"].map((f) => (
                <li key={f} className="border border-border/60 rounded-lg p-4 text-sm">
                  <span className="text-gold">✦</span> {f}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-outline-gold mt-8">Read Our Story <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* TOP SITES */}
      <section className="py-24 px-6 bg-card/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Exclusive Opportunities</p>
            <h2 className="font-display text-4xl md:text-5xl">Our Top Dealing <em className="text-gold">Sites</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {top.map((p) => (
              <article key={p.id} className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:border-gold/60 transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-gold">{p.tag} {p.type}</p>
                  <h3 className="font-display text-2xl mt-2">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{p.location}</p>
                  <div className="flex gap-3 mt-5">
                    <Link to="/properties" className="btn-outline-gold !px-4 !py-2 text-xs">View</Link>
                    {p.brochure && (
                      <a href={p.brochure} target="_blank" rel="noreferrer" className="btn-gold !px-4 !py-2 text-xs">
                        <Download size={12}/> Brochure
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/properties" className="btn-gold">View All Plots <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Visual Excellence</p>
            <h2 className="font-display text-4xl md:text-5xl">Luxury <em className="text-gold">Experience</em></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => (
              <img key={i} src={src} alt={`Luxury ${i+1}`} className="aspect-square object-cover rounded-lg hover:opacity-80 transition" />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-card/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl">Client <em className="text-gold">Experiences</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { q: "The expertise and attention to detail from Capital Investors were unparalleled. They didn't just sell us a house; they found us a legacy.", n: "Rajesh Sharma", r: "Estate Owner", i: "RS" },
              { q: "Found a perfect land plot for my development project. The process was transparent, and the documentation was handled flawlessly.", n: "Anita Kapoor", r: "Property Investor", i: "AK" },
              { q: "Luxury living at its finest. From the first enquiry to the final handover, the team at Capital Investors was exceptional.", n: "Vikram Malhotra", r: "Villa Owner", i: "VM" },
            ].map((t) => (
              <div key={t.n} className="border border-border/60 rounded-xl p-8 bg-background">
                <p className="text-foreground/90 italic leading-relaxed">"{t.q}"</p>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border/60">
                  <div className="w-12 h-12 rounded-full bg-gold text-primary-foreground flex items-center justify-center font-display text-lg">{t.i}</div>
                  <div>
                    <h4 className="font-display text-lg">{t.n}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />
      <InvestmentProcess />
      <EmiCalculator />
      <Faq />
    </div>
  );
}
