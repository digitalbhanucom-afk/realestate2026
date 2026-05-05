import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Are all plots CRDA approved?", a: "Yes. Every plot we offer is fully CRDA approved with clear titles and complete legal compliance." },
  { q: "Can NRIs invest in your projects?", a: "Absolutely. We assist NRIs end-to-end with documentation, power of attorney and remote registration." },
  { q: "Do you offer EMI or bank loans?", a: "Yes. We've partnered with leading banks for plot loans and offer flexible in-house payment plans." },
  { q: "What is the expected appreciation?", a: "Land in Amaravati's growth corridor has historically appreciated 18–25% annually based on infrastructure milestones." },
  { q: "How do I schedule a site visit?", a: "Click Enquire Now or WhatsApp us at +91 98484 23939 — we arrange complimentary chauffeured site tours." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Need Clarity?</p>
          <h2 className="font-display text-4xl md:text-5xl">Frequently Asked <em className="text-gold">Questions</em></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border border-border/60 rounded-xl bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-lg">{f.q}</span>
                  <span className="w-8 h-8 rounded-full border border-gold/40 text-gold flex items-center justify-center shrink-0">
                    {isOpen ? <Minus size={14}/> : <Plus size={14}/>}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
