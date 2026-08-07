import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Star, ArrowUpRight, Sparkles, TrendingUp, Layers, Film, Megaphone } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCategoryIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Star className="w-4 h-4 text-indigo-300" />;
      case '02':
        return <Layers className="w-4 h-4 text-indigo-300" />;
      case '03':
        return <TrendingUp className="w-4 h-4 text-indigo-300" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-300" />;
    }
  };

  return (
    <section id="work" className="relative z-10 py-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body">
          <Star className="w-3.5 h-3.5 fill-indigo-300 text-indigo-300" />
          SELECTED PROJECTS & PROPOSALS
        </div>

        <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-slate-100 leading-tight">
          Dự án & Đề án tiêu biểu.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-sans-body leading-relaxed">
          Tổng hợp các sự kiện phong trào quy mô lớn, công tác vận động tài trợ doanh nghiệp và Đề án Techcombank Campus Ambassador 2026.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`group relative glass-panel glass-panel-hover p-8 md:p-10 rounded-2xl cursor-pointer flex flex-col justify-between ${
              idx === 0 ? 'md:col-span-2 border-indigo-500/30 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-indigo-950/20' : ''
            }`}
          >
            {/* Top Bar: Number & Category */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-700/60">
                    {getCategoryIcon(project.number)}
                  </span>
                  <span className="text-xs font-sans-body uppercase tracking-[0.2em] text-indigo-200 font-medium">
                    {project.number} — {project.category}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full glass-button flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/20 transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-serif-display text-3xl sm:text-4xl text-white group-hover:text-indigo-100 transition-colors mb-2 leading-tight">
                {project.title}
              </h3>

              <p className="text-sm font-serif-display italic text-indigo-300/90 mb-4">
                {project.subtitle}
              </p>

              <p className="text-slate-300 font-sans-body text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Role / Scale Banner if present */}
              {project.role && (
                <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-indigo-200 text-xs sm:text-sm font-sans-body mb-6 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-white">Vai trò:</strong> {project.role}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Bar: Tags & Action */}
            <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-sans-body px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="text-xs font-sans-body font-medium text-indigo-300 group-hover:underline flex items-center gap-1">
                Xem chi tiết dự án →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
