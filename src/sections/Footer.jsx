import { motion } from "framer-motion";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer
      className="
      relative
      z-10
      border-t border-white/10
      bg-[#060816]
      py-10
      "
    >

      {/* CONTENT */}
      <div className="
        max-w-[1200px]
        mx-auto
        px-6
      ">

        <div className="
          flex
          flex-col md:flex-row

          items-center
          justify-between

          gap-8
        ">

          {/* LEFT */}
          <motion.div

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6 }}

            viewport={{ once: true }}

          >

            {/* LOGO */}
            <h1 className="text-[#7EC8E3] font-display text-xl">
          GM
        </h1>


            {/* TEXT */}
            <p className="
              mt-3
              text-gray-400
              text-sm
              max-w-[320px]
              leading-relaxed
            ">

              Building intelligent systems,
              scalable frontend experiences,
              and impactful digital solutions.

            </p>

          </motion.div>

          {/* SOCIALS */}
          <motion.div

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.6,
              delay: 0.1
            }}

            viewport={{ once: true }}

            className="
            flex
            items-center
            gap-4
            "
          >

            {/* GITHUB */}
            <a
              href="https://github.com/mubarakg1"
              target="_blank"
              rel="noreferrer"

              className="
              w-11 h-11
              rounded-full

              border border-white/10

              flex
              items-center
              justify-center

              text-gray-300

              hover:border-cyan-400/40
              hover:text-cyan-300

              transition-all duration-300
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008 10.938c.584.108.797-.254.797-.566 0-.28-.01-1.02-.016-2.002-3.25.707-3.938-1.566-3.938-1.566-.532-1.352-1.3-1.712-1.3-1.712-1.062-.726.08-.711.08-.711 1.174.082 1.79 1.206 1.79 1.206 1.044 1.79 2.74 1.274 3.408.974.106-.756.408-1.274.742-1.566-2.594-.296-5.32-1.298-5.32-5.777 0-1.276.456-2.32 1.204-3.138-.12-.296-.522-1.486.114-3.098 0 0 .982-.314 3.218 1.198A11.2 11.2 0 0112 6.092a11.2 11.2 0 012.93.396c2.234-1.512 3.214-1.198 3.214-1.198.638 1.612.236 2.802.116 3.098.75.818 1.202 1.862 1.202 3.138 0 4.49-2.73 5.478-5.332 5.768.42.362.794 1.076.794 2.168 0 1.566-.014 2.828-.014 3.214 0 .314.21.68.804.564A11.502 11.502 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
              </svg>

            </a>

            {/* X */}
            <a
              href="https://x.com/its_veteran1"
              target="_blank"
              rel="noreferrer"

              className="
              w-11 h-11
              rounded-full

              border border-white/10

              flex
              items-center
              justify-center

              text-gray-300

              hover:border-cyan-400/40
              hover:text-cyan-300

              transition-all duration-300
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.637 7.584H.48l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.04L6.486 3.24H4.298l13.31 17.403z"/>
              </svg>

            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"

              className="
              w-11 h-11
              rounded-full

              border border-white/10

              flex
              items-center
              justify-center

              text-gray-300

              hover:border-cyan-400/40
              hover:text-cyan-300

              transition-all duration-300
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5 4.98 2.396 4.98 3.5zM1.5 8h3V22h-3V8zm7.5 0h2.879v1.917h.041C12.32 8.879 13.84 7.5 16.08 7.5 20.14 7.5 21 10.168 21 14.135V22h-3v-6.692c0-1.596-.029-3.65-2.225-3.65-2.228 0-2.57 1.74-2.57 3.534V22h-3V8z"/>
              </svg>

            </a>

          </motion.div>

          {/* SCROLL TO TOP */}
          <motion.button

            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}

            transition={{
              duration: 0.5,
              delay: 0.2
            }}

            viewport={{ once: true }}

            onClick={scrollToTop}

            className="
            w-12 h-12

            rounded-full

            border border-cyan-400/20

            flex
            items-center
            justify-center

            text-cyan-300
            text-xl

            hover:bg-cyan-400
            hover:text-[#060816]

            hover:shadow-[0_0_25px_rgba(126,200,227,0.4)]

            transition-all duration-300
            "
          >
            ↑
          </motion.button>

        </div>

        {/* BOTTOM */}
        <motion.div

          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}

          transition={{
            duration: 0.8,
            delay: 0.3
          }}

          viewport={{ once: true }}

          className="
          mt-10
          pt-6

          border-t border-white/5

          text-center
          "
        >

          <p className="
            text-xs
            tracking-[0.2em]
            uppercase

            text-gray-500
          ">

            © 2026 Mubarak Giwa • Engineered With Precision

          </p>

        </motion.div>

      </div>

    </footer>
  );
}