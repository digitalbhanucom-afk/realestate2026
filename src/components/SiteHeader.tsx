import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-wider" onClick={() => setOpen(false)}>
          <span className="text-foreground">CAPITAL</span>
          <span className="text-gold">INVESTORS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <a href="https://wa.me/919848423939" target="_blank" rel="noreferrer" className="btn-gold">
            Enquire Now
          </a>
        </nav>
        <div className="md:hidden flex items-center gap-3">
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
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="flex flex-col p-6 gap-4 text-sm uppercase tracking-widest">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-gold" }}
                className="text-foreground/80 hover:text-gold py-2 border-b border-border/40"
              >
                {l.label}
              </Link>
            ))}
            <a href="https://wa.me/919848423939" className="btn-gold w-fit mt-2">Enquire Now</a>
          </nav>
        </div>
      )}
    </header>
  );
}
