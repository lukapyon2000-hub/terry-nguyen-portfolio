import React, { useState } from 'react';
import { CASE_STUDY_STEPS } from '../data/portfolioData';
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative z-10 py-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
          CREATIVE METHODOLOGY
        </div>

        <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-slate-100 leading-tight">
          From insight to execution.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-sans-body leading-relaxed">
          How every campaign, story, and piece of content is methodically constructed from deep human listening to measurable cultural impact.
        </p>
      </div>

      {/* Horizontal Storytelling Steps Flow */}
      <div className="space-y-10">
        {/* Step Navigation Cards with Constellation Lines */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* SVG Constellation Line connecting steps on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-slate-800 via-indigo-500/40 to-slate-800 -translate-y-1/2 z-0 pointer-events-none" />

          {CASE_STUDY_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 text-left p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'glass-panel bg-slate-900/90 border-indigo-400/60 shadow-[0_0_25px_rgba(99,102,241,0.2)] scale-105'
                    : 'glass-panel bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/60'
                }`}
              >
                {/* Node Star */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-sans-body font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${
                      isActive
                        ? 'bg-indigo-300 text-slate-950'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    STEP {step.number}
                  </span>
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      isActive
                        ? 'border-indigo-300 bg-white shadow-[0_0_8px_#a5b4fc]'
                        : 'border-slate-600 bg-slate-900'
                    }`}
                  />
                </div>

                <h3 className="font-serif-display text-2xl text-white mb-1">
                  {step.title}
                </h3>

                <p className="text-xs text-indigo-200/80 font-serif-display italic truncate">
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Panel */}
        <div className="glass-panel p-8 sm:p-10 md:p-12 rounded-3xl border border-indigo-500/30 bg-slate-900/80 space-y-6 animate-in fade-in duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="text-xs font-sans-body uppercase tracking-[0.2em] text-indigo-300 mb-1">
                PHASE {CASE_STUDY_STEPS[activeStep].number} — METHODOLOGY
              </div>
              <h3 className="font-serif-display text-3xl sm:text-4xl text-white">
                {CASE_STUDY_STEPS[activeStep].title}: {CASE_STUDY_STEPS[activeStep].subtitle}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev))}
                disabled={activeStep === 0}
                className="px-4 py-2 rounded-full glass-button text-xs font-sans-body text-slate-300 disabled:opacity-40"
              >
                ← Previous
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < CASE_STUDY_STEPS.length - 1 ? prev + 1 : prev))}
                disabled={activeStep === CASE_STUDY_STEPS.length - 1}
                className="px-4 py-2 rounded-full glass-button text-xs font-sans-body text-slate-300 disabled:opacity-40"
              >
                Next Step →
              </button>
            </div>
          </div>

          <p className="text-slate-300 font-sans-body text-base md:text-lg leading-relaxed max-w-4xl">
            {CASE_STUDY_STEPS[activeStep].description}
          </p>

          <div className="pt-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-sans-body font-semibold">
              KEY DELIVERABLES & ACTIVITIES
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CASE_STUDY_STEPS[activeStep].keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-sans-body leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
