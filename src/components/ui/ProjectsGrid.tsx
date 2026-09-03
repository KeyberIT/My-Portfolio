"use client";

import { useState } from "react";
import type { OtherProject } from "@/data/otherProjects";

interface ProjectsGridProps {
  projects: OtherProject[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [showMore, setShowMore] = useState(false);

  // Mostrar los primeros 3 al inicio para poder ver la paginacion
  const GRID_LIMIT = 3;
  const firstProjects = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstProjects;

  if (!projects || projects.length === 0) {
    return (
      <div className="text-slate font-mono text-center w-full mt-10">
        <p>No extra projects to show yet. Stay tuned!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {projectsToShow.map((project, i) => {
          const isNew = i >= GRID_LIMIT;
          return (
            <div
              key={i}
              className="bg-light-navy p-8 rounded transition-all duration-300 hover:-translate-y-2 group cursor-pointer flex flex-col h-full"
              style={isNew ? {
                animation: `fade-in 0.5s ease-in-out ${(i - GRID_LIMIT) * 0.1}s forwards`,
                opacity: 0
              } : {}}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-green">
                  {/* Folder Icon Placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors" aria-label="GitHub Link">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  )}
                  {project.externalUrl && (
                    <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors" aria-label="External Link">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lightest-slate text-xl font-bold mb-2 group-hover:text-green transition-colors">
                {project.externalUrl ? (
                  <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">{project.title}</a>
                ) : (
                  project.title
                )}
              </h3>

              <div className="text-light-slate text-sm mb-6 flex-grow">
                <p>{project.description}</p>
              </div>

              <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate mt-auto">
                {project.techStack.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {projects.length > GRID_LIMIT && (
        <div className="mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-green bg-transparent border border-green rounded px-7 py-4 text-sm font-mono transition-all duration-300 md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:shadow-[4px_4px_0_0_var(--color-green)] focus:outline-none"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
}
