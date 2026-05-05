import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

export function EmiCalculator() {
  const [price, setPrice] = useState(2500000);
  const [down, setDown] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(15);

  const { emi, total, interest, principal } = useMemo(() => {
    const p = Math.max(0, price - down);
    const r = rate / 12 / 100;
    const n = years * 12;
    const e = r === 0 ? p / n : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const t = e * n;
    return { emi: Math.round(e), total: Math.round(t), interest: Math.round(t - p), principal: p };
  }, [price, down, rate, years]);

  const fmt = (v: number) => "₹" + v.toLocaleString("en-IN");
  const intPct = total > 0 ? (interest / total) * 100 : 0;

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Plan Smartly</p>
          <h2 className="font-display text-4xl md:text-5xl">Investment <em className="text-gold">Calculator</em></h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Estimate your monthly EMI and total cost before booking your dream plot.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 bg-card border border-border/60 rounded-2xl p-8 md:p-12">
          <div className="space-y-8">
            <Slider label="Plot Price" value={price} min={500000} max={20000000} step={50000} onChange={setPrice} fmt={fmt} />
            <Slider label="Down Payment" value={down} min={0} max={Math.max(0, price - 50000)} step={10000} onChange={setDown} fmt={fmt} />
            <Slider label="Interest Rate" value={rate} min={6} max={15} step={0.1} onChange={setRate} fmt={(v) => v.toFixed(1) + "%"} />
            <Slider label="Tenure (Years)" value={years} min={1} max={30} step={1} onChange={setYears} fmt={(v) => v + " yrs"} />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-gold mb-4">
              <Calculator size={20}/>
              <span className="uppercase tracking-widest text-xs">Result</span>
            </div>
            <div className="bg-background/60 border border-gold/30 rounded-xl p-8 text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Monthly EMI</p>
              <div className="font-display text-5xl md:text-6xl text-gold mt-2">{fmt(emi)}</div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="border border-border/60 rounded-lg p-4">
                <p className="text-xs uppercase text-muted-foreground tracking-widest">Principal</p>
                <p className="font-display text-xl mt-1">{fmt(principal)}</p>
              </div>
              <div className="border border-border/60 rounded-lg p-4">
                <p className="text-xs uppercase text-muted-foreground tracking-widest">Interest</p>
                <p className="font-display text-xl mt-1 text-gold">{fmt(interest)}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Principal</span><span>Interest</span>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden flex">
                <div className="bg-foreground/70" style={{ width: `${100 - intPct}%` }} />
                <div className="bg-gold" style={{ width: `${intPct}%` }} />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Total Payable: <span className="text-foreground font-semibold">{fmt(total)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, step, onChange, fmt }: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; fmt: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
        <span className="font-display text-gold">{fmt(value)}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--gold)]"
      />
    </div>
  );
}
