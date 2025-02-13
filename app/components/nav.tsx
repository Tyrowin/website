'use client';
import { ArrowLeft, Github } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const navigation = [
    { name: 'Resumé', href: '/resume.pdf', download: true },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? 'bg-zinc-900/0 border-transparent'
            : 'bg-zinc-900/500  border-zinc-800 '
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                target={item.name === 'Projects' ? '_blank' : '_self'}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://github.com/Tyrowin/website"
              target="_blank"
              className="flex items-center duration-200 text-zinc-400 hover:text-zinc-100"
            >
              <Github className="w-6 h-6" />
              <span className="ml-2">Source</span>
            </Link>
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
