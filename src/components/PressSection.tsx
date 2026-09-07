import React from 'react';
import { PRESS_DATA } from '../data/bazarnaData';
import { ArrowUpRight, Newspaper, Award, Mic, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

export const PressSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Newspaper className="w-5 h-5" />;
      case 1: return <Mic className="w-5 h-5" />;
      case 2: return <Award className="w-5 h-5" />;
      default: return <Radio className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#121316]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">MEDIA & RECOGNITION</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-display font-extrabold text-[#121316] uppercase">
              THE STORY TRAVELS
            </h2>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#C85A32] mt-2 uppercase tracking-tight">
              Spotlighted across leading industry, business, and creative platforms.
            </p>
          </div>
          <p className="text-sm sm:text-base text-[#5C5E66] max-w-md">
            Documenting the journey of transforming local ambition into an enduring national retail powerhouse.
          </p>
        </div>

        {/* Magazine Cover Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRESS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-[#121316]/10 hover:border-[#C85A32]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-[#FDF3EE] text-[#C85A32] group-hover:bg-[#C85A32] group-hover:text-white transition-colors">
                    {getIcon(idx)}
                  </div>
                  <span className="tracker-tag text-[#8E9099] text-[10px]">
                    {item.badge}
                  </span>
                </div>

                <div className="font-anton text-2xl text-[#121316] uppercase tracking-wide mb-3 group-hover:text-[#C85A32] transition-colors">
                  {item.outlet}
                </div>

                <p className="text-xs sm:text-sm text-[#5C5E66] leading-relaxed">
                  "{item.headline}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#121316]/5 flex items-center justify-between text-xs font-bold text-[#121316]">
                <span className="text-[#8E9099] font-mono">EDITORIAL COVERAGE</span>
                <ArrowUpRight className="w-4 h-4 text-[#C85A32]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
