import SectionDivider from "../components/SectionDivider";

export default function Stats() {

  const stats = [
    {
      number: "10+",
      label: "PROJECTS BUILT",
    },
    {
      number: "92%",
      label: "FIRST CLASS GRADUATE",
    },
    {
      number: "2",
      label: "ENGINEERING DOMAINS",
    },
    {
      number: "1+",
      label: "SMART SYSTEM BUILT",
    },
  ];

  return (
    <section
      className="
      relative
      z-10
      py-28
      mt-5

      bg-[radial-gradient(circle_at_top,#1e1b2d_0%,#14111c_45%,#0f0d15_100%)]

      border-t
      border-white/5
      "
    >

      {/* TOP GLOW */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[500px]
        h-[200px]

        bg-[#7EC8E3]/10
        blur-3xl
        rounded-full
        pointer-events-none
        "
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">

        {/* TITLE */}
        <SectionDivider title="Snapshot" />

        {/* GRID */}
        <div
          className="
          mt-16

          grid
          grid-cols-2
          md:grid-cols-4

          gap-6
          "
        >

          {stats.map((stat, index) => (

            <div
              key={index}
              className="
              relative
              overflow-hidden

              rounded-3xl

              border
              border-white/10

              bg-white/[0.04]

              backdrop-blur-xl

              p-8

              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-[#7EC8E3]
              hover:shadow-[0_0_35px_rgba(126,200,227,0.18)]
              "
            >

              {/* CARD GLOW */}
              <div
                className="
                absolute
                -top-10
                -right-10

                w-28
                h-28

                rounded-full

                bg-[#7EC8E3]/10
                blur-3xl
                "
              />

              {/* NUMBER */}
              <h3
                className="
                relative
                text-4xl
                md:text-5xl
                font-bold
                text-[#7EC8E3]
                "
              >
                {stat.number}
              </h3>

              {/* LABEL */}
              <p
                className="
                relative
                mt-4

                text-sm
                md:text-base

                tracking-[0.15em]

                text-white/65
                leading-relaxed
                "
              >
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}