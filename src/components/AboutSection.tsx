import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ABOUT_DATA } from '../data/bazarnaData';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#121316]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Label: 01 — ABOUT BAZARNA */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">{ABOUT_DATA.label}</span>
        </div>

        {/* Big Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <h2 className="font-anton text-huge text-[#121316] uppercase leading-[0.95]">
              {ABOUT_DATA.headline}
            </h2>

            <blockquote className="mt-8 pl-6 border-l-4 border-[#C85A32]">
              <p className="font-handwriting text-xl sm:text-2xl text-[#121316] leading-relaxed">
                "{ABOUT_DATA.quote}"
              </p>
            </blockquote>

            <div className="mt-8 space-y-4 text-base sm:text-lg text-[#5C5E66] leading-relaxed">
              <p>{ABOUT_DATA.narrative1}</p>
              <p>{ABOUT_DATA.narrative2}</p>
            </div>

            {/* Launch, Grow, Thrive, Scale Progression */}
            <div className="mt-8 pt-6 border-t border-[#121316]/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ABOUT_DATA.stages.map((stage, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#121316]/10">
                  <div className="font-anton text-lg text-[#C85A32]">{stage.label}</div>
                  <div className="text-[11px] text-[#5C5E66] leading-tight mt-1">{stage.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-4 rounded-full bg-[#121316] text-[#FBF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#C85A32] transition-colors flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
              >
                <span>Partner With Bazarna</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Large Editorial Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden border-2 border-[#121316]/10 shadow-2xl bg-white group">
              <div className="aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] relative overflow-hidden bg-stone-100">
                <img
                  src="/extracted_images/p3_img1.jpeg"
                  alt="Bazarna High Fashion & Creative Movement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/images/real_about.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#1CA778]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FFC107]">MADE IN EGYPT</span>
                  </div>
                  <h4 className="font-anton text-2xl font-bold uppercase">15 Years Shaping Homegrown Culture</h4>
                  <p className="text-xs text-gray-300 mt-1">Transforming local creative ambition into regional commercial traction.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Four Distinct Editorial Pillars */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#121316]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ABOUT_DATA.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-[#121316]/10 hover:border-[#C85A32]/40 transition-all duration-300 shadow-xs group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F3EFE6] text-[#C85A32] flex items-center justify-center font-bold text-sm mb-5 group-hover:bg-[#C85A32] group-hover:text-white transition-colors duration-300 font-condensed text-base">
                0{idx + 1}
              </div>
              <h3 className="font-anton text-xl text-[#121316] mb-2 uppercase tracking-wide">{pillar.label}</h3>
              <p className="text-xs sm:text-sm text-[#5C5E66] leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
