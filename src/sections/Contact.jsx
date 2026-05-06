import { motion } from "framer-motion";

export default function ContactSection() {

  return (

    <section
      id="contact"
      className="
      relative
      overflow-hidden
      py-28
      bg-[#070B14]
      "
    >

      {/* MAIN BACKGROUND */}
      <div className="absolute inset-0">

        {/* TOP CYAN GLOW */}
        <div className="
          absolute
          top-[-150px]
          left-1/2
          -translate-x-1/2

          w-[700px]
          h-[700px]

          bg-cyan-400/10
          blur-[140px]
          rounded-full
        " />

        {/* BOTTOM BLUE GLOW */}
        <div className="
          absolute
          bottom-[-200px]
          right-[-100px]

          w-[500px]
          h-[500px]

          bg-blue-500/10
          blur-[140px]
          rounded-full
        " />

        {/* GRID LINES */}
        <div className="
          absolute inset-0
          opacity-[0.04]

          [background-image:linear-gradient(to_right,#7EC8E3_1px,transparent_1px),linear-gradient(to_bottom,#7EC8E3_1px,transparent_1px)]

          [background-size:70px_70px]
        " />

      </div>

      {/* CONTENT */}
      <div className="
        relative z-10
        max-w-[1100px]
        mx-auto
        px-6
      ">

        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

          className="
          relative
          overflow-hidden

          rounded-[36px]

          border border-white/10

          bg-gradient-to-b
          from-white/[0.06]
          to-white/[0.02]

          backdrop-blur-xl

          px-8 py-20
          md:px-16
          text-center
          "
        >

          {/* INNER GLOW */}
          <div className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2

            w-[300px]
            h-[2px]

            bg-cyan-400
            blur-sm
          " />

          {/* FLOATING ORB */}
          <motion.div

            animate={{
              y: [0, -20, 0],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
            absolute
            right-10
            top-10

            hidden md:block

            w-20 h-20

            rounded-full

            bg-cyan-400/20
            blur-2xl
            "
          />

          {/* LABEL */}
          <motion.div

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.2 }}

            viewport={{ once: true }}

            className="
            flex
            items-center
            justify-center
            gap-3
            "
          >

            <div className="
              w-10 h-[1px]
              bg-cyan-400
            " />

            <p className="
              uppercase
              tracking-[0.35em]
              text-[#7EC8E3]
              text-xs
              font-semibold
            ">
              Let’s Build
            </p>

            <div className="
              w-10 h-[1px]
              bg-cyan-400
            " />

          </motion.div>

          {/* HEADING */}
          <motion.h2

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.3 }}

            viewport={{ once: true }}

            className="
            mt-8

            text-4xl
            md:text-6xl

            font-black
            leading-tight

            text-white
            "
          >

            Building Systems{" "}

            <span className="
              text-transparent
              bg-clip-text

              bg-gradient-to-r
              from-cyan-300
              to-blue-400
            ">
              That Matter
            </span>

          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.4 }}

            viewport={{ once: true }}

            className="
            mt-8

            max-w-[750px]
            mx-auto

            text-gray-400
            leading-relaxed

            text-base
            md:text-lg
            "
          >

            From scalable frontend systems to intelligent software
            experiences, I build products engineered for performance,
            usability, and real-world impact.

            <br /><br />

            Whether it’s AI-powered automation, modern interfaces,
            or engineering-focused solutions — I’m always open to
            building something meaningful.

          </motion.p>

          {/* BUTTONS */}
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.5 }}

            viewport={{ once: true }}

            className="
            mt-12

            flex
            flex-col sm:flex-row

            justify-center
            items-center

            gap-5
            "
          >

            {/* PRIMARY BUTTON */}
            <a
              href="mailto:mubarakgiwa72@gmail.com"
              className="
              group

              relative
              overflow-hidden

              px-8 py-4

              rounded-2xl

              bg-[#7EC8E3]

              text-[#07111F]
              font-semibold

              transition-all
              duration-300

              hover:scale-105
              hover:shadow-[0_0_40px_rgba(126,200,227,0.5)]
              "
            >

              <span className="relative z-10">
                Start a Project
              </span>

              <div className="
                absolute inset-0

                translate-y-full
                group-hover:translate-y-0

                transition-transform
                duration-500

                bg-white/20
              " />

            </a>

            {/* SECONDARY BUTTON */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              px-8 py-4

              rounded-2xl

              border border-white/10

              bg-white/[0.03]

              text-white

              transition-all
              duration-300

              hover:border-cyan-400/40
              hover:bg-cyan-400/10
              hover:text-cyan-300
              "
            >
              View Resume
            </a>

          </motion.div>

          {/* BOTTOM TEXT */}
          <motion.p

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}

            transition={{ delay: 0.7 }}

            viewport={{ once: true }}

            className="
            mt-12

            text-sm
            tracking-[0.25em]
            uppercase

            text-gray-500
            "
          >

            Computer Engineer • Frontend Developer • Intelligent Systems

          </motion.p>

        </motion.div>

      </div>

    </section>
  );
}