import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a href="tel:+919848423939" className="w-14 h-14 rounded-full bg-gold text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition" aria-label="Call">
        <Phone />
      </a>
      <a href="https://wa.me/919848423939" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition" aria-label="WhatsApp">
        <MessageCircle />
      </a>
    </div>
  );
}
