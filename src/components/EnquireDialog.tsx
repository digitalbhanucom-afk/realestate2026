import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { X, Send, Phone, Mail, MessageCircle } from "lucide-react";

type Ctx = { open: (subject?: string) => void; close: () => void };
const EnquireCtx = createContext<Ctx | null>(null);

export function useEnquire() {
  const ctx = useContext(EnquireCtx);
  if (!ctx) throw new Error("useEnquire must be inside EnquireProvider");
  return ctx;
}

export function EnquireProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [subject, setSubject] = useState("General Enquiry");
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "Open Plots", message: "" });
  const [sent, setSent] = useState(false);

  const open = useCallback((s?: string) => {
    if (s) setSubject(s);
    setSent(false);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text =
      `*New Enquiry — ${subject}*%0A` +
      `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A` +
      `Interest: ${form.interest}%0A%0A${form.message}`;
    window.open(`https://wa.me/919848423939?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <EnquireCtx.Provider value={{ open, close }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={close}>
          <div
            className="relative w-full max-w-lg bg-card border border-gold/40 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-gold/20 via-gold/5 to-transparent p-6 border-b border-border/50">
              <button
                onClick={close}
                className="absolute top-4 right-4 w-9 h-9 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <p className="section-label mb-2">{subject}</p>
              <h3 className="font-display text-2xl">Speak with our <em className="text-gold">Advisor</em></h3>
              <p className="text-muted-foreground text-sm mt-1">Share your details — we'll respond within 30 minutes.</p>
            </div>

            {sent ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={28} />
                </div>
                <h4 className="font-display text-xl">Opening WhatsApp…</h4>
                <p className="text-muted-foreground text-sm mt-2">Your enquiry has been prepared. Send the message to complete.</p>
                <button onClick={close} className="btn-outline-gold mt-6">Close</button>
              </div>
            ) : (
              <form onSubmit={submit} className="p-6 space-y-4">
                <Field label="Full Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Phone" type="tel" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Interested In</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full mt-1.5 bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold"
                  >
                    {["Open Plots", "Premium Villas", "Investment Plots", "Commercial Land", "Site Visit"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirement…"
                    className="w-full mt-1.5 bg-input border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full justify-center">
                  <Send size={14} /> Send Enquiry via WhatsApp
                </button>
                <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                  <a href="tel:+917981501498" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition">
                    <Phone size={12} /> Call
                  </a>
                  <span className="w-px h-6 bg-border" />
                  <a href="mailto:capitalincestors@gmail.com" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition">
                    <Mail size={12} /> Email
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </EnquireCtx.Provider>
  );
}

function Field({ label, value, onChange, type = "text", required }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}{required && <span className="text-gold"> *</span>}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1.5 bg-input border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
      />
    </div>
  );
}
