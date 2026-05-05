import { Phone, MessageCircle, Send } from "lucide-react";
import { useEnquire } from "./EnquireDialog";

export function FloatingActions() {
  const enquire = useEnquire();
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <button
        onClick={() => enquire.open("Quick Enquiry")}
        className="group w-14 h-14 rounded-full bg-gold text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition relative"
        aria-label="Enquire"
      >
        <Send size={20} />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-card border border-gold/40 text-xs uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none text-foreground">
          Enquire Now
        </span>
      </button>
      <a href="tel:+919848423939" className="w-14 h-14 rounded-full bg-card border border-gold/40 text-gold flex items-center justify-center shadow-xl hover:scale-110 transition" aria-label="Call">
        <Phone size={18} />
      </a>
      <a href="https://wa.me/919848423939" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition" aria-label="WhatsApp">
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
