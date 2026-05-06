import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import pfp from "../assets/pfp.jpg";
import ParticleBackground from "../components/ParticleBackground";

export default function Hero() {

  return (

    <section
      id="home"
      className="
      relative
      overflow-hidden

      min-h-screen

      bg-[#050816]
      "
    >

      {/* PARTICLES */}
      <ParticleBackground />

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">

        {/* cyan glow */}
        <div
          className="
          absolute

          top-[-200px]
          left-[-150px]

          w-[500px]
          h-[500px]

          rounded-full

          bg-cyan-400/10
          blur-[140px]
          "
        />

        {/* blue glow */}
        <div
          className="
          absolute

          bottom-[-250px]
          right-[-150px]

          w-[500px]
          h-[500px]

          rounded-full

          bg-blue-500/10
          blur-[140px]
          "
        />

      </div>

      {/* MAIN CONTENT */}
      <div
        className="
        relative z-10

        max-w-[1250px]
        mx-auto

        px-6 md:px-12 lg:px-20 mt-20 md:mt-38 lg:mt-0

        min-h-screen

        flex
        items-center
        "
      >

        <div
          className="
          grid
          lg:grid-cols-2

          gap-16
          items-center

          w-full
          "
        >

          {/* LEFT SIDE */}
          <motion.div

            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.8
            }}

          >

            {/* SMALL LABEL */}
            <motion.div

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: 0.2
              }}

              className="
              flex
              items-center
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

                text-cyan-300

                text-xs
                font-semibold
              ">
                Software Engineer
              </p>

            </motion.div>

            {/* NAME */}
            <motion.h1

              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: 0.3
              }}

              className="
              mt-8

              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[88px]

              font-black

              leading-[0.95]

              text-white
              "
            >

              Mubarak

              <br />

              <span className="
                text-transparent
                bg-clip-text

                bg-gradient-to-r
                from-cyan-300
                to-blue-400
              ">
                Omotolani
              </span>

              <br />

              Giwa

            </motion.h1>

            {/* ROLE */}
            <motion.div

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}

              transition={{
                delay: 0.5
              }}

              className="
              mt-8

              text-lg
              md:text-2xl

              font-semibold

              text-[#E2E8F0]

              flex
              items-center
              gap-2
              "
            >

              <TypeAnimation
                sequence={[
                  "Frontend Engineer",
                  2000,
                  "Computer Engineer",
                  2000
                ]}
                speed={50}
                repeat={Infinity}wrapper="span"
              />

              <span className="animate-pulse text-cyan-300">
                |
              </span>

            </motion.div>

            {/* SHORT DESCRIPTION */}
            <motion.p

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: 0.7
              }}

              className="
              mt-8

              max-w-[620px]

              text-[#94A3B8]

              leading-relaxed

              text-base
              md:text-lg
              "
            >

              I build intelligent software systems,
              scalable interfaces, and digital experiences
              engineered for performance, usability,
              and real-world impact.

            </motion.p>

            {/* STATUS CARD */}
            <motion.div

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: 0.9
              }}

              className="
              mt-8

              inline-flex
              items-center
              gap-4

              rounded-2xl

              border border-white/10

              bg-white/[0.04]
              backdrop-blur-xl

              px-5 py-4
              "
            >

              {/* green dot */}
              <div className="
                w-3 h-3
                rounded-full
                bg-green-400
                animate-pulse
              " />

              <div>

                <p className="
                  text-sm
                  text-white
                  font-medium
                ">
                  Available For Opportunities
                </p>

                <p className="
                  mt-1
                  text-xs
                  text-gray-400
                ">
                  Frontend • Remote and On-site
                </p>

              </div>

            </motion.div>

            {/* BUTTONS */}
            <motion.div

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: 1.1
              }}

              className="
              mt-10

              flex
              flex-wrap

              gap-5
              "
            >

              {/* PRIMARY */}
              <Link
                to="/projects"

                className="
                group

                relative
                overflow-hidden

                px-8 py-4

                rounded-2xl

                bg-cyan-400

                text-[#07111F]
                font-semibold

                transition-all
                duration-300

                hover:scale-105
                hover:shadow-[0_0_40px_rgba(126,200,227,0.45)]
                "
              >

                <span className="relative z-10">
                  View My Work
                </span>

                <div className="
                  absolute inset-0

                  translate-y-full
                  group-hover:translate-y-0

                  transition-transform
                  duration-500

                  bg-white/20
                " />

              </Link>

              {/* SECONDARY */}
              <a
                href="#contact"

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
                Let’s Connect
              </a>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div

            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}

            transition={{
              duration: 0.9,
              delay: 0.4
            }}

            className="
            relative

            flex
            justify-center
            lg:justify-end
            "
          >

            {/* MAIN IMAGE WRAPPER */}
            <div className="relative">

              {/* OUTER GLOW */}
              <div
                className="
                absolute
                inset-0

                rounded-full

                bg-cyan-400/20

                blur-[80px]
                scale-110
                "
              />

              {/* RING */}
              <motion.div

                animate={{
                  rotate: 360
                }}

                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}

                className="
                absolute
                inset-[-18px]

                rounded-full

                border border-cyan-400/20
                "
              />

              {/* IMAGE */}
              <img
                src={pfp}
                alt="Mubarak"

                className="
                relative

                w-[300px]
                h-[300px]

                md:w-[420px]
                md:h-[420px]

                object-cover

                rounded-full

                border border-cyan-400/20

                shadow-[0_0_60px_rgba(126,200,227,0.25)]
                "
              />

              {/* FLOATING CARD */}
              <motion.div

                animate={{
                  y: [0, -12, 0]
                }}

                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}

                className="
                absolute

                bottom-5
                left-[-20px]

                hidden md:flex

                items-center
                gap-3

                rounded-2xl

                border border-white/10

                bg-[#0F172A]/80
                backdrop-blur-xl

                px-5 py-4
                "
              >

                <div className="
                  w-12 h-12

                  rounded-xl

                  bg-cyan-400/10

                  flex
                  items-center
                  justify-center

                  text-cyan-300
                  text-xl
                ">
                  ⚡
                </div>

                <div>

                  <p className="
                    text-sm
                    text-white
                    font-semibold
                  ">
                    Engineering Digital Systems
                  </p>

                  <p className="
                    mt-1
                    text-xs
                    text-gray-400
                  ">
                    Modern • Intelligent • Scalable
                  </p>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        transition={{
          delay: 1.4
        }}

        className="
        absolute

        bottom-8
        left-1/2

        -translate-x-1/2

        flex
        flex-col
        items-center

        gap-2
        "
      >

        <p className="
          text-[10px]

          tracking-[0.35em]
          uppercase

          text-gray-500
        ">
          Scroll
        </p>

        <motion.div

          animate={{
            y: [0, 10, 0]
          }}

          transition={{
            duration: 1.5,
            repeat: Infinity
          }}

          className="
          text-cyan-300
          text-xl
          "
        >
          ↓
        </motion.div>

      </motion.div>

    </section>
  );
}