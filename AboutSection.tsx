import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, GraduationCap, Award, Building2, CheckCircle2, Star, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Large Statement & Key Education Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
            ABOUT NGUYỄN ĐÌNH ĐÌNH
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-slate-100 leading-[1.05] tracking-tight">
            {PERSONAL_INFO.bioHeadline}
          </h2>

          <p className="font-serif-display text-2xl sm:text-3xl text-indigo-200/90 italic font-light leading-snug">
            "Behind every successful event is a strong partnership."
          </p>

          {/* Education & Personal Info Badges */}
          <div className="pt-6 border-t border-slate-800/80 space-y-3">
            <div className="glass-panel p-4 rounded-xl space-y-1.5 border border-indigo-500/20">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-indigo-300 font-sans-body block font-medium">
                  EDUCATION & ACADEMIC STANDING
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-sans-body font-bold bg-indigo-950 text-indigo-200 border border-indigo-700/50">
                  GPA {PERSONAL_INFO.gpa}
                </span>
              </div>
              <p className="text-sm text-white font-sans-body font-semibold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-300 shrink-0" />
                {PERSONAL_INFO.university}
              </p>
              <p className="text-xs text-slate-300 font-sans-body">
                {PERSONAL_INFO.program}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="glass-panel p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans-body block font-medium">
                  LOCATION
                </span>
                <p className="text-xs text-slate-200 font-sans-body font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-300" />
                  {PERSONAL_INFO.location}
                </p>
              </div>

              <div className="glass-panel p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans-body block font-medium">
                  CONTACT
                </span>
                <p className="text-xs text-slate-200 font-sans-body font-medium flex items-center gap-1.5 truncate">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative, Key Awards & Skills */}
        <div className="lg:col-span-7 space-y-8 glass-panel p-8 md:p-10 rounded-2xl border border-white/10">
          {/* Paragraphs */}
          <div className="space-y-4 text-slate-300 font-sans-body text-base leading-relaxed">
            {PERSONAL_INFO.bioParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Awards Section */}
          <div className="pt-6 border-t border-slate-800/80 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body font-semibold flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-300" />
              KEY AWARDS & HONORS
            </h3>

            <div className="space-y-2">
              {PERSONAL_INFO.awards.map((award, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-200 text-sm font-sans-body"
                >
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400/20 shrink-0 mt-0.5" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills & Soft Skills Grid */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-sans-body font-semibold mb-3">
                CORE SKILLS
              </h4>
              <div className="space-y-2">
                {PERSONAL_INFO.coreSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-sans-body">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-sans-body font-semibold mb-3">
                SOFT SKILLS
              </h4>
              <div className="space-y-2">
                {PERSONAL_INFO.softSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-sans-body">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
