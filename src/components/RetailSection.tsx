import React, { useState, useEffect } from 'react';
import { RETAIL_SECTION } from '../data/bazarnaData';
import { MapPin, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RetailSectionProps {
  onOpenContact: (detail?: string) => void;
}

export const RetailSection: React.FC<RetailSectionProps> = ({ onOpenContact }) => {
  const { store, motion: motionLoc, performance } = RETAIL_SECTION;
  
  // The Store Swiper State
  const [activeStoreImg, setActiveStoreImg] = useState(0);
  const [isStorePaused, setIsStorePaused] = useState(false);
  const storeGalleryLength = store.gallery?.length || 1;

  // The Motion Swiper State
  const [activeMotionImg, setActiveMotionImg] = useState(0);
  const [isMotionPaused, setIsMotionPaused] = useState(false);
  const motionGalleryLength = motionLoc.gallery?.length || 1;

  // Auto-play swiper effect for The Store
  useEffect(() => {
    if (isStorePaused || storeGalleryLength <= 1) return;
    const interval = setInterval(() => {
      setActiveStoreImg((prev) => (prev + 1) % storeGalleryLength);
    }, 4000);
    return () => clearInterval(interval);
  }, [isStorePaused, storeGalleryLength]);

  // Auto-play swiper effect for The Motion
  useEffect(() => {
    if (isMotionPaused || motionGalleryLength <= 1) return;
    const interval = setInterval(() => {
      setActiveMotionImg((prev) => (prev + 1) % motionGalleryLength);
    }, 3500);
    return () => clearInterval(interval);
  }, [isMotionPaused, motionGalleryLength]);

  const handleStorePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveStoreImg((prev) => (prev - 1 + storeGalleryLength) % storeGalleryLength);
  };

  const handleStoreNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveStoreImg((prev) => (prev + 1) % storeGalleryLength);
  };

  const handleMotionPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMotionImg((prev) => (prev - 1 + motionGalleryLength) % motionGalleryLength);
  };

  const handleMotionNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMotionImg((prev) => (prev + 1) % motionGalleryLength);
  };

  return (
    <section id="retail" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#121316] text-[#FBF9F5] border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#1CA778]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with exact prompt Headline */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">RETAIL EVOLUTION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-anton text-huge text-white uppercase leading-[0.95]">
              FROM POP-UP TO PERMANENT.
            </h2>
          </div>
          <div className="lg:col-span-4 text-gray-400 text-base leading-relaxed">
            {RETAIL_SECTION.narrative}
          </div>
        </div>

        {/* The Store & The Motion Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* THE STORE — AUTO SWIPER */}
          <div className="rounded-3xl bg-white/5 border border-white/10 hover:border-[#C85A32]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl">
            <div 
              className="aspect-[16/10] relative overflow-hidden bg-stone-900 select-none"
              onMouseEnter={() => setIsStorePaused(true)}
              onMouseLeave={() => setIsStorePaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStoreImg}
                  src={store.gallery ? store.gallery[activeStoreImg].src : store.image}
                  alt="The Store @ Marina Marassi by Emaar"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/the_store_1.jpg";
                  }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/90 via-transparent to-black/30 pointer-events-none" />
              
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#C85A32] text-white text-[10px] font-bold tracking-widest uppercase z-10 shadow-lg">
                LUXURY RETAIL DESTINATION
              </div>

              {/* Prev / Next Controls on Hover */}
              {storeGalleryLength > 1 && (
                <>
                  <button
                    onClick={handleStorePrev}
                    aria-label="Previous Slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-[#C85A32] text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-20 border border-white/10 hover:border-transparent hover:scale-110"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleStoreNext}
                    aria-label="Next Slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-[#C85A32] text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-20 border border-white/10 hover:border-transparent hover:scale-110"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Minimalist Swiper Dots */}
              {storeGalleryLength > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {store.gallery?.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStoreImg(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeStoreImg === idx
                          ? 'w-6 bg-[#C85A32]'
                          : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-anton text-3xl sm:text-4xl text-white mb-2 uppercase">
                  {store.title}
                </h3>
                <div className="text-sm font-semibold text-[#FFC107] mb-4 flex items-center gap-1.5 font-mono">
                  <MapPin className="w-4 h-4" />
                  <span>{store.location} • {store.partner}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {store.description}
                </p>
                <div className="space-y-2 mb-8">
                  {store.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#1CA778] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono">GCC & Global Shopper Base</span>
                <button
                  onClick={() => onOpenContact('Retail Placement - The Store Marina Marassi')}
                  className="text-xs font-bold uppercase tracking-wider text-[#FBF9F5] hover:text-[#C85A32] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Apply for Placement</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* THE MOTION — AUTO SWIPER */}
          <div className="rounded-3xl bg-white/5 border border-white/10 hover:border-[#1CA778]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl">
            <div 
              className="aspect-[16/10] relative overflow-hidden bg-stone-900 select-none"
              onMouseEnter={() => setIsMotionPaused(true)}
              onMouseLeave={() => setIsMotionPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeMotionImg}
                  src={motionLoc.gallery ? motionLoc.gallery[activeMotionImg].src : motionLoc.image}
                  alt="The Motion @ BeFit Marassi"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/the_motion_inside3.jpg";
                  }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/90 via-transparent to-black/30 pointer-events-none" />
              
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#1CA778] text-white text-[10px] font-bold tracking-widest uppercase z-10 shadow-lg">
                ACTIVE & PERFORMANCE
              </div>

              {/* Prev / Next Controls on Hover */}
              {motionGalleryLength > 1 && (
                <>
                  <button
                    onClick={handleMotionPrev}
                    aria-label="Previous Slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-[#1CA778] text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-20 border border-white/10 hover:border-transparent hover:scale-110"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleMotionNext}
                    aria-label="Next Slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-[#1CA778] text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-20 border border-white/10 hover:border-transparent hover:scale-110"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Minimalist Swiper Dots */}
              {motionGalleryLength > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {motionLoc.gallery?.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMotionImg(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeMotionImg === idx
                          ? 'w-6 bg-[#1CA778]'
                          : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-anton text-3xl sm:text-4xl text-white mb-2 uppercase">
                  {motionLoc.title}
                </h3>
                <div className="text-sm font-semibold text-[#1CA778] mb-4 flex items-center gap-1.5 font-mono">
                  <MapPin className="w-4 h-4" />
                  <span>{motionLoc.location} • {motionLoc.partner}</span>
                </div>
                <div className="font-anton text-lg text-[#FFC107] uppercase mb-3">
                  NOT JUST MOTION. PURPOSE.
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {motionLoc.description}
                </p>
                <div className="space-y-2 mb-8">
                  {motionLoc.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#1CA778] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono">25m² High-Conversion Footprint</span>
                <button
                  onClick={() => onOpenContact('Retail Placement - The Motion BeFit')}
                  className="text-xs font-bold uppercase tracking-wider text-[#FBF9F5] hover:text-[#1CA778] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Apply for Placement</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 12 — RETAIL PERFORMANCE SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/15 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div>
              <span className="tracker-tag text-[#FFC107]">THE STORE PERFORMANCE</span>
              <h3 className="font-anton text-3xl sm:text-4xl text-white mt-1 uppercase">
                Summer Season Verified Sales
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm">
              {performance.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <span className="tracker-tag text-gray-400 mb-2">CURATION</span>
              <div className="font-anton text-5xl sm:text-6xl font-normal text-white mb-2">
                {performance.brands}
              </div>
              <div className="text-sm font-semibold text-gray-300 font-poppins">
                {performance.brandsLabel}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <span className="tracker-tag text-gray-400 mb-2">CONVERSION</span>
              <div className="font-anton text-5xl sm:text-6xl font-normal text-[#1CA778] mb-2">
                {performance.orders}
              </div>
              <div className="text-sm font-semibold text-gray-300 font-poppins">
                {performance.ordersLabel}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <span className="tracker-tag text-[#C85A32] mb-2">TOTAL VOLUME</span>
              <div className="font-anton text-5xl sm:text-6xl font-normal text-[#C85A32] mb-2">
                {performance.sales} <span className="text-2xl font-normal text-white">{performance.salesSuffix}</span>
              </div>
              <div className="text-sm font-semibold text-gray-300 font-poppins">
                {performance.salesLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
