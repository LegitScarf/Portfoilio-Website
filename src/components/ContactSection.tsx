import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 border-t border-white/[0.08] relative overflow-hidden bg-[#07070a]">
      {/* Subtle Glows */}
      <div className="aurora-glow w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/15 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono uppercase tracking-widest text-indigo-400 mb-8">
            <span>Available for Opportunities</span>
          </div>

          <h2 className="editorial-header text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.05]">
            Let's build something{' '}
            <span className="bg-gradient-to-r from-indigo-300 via-white to-teal-300 bg-clip-text text-transparent">
              worth talking about.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Interested in autonomous agent architectures, production ML systems, or data analytics engineering? Let's start a conversation.
          </p>

          {/* Primary Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 font-semibold text-sm tracking-wide shadow-xl shadow-white/10 hover:scale-105 transition-all duration-200"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-neutral-300 hover:text-white font-medium text-sm transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-xs">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span className="font-mono text-xs">Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Direct channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/[0.08]">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-4 rounded-xl card-glass card-glass-hover text-left flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono uppercase text-neutral-500 mb-2">Email</div>
              <div className="text-xs font-mono text-white truncate">{PERSONAL_INFO.email}</div>
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl card-glass card-glass-hover text-left flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono uppercase text-neutral-500 mb-2">LinkedIn</div>
              <div className="text-xs font-mono text-white flex items-center justify-between">
                <span>arpanmallik9645</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </div>
            </a>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl card-glass card-glass-hover text-left flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono uppercase text-neutral-500 mb-2">GitHub</div>
              <div className="text-xs font-mono text-white flex items-center justify-between">
                <span>legitscarf</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </div>
            </a>

            <div className="p-4 rounded-xl card-glass text-left flex flex-col justify-between">
              <div className="text-[10px] font-mono uppercase text-neutral-500 mb-2">Location</div>
              <div className="text-xs font-mono text-neutral-300">Kolkata, India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
