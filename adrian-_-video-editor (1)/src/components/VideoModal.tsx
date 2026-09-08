import React, { useState, useEffect } from 'react';
import { X, Play, Eye, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
  onBookEdit: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose, onBookEdit }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
  }, [project?.id]);

  if (!project) return null;

  return (
    <div
      id="video-project-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-[#0c0c10] border border-zinc-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-video-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Video / Thumbnail Player Stage */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          {isPlaying && project.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={project.thumbnail}
                alt={project.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isPlaying ? 'scale-105 brightness-95 filter' : ''
                }`}
              />

              {/* Central Play Trigger */}
              <button
                id="modal-play-toggle-btn"
                onClick={() => setIsPlaying(true)}
                className="absolute z-10 w-16 h-16 rounded-full bg-black/70 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer group-hover:bg-black/90"
              >
                <Play size={26} className="fill-white ml-1" />
              </button>

              {/* Bottom Player Overlay Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-xs text-zinc-300 pointer-events-none">
                <div className="flex items-center gap-3">
                  <span className="font-mono bg-black/60 px-2 py-0.5 rounded border border-white/10 text-white">
                    00:00 / {project.duration}
                  </span>
                  <span className="hidden sm:inline text-zinc-400">
                    Click to play full video
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Project Details Body */}
        <div className="p-6 sm:p-7 max-h-[45vh] overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-900">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-300">
                  {project.channel || project.client}
                </span>
                <span className="text-zinc-700 text-xs">•</span>
                <span className="text-[11px] font-mono text-zinc-500">
                  {project.duration}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-zinc-700 hover:border-white text-zinc-200 hover:text-white text-xs tracking-wider uppercase font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>OPEN ON YOUTUBE</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};
