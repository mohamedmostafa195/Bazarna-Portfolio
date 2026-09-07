import React from 'react';
import { FOUNDER_DATA } from '../data/bazarnaData';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FounderSectionProps {
  onOpenContact: (topic?: string) => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="founder" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 noise-bg border-b border-[#121316]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">{FOUNDER_DATA.sectionTitle}</span>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Bio & Story */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <h2 className="font-anton text-huge text-[#121316] uppercase leading-[0.95] mb-2">
              {FOUNDER_DATA.name}
            </h2>

            <div className="text-base font-bold text-[#C85A32] uppercase tracking-wider mb-6 font-poppins">
              {FOUNDER_DATA.role}
            </div>

            <blockquote className="pl-6 border-l-4 border-[#C85A32] mb-8">
              <p className="font-handwriting text-xl sm:text-2xl text-[#121316] leading-relaxed">
                "{FOUNDER_DATA.vision}"
              </p>
            </blockquote>

            <div className="space-y-4 text-base text-[#5C5E66] leading-relaxed">
              <p>{FOUNDER_DATA.bioParagraph1}</p>
              <p>{FOUNDER_DATA.bioParagraph2}</p>
              <p>{FOUNDER_DATA.bioParagraph3}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#121316]/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onOpenContact('Founder Keynote & Advisory')}
                className="px-8 py-4 rounded-full bg-[#121316] text-[#FBF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#C85A32] transition-colors flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
              >
                <span>Connect with Founder</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="font-handwriting text-2xl text-[#121316]">
                Yasmine Medhat
              </div>
            </div>
          </motion.div>

          {/* Right Column: Official Portrait of Yasmine Medhat from PDF Page 62 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden border-2 border-[#121316]/10 shadow-2xl bg-white group">
              <div className="aspect-[3/4] relative overflow-hidden bg-stone-100">
                <img
                  src="/extracted_images/p62_img1.jpeg"
                  alt="Yasmine Medhat - Founder of Bazarna Pop-Up Society"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/images/real_yasmine_medhat.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFC107]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FFC107]">FOUNDER & CEO</span>
                  </div>
                  <h4 className="font-anton text-3xl font-bold uppercase">YASMINE MEDHAT</h4>
                  <p className="text-xs text-gray-300 mt-1">Leading Egypt's premier pop-up incubator since 2010.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
