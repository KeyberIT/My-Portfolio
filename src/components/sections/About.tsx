import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-[900px] mx-auto w-full px-4 md:px-10 lg:px-24">
      <h2 className="text-lightest-slate font-semibold text-2xl md:text-3xl mb-10 flex items-center gap-4">
        <span className="text-green font-mono text-xl">01.</span> About Me
        <div className="h-[1px] bg-lightest-navy flex-1"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 text-slate space-y-4">
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
        <div className="relative group max-w-[300px] mx-auto md:max-w-none">
          <div className="w-full aspect-square border-2 border-green rounded relative z-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 bg-light-navy flex items-center justify-center overflow-hidden">
            <Image
              src="/foto-de-perfil.jfif"
              alt="Foto de perfil de Keyber"
              width={500}
              height={500}
              className="object-cover w-full h-full mix-blend-multiply filter grayscale contrast-125 transition-all duration-300 group-hover:mix-blend-normal group-hover:filter-none"
            />
          </div>
          <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>
      </div>
    </section>
  );
}
