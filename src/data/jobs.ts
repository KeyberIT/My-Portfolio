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
      "Led the end-to-end development of custom web applications for freelance clients, focusing on clean architecture and delivering high-quality digital experiences.",
      "Frontend Architecture: Built high-performance interfaces with Next.js and React 19. Implemented Drag & Drop engines (@dnd-kit) and smooth, optimized animations for an engaging user experience.",
      "Backend & Data: Designed scalable relational schemas in PostgreSQL (Neon) utilizing Prisma ORM, specifically optimized for low-latency serverless environments.",
      "Security & Type-Safety: Ensured end-to-end security with Argon2 authentication (Better Auth) and strict payload validation between client and server using Zod, React Hook Form, and Server Actions."
    ],
  }
];
