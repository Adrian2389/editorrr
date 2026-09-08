import React from 'react';
import { SoftwareBadge } from './SoftwareBadge';
import { ASSETS } from '../data';

interface HeroSectionProps {
  onViewWork?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="home"
      className="relative pt-12 sm:pt-16 pb-6 sm:pb-10 flex items-center overflow-hidden"
    >
      {/* Ambient background lighting and subtle dark studio texture */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Soft radial atmospheric spotlight behind the right column / hero */}
        <div className="absolute top-1/4 right-5 sm:right-1/4 w-96 h-96 sm:w-[32rem] sm:h-[32rem] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
        {/* Subtle grid lines for high-tech editorial precision */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-[#08080a]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start pt-4 sm:pt-8">
            {/* Top Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-zinc-600 font-light text-sm">/</span>
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-zinc-400">
                VIDEO EDITOR
              </span>
            </div>

            {/* Title: ADRIAN */}
            <h1
              id="hero-name-title"
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-normal text-white uppercase leading-none select-none drop-shadow-sm mb-4"
              style={{
                fontFamily: "'Bebas Neue', 'Plus Jakarta Sans', sans-serif",
                letterSpacing: '0.02em',
              }}
            >
              ADRIAN
            </h1>

            {/* Bio Description - clean and direct */}
            <p
              id="hero-description"
              className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg mb-6 sm:mb-8 font-normal"
            >
              YouTube video editor focused on long-form storytelling, documentaries and engaging content. I care about pacing, emotion and creating videos that keep people watching.
            </p>

            {/* Software Tool Badges */}
            <div id="hero-software-badges" className="flex items-center gap-2.5 mb-4">
              <SoftwareBadge type="Pr" size="sm" />
              <SoftwareBadge type="Ae" size="sm" />
              <SoftwareBadge type="Ps" size="sm" />
            </div>
          </div>

          {/* Right Column: Adrian's Round Photo Avatar */}
          <div
            id="hero-profile-column"
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center pt-6 lg:pt-0"
          >
            <div className="relative flex flex-col items-center group">
              {/* Subtle ambient backglow behind the round frame */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/15 via-indigo-500/20 to-purple-500/10 blur-2xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Circular framing container with double concentric border */}
              <div className="relative p-2.5 sm:p-3 rounded-full border border-zinc-800/90 bg-gradient-to-b from-zinc-800/60 via-zinc-900/80 to-[#0c0d12] backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                {/* Round image container */}
                <div
                  id="hero-avatar-round"
                  className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-zinc-700/60 shadow-inner bg-zinc-950 relative"
                >
                  <img
                    src={ASSETS.hero}
                    alt="Adrian - Video Editor"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle inner highlight rim */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>

                {/* Available for work badge floating on bottom center */}
                <div
                  id="hero-status-badge"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full border border-zinc-700/80 bg-[#0c0d12]/95 backdrop-blur-md shadow-xl flex items-center gap-2 whitespace-nowrap select-none"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-zinc-200 uppercase">
                    AVAILABLE FOR WORK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
