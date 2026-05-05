import { Link } from "react-router-dom";

import Projects from "../sections/Projects";

export default function ProjectsPage() {
  return (
    <div className="bg-[#120F19] min-h-screen text-white pt-32 px-6 md:px-12">

      <h1 className="text-3xl font-bold mb-10 text-center">
        All Projects
      </h1>

      <Projects />

    </div>
  );
}