import ProjectsGrid from "@/components/ui/ProjectsGrid";
import { otherProjects } from "@/data/otherProjects";

export default function Projects() {
  return (
    <section className="pt-24 pb-12 max-w-[1000px] mx-auto w-full px-4 md:px-10 lg:px-24 flex flex-col items-center">
      <h2 className="text-lightest-slate font-semibold text-2xl md:text-3xl mb-10">
        Other Noteworthy Projects
      </h2>
      <a href="/archive" className="text-green font-mono text-sm mb-12 hover:underline">
        view the archive
      </a>

      <ProjectsGrid projects={otherProjects} />
      
    </section>
  );
}
