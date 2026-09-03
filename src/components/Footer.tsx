export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-6 text-center text-slate font-mono text-xs">
      <div className="mb-2 flex gap-4 md:hidden">
        {/* Social links placeholder for mobile */}
        <a href="#" className="hover:text-green">GitHub</a>
        <a href="#" className="hover:text-green">LinkedIn</a>
      </div>
      <div className="hover:text-green transition-colors">
        <div>Designed & Built by Keyber Mendoza</div>
      </div>
    </footer>
  );
}
