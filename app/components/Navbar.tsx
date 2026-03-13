'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030d1e]/95 backdrop-blur-md border-b border-white/[0.07] shadow-[0_2px_24px_rgba(0,0,0,0.35)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo + name */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/ev-logo.png"
              alt="Eagan Ventures"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-white font-semibold text-[15px] tracking-tight leading-none">
              Eagan Ventures
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#investments"
              className="text-[13px] text-slate-400 hover:text-white transition-colors duration-150"
            >
              Portfolio
            </a>
            <a
              href="#build"
              className="text-[13px] text-slate-400 hover:text-white transition-colors duration-150"
            >
              Build
            </a>
            <a
              href="#about"
              className="text-[13px] text-slate-400 hover:text-white transition-colors duration-150"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[13px] font-semibold text-white px-4 py-2 rounded-lg bg-white/[0.08] border border-white/[0.1] hover:bg-white/[0.14] hover:border-white/[0.2] transition-all duration-150"
            >
              Connect
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}
