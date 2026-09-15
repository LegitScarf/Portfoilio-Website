import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#060608] text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display font-black text-base text-white tracking-tight">akm.</span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="font-mono text-[11px] text-neutral-500">
            {PERSONAL_INFO.name} — {PERSONAL_INFO.role}
          </span>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] text-neutral-600">
            © {new Date().getFullYear()} All Rights Reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:text-white flex items-center justify-center transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
