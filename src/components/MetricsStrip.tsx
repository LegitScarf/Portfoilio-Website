import React from 'react';
import { motion } from 'framer-motion';
import { KEY_METRICS } from '../data/portfolioData';

export const MetricsStrip: React.FC = () => {
  return (
    <section className="py-20 border-t border-white/[0.08] relative overflow-hidden bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {KEY_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col justify-center"
            >
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-1.5 bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
                {metric.label}
              </div>
              <div className="text-[11px] text-neutral-500 font-light mt-0.5 leading-tight">
                {metric.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
