import smartNutritionImg from "../assets/projects-images/smart nutrition.png";
import yapAssistImg from "../assets/projects-images/yapassist.png";

export default function Projects() {
  return (
    <section className="py-20 text-white">

      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

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
                  className="text-[#7EC8E3] text-sm hover:underline"
                >
                  Live
                </a>

                <a
                  href="https://github.com/mubarakg1/smart-nutrition"
                  className="text-[#7EC8E3] text-sm hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>

          {/* 🚀 Project 2 - YAP Assist */}
         <div className="group p-4 rounded-xl border border-white/10 hover:border-[#7EC8E3] transition overflow-hidden">

            {/* IMAGE */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={yapAssistImg}
                alt="Yap assist"
                className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                YAP Assist
              </h3>

              <p className="text-white/70 mt-2 text-sm">
                AI-powered assistant that helps generate content, ideas,
                and structured responses instantly.
              </p>

              <div className="mt-4 flex gap-4">
                <a
                  href="https://yapassist.vercel.app/"
                  className="text-[#7EC8E3] text-sm hover:underline"
                >
                  Live
                </a>

                <a
                  href="https://github.com/mubarakg1/YAPASSIST"
                  className="text-[#7EC8E3] text-sm hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>


        </div>

      </div>

    </section>
  );
}