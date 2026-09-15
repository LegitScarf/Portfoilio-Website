import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="aurora-glow w-[500px] h-[500px] -top-32 -left-32 bg-indigo-600/25 rounded-full" />
      <div className="aurora-glow w-[450px] h-[450px] top-1/3 -right-20 bg-teal-500/15 rounded-full" />
      <div className="aurora-glow w-[350px] h-[350px] bottom-10 left-1/3 bg-purple-600/10 rounded-full" />

      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headlines & Editorial Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-300">
              {PERSONAL_INFO.eyebrow} · {PERSONAL_INFO.status}
            </span>
          </div>

          {/* Main Title / Positioning */}
          <h1 className="editorial-header font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-white mb-6">
            Building{' '}
            <span className="bg-gradient-to-r from-indigo-300 via-white to-neutral-400 bg-clip-text text-transparent">
              intelligent systems
            </span>{' '}
            that turn data into decisions.
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed mb-10">
            {PERSONAL_INFO.role}. Currently engineering production software and CI/CD at <span className="text-white font-medium">Capgemini</span>, and building autonomous agentic frameworks with <span className="text-white font-medium">CrewAI, LangGraph, and AWS</span>.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-neutral-200 font-medium text-sm tracking-wide backdrop-blur-sm transition-all duration-200"
            >
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.08] w-full max-w-lg">
            <div>
              <div className="font-display font-bold text-2xl md:text-3xl text-white">8.33</div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1">B.Tech CGPA · KIIT</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl md:text-3xl text-indigo-400">8+</div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1">Systems Shipped</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl md:text-3xl text-teal-400">3</div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1">Industry Internships</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Visual & Verified Status Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* Ambient card back-glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-teal-500/15 to-purple-500/20 rounded-3xl blur-2xl opacity-60"></div>

            <div className="relative card-glass rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl backdrop-blur-2xl">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-indigo-500/40 p-0.5 bg-gradient-to-br from-indigo-500/30 to-purple-500/30">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-[10px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'assets/profile.jpg';
                    }}
                  />
                  <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#080808]"></span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-neutral-400 font-mono">SWE Trainee @ Capgemini</p>
                  <p className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active & Building
                  </p>
                </div>
              </div>

              {/* Status Details */}
              <div className="space-y-3 py-4 border-y border-white/[0.08] text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 font-mono flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Focus
                  </span>
                  <span className="text-neutral-200 font-medium">Multi-Agent Systems & GenAI</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 font-mono flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-teal-400" /> Education
                  </span>
                  <span className="text-neutral-200 font-medium">KIIT University (2026 Grad)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 font-mono flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Honors
                  </span>
                  <span className="text-neutral-200 font-medium">OCI GenAI & McKinsey Fellow</span>
                </div>
              </div>

              {/* Tech Tags Mini Strip */}
              <div className="mt-5 flex flex-wrap gap-2">
                {['CrewAI', 'LangGraph', 'AWS', 'Docker', 'FastAPI', 'Next.js', 'Power BI'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating micro-badges */}
            <div className="absolute -bottom-4 -left-4 bg-[#0e0e12]/90 border border-amber-500/20 px-3.5 py-2 rounded-xl backdrop-blur-xl shadow-lg flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-mono text-neutral-200">AutoJob Daemon</span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">In Build</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
