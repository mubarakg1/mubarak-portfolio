import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import nutrition from "../assets/projects-images/smart-nutrition.png";
import yap from "../assets/projects-images/yapassist.png";

export default function Projects() {

  const projects = [

    {
      title: "Smart Nutrition System",

      category: "AI • HEALTHCARE",

      stack: ["Vanilla JS", "Tailwind", "AI"],

      description:
        "Intelligent nutrition recommendation platform powered by user health data and meal analysis.",

      image: nutrition,

      live: "https://mubarakg1.github.io/smart-nutrition/",

      github: "#",
    },

    {
      title: "YAP Assist",

      category: "AI • AUTOMATION",

      stack: ["Vanilla JS", "Tailwind", "Automation"],

      description:
        "AI-powered assistant that helps generate content, ideas and structured responses instantly.",

      image: yap,

      live: "#",

      github: "#",
    },
  ];

  return (

    <section
      id="projects"
      className="
      relative
      z-10
      py-24
      overflow-hidden
      bg-[#09090f]
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-cyan-400/10
          blur-[140px]
          rounded-full
        " />

        <div className="
          absolute
          bottom-0
          right-0
          w-[300px]
          h-[300px]
          bg-cyan-400/5
          blur-[120px]
          rounded-full
        " />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="
            uppercase
            tracking-[0.35em]
            text-[#7EC8E3]
            text-sm
            font-semibold
          ">
            Latest Projects
          </p>

          <div className="
            w-28 h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#7EC8E3]
            to-transparent
            mx-auto
            mt-4
          " />

          <h2 className="
            mt-8
            text-3xl
            md:text-5xl
            font-bold
            text-white
          ">
            Things I’ve Built
          </h2>

          <p className="
            mt-5
            text-gray-400
            max-w-[700px]
            mx-auto
            leading-relaxed
            text-sm
            md:text-base
          ">
            A collection of intelligent systems, automation tools,
            and modern web experiences engineered with performance,
            scalability and clean design in mind.
          </p>

        </motion.div>

        {/* PROJECT GRID */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        ">

          {projects.map((project, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}

              viewport={{ once: true }}

              className="
              group
              relative
              rounded-[28px]
              overflow-hidden
              border border-white/10
              bg-gradient-to-b
              from-white/[0.05]
              to-white/[0.02]
              backdrop-blur-xl

              hover:-translate-y-2
              transition-all
              duration-500

              hover:border-cyan-400/30
              hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
            >

              {/* TOP GLOW LINE */}
              <div className="
                absolute
                top-0
                left-10
                w-28
                h-[2px]
                bg-cyan-400
                blur-sm
                opacity-70
              " />

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-[240px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  "
                />

                {/* IMAGE OVERLAY */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#09090f]
                  via-transparent
                  to-transparent
                " />

              </div>

              {/* CONTENT */}
              <div className="p-7">

                {/* CATEGORY */}
                <p className="
                  text-[#7EC8E3]
                  uppercase
                  tracking-[0.25em]
                  text-[11px]
                  font-semibold
                ">
                  {project.category}
                </p>

                {/* TITLE */}
                <h3 className="
                  mt-4
                  text-2xl
                  font-bold
                  text-white
                ">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="
                  mt-4
                  text-gray-400
                  leading-relaxed
                  text-sm
                ">
                  {project.description}
                </p>

                {/* STACK */}
                <div className="
                  mt-5
                  flex
                  flex-wrap
                  gap-2
                ">

                  {project.stack.map((tech, i) => (

                    <span
                      key={i}
                      className="
                      px-3
                      py-1
                      text-[11px]
                      rounded-full

                      bg-cyan-400/10
                      border border-cyan-400/20

                      text-cyan-300
                      tracking-wider
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}
                <div className="
                  mt-7
                  flex
                  gap-4
                ">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    px-5 py-3
                    rounded-xl

                    bg-[#7EC8E3]
                    text-[#120F19]
                    font-medium

                    transition-all duration-300

                    hover:scale-105
                    hover:shadow-[0_0_30px_#7EC8E3]
                    "
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    px-5 py-3
                    rounded-xl

                    border border-white/10
                    text-white

                    hover:border-cyan-400/40
                    hover:bg-white/5

                    transition-all duration-300
                    "
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* VIEW ALL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >

          <Link
            to="/projects"
            className="
            px-8 py-4
            rounded-2xl

            border border-cyan-400/30
            bg-white/[0.03]

            text-cyan-300
            font-medium

            transition-all duration-300

            hover:bg-cyan-400
            hover:text-[#09090f]

            hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
            hover:scale-105
            "
          >
            View All Projects
          </Link>

        </motion.div>

      </div>

    </section>
  );
}