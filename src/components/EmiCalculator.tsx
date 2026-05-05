import { useMemo, useState } from "react";
import { Calculator, IndianRupee, Percent, Calendar, ArrowRight } from "lucide-react";
import { useEnquire } from "./EnquireDialog";

export function EmiCalculator() {
  const [price, setPrice] = useState(2500000);
  const [down, setDown] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(15);
  const enquire = useEnquire();

  const { emi, total, interest, principal } = useMemo(() => {
    const p = Math.max(0, price - down);
    const r = rate / 12 / 100;
    const n = years * 12;
    const e = r === 0 ? p / n : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const t = e * n;
    return {
      emi: isFinite(e) ? Math.round(e) : 0,
      total: isFinite(t) ? Math.round(t) : 0,
      interest: isFinite(t) ? Math.round(t - p) : 0,
      principal: p,
    };
  }, [price, down, rate, years]);

  const fmt = (v: number) => "₹" + v.toLocaleString("en-IN");
  const intPct = total > 0 ? (interest / total) * 100 : 0;

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Plan Smartly</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Investment <em className="text-gold">Calculator</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Estimate your monthly EMI and total cost before booking your dream plot.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 bg-card border border-border/60 rounded-2xl p-6 md:p-10">
          <div className="space-y-6">
            <Field
              label="Plot Price"
              value={price}
              min={500000}
              max={20000000}
              step={50000}
              onChange={setPrice}
              icon={IndianRupee}
              suffix="₹"
              quick={[1500000, 2500000, 5000000, 10000000]}
              fmt={fmt}
            />
            <Field
              label="Down Payment"
              value={down}
              min={0}
              max={Math.max(0, price - 50000)}
              step={10000}
              onChange={(v) => setDown(Math.min(v, price - 50000))}
              icon={IndianRupee}
              suffix="₹"
              quick={[
                Math.round(price * 0.1),
                Math.round(price * 0.2),
                Math.round(price * 0.3),
                Math.round(price * 0.5),
              ]}
              fmt={fmt}
            />
            <Field
              label="Interest Rate"
              value={rate}
              min={6}
              max={15}
              step={0.1}
              onChange={setRate}
              icon={Percent}
              suffix="%"
              decimal
              quick={[7.5, 8.5, 9, 10]}
              fmt={(v) => v.toFixed(2) + "%"}
            />
            <Field
              label="Tenure (Years)"
              value={years}
              min={1}
              max={30}
              step={1}
              onChange={setYears}
              icon={Calendar}
              suffix="yrs"
              quick={[5, 10, 15, 20, 30]}
              fmt={(v) => v + " yrs"}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-gold mb-4">
              <Calculator size={20} />
              <span className="uppercase tracking-widest text-xs">Result</span>
            </div>
            <div className="bg-gradient-to-br from-gold/15 via-background/60 to-background border border-gold/40 rounded-xl p-8 text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Monthly EMI</p>
              <div className="font-display text-5xl md:text-6xl text-gold mt-2 tracking-tight">{fmt(emi)}</div>
              <p className="text-xs text-muted-foreground mt-3">for {years} years @ {rate.toFixed(2)}% p.a.</p>
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
                <span>Principal {(100 - intPct).toFixed(0)}%</span>
                <span>Interest {intPct.toFixed(0)}%</span>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden flex">
                <div className="bg-foreground/70" style={{ width: `${100 - intPct}%` }} />
                <div className="bg-gold" style={{ width: `${intPct}%` }} />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Total Payable: <span className="text-foreground font-semibold">{fmt(total)}</span>
              </p>
            </div>

            <button onClick={() => enquire.open("Loan & EMI Assistance")} className="btn-gold w-full justify-center mt-6">
              Get Loan Assistance <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, min, max, step, onChange, icon: Icon, suffix, quick, fmt, decimal,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  suffix: string;
  quick?: number[];
  fmt: (v: number) => string;
  decimal?: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
        <span className="font-display text-gold text-lg">{fmt(value)}</span>
      </div>
      <div className="flex items-center gap-2 bg-input border border-border rounded-lg px-3 py-2 focus-within:border-gold transition">
        <Icon size={14} className="text-gold shrink-0" />
        <input
          type="number"
          inputMode={decimal ? "decimal" : "numeric"}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const v = decimal ? parseFloat(e.target.value) : parseInt(e.target.value);
            onChange(isNaN(v) ? min : Math.min(Math.max(v, min), max));
          }}
          className="w-full bg-transparent outline-none text-base font-medium text-foreground"
        />
        <span className="text-xs text-muted-foreground">{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(decimal ? parseFloat(e.target.value) : parseInt(e.target.value))}
        className="w-full mt-3 h-1.5 rounded-full appearance-none bg-secondary range-gold cursor-pointer"
      />
      {quick && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {quick.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => onChange(q)}
              className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border transition ${
                value === q ? "border-gold text-gold bg-gold/10" : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"
              }`}
            >
              {fmt(q)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
