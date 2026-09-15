import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Zap, Shield, Compass, TrendingUp } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

const iconLookup: Record<string, React.ReactNode> = {
  Award: <Award className="w-5 h-5 text-indigo-400" />,
  Cloud: <Cloud className="w-5 h-5 text-teal-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Shield: <Shield className="w-5 h-5 text-emerald-400" />,
  Compass: <Compass className="w-5 h-5 text-purple-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-rose-400" />,
};

export const AchievementsGrid: React.FC = () => {
  return (
    <section id="achievements" className="py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-indigo-400"></span>
            <span>Verified Honors</span>
          </div>
          <h2 className="editorial-header text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Certifications & Leadership
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light">
            Recognitions in enterprise data engineering, cloud AI frameworks, competitive problem-solving, and corps command.
          </p>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-glass card-glass-hover rounded-2xl p-7 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {iconLookup[ach.icon]}
                  </div>
                  {ach.tag && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                      {ach.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug">
                  {ach.title}
                </h3>
                <div className="text-xs font-mono text-indigo-400 mb-3">
                  {ach.issuer}
                </div>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500 flex items-center justify-between">
                <span>Verified Record</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
