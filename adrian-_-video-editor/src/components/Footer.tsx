import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="border-t border-zinc-900/80 py-10 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Branding */}
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] font-semibold text-zinc-400 uppercase select-none">
          <span>ADRIAN</span>
          <span className="text-zinc-600">//</span>
          <span className="text-zinc-400">VIDEO EDITOR</span>
        </div>

        {/* Right Slogan */}
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] font-medium text-zinc-500 uppercase select-none">
          <span className="w-6 h-[1px] bg-zinc-800 hidden sm:inline-block" />
          <span>BETTER STORIES AHEAD.</span>
        </div>
      </div>
    </footer>
  );
};
