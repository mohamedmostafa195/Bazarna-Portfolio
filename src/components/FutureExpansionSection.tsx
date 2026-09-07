import React from 'react';
import { EXPANSION_2026 } from '../data/bazarnaData';
import { Sparkles, Building2, Crown, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FutureExpansionProps {
  onOpenContact: (topic?: string) => void;
}

export const FutureExpansionSection: React.FC<FutureExpansionProps> = ({ onOpenContact }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Building2 className="w-5 h-5" />;
      case 1: return <Crown className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#121316] text-[#FBF9F5] relative overflow-hidden border-b border-white/10">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C85A32]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFC107]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#FFC107]" />
          <span className="tracker-tag text-[#FFC107]">{EXPANSION_2026.badge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.98]">
              THE NEXT CHAPTER <br />
              <span className="text-[#C85A32]">STARTS NOW</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            {EXPANSION_2026.subheadline}
          </div>
        </div>

        {/* 3 Future Directions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {EXPANSION_2026.directions.map((direction, idx) => (
            <motion.div
              key={direction.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#FFC107]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3.5 rounded-2xl bg-white/10 text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-[#121316] transition-colors">
                    {getIcon(idx)}
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-400">
                    PHASE {direction.number}
                  </span>
                </div>

                <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide mb-4 group-hover:text-[#FFC107] transition-colors">
                  {direction.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {direction.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>YEAR-ROUND LEASING</span>
                <span className="font-bold text-[#FFC107]">EXPANSION</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regional Footprint Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.08] to-white/[0.02] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1CA778]/20 text-[#1CA778] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>REGIONAL EXPANSION IN PROGRESS</span>
            </div>
            <h4 className="font-anton text-2xl sm:text-3xl text-white uppercase">
              BECOME A 2026 LAUNCH PARTNER
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Securing tier-1 physical footprints across Cairo flagships, North Coast luxury corridors, and GCC pop-up destinations.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('2026 Expansion Partnership')}
            className="px-8 py-4 rounded-full bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#121316] transition-all duration-300 shrink-0 flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
          >
            <span>DISCUSS EXPANSION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
