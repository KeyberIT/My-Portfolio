export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-screen pt-0 p-4 md:p-10 lg:p-24 mx-auto max-w-[1000px]">
      <h1 className="text-green font-mono mb-6 ml-1 text-sm md:text-base">
        Hi, my name is
      </h1>
      <h2 className="text-lightest-slate text-4xl md:text-7xl font-semibold mb-2">
        Keyber Mendoza.
      </h2>
      <h3 className="text-slate text-4xl md:text-7xl font-semibold mb-6">
        Software engineering, not just code.
      </h3>
      <p className="text-slate max-w-xl text-lg mb-12">
        I'm a Full-Stack Engineer specializing in scalable architectures and high-performance web experiences. I design robust end-to-end systems, from optimized relational databases to dynamic interfaces built to handle high concurrency.
      </p>
      <div>
        <a href="#projects" className="text-green bg-transparent border border-green rounded px-7 py-4 text-sm font-mono hover:bg-green-tint transition-colors duration-300">
          Check out my work!
        </a>
      </div>
    </section>
  );
}
