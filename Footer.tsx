import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Moon, Heart, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-12 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-800/80 font-sans-body text-xs text-slate-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-1">
          <p className="font-serif-display text-lg text-white font-medium">
            Nguyễn Đình Đình
          </p>
          <p className="text-slate-400">
            {PERSONAL_INFO.university} ({PERSONAL_INFO.program})
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800 text-indigo-300">
          <Moon className="w-3.5 h-3.5" />
          <span>Techcombank Campus Ambassador 2026 Candidate</span>
        </div>

        <div className="text-slate-500 text-center md:text-right">
          <p>© {new Date().getFullYear()} Nguyễn Đình Đình. All rights reserved.</p>
          <p className="text-[11px] text-slate-600">
            Portfolio designed with quiet night atmosphere & editorial elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};
