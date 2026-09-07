import React from 'react';
import { VISION_MISSION_DATA } from '../data/bazarnaData';
import { Compass, Target, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const VisionMission: React.FC = () => {
  const { vision, mission } = VISION_MISSION_DATA;

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#121316]/10 relative overflow-hidden">
      {/* Decorative Bauhaus Geometries */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border-8 border-[#FFC107]/20 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-3xl border-8 border-[#1CA778]/15 rotate-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">OUR GUIDING PILLARS</span>
        </div>

        <div className="mb-16">
          <h2 className="text-display font-extrabold text-[#121316] uppercase leading-[1.0]">
            WHERE PURPOSE <br />
            <span className="text-[#C85A32]">MEETS PERFORMANCE</span>
          </h2>
          <p className="mt-4 text-[#5C5E66] text-base sm:text-lg max-w-2xl">
            Rooted in Egyptian cultural identity and built for scalable commercial longevity across the region.
          </p>
        </div>

        {/* Split Screen Layout for Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* OUR VISION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#121316]/10 shadow-lg hover:border-[#C85A32]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-3.5 rounded-2xl bg-[#FDF3EE] text-[#C85A32] group-hover:bg-[#C85A32] group-hover:text-white transition-colors">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="tracker-tag text-[#C85A32] px-3.5 py-1 rounded-full bg-[#FDF3EE] border border-[#C85A32]/20">
                  {vision.title}
                </span>
              </div>

              <h3 className="font-anton text-3xl sm:text-4xl text-[#121316] uppercase tracking-wide mb-4">
                {vision.headline}
              </h3>

              <p className="text-base sm:text-lg text-[#5C5E66] leading-relaxed mb-8">
                {vision.statement}
              </p>

              <div className="space-y-3.5 pt-6 border-t border-[#121316]/10">
                {vision.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#343741]">
                    <CheckCircle className="w-4 h-4 text-[#1CA778] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#121316]/5 flex items-center justify-between text-xs font-mono text-[#8E9099]">
              <span>LONG-TERM STRATEGY</span>
              <span className="font-bold text-[#121316]">2026+ EXPANSION</span>
            </div>
          </motion.div>

          {/* OUR MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#121316] text-[#FBF9F5] border border-white/10 shadow-xl hover:border-[#FFC107]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-3.5 rounded-2xl bg-white/10 text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-[#121316] transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <span className="tracker-tag text-[#FFC107] px-3.5 py-1 rounded-full bg-white/10 border border-white/20">
                  {mission.title}
                </span>
              </div>

              <h3 className="font-anton text-3xl sm:text-4xl text-[#FBF9F5] uppercase tracking-wide mb-4">
                {mission.headline}
              </h3>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                {mission.statement}
              </p>

              <div className="space-y-3.5 pt-6 border-t border-white/10">
                {mission.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#FFC107] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>DAY-TO-DAY COMMITMENT</span>
              <span className="font-bold text-[#FFC107]">INCUBATION EXCELLENCE</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
