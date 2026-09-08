import React, { useState } from 'react';
import { ArrowUpRight, Play, Youtube, Film, Clapperboard, Layers } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

type ChannelFilter = 'ALL' | 'Professor Mass' | 'Lost Eras';

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ChannelFilter>('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.channel === activeFilter || p.client === activeFilter);

  const professorCount = PROJECTS.filter((p) => (p.channel || p.client) === 'Professor Mass').length;
  const lostErasCount = PROJECTS.filter((p) => (p.channel || p.client) === 'Lost Eras').length;

  return (
    <section id="work" className="pt-6 sm:pt-8 pb-16 sm:pb-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <h2
              id="section-selected-work-title"
              className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white select-none whitespace-nowrap"
              style={{ fontFamily: "'Bebas Neue', 'Plus Jakarta Sans', sans-serif" }}
            >
              SELECTED WORK
            </h2>
            <span className="text-xs font-mono text-zinc-500 bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded">
              {filteredProjects.length}
            </span>
          </div>

          {/* Simple Clean Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800/80 rounded-lg overflow-x-auto self-start sm:self-auto">
            <button
              id="filter-all-btn"
              type="button"
              onClick={() => setActiveFilter('ALL')}
              className={`px-3 py-1 rounded-md text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === 'ALL'
                  ? 'bg-white text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All
            </button>

            <button
              id="filter-professor-mass-btn"
              type="button"
              onClick={() => setActiveFilter('Professor Mass')}
              className={`px-3 py-1 rounded-md text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === 'Professor Mass'
                  ? 'bg-white text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Professor Mass ({professorCount})
            </button>

            <button
              id="filter-lost-eras-btn"
              type="button"
              onClick={() => setActiveFilter('Lost Eras')}
              className={`px-3 py-1 rounded-md text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === 'Lost Eras'
                  ? 'bg-white text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Lost Eras ({lostErasCount})
            </button>
          </div>
        </div>

        {/* Video Cards Grid - 2 columns on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg sm:rounded-xl bg-zinc-900 border border-zinc-800/80 mb-2 sm:mb-3.5 transition-all duration-300 group-hover:border-zinc-700 group-hover:shadow-xl group-hover:shadow-black/50">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/25 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-all duration-200 shadow-xl">
                      <Play size={14} className="fill-white ml-0.5 sm:hidden" />
                      <Play size={18} className="fill-white ml-0.5 hidden sm:block" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-black/80 backdrop-blur-sm border border-white/10 text-zinc-200 text-[9px] sm:text-[11px] font-medium px-1.5 sm:px-2 py-0.5 rounded font-mono">
                    {project.duration}
                  </div>

                  {/* Style/Channel Tag */}
                  <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2">
                    <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300">
                      {project.channel || project.client}
                    </span>
                  </div>
                </div>

                {/* Card Meta Content - Clean and concise */}
                <div className="flex flex-col flex-1">
                  {/* Video Title */}
                  <h3 className="text-white font-bold text-xs sm:text-base mb-1 sm:mb-1.5 group-hover:text-zinc-200 transition-colors leading-tight sm:leading-snug line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Watch Link */}
                  <div className="mt-auto pt-0.5 sm:pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.youtubeUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="hidden sm:inline">WATCH ON YOUTUBE</span>
                      <span className="sm:hidden">WATCH</span>
                      <ArrowUpRight size={11} className="sm:w-[13px] sm:h-[13px]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
