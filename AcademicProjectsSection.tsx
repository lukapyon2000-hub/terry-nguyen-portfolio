import React from 'react';
import { ACADEMIC_PROJECTS } from '../data/portfolioData';
import { BookOpen, CheckCircle2, Award, Brain, FileText } from 'lucide-react';

export const AcademicProjectsSection: React.FC = () => {
  const coreAcademicSkills = [
    "Legal Research",
    "Project Planning",
    "Analytical Thinking",
    "Stakeholder Coordination",
    "Team Leadership",
    "Time Management",
    "Problem Solving",
    "Adaptability",
    "Business Communication"
  ];

  return (
    <section id="academic" className="relative z-10 py-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body">
          <BookOpen className="w-3.5 h-3.5" />
          ACADEMIC RESEARCH & SCIENTIFIC PROJECTS
        </div>

        <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-slate-100 leading-tight">
          Nghiên cứu khoa học & Dự án Học thuật.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-sans-body leading-relaxed">
          Nền tảng tư duy pháp lý sắc bén, khả năng phân tích hệ thống và kỹ năng dẫn dắt nhóm nghiên cứu khoa học tại Trường Đại học Luật TP.HCM.
        </p>
      </div>

      {/* Academic Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {ACADEMIC_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="glass-panel glass-panel-hover p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6 bg-slate-900/60"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs uppercase tracking-[0.2em] font-sans-body font-bold text-indigo-300">
                  PROJECT {project.number}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-sans-body font-semibold bg-indigo-950 text-indigo-200 border border-indigo-800">
                  {project.role}
                </span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl text-white leading-snug">
                {project.title}
              </h3>

              {/* Problem Statement */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-sans-body font-bold block">
                  VẤN ĐỀ NGHIÊN CỨU (PROBLEMS)
                </span>
                <p className="text-xs text-slate-300 font-sans-body leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution Statement */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-sans-body font-bold block">
                  MỤC TIÊU & GIẢI PHÁP (SOLUTIONS)
                </span>
                <p className="text-xs text-slate-300 font-sans-body leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Contribution */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans-body font-semibold block">
                  ĐÓNG GÓP CỦA ĐÌNH ĐÌNH (MY CONTRIBUTION)
                </span>
                <p className="text-xs text-slate-200 font-sans-body leading-relaxed">
                  {project.contribution}
                </p>
              </div>
            </div>

            {/* Developed Skills */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
              {project.skillsDeveloped.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[11px] font-sans-body px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Developed Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900">
        <h4 className="text-xs uppercase tracking-[0.2em] font-sans-body font-bold text-indigo-200 mb-4 flex items-center gap-2">
          <Brain className="w-4 h-4 text-indigo-300" />
          CORE SKILLS DEVELOPED THROUGH ACADEMIC PROJECTS
        </h4>
        <div className="flex flex-wrap gap-3">
          {coreAcademicSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-200 text-xs font-sans-body"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-300" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
