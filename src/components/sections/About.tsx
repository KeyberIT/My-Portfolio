import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 max-w-[900px] mx-auto w-full px-4 md:px-10 lg:px-24">
      <h2 className="text-lightest-slate font-semibold text-2xl md:text-3xl mb-10 flex items-center gap-4">
        <span className="text-green font-mono text-xl">01.</span> About Me
        <div className="h-[1px] bg-lightest-navy flex-1"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-slate space-y-4">
          <p>
            My focus is transforming complex business problems into resilient digital products. I've designed and engineered everything from interactive platforms featuring Drag & Drop engines and real-time booking systems, to Business Intelligence architectures geared toward data-driven decision making.
          </p>
          <p>
            I operate under strict engineering standards. The adoption of clean architectures, strict typing, and rigorous code reviews are the foundation of my workflow. I don't build things just to "make them work"; I build maintainable, scalable systems ready for demanding production environments.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 font-mono text-xs text-slate list-none mt-5 max-w-[400px]">
            <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-[2px]">Next.js</li>
            <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-[2px]">TypeScript</li>
            <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-[2px]">React</li>
            <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-[2px]">Tailwind CSS</li>
            <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-[2px]">Python</li>
            <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green before:mt-[2px]">PostgreSQL</li>
          </ul>
        </div>
        <div className="md:col-span-2 max-w-[300px] md:max-w-[500px] mx-auto w-full md:ml-auto md:mr-0">
          <div className="relative group w-full aspect-square">
            <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 -z-10 transition-transform md:group-hover:translate-x-2 md:group-hover:translate-y-2"></div>
            <div className="w-full h-full border-2 border-green rounded relative z-10 transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 bg-light-navy overflow-hidden">
              <Image
                src="/me.jpg"
                alt="Keyber Mendoza - Profile Photo"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                className="object-cover transition-all duration-300 md:mix-blend-multiply md:filter md:grayscale md:contrast-125 md:group-hover:mix-blend-normal md:group-hover:filter-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
