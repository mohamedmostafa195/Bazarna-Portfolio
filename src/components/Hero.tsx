import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/bazarnaData';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onOpenContact: (topic?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const headlines = [HERO_DATA.headlineMain, HERO_DATA.headlineAlt];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [headlines.length]);

  const scrollToExplore = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#121316]/10 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFC107]/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#1CA778]/10 rounded-full blur-3xl pointer-events-none -ml-32" />

      {/* Decorative Overlapping Bauhaus Geometries */}
      <div className="absolute top-24 right-1/3 w-28 h-28 rounded-full border-4 border-[#1CA778]/20 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 border-4 border-[#C85A32]/20 rotate-45 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Bauhaus Identity Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#121316]/10 shadow-xs mb-8">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1CA778]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFC107]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5343A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#1C61C4]" />
              </div>
              <span className="tracker-tag text-[#121316] text-[11px] font-bold">
                {HERO_DATA.eyebrow}
              </span>
            </div>

            {/* Alternating Hero Headline with Anton Typography */}
            <div className="min-h-[140px] sm:min-h-[180px] lg:min-h-[200px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={headlineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-anton text-huge text-[#121316] uppercase tracking-tight leading-[0.92]"
                >
                  {headlineIndex === 0 ? (
                    <>
                      EGYPT'S LEADING <br />
                      <span className="text-[#C85A32] inline-block">
                        POP-UP SOCIETY.
                      </span>
                    </>
                  ) : (
                    <>
                      WHERE LOCAL <br />
                      <span className="text-[#1CA778] inline-block">
                        BRANDS GROW.
                      </span>
                    </>
                  )}
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-[#5C5E66] font-normal leading-relaxed max-w-xl">
              {HERO_DATA.subheadline}
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToExplore}
                className="px-8 py-4 rounded-full bg-[#121316] text-[#FBF9F5] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#C85A32] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>{HERO_DATA.ctaPrimary}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenContact('Brand / Partner Collaboration')}
                className="px-8 py-4 rounded-full bg-white border-2 border-[#121316] text-[#121316] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#121316] hover:text-white transition-all duration-300 shadow-sm flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>{HERO_DATA.ctaSecondary}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Hero Visual: Authentic Event Image with Official Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#121316]/10 shadow-2xl bg-white group">
              <div className="aspect-[4/5] relative overflow-hidden bg-stone-100">
                <img
                  src="/extracted_images/p1_img1.jpeg"
                  alt="Bazarna Pop-Up Society Festival Crowd"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/images/real_hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/25 to-transparent opacity-90" />
              </div>

              {/* Official Logo Floating Badge */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#121316]/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/bazarna_logo_icon.png"
                    alt="Bazarna Official"
                    className="h-9 w-9 rounded-md object-contain shadow-xs"
                  />
                  <div className="border-l border-gray-200 pl-3">
                    <div className="text-[10px] font-mono font-bold text-[#8E9099] uppercase">ESTABLISHED</div>
                    <div className="text-xs font-bold text-[#121316]">2010 in Cairo</div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Metrics */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                  <span className="tracker-tag text-[#C85A32]">PLATFORM REACH</span>
                  <span className="font-mono text-xs font-bold text-[#1CA778]">20,000+ Brands</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-[#121316] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFC107]" />
                    <span>25K+ Visitors / Event</span>
                  </div>
                  <div className="text-[#121316] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#1CA778]" />
                    <span>Marina Marassi Retail</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex items-center justify-between border-t border-[#121316]/10 relative z-10 text-xs text-[#8E9099]">
        <div className="flex items-center gap-6">
          <span className="font-mono font-bold text-[#121316]">20,000+ BRANDS</span>
          <span className="hidden sm:inline">•</span>
          <span className="font-mono font-bold text-[#121316] hidden sm:inline">25,000+ VISITORS / EVENT</span>
          <span className="hidden sm:inline">•</span>
          <span className="font-mono font-bold text-[#121316] hidden md:inline">EGP 8.5M SUMMER RETAIL</span>
        </div>

        <button
          onClick={scrollToExplore}
          className="flex items-center gap-1 text-[#121316] hover:text-[#C85A32] font-semibold transition-colors cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
