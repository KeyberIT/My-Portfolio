import { FiGithub, FiLinkedin } from 'react-icons/fi';

const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/KeyberIT',
    icon: FiGithub,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/keyber-mendoza/',
    icon: FiLinkedin,
  },
];

export default function SocialSide() {
  return (
    <div className="fixed bottom-0 left-6 md:left-10 z-10 hidden md:block text-light-slate">
      <ul className="flex flex-col items-center gap-4 m-0 p-0 list-none after:content-[''] after:block after:w-[1px] after:h-[90px] after:mx-auto after:bg-light-slate">
        {socialMedia.map(({ url, name, icon: Icon }, i) => (
          <li key={i} className="last-of-type:mb-4">
            <a 
              href={url} 
              aria-label={name} 
              target="_blank" 
              rel="noreferrer"
              className="p-[10px] inline-block hover:-translate-y-1 hover:text-green transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
