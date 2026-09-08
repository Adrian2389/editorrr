import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { SkillsAndContactSection } from './components/SkillsAndContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { ContactModal } from './components/ContactModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-zinc-800 selection:text-white relative">
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Selected Work Section */}
        <WorkSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* About Me Section */}
        <AboutSection onOpenContact={() => setIsContactOpen(true)} />

        {/* Skills & Contact Section */}
        <SkillsAndContactSection onOpenContactModal={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Video Detail / Player Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookEdit={() => setIsContactOpen(true)}
      />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
