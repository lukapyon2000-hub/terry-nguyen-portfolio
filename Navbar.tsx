import React, { useState } from 'react';
import { Menu, X, Sparkles, Moon } from 'lucide-react';
import { AmbientAudioToggle } from './AmbientAudioToggle';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Projects & Proposals', href: 'work' },
    { label: 'Academic Research', href: 'academic' },
    { label: 'Why Techcombank?', href: 'why-techcombank' },
    { label: 'Experience', href: 'experience' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md bg-[#060a16]/70 border-b border-white/5">
      <nav className="relative z-10 flex flex-row items-center justify-between px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif-display text-2xl sm:text-3xl tracking-tight text-slate-100 group-hover:text-white transition-colors">
            Nguyễn Đình Đình.
          </span>
          <span className="block text-[10px] sm:text-[11px] tracking-wider uppercase text-indigo-300/80 font-sans-body font-medium">
            HCMC University of Law · Campus Ambassador Candidate
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-sans-body text-slate-300 hover:text-white transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-indigo-300 after:transition-all hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right CTA & Ambient Audio */}
        <div className="flex items-center space-x-3">
          <AmbientAudioToggle />

          <button
            onClick={() => handleNavClick('why-techcombank')}
            className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-medium font-sans-body text-white bg-red-950/60 hover:bg-red-900/80 backdrop-blur-md border border-red-500/40 shadow-sm hover:scale-[1.03] transition-all cursor-pointer"
          >
            Why Techcombank?
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white glass-button rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm text-slate-200 hover:text-white font-sans-body py-2 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('why-techcombank')}
              className="mt-4 w-full text-center rounded-full px-6 py-3 text-xs font-medium text-white bg-red-950/80 border border-red-500/40"
            >
              Why Techcombank?
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
