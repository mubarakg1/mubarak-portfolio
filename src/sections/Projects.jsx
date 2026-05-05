import SectionDivider from "../components/SectionDivider";

import smartNutritionImg from "../assets/projects-images/smart nutrition.png";
import yapAssistImg from "../assets/projects-images/yapassist.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="py-20 text-white">

      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 accent">
          Latest Projects
        </h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 🔥 Project 1 */}
          <div className="group p-4 rounded-xl border border-white/10 hover:border-[#7EC8E3] transition overflow-hidden">

            {/* IMAGE */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={smartNutritionImg}
                alt="Smart Nutrition System"
                className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                Smart Nutrition System
              </h3>

              <p className="text-white/70 mt-2 text-sm">
                Intelligent system that recommends nutrition plans based on user data.
              </p>

              <div className="mt-4 flex gap-4">
                <a
                  href="https://mubarakg1.github.io/smart-nutrition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7EC8E3] text-sm hover:underline"
                >
                  Live
                </a>

                <a
                  href="https://github.com/mubarakg1/smart-nutrition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7EC8E3] text-sm hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>

          {/* 🚀 Project 2 */}
          <div className="group p-4 rounded-xl border border-white/10 hover:border-[#7EC8E3] transition overflow-hidden">

            {/* IMAGE */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={yapAssistImg}
                alt="YAP Assist"
                className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                YAP Assist
              </h3>

              <p className="text-white/70 mt-2 text-sm">
                AI-powered assistant that helps generate content, ideas, and structured responses instantly.
              </p>

              <div className="mt-4 flex gap-4">
                <a
                  href="https://yapassist.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7EC8E3] text-sm hover:underline"
                >
                  Live
                </a>

                <a
                  href="https://github.com/mubarakg1/YAPASSIST"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7EC8E3] text-sm hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* 🔥 VIEW ALL BUTTON */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="
            px-8 py-3 rounded-xl
            border border-[#7EC8E3]
            text-[#7EC8E3]
            hover:bg-[#7EC8E3]
            hover:text-[#120F19]
            transition-all duration-300
            hover:shadow-[0_0_25px_#7EC8E3]
            "
          >
            View All Projects
          </Link>
        </div>

      </div>

    </section>
  );
}