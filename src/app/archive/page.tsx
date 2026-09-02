import { FiExternalLink, FiGithub } from 'react-icons/fi';

const archiveProjects = [
  {
    year: '2024',
    title: 'Advanced AI Portfolio',
    company: 'Personal',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/KeyberIT',
    github: 'https://github.com/KeyberIT/portfolio'
  },
  {
    year: '2023',
    title: 'E-commerce Platform',
    company: 'Tech Corp',
    tech: ['Node.js', 'React', 'Docker'],
    link: 'https://example.com'
  }
];

export default function ArchivePage() {
  return (
    <main className="flex-1 w-full max-w-[1000px] mx-auto px-4 md:px-10 lg:px-24 pt-32 pb-24">
      <header className="mb-12">
        <h1 className="text-lightest-slate text-4xl md:text-5xl font-bold mb-4">Archive</h1>
        <p className="text-green font-mono text-sm">A big list of things I've worked on</p>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate text-sm font-mono border-b border-lightest-navy">
              <th className="py-4 pr-4">Year</th>
              <th className="py-4 pr-4">Title</th>
              <th className="py-4 pr-4 hidden md:table-cell">Made at</th>
              <th className="py-4 pr-4 hidden lg:table-cell">Built with</th>
              <th className="py-4">Link</th>
            </tr>
          </thead>
          <tbody>
            {archiveProjects.map((project, index) => (
              <tr key={index} className="border-b border-lightest-navy/50 hover:bg-light-navy/50 transition-colors group">
                <td className="py-4 pr-4 text-green font-mono text-sm">{project.year}</td>
                <td className="py-4 pr-4 text-lightest-slate font-semibold text-lg group-hover:text-green transition-colors">{project.title}</td>
                <td className="py-4 pr-4 text-slate text-sm hidden md:table-cell">{project.company}</td>
                <td className="py-4 pr-4 text-slate text-xs font-mono hidden lg:table-cell">
                  {project.tech.join(' · ')}
                </td>
                <td className="py-4 text-slate text-sm">
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors" aria-label="GitHub Link">
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors" aria-label="External Link">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
