import React from 'react';
import { WHY_TECHCOMBANK } from '../data/portfolioData';
import { Sparkles, Heart, Target, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

export const WhyTechcombankSection: React.FC = () => {
  return (
    <section id="why-techcombank" className="relative z-10 py-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-950/30 via-slate-900/95 to-slate-950 border border-red-500/30 p-8 sm:p-12 md:p-16 shadow-[0_0_60px_rgba(220,38,38,0.12)]">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl space-y-8 relative z-10">
          {/* Header Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-700/50 text-red-200 text-xs font-sans-body uppercase tracking-[0.2em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            CAMPUS AMBASSADOR ESSAY
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            WHY TECHCOMBANK? <br className="hidden sm:inline" />
            <span className="text-red-200 text-moonlight italic">WHY CHOOSE ĐÌNH ĐÌNH?</span>
          </h2>

          {/* Core Vision Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-900/50 via-slate-900 to-slate-900 border border-red-500/40 text-red-100 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans-body font-bold text-red-300 block">
              MY CORE MOTIVATION
            </span>
            <p className="font-serif-display text-2xl sm:text-3xl font-medium italic">
              "{WHY_TECHCOMBANK.quote}"
            </p>
          </div>

          {/* Full Essay Narrative */}
          <div className="space-y-6 text-slate-200 font-sans-body text-base sm:text-lg leading-relaxed">
            <p className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              {WHY_TECHCOMBANK.mainParagraph}
            </p>

            <p className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              {WHY_TECHCOMBANK.storyParagraph}
            </p>

            {/* Value Statement Callout */}
            <div className="p-6 rounded-2xl bg-red-950/40 border border-red-800/60 text-slate-100 space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] text-red-300 font-sans-body font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-300" />
                THE ROLE WHERE I CREATE THE MOST VALUE
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-red-100/90 font-medium">
                {WHY_TECHCOMBANK.valueCallout}
              </p>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-sans-body font-bold text-white block">Listen to Law Students</span>
              <span className="text-xs text-slate-400 font-sans-body">Thấu hiểu nhu cầu & định hướng của sinh viên Luật UHL</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-sans-body font-bold text-white block">Understand Techcombank</span>
              <span className="text-xs text-slate-400 font-sans-body">Nắm bắt thông điệp thương hiệu tuyển dụng Ngân hàng</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-sans-body font-bold text-white block">Authentic Connection</span>
              <span className="text-xs text-slate-400 font-sans-body">Kết nối hai bên bằng trải nghiệm thực chất nhất</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
