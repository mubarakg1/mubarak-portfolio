import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import Footer from "../sections/Footer";

import nutrition from "../assets/projects-images/smart-nutrition.png";

import yap from "../assets/projects-images/yapassist.png";

export default function ProjectsPage() {

  const projects = [

    {

      title: "Smart Nutrition System",

      category: "AI • HEALTHCARE",

      image: nutrition,

      stack: [

        "React",

        "Tailwind",

        "Firebase",

        "AI",

      ],

      description:

        "Intelligent nutrition recommendation platform engineered to help users receive personalized meal and health suggestions using smart data analysis systems.",

      live:

        "https://mubarakg1.github.io/smart-nutrition/",

      github:

        "https://github.com/mubarakg1/smart-nutrition",

    },

    {

      title: "YAP Assist",

      category: "AI • AUTOMATION",

      image: yap,

      stack: [

        "React",

        "Tailwind",

        "Automation",

        "AI",

      ],

      description:

        "AI-powered assistant designed to help users instantly generate structured responses, content ideas, and intelligent outputs with a clean modern experience.",

      live:

        "https://yapassist.vercel.app/",

      github:

        "https://github.com/mubarakg1/YAPASSIST",

    },

  ];

  return (

    <div className="bg-[#050816] text-white overflow-x-hidden">

      {/* NAVBAR */}

      <Navbar />

      {/* HERO */}

      <section

        className="

        relative

        overflow-hidden

        pt-40

        pb-24

        "

      >

        {/* BACKGROUND */}

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

          {/* grid */}

          <div

            className="

            absolute inset-0

            opacity-[0.04]

            [background-image:linear-gradient(to_right,#7EC8E3_1px,transparent_1px),linear-gradient(to_bottom,#7EC8E3_1px,transparent_1px)]

            [background-size:80px_80px]

            "

          />

        </div>

        {/* CONTENT */}

        <div

          className="

          relative z-10

          max-w-[1250px]

          mx-auto

          px-6 md:px-12 lg:px-20

          "

        >

          {/* SMALL LABEL */}

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{

              duration: 0.7

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

            <p

              className="

              uppercase

              tracking-[0.35em]

              text-cyan-300

              text-xs

              font-semibold

              "

            >

              Projects & Builds

            </p>

          </motion.div>

          {/* TITLE */}

          <motion.h1

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{

              duration: 0.8,

              delay: 0.1

            }}

            className="

            mt-8

            text-5xl

            md:text-7xl

            font-black

            leading-[0.95]

            text-white

            "

          >
            Engineering{" "}

            <span className="

              text-transparent

              bg-clip-text

              bg-gradient-to-r

              from-cyan-300

              to-blue-400

            ">

              Intelligent

            </span>

            <br />

            Digital Experiences

          </motion.h1>

          {/* SUBTEXT */}

          <motion.p

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{

              duration: 0.8,

              delay: 0.2

            }}

            className="

            mt-8

            max-w-[750px]

            text-[#94A3B8]

            text-base

            md:text-lg

            leading-relaxed

            "

          >

            A curated collection of intelligent systems,

            frontend architectures, automation tools,

            and digital experiences designed with

            performance, usability, and real-world

            impact in mind.

          </motion.p>

        </div>

      </section>
      {/* PROJECTS */}

      <section className="relative pb-28">

        <div

          className="

          max-w-[1250px]

          mx-auto

          px-6 md:px-12 lg:px-20

          "

        >

          <div className="space-y-24">

            {projects.map((project, index) => (

              <motion.div

                key={index}

                initial={{ opacity: 0, y: 50 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{

                  duration: 0.7

                }}

                viewport={{ once: true }}

                className="

                grid

                lg:grid-cols-2

                gap-14

                items-center

                "

              >

                {/* LEFT SIDE */}

                <div>

                  {/* CATEGORY */}

                  <p

                    className="

                    text-cyan-300

                    uppercase

                    tracking-[0.3em]

                    text-xs

                    font-semibold

                    "

                  >

                    {project.category}

                  </p>

                  {/* TITLE */}

                  <h2

                    className="

                    mt-5

                    text-4xl

                    md:text-5xl

                    font-black

                    text-white

                    "

                  >

                    {project.title}

                  </h2>

                  {/* DESCRIPTION */}

                  <p

                    className="

                    mt-8

                    text-gray-400

                    leading-relaxed

                    "

                  >

                    {project.description}

                  </p>

                  {/* STACK */}

                  <div

                    className="

                    mt-8

                    flex

                    flex-wrap

                    gap-3

                    "

                  >

                    {project.stack.map((tech, i) => (

                      <span

                        key={i}

                        className="

                        px-4 py-2

                        rounded-full

                        border border-cyan-400/20

                        bg-cyan-400/10

                        text-cyan-300

                        text-xs

                        tracking-wide

                        "

                      >

                        {tech}

                      </span>

                    ))}

                  </div>

                  {/* BUTTONS */}

                  <div

                    className="

                    mt-10

                    flex

                    flex-wrap

                    gap-5

                    "

                  >

                    {/* LIVE */}

                    <a

                      href={project.live}

                      target="_blank"

                      rel="noreferrer"

                      className="

                      group

                      relative

                      overflow-hidden

                      px-7 py-4

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

                        Live Demo

                      </span>

                      <div

                        className="

                        absolute inset-0

                        translate-y-full

                        group-hover:translate-y-0

                        transition-transform

                        duration-500

                        bg-white/20"

                      />

                    </a>

                    {/* GITHUB */}

                    <a

                      href={project.github}

                      target="_blank"

                      rel="noreferrer"

                      className="

                      px-7 py-4

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

                      GitHub

                    </a>

                  </div>

                </div>

                {/* RIGHT IMAGE */}

                <motion.div

                  whileHover={{

                    y: -10

                  }}

                  transition={{

                    duration: 0.3

                  }}

                  className="

                  relative

                  "

                >

                  {/* glow */}

                  <div

                    className="

                    absolute

                    inset-0

                    rounded-[30px]

                    bg-cyan-400/10

                    blur-[60px]

                    scale-105

                    "

                  />

                  {/* card */}

                  <div

                    className="

                    relative

                    rounded-[30px]

                    border border-white/10

                    bg-[#0B1120]/95

                    backdrop-blur-xl
                    "

                  >

                    {/* top dots */}

                    <div

                      className="

                      flex

                      items-center

                      gap-2

                      px-5 py-4

                      border-b border-white/10

                      "

                    >

                      <div className="

                        w-3 h-3

                        rounded-full

                        bg-red-400

                      " />

                      <div className="

                        w-3 h-3

                        rounded-full

                        bg-yellow-400

                      " />

                      <div className="

                        w-3 h-3

                        rounded-full

                        bg-green-400

                      " />

                    </div>

                    {/* IMAGE */}

                    <img

                      src={project.image}

                      alt={project.title}

                      className="

                      w-full

                      object-cover

                      transition-transform

                      duration-700

                      hover:scale-105

                      "

                    />

                  </div>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <Footer />

    </div>

  );

}