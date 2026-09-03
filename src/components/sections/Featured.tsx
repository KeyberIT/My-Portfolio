import Image from "next/image";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  url: string;
  isRightAligned: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "Agent-K",
    description: "Designed and engineered a SaaS platform focused on WhatsApp sales automation and management. The system centralizes conversations, catalogs, pricing, and operations into a single dashboard, empowering customer support with AI-driven automated responses. Built with a multi-tenant architecture and internal workers for high-demand processing.",
    techStack: ["WhatsApp API", "IA", "PostgreSQL", "Multi-tenant", "Workers"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop",
    url: "#",
    isRightAligned: true,
  },
  {
    title: "Forestock",
    description: "Intelligent inventory and stock management system for modern enterprises. Features a Neural Prediction Engine that anticipates stockouts based on history and seasonality. Includes a multi-branch architecture and advanced processing for massive catalog imports via Excel.",
    techStack: ["Next.js", "React 19", "Tailwind CSS", "PostgreSQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    url: "https://forestock-web.vercel.app/",
    isRightAligned: false,
  },
  {
    title: "Moon Light",
    description: "Moon Light is an interactive single-page website featuring a stunning parallax scrolling effect with a nocturnal and lunar theme.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=80&w=1000&auto=format&fit=crop",
    url: "https://moon-light-nu.vercel.app/",
    isRightAligned: true,
  },
  {
    title: "Restaurant Web App",
    description: "Comprehensive web platform for restaurant menu and order management. Includes menu visualization, location details, and interactive options for the gastronomic offering.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
    url: "https://restaurante-web-ashy.vercel.app/",
    isRightAligned: false,
  },
  {
    title: "Login & Registration UI",
    description: "Modern authentication interface with integrated login and registration views. Stands out for its clean design, visual overlay effects, and a smooth, interactive user experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    url: "https://pagina-web-de-login-and-register.vercel.app/",
    isRightAligned: true,
  }
];

export default function Featured() {
  return (
    <section id="work" className="py-24 max-w-[1000px] mx-auto w-full px-4 md:px-10 lg:px-24">
      <h2 className="text-lightest-slate font-semibold text-2xl md:text-3xl mb-10 flex items-center gap-4">
        <span className="text-green font-mono text-xl">03.</span> Some Things I've Built
        <div className="h-[1px] bg-lightest-navy flex-1"></div>
      </h2>

      <div className="space-y-24">
        {PROJECTS.map((project, index) => (
          <div key={index} className="relative grid grid-cols-12 items-center mb-16 md:mb-24 last:mb-0">
            
            {/* Contenedor de la imagen */}
            <div className={`col-span-12 col-start-1 md:col-span-7 h-full w-full bg-navy md:bg-green rounded overflow-hidden group cursor-pointer shadow-lg z-10 transition-all duration-300 ${project.isRightAligned ? 'md:col-start-1' : 'md:col-start-6'} row-start-1`}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                {/* Overlay oculto en movil, visible en desktop */}
                <div className="hidden md:block absolute inset-0 bg-navy/20 mix-blend-screen group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <div className="w-full h-full relative md:mix-blend-multiply md:grayscale group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={1000}
                    height={600}
                    className="w-full h-full min-h-[340px] md:min-h-[380px] object-cover opacity-25 md:opacity-100" 
                  />
                </div>
              </a>
            </div>

            {/* Contenido (Texto) */}
            <div className={`col-span-12 col-start-1 md:col-span-7 relative z-20 flex flex-col justify-center p-8 md:p-0 row-start-1 ${project.isRightAligned ? 'md:col-start-6 md:items-end text-left md:text-right' : 'md:col-start-1 md:items-start text-left'}`}>
              <p className="text-green font-mono text-[13px] my-2">Featured Project</p>
              <h3 className="text-lightest-slate text-2xl md:text-[28px] font-bold mb-6 hover:text-green cursor-pointer transition-colors">
                <a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              
              <div className={`bg-transparent md:bg-light-navy text-light-slate md:p-6 rounded md:shadow-xl mb-6 w-full transition-shadow duration-300 ${project.isRightAligned ? 'text-left md:text-right' : 'text-left'}`}>
                <p>{project.description}</p>
              </div>

              <ul className={`flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13px] text-light-slate md:text-slate mb-6 ${project.isRightAligned ? 'md:justify-end' : 'md:justify-start'}`}>
                {project.techStack.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className={`flex gap-4 text-lightest-slate ${project.isRightAligned ? 'md:justify-end' : 'md:justify-start'}`}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors" aria-label="External Link">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
