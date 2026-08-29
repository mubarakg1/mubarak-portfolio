import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "PROJECTS BUILT",
  },
  {
    value: "92%",
    label: "FIRST CLASS GRADUATE",
  },
  {
    value: "2",
    label: "ENGINEERING DOMAINS",
  },
  {
    value: "1+",
    label: "SMART SYSTEM BUILT",
  },
];

export default function Stats() {
  return (
    <section
      className="
      relative
      overflow-hidden
      py-10 md:py-14
      bg-[#0b0b17]
      border-t
      border-white/5
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#141428_0%,#0b0b17_65%)]
          "
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-5">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >

          <p
            className="
            text-[#7EC8E3]
            uppercase
            tracking-[0.35em]
            text-[10px]
            md:text-xs
            "
          >
            Snapshot
          </p>

          <div
            className="
            w-16
            h-[1px]
            bg-[#7EC8E3]/20
            mx-auto
            mt-3
            "
          />

        </motion.div>

        {/* GRID */}
        <div
          className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-3 md:gap-4
          "
        >

          {stats.map((stat, index) => (
            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -6,
                scale: 1.02,
              }}

              className="
              group

              rounded-[22px]

              border
              border-white/8

              bg-white/[0.02]

              px-5
              py-6

              min-h-[135px]

              transition-all
              duration-300

              hover:border-[#7EC8E3]/30
              hover:bg-white/[0.03]

              relative
              overflow-hidden
              "
            >

              {/* glow */}
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500

                bg-[radial-gradient(circle_at_top,#7EC8E315,transparent_70%)]
                "
              />

              <div className="relative z-10">

                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-[#7EC8E3]
                  "
                >
                  {stat.value}
                </motion.h3>

                <p
                  className="
                  mt-3

                  text-[10px]
                  md:text-xs

                  leading-5

                  tracking-[0.25em]

                  text-white/55
                  "
                >
                  {stat.label}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}