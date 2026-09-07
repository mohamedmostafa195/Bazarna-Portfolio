import React from 'react';
import { DIFFERENTIATION_PILLARS } from '../data/bazarnaData';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const DifferenceSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#121316]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">WHAT SETS BAZARNA APART</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-anton text-huge text-[#121316] uppercase leading-[0.95]">
              AN ACCELERATOR & INCUBATOR, <br />
              <span className="text-[#C85A32]">NOT JUST A MARKET.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-[#5C5E66] text-base leading-relaxed">
            While generic event organizers sell booth space, Bazarna provides a complete growth engine combining audience density, market credibility, and retail trajectory.
          </div>
        </div>

        {/* 5 Distinct Pillars from PDF Page 9 & 10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIFFERENTIATION_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl bg-white border border-[#121316]/10 hover:border-[#C85A32]/40 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-lg ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2 bg-[#FDF3EE]/40' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-anton text-2xl text-[#C85A32]">{pillar.number}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1CA778]" />
                </div>
                <h3 className="font-anton text-2xl text-[#121316] mb-3 group-hover:text-[#C85A32] transition-colors uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5C5E66] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#121316]/5 flex items-center gap-2 text-xs font-bold text-[#121316]">
                <CheckCircle2 className="w-4 h-4 text-[#1CA778]" />
                <span>Standard across all Bazarna initiatives</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
