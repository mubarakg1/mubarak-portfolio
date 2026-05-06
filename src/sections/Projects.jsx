import { Link } from "react-router-dom"
import { motion } from "framer-motion";

import smartNutritionImg from "../assets/projects-images/smart-nutrition.png";

import yapAssistImg from "../assets/projects-images/yapassist.png";
``
const projects = [

  {

    title: "Smart Nutrition System",

    description:

      "Intelligent system that recommends nutrition plans based on user data.",

    image: smartNutritionImg,

    live: "https://mubarakg1.github.io/smart-nutrition/",

    github: "https://github.com/mubarakg1/smart-nutrition",

  },

  {

    title: "YAP Assist",

    description:

      "AI-powered assistant that helps generate content, ideas and structured responses instantly.",

    image: yapAssistImg,

    live: "https://yapassist.vercel.app/",

    github: "https://github.com/mubarakg1/YAPASSIST",

  },

];

export default function Projects() {

  return (

    <section

      className="

      relative 

      z-10

      overflow-hidden

      py-16 md:py-24

      bg-[#09090f]

      border-t

      border-white/5

      "

    >

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        {/* top glow */}

        <div

          className="

          absolute

          top-[-200px]

          right-[-100px]

          w-[450px]

          h-[450px]

          rounded-full

          bg-[#7EC8E3]/10

          blur-[120px]

          "

        />

        {/* bottom glow */}

        <div

          className="

          absolute

          bottom-[-200px]

          left-[-100px]

          w-[450px]

          h-[450px]

          rounded-full

          bg-purple-500/10

          blur-[120px]

          "

        />

      </div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* TITLE */}

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}

          viewport={{ once: true }}

          className="text-center mb-14"

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

            Latest Projects

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

        {/* PROJECT GRID */}

        <div

          className="

          grid

          md:grid-cols-2

          gap-6 md:gap-8

          "

        >

          {projects.map((project, index) => (

            <motion.div

              key={index}

              initial={{

                opacity: 0,

                y: 40,

              }}

              whileInView={{

                opacity: 1,

                y: 0,

              }}

              transition={{

                duration: 0.6,

                delay: index * 0.12,

              }}

              viewport={{ once: true }}

              whileHover={{

                y: -8,

              }}

              className="

              group

              relative

              overflow-hidden

              rounded-[28px]

              border

              border-white/10

              bg-white/[0.03]

              backdrop-blur-xl

              transition-all

              duration-500

              hover:border-[#7EC8E3]/30

              hover:shadow-[0_0_40px_rgba(126,200,227,0.12)]

              "

            >

              {/* IMAGE */}

              <div className="overflow-hidden">

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

              </div>
              {/* CONTENT */}

              <div className="p-6">

                <h3

                  className="

                  text-xl

                  md:text-2xl

                  font-semibold

                  text-white

                  "

                >

                  {project.title}

                </h3>

                <p

                  className="

                  mt-4

                  text-sm

                  leading-7

                  text-white/60

                  "

                >

                  {project.description}

                </p>

                {/* BUTTONS */}

                <div className="mt-6 flex gap-4">

                  <a

                    href={project.live}

                    target="_blank"

                    rel="noreferrer"

                    className="

                    px-5

                    py-2.5

                    rounded-xl

                    bg-[#7EC8E3]

                    text-[#09090f]

                    text-sm

                    font-medium

                    transition-all

                    duration-300

                    hover:scale-105

                    hover:shadow-[0_0_25px_#7EC8E3]

                    "

                  >

                    Live Demo

                  </a>

                  <a

                    href={project.github}

                    target="_blank"

                    rel="noreferrer"

                    className="

                    px-5

                    py-2.5

                    rounded-xl

                    border

                    border-white/10

                    text-white/80

                    text-sm

                    font-medium

                    transition-all

                    duration-300

                    hover:border-[#7EC8E3]/40

                    hover:text-[#7EC8E3]

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

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}

          viewport={{ once: true }}

          className="mt-14 flex justify-center"

        >

          <Link

            to="/projects"

            className="

            group

            relative

            overflow-hidden

            px-8

            py-3

            rounded-2xl

            border

            border-[#7EC8E3]/30

            text-[#7EC8E3]

            transition-all

            duration-300

            hover:scale-105

            hover:border-[#7EC8E3]

            hover:shadow-[0_0_30px_rgba(126,200,227,0.25)]

            "

          >

            <span className="relative z-10">

              View All Projects

            </span>

            {/* hover glow */}

            <div

              className="

              absolute

              inset-0

              opacity-0

              group-hover:opacity-100

              transition

              duration-500

              bg-[radial-gradient(circle,#7EC8E320,transparent_70%)]

              "

            />

          </Link>

        </motion.div>

      </div>

    </section>

  );

}