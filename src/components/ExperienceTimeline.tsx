import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-indigo-400"></span>
            <span>Career Milestones</span>
          </div>
          <h2 className="editorial-header text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light">
            Proven track record across enterprise software delivery, GenAI pipeline optimization, management consulting frameworks, and production ML.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:w-px before:bg-white/[0.08]">
          {EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Indicator */}
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#080808] border-2 border-indigo-500/60 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                </div>

                {/* Content Box */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-10 w-full">
                  <div className="card-glass card-glass-hover rounded-2xl p-7 border border-white/10">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-display font-bold text-xl text-white">
                        {exp.company}
                      </span>
                      {exp.isCurrent && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-semibold text-indigo-400 mb-4 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-indigo-400" />
                      <span>{exp.role}</span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-500 mb-5">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2.5 mb-6 text-sm text-neutral-300 font-light">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
