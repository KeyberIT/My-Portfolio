export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-[600px] mx-auto w-full px-4 md:px-10 lg:px-24 flex flex-col items-center text-center">
      <p className="text-green font-mono text-sm mb-4">
        04. What's Next?
      </p>
      <h2 className="text-lightest-slate font-bold text-4xl md:text-5xl mb-6">
        Get In Touch
      </h2>
      <p className="text-slate text-lg mb-12">
        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:hello@example.com" className="inline-block text-green bg-transparent border border-green rounded px-7 py-4 text-sm font-mono transition-all duration-300 md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:shadow-[4px_4px_0_0_var(--color-green)] focus:outline-none">
        Say Hello
      </a>
    </section>
  );
}
