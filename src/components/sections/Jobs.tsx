import JobsTabs from "@/components/ui/JobsTabs";
import { jobs } from "@/data/jobs";

export default function Jobs() {
  return (
    <section id="experience" className="py-24 max-w-[700px] mx-auto w-full px-4 md:px-10 lg:px-24">
      <h2 className="text-lightest-slate font-semibold text-2xl md:text-3xl mb-10 flex items-center gap-4">
        <span className="text-green font-mono text-xl">02.</span> Experience
        <div className="h-[1px] bg-lightest-navy flex-1"></div>
      </h2>
      <JobsTabs jobs={jobs} />
    </section>
  );
}
