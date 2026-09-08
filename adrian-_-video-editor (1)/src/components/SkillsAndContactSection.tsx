import React, { useState } from 'react';
import { Mail, MapPin, Check, Copy } from 'lucide-react';
import { SoftwareBadge } from './SoftwareBadge';
import { SKILLS, CONTACT } from '../data';

interface SkillsAndContactProps {
  onOpenContactModal: () => void;
}

export const SkillsAndContactSection: React.FC<SkillsAndContactProps> = ({ onOpenContactModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT COLUMN: SKILLS */}
          <div className="lg:col-span-6">
            {/* Header with line */}
            <div className="flex items-center mb-10">
              <h2
                id="section-skills-title"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-white select-none whitespace-nowrap"
                style={{ fontFamily: "'Bebas Neue', 'Plus Jakarta Sans', sans-serif" }}
              >
                SKILLS
              </h2>
              <div className="h-[1px] bg-zinc-800 flex-1 ml-6" />
            </div>

            {/* 3 Skills Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  id={`skill-card-${skill.badge.toLowerCase()}`}
                  className="group flex flex-col items-center text-center p-4 rounded-xl bg-[#0d0d12]/60 border border-zinc-800/80 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 hover:bg-[#121219] hover:shadow-lg hover:shadow-black/40 cursor-default"
                >
                  <div className="mb-3.5 transition-transform duration-300 group-hover:scale-105">
                    <SoftwareBadge type={skill.badge} size="lg" />
                  </div>
                  <h4 className="text-white font-bold text-xs sm:text-sm mb-1 group-hover:text-zinc-200">
                    {skill.name}
                  </h4>
                  <p className="text-zinc-400 text-[11px] sm:text-xs">
                    {skill.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT */}
          <div id="contact" className="lg:col-span-6">
            {/* Header with line */}
            <div className="flex items-center mb-10">
              <h2
                id="section-contact-title"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-white select-none whitespace-nowrap"
                style={{ fontFamily: "'Bebas Neue', 'Plus Jakarta Sans', sans-serif" }}
              >
                CONTACT
              </h2>
              <div className="h-[1px] bg-zinc-800 flex-1 ml-6" />
            </div>

            {/* Contact Items List */}
            <div className="flex flex-col space-y-4 text-sm sm:text-base">
              {/* Email - Mailto Link with Copy Button */}
              <div
                id="contact-email-row"
                className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group"
              >
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3.5 text-zinc-300 hover:text-white transition-colors flex-1 min-w-0"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="truncate text-sm sm:text-base font-medium">{CONTACT.email}</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(CONTACT.email, 'email')}
                  className="text-zinc-400 hover:text-white transition-colors text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-white/5 cursor-pointer ml-2 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? (
                    <span className="text-emerald-400 flex items-center gap-1 text-xs font-medium">
                      <Check size={14} /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-zinc-400 group-hover:text-zinc-200">
                      <Copy size={13} /> Copy
                    </span>
                  )}
                </button>
              </div>

              {/* Discord - Copy to Clipboard */}
              <div
                id="contact-discord-row"
                onClick={() => copyToClipboard(CONTACT.discord, 'discord')}
                className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group cursor-pointer"
                title="Click to copy Discord tag"
              >
                <div className="flex items-center gap-3.5 text-zinc-300 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors shrink-0">
                    {/* Discord Icon SVG */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </div>
                    <span className="truncate text-sm sm:text-base font-medium group-hover:text-white transition-colors">
                      {CONTACT.discord}
                    </span>
                  </div>
                <div className="flex items-center gap-1.5 text-xs ml-2 shrink-0">
                  {copiedField === 'discord' ? (
                    <span className="text-emerald-400 flex items-center gap-1 text-xs font-medium">
                      <Check size={14} /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-zinc-400 group-hover:text-zinc-200">
                      <Copy size={13} /> Copy
                    </span>
                  )}
                </div>
              </div>

              {/* X / Twitter */}
              <a
                id="contact-x-row"
                href="https://x.com/adriansilva1012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5 text-zinc-300 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors shrink-0">
                    {/* X logo SVG */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="truncate text-sm sm:text-base font-medium group-hover:text-white transition-colors">
                    {CONTACT.twitter}
                  </span>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-2 shrink-0">
                  ↗
                </span>
              </a>

              {/* Location Privacy - Available Worldwide — Remote */}
              <div
                id="contact-location-row"
                className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-800/60 bg-zinc-900/30 select-none"
              >
                <div className="flex items-center gap-3.5 text-zinc-300">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span className="text-zinc-300 text-sm sm:text-base font-medium">
                    {CONTACT.location}
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
