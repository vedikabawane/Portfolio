import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ResumeModal from './components/ResumeModal';
import PoliceBhartiModal from './components/PoliceBhartiModal';
import PlacementModal from './components/PlacementModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPoliceModalOpen, setIsPoliceModalOpen] = useState(false);
  const [isPlacementModalOpen, setIsPlacementModalOpen] = useState(false);

  return (
    <div className="site-wrapper">
      {/* Ambient background glowing orbs & tech grid */}
      <div className="ambient-canvas" aria-hidden="true">
        <div className="ambient-grid"></div>
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
      </div>

      {/* Floating Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="main-content">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
        />
        
        <Highlights />

        <About
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <Skills />

        <Experience />

        <Projects
          onOpenPoliceModal={() => setIsPoliceModalOpen(true)}
          onOpenPlacementModal={() => setIsPlacementModalOpen(true)}
        />

        <Education />

        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <PoliceBhartiModal
        isOpen={isPoliceModalOpen}
        onClose={() => setIsPoliceModalOpen(false)}
      />

      <PlacementModal
        isOpen={isPlacementModalOpen}
        onClose={() => setIsPlacementModalOpen(false)}
      />
    </div>
  );
}
