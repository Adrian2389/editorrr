import React, { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data';

interface WorkSectionProps {
  onSelectProject?: (project: Project) => void;
}

type FilterCategory = 'ALL' | 'STORYBOARD' | 'TRUE CRIME';

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categories?.includes(activeFilter as 'STORYBOARD' | 'TRUE CRIME'));

  const filterOptions: { key: FilterCategory; label: string }[] = [
    { key: 'ALL', label: 'ALL' },
    { key: 'STORYBOARD', label: 'STORYBOARD' },
    { key: 'TRUE CRIME', label: 'TRUE CRIME' },
  ];

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

          {/* Clean Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800/80 rounded-lg overflow-x-auto self-start sm:self-auto max-w-full">
            {filterOptions.map((filter) => {
              const count = filter.key === 'ALL'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.categories?.includes(filter.key as 'STORYBOARD' | 'TRUE CRIME')).length;

              return (
                <button
                  key={filter.key}
                  id={`filter-${filter.key.toLowerCase().replace(/\s+/g, '-')}-btn`}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeFilter === filter.key
                      ? 'bg-white text-zinc-950 font-bold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {filter.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Cards Grid - 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col h-full rounded-2xl bg-[#0c0c10]/70 border border-zinc-800/80 p-3 sm:p-3.5 transition-all duration-300 hover:border-zinc-700 hover:bg-[#101017] hover:shadow-xl hover:shadow-black/40"
              >
                {/* Clickable Thumbnail with hover effect */}
                <a
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${project.title} on YouTube`}
                  className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/70 mb-3.5 block transition-all duration-300 group-hover:border-zinc-700/90 cursor-pointer"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl">
                      <Play size={18} className="fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm border border-white/10 text-zinc-200 text-[11px] font-medium px-2 py-0.5 rounded font-mono pointer-events-none">
                    {project.duration}
                  </div>

                  {/* Channel Tag */}
                  <div className="absolute top-2 left-2 pointer-events-none">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-zinc-300">
                      {project.channel || project.client}
                    </span>
                  </div>
                </a>

                {/* Card Meta Content */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    {/* Video Title */}
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1.5 group-hover:text-zinc-100 transition-colors leading-snug line-clamp-2">
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {project.title}
                      </a>
                    </h3>

                    {/* Role Description - subtle and smaller than title */}
                    <p className="text-xs text-zinc-400 font-normal mb-3.5 tracking-wide leading-relaxed">
                      {project.roleDescription}
                    </p>
                  </div>

                  {/* Watch on YouTube Link */}
                  <div className="pt-2 border-t border-zinc-900 flex items-center justify-between">
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400 hover:text-white transition-colors cursor-pointer py-1"
                    >
                      <span>WATCH ON YOUTUBE</span>
                      <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
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
