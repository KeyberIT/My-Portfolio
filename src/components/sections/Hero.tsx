export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[75vh] md:min-h-[calc(100vh-6rem)] w-full px-4 md:px-10 lg:px-24 mx-auto max-w-[1000px]">
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
        <a href="#work" className="inline-block text-green bg-transparent border border-green rounded px-7 py-4 text-sm font-mono transition-all duration-300 md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:shadow-[4px_4px_0_0_var(--color-green)] focus:outline-none">
          Check out my work!
        </a>
      </div>
    </section>
  );
}
