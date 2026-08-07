import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, GraduationCap, Building2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-indigo-300 font-sans-body">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
              CONNECT WITH ME
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl text-slate-100 leading-tight">
              Hãy kết nối cùng Nguyễn Đình Đình.
            </h2>

            <p className="text-base text-slate-300 font-sans-body leading-relaxed">
              Sẵn sàng trao đổi về các dự án hợp tác, chương trình sinh viên, truyền thông đối ngoại và đề án Techcombank Campus Ambassador 2026.
            </p>
          </div>

          {/* Direct Contact Details */}
          <div className="space-y-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:border-indigo-500/50 transition-all group cursor-pointer block"
            >
              <div className="p-3 rounded-lg bg-indigo-950/80 text-indigo-300 group-hover:bg-indigo-900 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans-body block">EMAIL</span>
                <span className="text-sm font-sans-body font-medium text-slate-100 group-hover:text-white">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:border-indigo-500/50 transition-all group cursor-pointer block"
            >
              <div className="p-3 rounded-lg bg-indigo-950/80 text-indigo-300 group-hover:bg-indigo-900 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans-body block">PHONE / ZALO</span>
                <span className="text-sm font-sans-body font-medium text-slate-100 group-hover:text-white">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </a>

            <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
              <div className="p-3 rounded-lg bg-indigo-950/80 text-indigo-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans-body block">LOCATION</span>
                <span className="text-sm font-sans-body font-medium text-slate-100">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
              <div className="p-3 rounded-lg bg-indigo-950/80 text-indigo-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans-body block">EDUCATION</span>
                <span className="text-sm font-sans-body font-medium text-slate-100">
                  {PERSONAL_INFO.university}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 bg-slate-900/60">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700/50 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-display text-2xl text-white">Cảm ơn bạn đã gửi tin nhắn!</h3>
              <p className="text-slate-300 text-sm font-sans-body max-w-md mx-auto">
                Nguyễn Đình Đình đã nhận được lời nhắn và sẽ phản hồi sớm nhất qua email {formData.email}.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-4 px-6 py-2 rounded-full glass-button text-xs font-sans-body font-medium text-slate-200"
              >
                Gửi tin nhắn khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-serif-display text-2xl text-white mb-2">Gửi lời nhắn trực tiếp</h3>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-slate-300 font-sans-body font-medium block">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 placeholder:text-slate-500 text-sm font-sans-body focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-slate-300 font-sans-body font-medium block">
                  Địa chỉ Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 placeholder:text-slate-500 text-sm font-sans-body focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-slate-300 font-sans-body font-medium block">
                  Nội dung trao đổi
                </label>
                <textarea
                  rows={4}
                  placeholder="Nhập nội dung lời nhắn hoặc đề xuất hợp tác..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 placeholder:text-slate-500 text-sm font-sans-body focus:outline-none focus:border-indigo-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full text-sm font-medium font-sans-body text-slate-950 bg-slate-100 hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Gửi Tin Nhắn Cho Đình Đình
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
