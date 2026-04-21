import { useEffect, useRef, useState } from "react";
import SectionDivider from "../components/SectionDivider";

const statsData = [
  { value: 10, label: "Projects Built", suffix: "+" },
  { value: 92, label: "First Class Graduate", suffix: "%" },
  { value: 2, label: "Engineering Domains", suffix: "" },
  { value: 1, label: "Smart System Built", suffix: "+" },
];

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // 👇 Scroll trigger (ONLY runs when section enters screen)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-15 md:py-15">

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Divider */}
        <div
          className={`transition-all duration-700
          ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <SectionDivider title="Snapshot" />
        </div>

        {/* Animated Grid */}
        <div
          className={`transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center mt-16">

            {statsData.map((stat, i) => (
              <StatCard
                key={i}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                start={visible}
                delay={i * 200}
              />
            ))}

          </div>
        </div>

        {/* Bottom Divider */}
        <SectionDivider />

      </div>
    </section>
  );
}

// 🔢 Counter + Card
function StatCard({ value, label, suffix, start, delay }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 1200;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const current = Math.min(
        Math.floor((progress / duration) * value),
        value
      );

      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
      setShow(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, value, delay]);

  return (
    <div
      className={`relative group p-6 rounded-2xl
      bg-white/5 backdrop-blur-md border border-white/10
      transition-all duration-500
      hover:border-[#7EC8E3]/40 hover:shadow-[0_0_30px_rgba(126,200,227,0.15)]
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >

      {/* glow background */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#7EC8E3]/10 to-transparent blur-xl"></div>

      <h2 className="relative text-4xl md:text-5xl font-bold text-[#7EC8E3] transition duration-300 group-hover:scale-110">
        {count}
        {suffix}
      </h2>

      <p className="relative mt-3 text-xs md:text-sm tracking-widest text-[--color-textsub] uppercase">
        {label}
      </p>

    </div>
  );
}