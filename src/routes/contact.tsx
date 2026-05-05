import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Instagram, MessageCircle, Youtube, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Capital Investors" },
      { name: "description", content: "Get in touch with Capital Investors. Visit our Vijayawada office or send us a message." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0A%0A${form.message}`;
    window.location.href = `mailto:capitalincestors@gmail.com?subject=Enquiry from ${form.name}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl">Contact <em className="text-gold">Information</em></h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: MapPin, t: "Our Office", d: ["#59A - 21/3-2A, R.R. Gardens", "VijayaNagar Colony, Patamata", "Vijayawada-520010, Andhra Pradesh"] },
            { icon: Phone, t: "Call Us", d: ["Sales: +91 79815 01498", "Support: +91 98484 23939"] },
            { icon: Mail, t: "Email Support", d: ["capitalincestors@gmail.com"] },
          ].map((c) => (
            <div key={c.t} className="bg-card border border-border/60 rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center mb-4">
                <c.icon size={20}/>
              </div>
              <h3 className="font-display text-xl mb-3">{c.t}</h3>
              {c.d.map((line) => <p key={line} className="text-muted-foreground text-sm">{line}</p>)}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-card border border-border/60 rounded-xl p-10">
            <h2 className="font-display text-3xl mb-6">Send us a <em className="text-gold">Message</em></h2>
            <form onSubmit={submit} className="space-y-5">
              {[
                { k: "name", label: "Full Name", type: "text" },
                { k: "email", label: "Email Address", type: "email" },
                { k: "phone", label: "Phone Number", type: "tel" },
              ].map((f) => (
                <div key={f.k}>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</label>
                  <input
                    required
                    type={f.type}
                    value={form[f.k as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="w-full mt-2 bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Requirement Details</label>
                <textarea
                  required rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-2 bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
                />
              </div>
              <button type="submit" className="btn-gold w-full justify-center">
                <Send size={14}/> Send Enquiry
              </button>
              {sent && <p className="text-gold text-sm">Thank you! Opening your mail client…</p>}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border/60 rounded-xl overflow-hidden h-72">
              <iframe
                title="Map"
                className="w-full h-full"
                src="https://www.google.com/maps?q=Patamata,Vijayawada,Andhra+Pradesh&output=embed"
              />
            </div>
            <div className="bg-card border border-border/60 rounded-xl p-8">
              <h3 className="font-display text-2xl mb-2">Corporate Office</h3>
              <p className="text-gold text-sm uppercase tracking-widest mb-3">Capital Investors</p>
              <p className="text-muted-foreground text-sm">#59A - 21/3-2A, R.R. Gardens VijayaNagar Colony, Patamata, Vijayawada-520010, Andhra Pradesh</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=59A+-+21%2F3-2A%2C+R.R.+Gardens+VijayaNagar+Colony%2C+Patamata%2C+Vijayawada-520010%2C+Andhra+Pradesh"
                target="_blank" rel="noreferrer"
                className="btn-outline-gold mt-5 !text-xs"
              >
                Get Directions
              </a>
            </div>
            <div className="bg-card border border-border/60 rounded-xl p-8">
              <h3 className="font-display text-xl mb-4">Follow Our Journey</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/ks_realestate_tv?igsh=OTZ5OG9wZDJ0bmpk" },
                  { Icon: MessageCircle, href: "https://wa.me/919848423939" },
                  { Icon: Mail, href: "mailto:capitalincestors@gmail.com" },
                  { Icon: Youtube, href: "https://www.youtube.com/@Kanna2706" },
                  { Icon: Facebook, href: "https://www.facebook.com/share/1KvyBvYJ3E/" },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition">
                    <Icon size={16}/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
