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

  // Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-32">

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Divider */}
        <SectionDivider title="Snapshot" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mt-12">

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

        {/* Bottom Divider */}
        <SectionDivider />

      </div>

    </section>
  );
}

// 🔢 Counter Component
function StatCard({ value, label, suffix, start, delay }) {
  const [count, setCount] = useState(0);

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
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, value, delay]);

  return (
    <div className="group">

      <h2 className="text-4xl md:text-5xl font-bold text-[#7EC8E3] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_#7EC8E3]">
        {count}
        {suffix}
      </h2>

      <p className="mt-3 text-xs md:text-sm tracking-widest text-[--color-textsub] uppercase">
        {label}
      </p>

    </div>
  );
}