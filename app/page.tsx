import Link from 'next/link';
import React from 'react';
import Particles from './components/particles';
import { Github } from 'lucide-react';

const navigation = [
  {
    name: 'Resumé',
    href: '/resume.pdf',
    as: 'a',
    rel: 'noopener noreferrer',
    target: '_blank',
  },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* New GitHub Source header */}
      <header className="absolute top-4 right-4">
        <Link
          href="https://github.com/Tyrowin/website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm flex items-center text-zinc-400 hover:text-zinc-100"
        >
          <Github className="w-6 h-6" />
          <span className="ml-2">Source</span>
        </Link>
      </header>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              target={item.name === 'Projects' ? '_blank' : '_self'}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Tyrowin
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          What am i doing now? Well most of it is{' '}
          <Link
            target="_blank"
            href="https://github.com/Tyrowin"
            className="underline duration-500 hover:text-zinc-300"
          >
            here
          </Link>
          .
        </h2>
      </div>
    </div>
  );
}
