export default function Projects() {
  return (
    <section className="py-20 text-white">

      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="p-6 rounded-xl border border-white/10 hover:border-[#7EC8E3] transition">
            <h3 className="text-xl font-semibold">
              Smart Nutrition System
            </h3>

            <p className="text-white/70 mt-3 text-sm leading-relaxed">
              Intelligent system that recommends nutrition plans
              based on user data and health goals.
            </p>

            <div className="mt-5 flex gap-4">
              <button className="text-[#7EC8E3] text-sm hover:underline">
                Live
              </button>
              <button className="text-[#7EC8E3] text-sm hover:underline">
                GitHub
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-6 rounded-xl border border-white/10 hover:border-[#7EC8E3] transition">
            <h3 className="text-xl font-semibold">
              Portfolio Website
            </h3>

            <p className="text-white/70 mt-3 text-sm leading-relaxed">
              Personal portfolio built with React, animations,
              and modern UI/UX principles.
            </p>

            <div className="mt-5 flex gap-4">
              <button className="text-[#7EC8E3] text-sm hover:underline">
                Live
              </button>
              <button className="text-[#7EC8E3] text-sm hover:underline">
                GitHub
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}