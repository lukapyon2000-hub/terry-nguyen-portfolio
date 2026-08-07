import React from 'react';
import { NightBackground } from './components/NightBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AcademicProjectsSection } from './components/AcademicProjectsSection';
import { WhyTechcombankSection } from './components/WhyTechcombankSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioClinicSection } from './components/PortfolioClinicSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070b16] text-[#fafafa] font-sans-body selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">
      {/* Fullscreen Atmospheric Background (Moonlit Nature Video + Canvas Starfield) */}
      <NightBackground />

      {/* Main Content Container */}
      <div className="relative z-10">
        <Navbar onNavigate={scrollToSection} />

        <main>
          <HeroSection onNavigate={scrollToSection} />
          <AboutSection />
          <ProjectsSection />
          <AcademicProjectsSection />
          <WhyTechcombankSection />
          <ExperienceSection />
          <SkillsSection />
          <PortfolioClinicSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
