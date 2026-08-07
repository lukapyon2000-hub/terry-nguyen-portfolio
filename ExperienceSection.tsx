import React from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { Briefcase, Building2, Calendar, Award, CheckCircle2, ChevronRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative z-10 py-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body">
          <Briefcase className="w-3.5 h-3.5" />
          LEADERSHIP & EXTERNAL RELATIONS EXPERIENCE
        </div>

        <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-slate-100 leading-tight">
          Kinh nghiệm & Trải nghiệm thực tế.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-sans-body leading-relaxed">
          Quá trình học tập, dẫn dắt các chương trình quy mô cấp Trường và vận động tài trợ doanh nghiệp tại Đại học Luật TP.HCM.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-8 max-w-5xl">
        {EXPERIENCE_LIST.map((exp, idx) => (
          <div
            key={exp.id}
            className="glass-panel p-8 rounded-2xl border border-white/10 bg-slate-900/60 relative overflow-hidden"
          >
            {/* Header / Meta */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-indigo-300 font-sans-body font-semibold block flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-indigo-300" />
                  {exp.organization}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-medium">
                  {exp.role}
                </h3>
              </div>

              <div className="flex flex-col items-start md:items-end gap-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans-body font-medium bg-slate-950 border border-slate-700 text-slate-200">
                  <Calendar className="w-3.5 h-3.5 text-indigo-300" />
                  {exp.period}
                </span>
                <span className="text-xs text-slate-400 font-sans-body">{exp.location}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="py-6 space-y-6">
              <p className="text-slate-300 font-sans-body text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-sans-body font-semibold">
                  NHIỆM VỤ VÀ TRÁCH NHIỆM CHÍNH (RESPONSIBILITIES)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300 font-sans-body leading-relaxed"
                    >
                      <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/50 space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-indigo-300 font-sans-body font-bold flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-300" />
                  THÀNH TÍCH ĐẠT ĐƯỢC (KEY ACHIEVEMENTS)
                </h4>
                <ul className="space-y-1.5">
                  {exp.achievements.map((ach, aIdx) => (
                    <li
                      key={aIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-sans-body"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
