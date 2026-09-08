import React, { useState } from 'react';
import { X, Send, CheckCircle, Mail, MapPin } from 'lucide-react';
import { CONTACT } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    videoType: 'YouTube Storytelling / Longform',
    budget: '$500 - $1,500',
    details: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="contact-form-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#0d0d12] border border-zinc-800 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-contact-modal"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
            <p className="text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
              Thanks for reaching out. I usually review project briefs within 24 hours. You can also message me directly on Discord at <span className="text-white font-mono">{CONTACT.discord}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full border border-zinc-600 hover:border-white text-xs font-semibold uppercase tracking-wider text-white transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 block mb-1">
                INQUIRY & AVAILABILITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "'Bebas Neue', 'Plus Jakarta Sans', sans-serif" }}>
                LET'S WORK TOGETHER
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Fill out the form below or reach me directly at <a href={`mailto:${CONTACT.email}`} className="text-zinc-200 underline">{CONTACT.email}</a>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Alex Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@youtubechannel.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.videoType}
                    onChange={(e) => setFormData({ ...formData, videoType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                  >
                    <option>YouTube Storytelling / Longform</option>
                    <option>True Crime Documentary</option>
                    <option>Gaming Breakdown / Video Essay</option>
                    <option>Shorts / TikToks / Reels Batch</option>
                    <option>Motion Graphics & Color Grading</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-1.5">
                    Estimated Budget (USD)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                  >
                    <option>&lt; $500 (Single Video)</option>
                    <option>$500 - $1,500 (Deep Edit)</option>
                    <option>$1,500 - $3,500 (Full Series / Retainer)</option>
                    <option>$3,500+ (Monthly Collaboration)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-1.5">
                  Project Details / Channel Link
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me about your channel, raw footage length, deadline, or reference styles..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                  <MapPin size={13} /> Available Worldwide — Remote
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs tracking-wider uppercase font-bold inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-white/10"
                >
                  <span>Send Project Request</span>
                  <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
