import { createFileRoute } from "@tanstack/react-router";
import { leaders } from "@/data/properties";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Capital Investors" },
      { name: "description", content: "Meet the visionaries behind Capital Investors — 15+ years redefining luxury real estate." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">The Visionaries</p>
          <h1 className="font-display text-5xl md:text-6xl">Our <em className="text-gold">Leadership</em></h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {[
            { name: "Ravi Munipalli", role: "Chairman & Managing Director", img: leaders.ravi, quote: "Building futures with quality standards and spectacular success.", icons: [Linkedin, Facebook] },
            { name: "Kanna Chadarasipalli", role: "Innovative Trailblazer", img: leaders.kanna, quote: "Upholding the highest quality standards for our happy homeowners.", icons: [Linkedin, Instagram] },
          ].map((l) => (
            <div key={l.name} className="bg-card border border-border/60 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={l.img} alt={l.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <p className="italic text-muted-foreground">"{l.quote}"</p>
                <h3 className="font-display text-3xl mt-4 text-gold">{l.name}</h3>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mt-1">{l.role}</p>
                <div className="flex gap-3 mt-5">
                  {l.icons.map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition">
                      <Icon size={14}/>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <img src={leaders.office} alt="Capital Investors Office" className="rounded-xl aspect-video object-cover" />
          <div>
            <p className="section-label mb-4">Our Story</p>
            <h2 className="font-display text-4xl mb-6">A Tradition of <em className="text-gold">Trust</em></h2>
            <p className="text-muted-foreground leading-relaxed">
              At Capital Investors, we believe that luxury is not just a price point, but an experience.
              For over 15 years, we have been at the forefront of the luxury real estate market,
              helping families find their perfect sanctuaries and investors secure their legacies.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our team of expert consultants combines deep market knowledge with a commitment to personalized
              service, ensuring that every transaction is seamless, transparent, and rewarding.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border border-gold/40 rounded-lg p-6 text-center">
                <div className="font-display text-5xl text-gold">15+</div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Years of Excellence</p>
              </div>
              <div className="border border-gold/40 rounded-lg p-6 text-center">
                <div className="font-display text-5xl text-gold">500+</div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Luxury Closures</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { t: "Our Mission", d: "To redefine the luxury real estate landscape by providing unparalleled service, innovative solutions, and absolute transparency to our global clientele." },
            { t: "Our Vision", d: "To be the most trusted name in premium land development across Andhra Pradesh, creating legacies that endure for generations." },
          ].map((b) => (
            <div key={b.t} className="bg-card border border-border/60 rounded-xl p-10">
              <h3 className="font-display text-3xl text-gold mb-4">{b.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
