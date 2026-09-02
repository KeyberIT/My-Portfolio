export interface Job {
  company: string;
  role: string;
  range: string;
  url: string;
  achievements: string[];
}

export const jobs: Job[] = [
  {
    company: "Freelance / Consultant",
    role: "Full-Stack Engineer",
    range: "Jun 2023 - Present",
    url: "#",
    achievements: [
      "Led the end-to-end development of an interactive B2B web platform for the European market, operating under strict CI/CD workflows and rigorous Code Reviews.",
      "Frontend Architecture: Built high-performance interfaces with Next.js and React 19. Implemented Drag & Drop engines (@dnd-kit) and 60fps optimized animations using GSAP and Lenis.",
      "Backend & Data: Designed scalable relational schemas in PostgreSQL (Neon) utilizing Prisma ORM, specifically optimized for low-latency serverless environments.",
      "Security & Type-Safety: Ensured end-to-end security with Argon2 authentication (Better Auth) and strict payload validation between client and server using Zod, React Hook Form, and Server Actions."
    ],
  }
];
