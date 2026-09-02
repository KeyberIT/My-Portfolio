"use client";

import { useState } from "react";

export default function Jobs() {
  const [activeTabId, setActiveTabId] = useState(0);

  const jobs = [
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

  return (
    <section id="experience" className="py-24 max-w-[700px] mx-auto w-full px-4 md:px-10 lg:px-24">
      <h2 className="text-lightest-slate font-semibold text-2xl md:text-3xl mb-10 flex items-center gap-4">
        <span className="text-green font-mono text-xl">02.</span> Experience
        <div className="h-[1px] bg-lightest-navy flex-1"></div>
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex overflow-x-auto md:overflow-x-hidden md:flex-col md:min-w-[220px] border-b md:border-b-0 md:border-l border-lightest-navy no-scrollbar">
          {jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setActiveTabId(i)}
              className={`px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors border-b-2 md:border-b-0 md:border-l-2 ${
                activeTabId === i
                  ? "text-green bg-light-navy border-green"
                  : "text-slate border-transparent hover:text-green hover:bg-light-navy"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="md:w-[calc(100%-150px)]">
          <h3 className="text-lightest-slate text-xl font-medium">
            {jobs[activeTabId].role}{" "}
            <span className="text-green">
              @{" "}
              <a href={jobs[activeTabId].url} className="hover:underline">
                {jobs[activeTabId].company}
              </a>
            </span>
          </h3>
          <p className="text-light-slate font-mono text-sm mt-2 mb-6">
            {jobs[activeTabId].range}
          </p>
          <ul className="space-y-4">
            {jobs[activeTabId].achievements.map((achievement, index) => {
              const [title, ...rest] = achievement.split(':');
              return (
                <li key={index} className="relative pl-7 text-slate before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-1">
                  {rest.length > 0 ? (
                    <><strong className="text-light-slate">{title}:</strong>{rest.join(':')}</>
                  ) : (
                    title
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
