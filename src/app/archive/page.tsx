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
            <tr className="border-b border-lightest-navy/50 hover:bg-light-navy/50 transition-colors group">
              <td className="py-4 pr-4 text-green font-mono text-sm">2023</td>
              <td className="py-4 pr-4 text-lightest-slate font-semibold text-lg group-hover:text-green transition-colors">Project Name</td>
              <td className="py-4 pr-4 text-slate text-sm hidden md:table-cell">Company</td>
              <td className="py-4 pr-4 text-slate text-xs font-mono hidden lg:table-cell">React &middot; Next.js</td>
              <td className="py-4 text-slate text-sm">
                <a href="#" className="hover:text-green transition-colors">External Link</a>
              </td>
            </tr>
            {/* Add more rows dynamically later */}
          </tbody>
        </table>
      </div>
    </main>
  );
}
