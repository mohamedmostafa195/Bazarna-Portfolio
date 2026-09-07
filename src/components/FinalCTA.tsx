import React from 'react';
import { FINAL_CTA } from '../data/bazarnaData';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface FinalCTAProps {
  onOpenContact: (topic?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] relative overflow-hidden border-b border-[#121316]/10">
      {/* Dynamic Geometric Playground Elements */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#FFC107]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1CA778]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Bauhaus Identity Multi-Dot */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#121316]/10 shadow-xs mb-8">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1CA778]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5343A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#1C61C4]" />
            </div>
            <span className="tracker-tag text-[#121316] text-[11px] font-bold">
              JOIN EGYPT'S POP-UP SOCIETY
            </span>
          </div>

          <h2 className="text-huge font-anton text-[#121316] uppercase leading-[0.92] mb-8">
            LET'S BUILD <br />
            <span className="text-[#C85A32]">WHAT'S NEXT.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#5C5E66] max-w-2xl mx-auto leading-relaxed mb-12">
            {FINAL_CTA.supportingText}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenContact('Brand Application / Incubation')}
              className="px-9 py-4 rounded-full bg-[#121316] text-[#FBF9F5] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#C85A32] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>JOIN BAZARNA</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenContact('Strategic Retail & Developer Partnership')}
              className="px-9 py-4 rounded-full bg-white border-2 border-[#121316] text-[#121316] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#121316] hover:text-white transition-all duration-300 shadow-sm flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>PARTNER WITH US</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-14 flex items-center justify-center gap-8 text-xs font-mono text-[#8E9099]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#1CA778]" />
              <span>20,000+ Brands Hosted</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFC107]" />
              <span>25K+ Visitors / Event</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="hidden sm:flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C85A32]" />
              <span>Est. 2010 Cairo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
