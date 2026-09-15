import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Github, Video, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

export const FeaturedProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'flagship' | 'ml'>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeTab === 'flagship') return proj.featured || proj.id === 'autojob';
    if (activeTab === 'ml') return !proj.featured;
    return true;
  });

  return (
    <section id="projects" className="py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-indigo-400"></span>
              <span>Production Systems</span>
            </div>
            <h2 className="editorial-header text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Featured Products & Architectures
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#0e0e12] p-1.5 rounded-xl border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide transition-all ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Systems
            </button>
            <button
              onClick={() => setActiveTab('flagship')}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide transition-all ${
                activeTab === 'flagship'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Flagship / Agentic
            </button>
            <button
              onClick={() => setActiveTab('ml')}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide transition-all ${
                activeTab === 'ml'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              ML & Analytics
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`card-glass rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 ${
        project.featured ? 'lg:col-span-1' : ''
      }`}
    >
      <div className="p-7 md:p-8">
        {/* Top Meta */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <span className="font-mono text-xs text-neutral-500 tracking-wider">
            {project.num} // {project.category}
          </span>
          {project.statusBadge ? (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/25">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              {project.statusBadge}
            </span>
          ) : project.featured ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/25">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Product
            </span>
          ) : null}
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2 group-hover:text-indigo-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-4 font-semibold">
          {project.headline}
        </p>
        <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Google Drive Video Player Container (if video exists) */}
        {project.driveVideoId && (
          <div className="mb-6">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-inner group/video">
              {isPlayingVideo ? (
                <iframe
                  src={`https://drive.google.com/file/d/${project.driveVideoId}/preview`}
                  title={`${project.title} Video Demo`}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  loading="lazy"
                />
              ) : (
                <div
                  onClick={() => setIsPlayingVideo(true)}
                  className="w-full h-full flex flex-col items-center justify-center cursor-pointer bg-gradient-to-t from-black via-[#0a0a0f] to-neutral-900 group-hover/video:from-black group-hover/video:via-[#0c0c16] transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-lg shadow-indigo-600/40 group-hover/video:scale-110 group-hover/video:bg-indigo-500 transition-all duration-300">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 group-hover/video:text-white mt-3 flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-indigo-400" /> Watch Live System Demo
                  </span>
                </div>
              )}
            </div>

            {/* Video Meta Link */}
            {project.driveViewUrl && (
              <div className="flex justify-between items-center mt-2 px-1 text-[11px] font-mono">
                <span className="text-neutral-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Recorded Runtime Demo
                </span>
                <a
                  href={project.driveViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-indigo-400 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Open in Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* AutoJob Pipeline Graphic if AutoJob */}
        {project.id === 'autojob' && (
          <div className="mb-6 p-4 rounded-xl bg-black/50 border border-amber-500/20 space-y-3">
            <div className="text-[11px] font-mono text-amber-400/90 uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-amber-400" /> 3-Agent Autonomous Execution Loop
              </span>
              <span className="text-[10px] text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/25">
                In Development
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5">
                <div className="font-semibold text-white">Scout Agent</div>
                <div className="text-[10px] text-neutral-500 font-mono mt-1">Board Parser</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5">
                <div className="font-semibold text-indigo-300">Tailor Agent</div>
                <div className="text-[10px] text-neutral-500 font-mono mt-1">ATS LLM Synth</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5">
                <div className="font-semibold text-teal-300">Exec Agent</div>
                <div className="text-[10px] text-neutral-500 font-mono mt-1">Portal Dispatch</div>
              </div>
            </div>
          </div>
        )}

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/[0.08] mb-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display font-bold text-lg text-white">{m.value}</div>
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-neutral-300 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Footer Actions */}
      <div className="px-7 md:px-8 py-4 bg-white/[0.01] border-t border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-neutral-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> Source Code
            </a>
          )}
        </div>

        {project.links.drive && (
          <a
            href={project.links.drive}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 transition-colors"
          >
            <span>Watch Demo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
};
