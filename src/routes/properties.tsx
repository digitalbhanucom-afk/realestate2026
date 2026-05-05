import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, MapPin } from "lucide-react";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Capital Investors" },
      { name: "description", content: "Browse premium CRDA approved plots in Vijayawada, Amaravati and Bapatla." },
    ],
  }),
  component: PropertiesPage,
});

const filters = ["All", "Vijayawada", "Amaravati", "Bapatla"] as const;

function PropertiesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = filter === "All" ? properties : properties.filter((p) => p.category === filter);

  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Our Portfolio</p>
          <h1 className="font-display text-5xl md:text-6xl">Premium <em className="text-gold">Properties</em></h1>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest border transition ${
                filter === f ? "bg-gold text-primary-foreground border-gold" : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((p) => (
            <article key={p.id} className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:border-gold/60 transition">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <span className="absolute top-4 left-4 bg-gold text-primary-foreground text-xs uppercase tracking-widest px-3 py-1 rounded-full">{p.tag}</span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-gold">{p.type}</p>
                <h3 className="font-display text-2xl mt-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1"><MapPin size={12}/> {p.location}</p>
                {p.brochure && (
                  <a href={p.brochure} target="_blank" rel="noreferrer" className="btn-gold mt-5 !px-4 !py-2 text-xs">
                    <Download size={12}/> Download Brochure
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
