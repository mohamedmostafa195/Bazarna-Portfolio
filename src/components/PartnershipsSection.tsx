import React, { useRef, useState } from 'react';
import { PARTNERSHIPS_SECTION } from '../data/bazarnaData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface PartnershipsSectionProps {
  onOpenContact: (topic?: string) => void;
}

export const PartnershipsSection: React.FC<PartnershipsSectionProps> = ({ onOpenContact }) => {
  const { caseStudies, approach } = PARTNERSHIPS_SECTION;

  const caseStudyImages = [
    "/extracted_images/p27_img1.jpeg",
    "/extracted_images/p52_img4.jpeg",
    "/extracted_images/p54_img6.jpeg",
    "/extracted_images/p55_img6.jpeg",
    "/extracted_images/p56_img4.png",
    "/extracted_images/p57_img2.jpeg",
  ];

  const caseScrollRef = useRef<HTMLDivElement>(null);
  const [caseIndex, setCaseIndex] = useState(0);

  const handleCaseScroll = () => {
    if (!caseScrollRef.current) return;
    const { scrollLeft, clientWidth } = caseScrollRef.current;
    if (clientWidth > 0) {
      const newIndex = Math.round(scrollLeft / (clientWidth * 0.85));
      setCaseIndex(Math.min(Math.max(newIndex, 0), caseStudies.length - 1));
    }
  };

  const scrollCaseTo = (index: number) => {
    if (!caseScrollRef.current) return;
    const cardWidth = caseScrollRef.current.clientWidth * 0.88;
    caseScrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setCaseIndex(index);
  };

  return (
    <section id="partnerships" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 noise-bg border-b border-[#121316]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">STRATEGIC PARTNERSHIPS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="font-anton text-huge text-[#121316] uppercase leading-[0.95]">
              BETTER TOGETHER.
            </h2>
            <p className="font-poppins text-lg font-bold text-[#C85A32] mt-2">
              Collaborations that shape cultural and commercial destinations.
            </p>
          </div>
          
          <div className="md:max-w-md">
            <p className="text-sm sm:text-base text-[#5C5E66]">
              {PARTNERSHIPS_SECTION.intro}
            </p>
          </div>
        </div>

        {/* Visual Case Study Grid / Mobile Swiper */}
        <div
          ref={caseScrollRef}
          onScroll={handleCaseScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 mb-6 md:mb-24 pb-2 md:pb-0"
        >
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-[85vw] max-w-[340px] shrink-0 md:w-auto md:shrink snap-center rounded-3xl bg-white border border-[#121316]/10 hover:border-[#C85A32]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-stone-100">
                <img
                  src={caseStudyImages[idx] || study.image}
                  alt={study.partner}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = study.image;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#121316] text-[10px] font-bold tracking-widest uppercase">
                  {study.tag}
                </div>
                <div className="absolute bottom-3 left-4 text-xs font-mono text-gray-300">
                  {study.location} • {study.year}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-anton text-2xl text-[#121316] mb-1 group-hover:text-[#C85A32] transition-colors uppercase">
                    {study.partner}
                  </h3>
                  <div className="text-xs font-bold text-[#C85A32] uppercase tracking-wider mb-3">
                    {study.concept}
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C5E66] leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Case Study Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mb-16">
          {caseStudies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollCaseTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                caseIndex === idx ? 'w-6 bg-[#C85A32]' : 'w-1.5 bg-[#121316]/20'
              }`}
              aria-label={`Go to case study ${idx + 1}`}
            />
          ))}
        </div>

        {/* PARTNERSHIP APPROACH SECTION from PDF Page 58 & 59 */}
        <div className="p-6 sm:p-14 rounded-3xl bg-[#121316] text-[#FBF9F5] shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/10 mb-10 sm:mb-12 gap-4">
            <div>
              <span className="tracker-tag text-[#FFC107]">PARTNERSHIP PHILOSOPHY</span>
              <h3 className="font-anton text-3xl sm:text-4xl text-white mt-1 uppercase">
                Our Strategic Partnership Approach
              </h3>
            </div>
            <button
              onClick={() => onOpenContact('Destination Partnership')}
              className="px-8 py-4 rounded-full bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B24E2A] transition-colors flex items-center gap-2 cursor-pointer self-start md:self-auto shadow-md active:scale-95"
            >
              <span>Explore Strategic Partnership</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
            {approach.map((item) => (
              <div key={item.number} className="w-[80vw] max-w-[300px] shrink-0 sm:w-auto sm:shrink snap-center flex flex-col p-4 sm:p-0 rounded-2xl bg-white/5 sm:bg-transparent border border-white/10 sm:border-0">
                <div className="font-anton text-xl text-[#FFC107] mb-2">{item.number}</div>
                <h4 className="font-anton text-xl text-white mb-2 uppercase tracking-wide">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
