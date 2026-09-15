import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Cloud, BarChart3, Code2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-5 h-5 text-indigo-400" />,
  Brain: <Brain className="w-5 h-5 text-teal-400" />,
  Cloud: <Cloud className="w-5 h-5 text-amber-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-purple-400" />,
  Code2: <Code2 className="w-5 h-5 text-rose-400" />,
};

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-indigo-400"></span>
            <span>Core Competencies</span>
          </div>
          <h2 className="editorial-header text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Technical Stack & Capabilities
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Organized across modern agentic frameworks, production machine learning, scalable cloud operations, and strategic analytics.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-glass card-glass-hover rounded-2xl p-7 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-neutral-300 hover:text-white border border-white/[0.06] hover:border-indigo-500/40 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500 flex justify-between">
                <span>{category.skills.length} Specialized Tools</span>
                <span className="text-indigo-400 font-semibold">Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
