"use client";

import { useState } from "react";
import type { Job } from "@/data/jobs";

interface JobsTabsProps {
  jobs: Job[];
}

export default function JobsTabs({ jobs }: JobsTabsProps) {
  const [activeTabId, setActiveTabId] = useState(0);

  if (!jobs || jobs.length === 0) return null;

  return (
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
  );
}
