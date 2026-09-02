import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-6 bg-navy/80 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="flex items-center justify-center">
        <a href="/" aria-label="Home">
          <Logo />
        </a>
      </div>
      <nav>
        <ul className="flex gap-6 text-sm font-mono text-lightest-slate">
          <li><a href="#about" className="hover:text-green transition-colors"><span className="text-green mr-1">01.</span>About</a></li>
          <li><a href="#experience" className="hover:text-green transition-colors"><span className="text-green mr-1">02.</span>Experience</a></li>
          <li><a href="#work" className="hover:text-green transition-colors"><span className="text-green mr-1">03.</span>Work</a></li>
          <li><a href="#contact" className="hover:text-green transition-colors"><span className="text-green mr-1">04.</span>Contact</a></li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-green border border-green rounded px-4 py-2 hover:bg-green-tint transition-colors">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
