export default function Projects() {
  return (
    <section className="py-24 max-w-[1000px] mx-auto w-full px-4 md:px-10 lg:px-24 flex flex-col items-center">
      <h2 className="text-lightest-slate font-semibold text-2xl md:text-3xl mb-10">
        Other Noteworthy Projects
      </h2>
      <a href="/archive" className="text-green font-mono text-sm mb-12 hover:underline">
        view the archive
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder Project Card 1 */}
        <div className="bg-light-navy p-8 rounded transition-transform hover:-translate-y-2 group cursor-pointer">
          <div className="flex justify-between items-center mb-6">
            <div className="text-green">
              {/* Folder Icon Placeholder */}
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-slate hover:text-green">GitHub</a>
            </div>
          </div>
          <h3 className="text-lightest-slate text-xl font-bold mb-2 group-hover:text-green transition-colors">
            Integrating Algolia Search with WordPress Multisite
          </h3>
          <p className="text-light-slate text-sm mb-6">
            Building a custom multisite compatible WordPress plugin to build global search with Algolia
          </p>
          <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate mt-auto">
            <li>Algolia</li>
            <li>WordPress</li>
            <li>PHP</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <button className="text-green bg-transparent border border-green rounded px-7 py-4 text-sm font-mono hover:bg-green-tint transition-colors duration-300">
          Show More
        </button>
      </div>
    </section>
  );
}
