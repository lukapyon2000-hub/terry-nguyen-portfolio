import React from 'react';
import { ArrowDown, Moon, Award, GraduationCap, Building } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[calc(100vh-90px)] max-w-7xl mx-auto py-12"
    >
      {/* Editorial Label & Candidate Badge */}
      <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md mb-8 animate-fade-in shadow-[0_0_20px_rgba(99,102,241,0.15)]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-200"></span>
        </span>
        <span className="uppercase tracking-[0.2em] text-[11px] sm:text-xs font-semibold text-indigo-200 font-sans-body">
          TECHCOMBANK CAMPUS AMBASSADOR 2026 CANDIDATE
        </span>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <span className="text-[11px] sm:text-xs text-slate-300 font-sans-body font-medium">
          HCMC UNIVERSITY OF LAW
        </span>
        <Moon className="w-3.5 h-3.5 text-indigo-200 animate-star ml-0.5" />
      </div>

      {/* Main Headline */}
      <h1 className="font-serif-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-[-2.46px] max-w-6xl font-normal text-slate-300">
        I build <span className="text-white text-moonlight italic">meaningful</span> partnerships to create{' '}
        <span className="text-indigo-100 text-moonlight underline decoration-indigo-300/40 underline-offset-8">
          impactful
        </span>{' '}
        experiences.
      </h1>

      {/* Subtext */}
      <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mt-8 leading-relaxed font-sans-body font-normal">
        {PERSONAL_INFO.bioSubhead}
      </p>

      {/* Quick Info Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs text-slate-300 font-sans-body">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
          <GraduationCap className="w-3.5 h-3.5 text-indigo-300" />
          <span>Luật Thương Mại - Dân Sự - Quốc Tế (GPA {PERSONAL_INFO.gpa})</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
          <Building className="w-3.5 h-3.5 text-indigo-300" />
          <span>Ban Đối Ngoại Đoàn - Hội ĐH Luật TP.HCM</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
          <Award className="w-3.5 h-3.5 text-indigo-300" />
          <span>Sinh Viên 5 Tốt Cấp Trường</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
        <button
          onClick={() => onNavigate('work')}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium font-sans-body text-slate-950 bg-slate-100 hover:bg-white shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105 transition-all cursor-pointer"
        >
          View Projects & Proposals
        </button>

        <button
          onClick={() => onNavigate('why-techcombank')}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium font-sans-body text-slate-200 bg-slate-900/40 hover:bg-slate-800/60 border border-indigo-500/40 hover:border-indigo-400 backdrop-blur-md transition-all cursor-pointer"
        >
          Why Techcombank?
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <button
          onClick={() => onNavigate('about')}
          className="group flex flex-col items-center text-xs uppercase tracking-widest text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.25em] font-sans-body mb-1">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown className="w-4 h-4 text-slate-400 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
