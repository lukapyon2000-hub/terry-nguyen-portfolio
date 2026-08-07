import React from 'react';
import { CLINIC_PROJECT } from '../data/portfolioData';
import { Sparkles, Users, Share2, Compass, ArrowUpRight, Heart, Bookmark, MessageCircle } from 'lucide-react';

export const PortfolioClinicSection: React.FC = () => {
  return (
    <section className="relative z-10 py-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Container with distinctive visual treatment */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-slate-950 border border-indigo-500/30 p-8 sm:p-12 md:p-16 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-sans-body uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              SPECIAL FEATURED INITIATIVE
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              {CLINIC_PROJECT.title}
            </h2>

            <p className="font-serif-display text-2xl text-indigo-200/90 italic">
              "{CLINIC_PROJECT.tagline}"
            </p>

            <p className="text-slate-300 font-sans-body text-base leading-relaxed">
              {CLINIC_PROJECT.description}
            </p>

            {/* Target Audience & Platforms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-indigo-900/40">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans-body block font-medium">
                  TARGET AUDIENCE
                </span>
                <p className="text-xs text-slate-200 font-sans-body flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-indigo-300" />
                  {CLINIC_PROJECT.audience}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans-body block font-medium">
                  PLATFORMS
                </span>
                <div className="flex items-center gap-2">
                  {CLINIC_PROJECT.platforms.map((platform, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded text-xs font-sans-body bg-indigo-900/50 border border-indigo-700/40 text-indigo-200"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans-body block font-medium">
                CONTENT PILLARS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {CLINIC_PROJECT.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1"
                  >
                    <h4 className="text-xs font-sans-body font-semibold text-slate-200">
                      {pillar.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-sans-body leading-tight">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Social Card Mockup */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-400/20 space-y-6 shadow-xl bg-slate-900/80">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 p-0.5">
                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-serif-display text-lg text-white">
                      Đ
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-sans-body font-semibold text-white">
                      The Portfolio Clinic
                    </h4>
                    <span className="text-xs text-indigo-300 font-sans-body">
                      @dinhdinh.clinic
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-sans-body uppercase tracking-wider bg-indigo-950 text-indigo-300 border border-indigo-800">
                  Active Platform
                </span>
              </div>

              {/* Sample Post Frame */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3 font-sans-body text-xs sm:text-sm text-slate-300">
                <p className="font-serif-display text-lg text-slate-100 italic">
                  "Stop listing your job responsibilities. Start telling the story of how you solved the problem."
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  3 mistakes Gen Z marketers make on their portfolio websites — and how to fix them in 15 minutes.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-slate-400 text-xs">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> 1,240
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-indigo-300" /> 182 comments
                  </span>
                  <span className="flex items-center gap-1">
                    <Bookmark className="w-3.5 h-3.5 text-amber-300" /> 890 saved
                  </span>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                {CLINIC_PROJECT.stats.map((stat, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="block text-base sm:text-lg font-serif-display text-white font-medium">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans-body">
                      {stat.label}
                    </span>
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
