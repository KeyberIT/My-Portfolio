export default function EmailSide() {
  const email = "keiberjavier26@gmail.com";
  return (
    <div className="fixed bottom-0 right-6 md:right-10 z-10 hidden md:block text-light-slate">
      <div className="flex flex-col items-center relative after:content-[''] after:block after:w-[1px] after:h-[90px] after:mx-auto after:bg-light-slate">
        <a 
          href={`mailto:${email}`}
          className="my-5 p-2.5 font-mono text-[12px] tracking-[0.1em] hover:-translate-y-1 hover:text-green transition-all duration-300"
          style={{ writingMode: 'vertical-rl' }}
        >
          {email}
        </a>
      </div>
    </div>
  );
}
