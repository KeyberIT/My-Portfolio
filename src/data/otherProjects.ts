export interface OtherProject {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  externalUrl?: string;
}

// NOTA: Estos proyectos y sus enlaces (githubUrl, externalUrl) son 
// de ejemplo (placeholders). Recuerda reemplazarlos con tus proyectos 
// reales cuando estés listo para subir tu código a producción.
export const otherProjects: OtherProject[] = [
  {
    title: "My-Portfolio",
    description: "My personal portfolio website built with Next.js, featuring interactive UI components, smooth animations, and a sleek, responsive design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/KeyberIT/My-Portfolio",
  },
  /*
  {
    title: "Advanced AI Portfolio",
    description: "An AI-powered portfolio platform featuring an integrated assistant that can audit code, simulate technical interviews, and auto-generate responsive layouts.",
    techStack: ["Next.js", "AI", "Tailwind CSS"],
    githubUrl: "https://github.com",
    externalUrl: "https://example.com",
  },
  {
    title: "E-commerce Platform",
    description: "A comprehensive digital storefront built for high performance and seamless checkout experiences. Integrated with Stripe for payments and a headless CMS for content management.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    externalUrl: "https://example.com",
  },
  {
    title: "Algorithmic Trading Bot",
    description: "Automated trading system executing strategies based on real-time market data analysis using machine learning models.",
    techStack: ["Python", "TensorFlow", "Binance API"],
    githubUrl: "https://github.com",
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable messaging platform supporting thousands of concurrent users with end-to-end encryption.",
    techStack: ["React", "Node.js", "Socket.io", "Redis"],
    githubUrl: "https://github.com",
    externalUrl: "https://example.com",
  },
  {
    title: "Task Management API",
    description: "RESTful API service for enterprise task tracking with complex role-based access control and webhooks.",
    techStack: ["Go", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com",
  },
  {
    title: "IoT Dashboard",
    description: "Real-time monitoring interface for smart home devices with predictive maintenance alerts.",
    techStack: ["Vue.js", "GraphQL", "AWS IoT"],
    externalUrl: "https://example.com",
  }
  */
];
