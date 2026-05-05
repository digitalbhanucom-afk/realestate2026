import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, Youtube, Facebook, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl tracking-wider mb-4">
            <span className="text-foreground">CAPITAL</span><span className="text-gold">INVESTORS</span>
          </div>
          <p className="text-muted-foreground max-w-md">
            Premium CRDA approved open plots across Vijayawada and Amaravathi — the capital region of Andhra Pradesh.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { icon: Instagram, href: "https://www.instagram.com/ks_realestate_tv?igsh=OTZ5OG9wZDJ0bmpk" },
              { icon: MessageCircle, href: "https://wa.me/919848423939" },
              { icon: Mail, href: "mailto:capitalincestors@gmail.com" },
              { icon: Youtube, href: "https://www.youtube.com/@Kanna2706" },
              { icon: Facebook, href: "https://www.facebook.com/share/1KvyBvYJ3E/" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Quick Links</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/properties" className="hover:text-gold">Properties</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Contact</h4>
          <p className="text-muted-foreground text-sm">#59A - 21/3-2A, R.R. Gardens VijayaNagar Colony, Patamata, Vijayawada-520010, Andhra Pradesh</p>
          <a href="tel:+919848423939" className="flex items-center gap-2 mt-3 text-foreground hover:text-gold"><Phone size={14}/><span>98484 23939</span></a>
          <a href="mailto:capitalincestors@gmail.com" className="flex items-center gap-2 mt-2 text-foreground hover:text-gold"><Mail size={14}/><span>capitalincestors@gmail.com</span></a>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Capital Investors. All rights reserved.
      </div>
    </footer>
  );
}
