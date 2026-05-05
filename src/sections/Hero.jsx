import { TypeAnimation } from "react-type-animation";

import pfp from "../assets/pfp.png";
// import pfp from "/public/pfp.png";
export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-start pt-32 md:pt-40 font-body">

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">

        {/* FLEX WRAPPER */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

          {/* LEFT SIDE (TEXT) */}
          <div className="flex-1">

            {/* NAME */}
            <h3 className="hero-name">

              <span className="name-line">Mubarak</span>
              <span className="name-line accent">Omotolani</span>
              <span className="name-line">Giwa</span>

            </h3>

            {/* ROLE */}
            <div className="mt-6 text-xl font-semibold text-[--color-primary] flex items-center gap-2">

              <TypeAnimation
                sequence={[
                  "Software Engineer (Frontend)",
                  1500,
                  "Computer Engineer",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
              />

              <span className="animate-pulse">|</span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[--color-textsub] leading-relaxed max-w-[700px] md:max-w-[750px] text-base md:text-lg">

              I engineer <span className="text-[--color-accent] font-medium">modern software systems</span> 
              and <span className="text-[--color-accent] font-medium">intelligent digital experiences</span> 
              that solve <span className="text-white font-medium">real-world problems</span>.

              <br /><br />

              <span className="text-[--color-accent] font-semibold">First-Class Computer Engineering graduate</span> 
              passionate about building 
              <span className="text-white font-medium"> scalable systems</span>, 
              <span className="text-white font-medium"> intelligent software</span>, 
              and 
              <span className="text-white font-medium"> impactful digital solutions</span>.

            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex gap-6">

              <button
                className="
                px-7 py-3 rounded-lg
                bg-[--color-accent]
                text-[--color-primary]
                font-medium
                transition-all duration-150
                hover:shadow-[0_0_35px_#7EC8E3]
                hover:scale-105
                active:scale-95
              "
              >
               view my work
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
                active:scale-95
              "
              >
                Contact Me
              </button>

            </div>

          </div>

          {/* RIGHT SIDE (PFP) */}
          <div className="flex-1 flex justify-center md:justify-end">

            <div className="relative">

              {/* glow */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-40 bg-[#7EC8E3]"></div>

              {/* image */}
           <img
  src={pfp}
  alt="Mubarak"
  className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border border-[#7EC8E3] shadow-[0_0_30px_#7EC8E3]"
/>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}