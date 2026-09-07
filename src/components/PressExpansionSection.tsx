import React from 'react';
import { PRESS_DATA, EXPANSION_2026, FINAL_CTA } from '../data/bazarnaData';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface PressExpansionSectionProps {
  onOpenContact: (topic?: string) => void;
}

export const PressExpansionSection: React.FC<PressExpansionSectionProps> = ({ onOpenContact }) => {
  return (
    <>
      {/* 18 — PRESS / MEDIA SPOTLIGHT */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#121316]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C85A32]" />
            <span className="tracker-tag text-[#C85A32]">PRESS & RECOGNITION</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-display font-extrabold text-[#121316] uppercase">
                BAZARNA IN THE PRESS
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#5C5E66] max-w-md">
              Highlighted by leading business, fashion, and cultural media outlets across Egypt and the Middle East.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRESS_DATA.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-white border border-[#121316]/10 hover:border-[#C85A32]/40 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <span className="tracker-tag text-[#C85A32] block mb-3">{item.badge}</span>
                  <h3 className="font-heading text-xl font-extrabold text-[#121316] mb-3 uppercase">
                    {item.outlet}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5E66] leading-relaxed">
                    "{item.headline}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 19 — 2026 RETAIL EXPANSION */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#121316] text-[#FBF9F5] border-b border-white/10 relative overflow-hidden">
        {/* Futuristic Ambient Lighting */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C85A32]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1CA778]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#FFC107]" />
            <span className="tracker-tag text-[#FFC107]">{EXPANSION_2026.badge}</span>
          </div>

          <div className="max-w-4xl mb-16">
            <h2 className="text-display font-extrabold uppercase text-white leading-[1.02] mb-6">
              {EXPANSION_2026.headline}
            </h2>
            <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
              {EXPANSION_2026.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPANSION_2026.directions.map((item) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/15 hover:border-[#FFC107]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="font-mono text-2xl font-black text-[#FFC107] mb-4">
                    {item.number}
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold text-white mb-3 group-hover:text-[#FFC107] transition-colors uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 20 — FINAL IMMERSIVE CALL TO ACTION */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-8 lg:px-12 text-center overflow-hidden border-b border-[#121316]/10 bg-white">
        {/* Real Event Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/real_hero.jpg"
            alt="Bazarna Celebration"
            className="w-full h-full object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/90 via-[#FBF9F5]/95 to-[#FBF9F5]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/20 text-[#C85A32] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>JOIN THE BAZARNA MOVEMENT</span>
          </div>

          <h2 className="text-huge font-extrabold text-[#121316] uppercase tracking-tight mb-6">
            {FINAL_CTA.headline}
          </h2>

          <p className="text-base sm:text-xl text-[#5C5E66] max-w-2xl mx-auto leading-relaxed mb-10">
            {FINAL_CTA.supportingText}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('Partner with Bazarna')}
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#121316] text-[#FBF9F5] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#C85A32] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>{FINAL_CTA.ctaPrimary}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenContact('Join Community / Volunteers')}
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white border-2 border-[#121316] text-[#121316] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#121316] hover:text-white transition-all duration-300 shadow-sm flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>{FINAL_CTA.ctaSecondary}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
