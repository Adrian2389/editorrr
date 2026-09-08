import React from 'react';

interface AboutSectionProps {
  onOpenContact?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col">
          {/* Header with extending horizontal line */}
          <div className="flex items-center mb-8">
            <h2
              id="section-about-title"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-white select-none whitespace-nowrap"
              style={{ fontFamily: "'Bebas Neue', 'Plus Jakarta Sans', sans-serif" }}
            >
              ABOUT ME
            </h2>
            <div className="h-[1px] bg-zinc-800 flex-1 ml-6" />
          </div>

          {/* Paragraphs matching the user's exact story and statement */}
          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p className="text-white font-medium text-base sm:text-lg">
              Hi, I'm Adrian, a video editor.
            </p>
            <p className="text-zinc-300">
              I've been interested in video editing for a long time, and over the past few years I've been taking it more seriously and working to turn it into my profession.
            </p>
            <p className="text-zinc-300">
              I mainly enjoy editing YouTube videos, especially content that depends on good pacing, storytelling and keeping the viewer interested from beginning to end. I'm particularly interested in documentaries, true crime and gaming content, but I'm always open to working on different styles and learning new things.
            </p>
            <p className="text-zinc-300">
              For me, editing is not just about cutting clips together. I like thinking about how the music, sound effects, visuals, timing and structure can make a video feel more engaging and easier to watch.
            </p>
            <p className="text-zinc-400">
              I'm constantly improving my skills and learning from every project I work on. My goal is simple: create videos that feel polished, hold people's attention and help bring the creator's idea to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
