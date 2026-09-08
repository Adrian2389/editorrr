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
          <div className="space-y-5 text-zinc-300 text-[15px] sm:text-[16px] leading-[1.7] sm:leading-[1.75] max-w-3xl">
            <p className="text-white font-medium text-base sm:text-[17px]">
              Hi, I'm Adrian, a video editor focused on YouTube content.
            </p>
            <p>
              I've been interested in editing for a long time, and over the past few years I've been working to turn it into my profession.
            </p>
            <p>
              I enjoy working on videos where storytelling and pacing really matter, especially documentaries, true crime, gaming and long-form YouTube content.
            </p>
            <p>
              For me, editing goes beyond putting clips together. I like using music, sound design, motion graphics and visual choices to make a story more engaging and keep viewers interested from beginning to end.
            </p>
            <p className="text-zinc-400">
              I'm always improving my skills and looking for new projects where I can help turn an idea or script into a video people actually want to watch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
