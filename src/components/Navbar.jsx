import { useState } from "react"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-5 flex justify-between items-center">

        <h1 className="text-[#7EC8E3] font-display text-xl">
          GM
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-12 text-[#E6E6F0] font-display tracking-wide">

          <li className="hover:text-[#7EC8E3] transition cursor-pointer">
            Home
          </li>

          <li className="hover:text-[#7EC8E3] transition cursor-pointer">
            Projects
          </li>

          <li className="hover:text-[#7EC8E3] transition cursor-pointer">
            Education
          </li>

          <li className="hover:text-[#7EC8E3] transition cursor-pointer">
            Experience
          </li>

        </ul>

        <button className="hidden md:block px-8 py-3 rounded-2xl border border-[rgb(126,200,227)] text-[#7EC8E3] hover:bg-[#7EC8E3] hover:text-[#120F19] transition">
          Contact
        </button>

        {/* Burger */}
        <div
        className="md:hidden flex flex-col justify-center items-center gap-1  z-[100]"
        onClick={() => setOpen(!open)}
        >
          <span  className={`w-6 h-[2px] bg-white transition duration-300
        ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span  className={`w-6 h-[2px] bg-white transition duration-300
        ${open ? "opacity-0" : ""}`} />
          <span  className={`w-6 h-[2px] bg-white transition duration-300
        ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </div>

      </div>

      {/* FULL SCREEN MOBILE MENU */}
      <div
  className={`fixed inset-0 z-[90] bg-[#120F19] flex flex-col items-center justify-center gap-12 text-2xl text-[#E6E6F0] font-display tracking-wide transition-all duration-500
   ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
>

        <a onClick={() => setOpen(false)} className="hover:text-[#7EC8E3]">Home</a>
        <a onClick={() => setOpen(false)} className="hover:text-[#7EC8E3]">Projects</a>
        <a onClick={() => setOpen(false)} className="hover:text-[#7EC8E3]">Education</a>
        <a onClick={() => setOpen(false)} className="hover:text-[#7EC8E3]">Experience</a>

        <button className="px-8 py-3 rounded-2xl border border-[#7EC8E3] text-[#7EC8E3] hover:bg-[#7EC8E3] hover:text-[#120F19] transition">
          Contact
        </button>

      </div>

    </nav>
  )
}