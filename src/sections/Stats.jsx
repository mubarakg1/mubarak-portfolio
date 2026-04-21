import { useEffect, useRef, useState } from "react";

const statsData = [
  { value: 10, label: "Projects Built", suffix: "+" },
  { value: 92, label: "First Class Graduate", suffix: "%" },
  { value: 8, label: "Technologies Used", suffix: "+" },
  { value: 5, label: "Years of Study", suffix: "+" },
];

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // detect when section enters screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

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
    </section>
  );
}

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

      <p className="mt-3 text-sm tracking-widest text-[--color-textsub] uppercase">
        {label}
      </p>
    </div>
  );
}