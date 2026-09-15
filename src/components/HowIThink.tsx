import React from 'react';
import { motion } from 'framer-motion';
import { HOW_I_THINK_STEPS } from '../data/portfolioData';

export const HowIThink: React.FC = () => {
  return (
    <section id="approach" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-indigo-400"></span>
            <span>Engineering Methodology</span>
          </div>
          <h2 className="editorial-header text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            How I Think & Build
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            I don't just train isolated models or write prompt wrappers. I decompose ambiguous business problems, extract mathematical signal from data, and engineer resilient systems that ship.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_I_THINK_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-glass card-glass-hover rounded-2xl p-7 flex flex-col justify-between relative group"
            >
              <div>
                <div className="font-mono text-3xl font-extrabold text-neutral-600 group-hover:text-indigo-400 transition-colors duration-300 mb-6">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>Phase {item.step}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-indigo-400 transition-colors duration-300"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
