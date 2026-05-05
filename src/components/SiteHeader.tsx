import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, MapPin, Phone, Mail, Building2, Trees, Castle, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useEnquire } from "./EnquireDialog";
import { properties } from "@/data/properties";

const propertyMenu = [
  { icon: Trees, label: "Open Plots", desc: "CRDA approved residential plots", link: "/properties" },
  { icon: Castle, label: "Premium Villas", desc: "Luxury duplex & gated villas", link: "/properties" },
  { icon: Building2, label: "Commercial Land", desc: "High-yield investment sites", link: "/properties" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const enquire = useEnquire();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openMega(name: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(name);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(null), 150);
  }

  const featured = properties.slice(0, 3);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-background/20" : "bg-background/40 backdrop-blur-md"
      }`}
    >
      {/* Top utility bar */}
      <div className="hidden lg:block border-b border-border/30 bg-background/40">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between text-[11px] uppercase tracking-widest">
          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin size={11} className="text-gold" /> Vijayawada · Amaravati</span>
            <a href="tel:+917981501498" className="flex items-center gap-1.5 hover:text-gold transition"><Phone size={11} className="text-gold" /> +91 79815 01498</a>
            <a href="mailto:capitalincestors@gmail.com" className="flex items-center gap-1.5 hover:text-gold transition"><Mail size={11} className="text-gold" /> capitalincestors@gmail.com</a>
          </div>
          <span className="text-gold/80">CRDA Approved · RERA Registered</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-wider shrink-0" onClick={() => { setOpen(false); setMega(null); }}>
          <span className="text-foreground">CAPITAL</span>
          <span className="text-gold">INVESTORS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-xs uppercase tracking-widest" onMouseLeave={scheduleClose}>
          <NavLink to="/" label="Home" exact />

          {/* Properties mega menu */}
          <div
            className="relative"
            onMouseEnter={() => openMega("properties")}
          >
            <button
              className={`px-4 py-2 flex items-center gap-1 transition-colors ${mega === "properties" ? "text-gold" : "text-foreground/80 hover:text-gold"}`}
            >
              Properties <ChevronDown size={12} className={`transition-transform ${mega === "properties" ? "rotate-180" : ""}`} />
            </button>
            {mega === "properties" && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[680px]"
                onMouseEnter={() => openMega("properties")}
              >
                <div className="bg-card border border-border/60 rounded-2xl shadow-2xl shadow-background/80 overflow-hidden grid grid-cols-5">
                  <div className="col-span-2 p-6 border-r border-border/50 bg-background/40">
                    <p className="section-label mb-4">Browse by Type</p>
                    <ul className="space-y-1">
                      {propertyMenu.map((m) => (
                        <li key={m.label}>
                          <Link to={m.link} onClick={() => setMega(null)} className="flex gap-3 p-3 rounded-lg hover:bg-gold/10 group transition">
                            <div className="w-9 h-9 rounded-md bg-gold/15 text-gold flex items-center justify-center shrink-0">
                              <m.icon size={16} />
                            </div>
                            <div>
                              <p className="text-sm normal-case tracking-normal text-foreground group-hover:text-gold transition">{m.label}</p>
                              <p className="text-[11px] normal-case tracking-normal text-muted-foreground mt-0.5">{m.desc}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-3 p-6">
                    <p className="section-label mb-4">Featured Projects</p>
                    <div className="grid grid-cols-3 gap-3">
                      {featured.map((p) => (
                        <Link key={p.id} to="/properties" onClick={() => setMega(null)} className="group">
                          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border/50 group-hover:border-gold/50 transition">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                          </div>
                          <p className="text-[11px] uppercase tracking-widest text-gold mt-2">{p.tag}</p>
                          <p className="text-xs normal-case tracking-normal text-foreground group-hover:text-gold transition mt-0.5 line-clamp-1">{p.name}</p>
                        </Link>
                      ))}
                    </div>
                    <Link to="/properties" onClick={() => setMega(null)} className="text-gold text-[11px] uppercase tracking-widest mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all">
                      View All Plots <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />

          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border/50">
            <ThemeToggle />
            <button onClick={() => enquire.open("Quick Enquiry")} className="btn-gold !py-2.5 !px-5">
              Enquire Now
            </button>
          </div>
        </nav>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-gold w-10 h-10 flex items-center justify-center border border-gold/40 rounded-full"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col p-6 gap-1 text-sm uppercase tracking-widest">
            {[
              { to: "/", label: "Home", exact: true },
              { to: "/properties", label: "Properties" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.exact }}
                activeProps={{ className: "text-gold" }}
                className="text-foreground/80 hover:text-gold py-3 border-b border-border/40"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); enquire.open("Quick Enquiry"); }}
              className="btn-gold w-full justify-center mt-4"
            >
              Enquire Now
            </button>
            <div className="mt-6 pt-6 border-t border-border/40 space-y-3 normal-case tracking-normal text-sm">
              <a href="tel:+917981501498" className="flex items-center gap-3 text-muted-foreground hover:text-gold">
                <Phone size={14} className="text-gold" /> +91 79815 01498
              </a>
              <a href="mailto:capitalincestors@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-gold">
                <Mail size={14} className="text-gold" /> capitalincestors@gmail.com
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label, exact }: { to: string; label: string; exact?: boolean }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact }}
      activeProps={{ className: "text-gold" }}
      className="px-4 py-2 text-foreground/80 hover:text-gold transition-colors"
    >
      {label}
    </Link>
  );
}
