import React from 'react';
import { Project } from '../data/portfolioData';
import { X, Sparkles, Star, CheckCircle, FileText, Tag, Building2, Calendar, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl glass-panel bg-[#0b1120]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 text-slate-100 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full glass-button text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-4 pr-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body">
            <Star className="w-3.5 h-3.5 fill-indigo-300/30 text-indigo-300" />
            <span>PROJECT {project.number}</span>
            <span className="text-slate-600">•</span>
            <span>{project.category}</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            {project.title}
          </h2>

          <p className="text-lg text-indigo-200/90 font-serif-display italic">
            {project.subtitle}
          </p>

          {project.role && (
            <div className="inline-block px-3 py-1 rounded-md bg-indigo-950/80 border border-indigo-700/50 text-indigo-200 text-xs font-sans-body font-medium">
              VAI TRÒ: {project.role}
            </div>
          )}

          <p className="text-slate-300 text-base font-sans-body leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans-body bg-slate-900/80 border border-slate-700/60 text-slate-300"
              >
                <Tag className="w-3 h-3 text-indigo-300" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Corporate Partners / Sponsors if present */}
        {project.partners && project.partners.length > 0 && (
          <div className="my-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans-body font-semibold block flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-indigo-300" />
              DOANH NGHIỆP / ĐƠN VỊ ĐỒNG HÀNH & TÀI TRỢ
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.partners.map((partner, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded bg-indigo-950/60 border border-indigo-800/60 text-indigo-200 text-xs font-sans-body font-medium"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Metrics Banner */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/60 border border-indigo-900/30">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center sm:text-left space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-sans-body block font-medium">
                  {metric.label}
                </span>
                <span className="text-2xl font-serif-display font-medium text-white text-moonlight">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Roadmap for Speculative Proposal */}
        {project.roadmap && (
          <div className="my-8 space-y-4 pt-4 border-t border-slate-800/80">
            <h3 className="text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body font-semibold flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              ROADMAP TRIỂN KHAI DỰ ÁN (EXECUTION PLAN)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.roadmap.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px] font-sans-body font-bold border border-indigo-800">
                      {step.week}
                    </span>
                  </div>
                  <h4 className="text-sm font-sans-body font-semibold text-white">
                    {step.title}
                  </h4>
                  <ul className="space-y-1.5 pt-1">
                    {step.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="text-xs text-slate-300 font-sans-body flex items-start gap-1.5 leading-relaxed">
                        <ArrowRight className="w-3 h-3 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Narrative Section */}
        <div className="space-y-6 pt-4 border-t border-slate-800/80">
          {project.fullStory && (
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body font-semibold mb-2">
                PROJECT NARRATIVE
              </h3>
              <p className="text-slate-300 font-sans-body text-sm sm:text-base leading-relaxed">
                {project.fullStory}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.challenge && (
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-sans-body font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  THE CHALLENGE
                </h4>
                <p className="text-sm text-slate-300 font-sans-body leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.approach && (
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-sans-body font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  STRATEGIC APPROACH
                </h4>
                <p className="text-sm text-slate-300 font-sans-body leading-relaxed">
                  {project.approach}
                </p>
              </div>
            )}
          </div>

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-sans-body font-semibold mb-3">
                KEY OUTCOMES & IMPACT
              </h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-300 font-sans-body"
                  >
                    <CheckCircle className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-sans-body">
            Đình Đình Portfolio • {project.category}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full glass-button text-xs font-sans-body font-medium text-slate-200 hover:text-white"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
