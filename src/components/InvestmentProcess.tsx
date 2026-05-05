import { Search, FileCheck2, Handshake, KeyRound } from "lucide-react";

const steps = [
  { icon: Search, t: "Discover", d: "Browse our curated portfolio of CRDA approved plots across Amaravati & Vijayawada." },
  { icon: FileCheck2, t: "Verify", d: "Inspect clear titles, legal documentation and on-site amenities with our experts." },
  { icon: Handshake, t: "Invest", d: "Lock in transparent pricing with flexible payment plans tailored to you." },
  { icon: KeyRound, t: "Own", d: "Receive registered ownership and watch your land appreciate in value." },
];

export function InvestmentProcess() {
  return (
    <section className="py-24 px-6 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Your Journey</p>
          <h2 className="font-display text-4xl md:text-5xl">A Seamless <em className="text-gold">Process</em></h2>
        </div>
        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.t} className="relative text-center">
              <div className="relative z-10 mx-auto w-20 h-20 rounded-full border-2 border-gold bg-background flex items-center justify-center text-gold">
                <s.icon size={28}/>
              </div>
              <div className="text-xs uppercase tracking-widest text-gold mt-4">Step {i + 1}</div>
              <h3 className="font-display text-2xl mt-2">{s.t}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
