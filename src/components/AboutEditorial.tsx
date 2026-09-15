import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutEditorial: React.FC = () => {
  return (
    <section id="about" className="py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-indigo-400"></span>
              <span>Editorial Narrative</span>
            </div>

            <h2 className="editorial-header text-3xl sm:text-5xl font-bold text-white tracking-tight mb-8">
              I build at the intersection of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-teal-200">
                technology, analytics, and product.
              </span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              <p>
                My foundation began in Computer Science at <strong className="text-white font-medium">KIIT University</strong>, where I graduated with an <strong className="text-white font-semibold">8.33 CGPA</strong>. Today, as a Software Engineer Trainee at <strong className="text-white font-medium">Capgemini</strong>, I design resilient CI/CD release pipelines and orchestrate containerized cloud environments across AWS.
              </p>
              <p>
                What drives my work is an uncompromising principle: <em className="text-white font-normal italic">intelligent systems should do the heavy lifting</em>. I've designed multi-agent architectures using <strong className="text-white font-medium">CrewAI, LangGraph, and OpenAI Agents SDK</strong>, built low-cost RAG pipelines that slashed API expenses by 15%, and engineered neural networks achieving 98%+ empirical benchmark accuracy.
              </p>
              <p>
                Beyond code, my perspective has been sharpened by structured business problem-solving as a <strong className="text-white font-medium">McKinsey Forward Fellow</strong>, leadership as an <strong className="text-white font-medium">NCC Corps Leader</strong> commanding 30+ cadets, and equity analytics at a collegiate investment society.
              </p>
            </div>

            {/* Direct Connect Pills */}
            <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 text-sm text-neutral-300 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 text-sm text-neutral-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 text-sm text-neutral-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GitHub</span>
              </a>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Facts & Trajectory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Profile Snapshot Card */}
            <div className="card-glass rounded-2xl p-7 border border-white/10">
              <h3 className="font-display font-bold text-lg text-white mb-5 flex items-center justify-between">
                <span>Current Trajectory</span>
                <span className="text-[11px] font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                  Active
                </span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-start pb-3 border-b border-white/[0.06]">
                  <span className="text-neutral-400 font-mono text-xs">Primary Role</span>
                  <span className="text-white font-medium text-right">Software Engineer Trainee, Capgemini</span>
                </div>

                <div className="flex justify-between items-start pb-3 border-b border-white/[0.06]">
                  <span className="text-neutral-400 font-mono text-xs">Active Build</span>
                  <span className="text-amber-400 font-medium text-right">AutoJob Daemon (In Development)</span>
                </div>

                <div className="flex justify-between items-start pb-3 border-b border-white/[0.06]">
                  <span className="text-neutral-400 font-mono text-xs">Core Discipline</span>
                  <span className="text-neutral-200 text-right">Agentic Systems × MLOps × BI</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-neutral-400 font-mono text-xs">Degree & Honors</span>
                  <span className="text-neutral-200 text-right">B.Tech CSE (8.33 CGPA) · OCI GenAI</span>
                </div>
              </div>
            </div>

            {/* Philosophy quote callout */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-indigo-950/20 to-surface border border-indigo-500/20 relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
                Core Conviction
              </div>
              <p className="text-neutral-200 font-normal text-sm leading-relaxed italic">
                "Real AI engineering isn't about running notebooks in isolation. It's about taking mathematical signal, designing deterministic agent workflows, and shipping software that changes how decisions get made."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
