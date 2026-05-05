import { useEffect, useRef, useState } from "react";

export function StatsBand() {
  const stats = [
    { v: 15, suf: "+", l: "Years of Excellence" },
    { v: 500, suf: "+", l: "Luxury Closures" },
    { v: 12, suf: "", l: "Premium Projects" },
    { v: 100, suf: "%", l: "CRDA Approved" },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShow(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-6 border-y border-gold/20 bg-card/40">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <Counter key={s.l} target={s.v} suffix={s.suf} label={s.l} run={show} delay={i * 150} />
        ))}
      </div>
    </section>
  );
}

function Counter({ target, suffix, label, run, delay }: { target: number; suffix: string; label: string; run: boolean; delay: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const t = setTimeout(() => {
      const dur = 1400;
      const start = performance.now();
      let raf = 0;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, delay);
    return () => clearTimeout(t);
  }, [run, target, delay]);
  return (
    <div>
      <div className="font-display text-5xl md:text-6xl text-gold">{n}{suffix}</div>
      <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}
