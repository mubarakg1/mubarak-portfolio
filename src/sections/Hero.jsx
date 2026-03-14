import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center px-10 font-body pt-20">

      <div className=" md:max-w-70%">

        {/* NAME */}
        <h3 className="hero-name ">

        <span className="name-line">Mubarak</span>

        <span className="name-line accent">Omotolani</span>

        <span className="name-line">Giwa</span>

        </h3>

        {/* ROLE */}
        <p className="mt-6 text-xl text-blue-300 font-semibold">
          Software Engineer • Computer Engineer
        </p>


        {/* DESCRIPTION */}
        <p className="mt-6 text-[--color-textsub] leading-relaxed max-w-[650px] text-sm">

          I engineer modern software systems and intelligent digital
          experiences that solve real-world problems.

          <br /><br />

          First-Class Computer Engineering graduate passionate about
          building scalable systems, intelligent software,
          and impactful digital solutions.

        </p>


        {/* BUTTONS */}
        <div className="mt-10 flex gap-6">

          <button
            className="
            px-7 py-3 rounded-lg
            bg-[--color-accent]
            text-[--color-primary]
            font-medium
            transition-all duration-300
            hover:shadow-[0_0_35px_#7EC8E3]
            hover:scale-105
            "
          >
            View Projects
          </button>


          <button
            className="
            px-7 py-3 rounded-lg
            border border-[--color-accent]
            text-[--color-accent]
            transition-all duration-300
            hover:bg-[--color-accent]
            hover:text-[--color-primary]
            hover:shadow-[0_0_35px_#7EC8E3]
            hover:scale-105
            "
          >
            Contact Me
          </button>

        </div>

      </div>

    </section>
  );
}