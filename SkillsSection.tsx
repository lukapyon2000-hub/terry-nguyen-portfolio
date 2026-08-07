import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Feather, Target, MessageSquare, Palette, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'CONTENT':
        return <Feather className="w-5 h-5 text-indigo-300" />;
      case 'MARKETING':
        return <Target className="w-5 h-5 text-indigo-300" />;
      case 'COMMUNICATION':
        return <MessageSquare className="w-5 h-5 text-indigo-300" />;
      case 'CREATIVE':
        return <Palette className="w-5 h-5 text-indigo-300" />;
      default:
        return <Feather className="w-5 h-5 text-indigo-300" />;
    }
  };

  return (
    <section id="skills" className="relative z-10 py-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
          EXPERTISE & CAPABILITIES
        </div>

        <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-slate-100 leading-tight">
          What I bring to the table.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-sans-body leading-relaxed">
          A balanced blend of narrative craft, market strategy, cross-functional communication, and creative conceptualization.
        </p>
      </div>

      {/* Floating Glass Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS_DATA.map((category, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="p-3 w-fit rounded-xl bg-slate-900 border border-slate-700/60">
                {getCategoryIcon(category.title)}
              </div>

              <h3 className="font-sans-body text-xs uppercase tracking-[0.2em] text-indigo-200 font-semibold">
                {category.title}
              </h3>

              <p className="text-xs text-slate-400 font-sans-body leading-relaxed">
                {category.description}
              </p>

              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-sm text-slate-200 font-sans-body">
                    <Check className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 font-sans-body italic">
              Core Discipline • {category.skills.length} Capabilities
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
