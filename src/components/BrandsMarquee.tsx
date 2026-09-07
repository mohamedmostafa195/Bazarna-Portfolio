import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const BrandsMarquee: React.FC = () => {
  const brandsRow1 = [
    { name: "OKHTEIN", cat: "Luxury Leather", highlight: "From Cairo to International Runways" },
    { name: "SABRY MAROUF", cat: "Artisanal Accessories", highlight: "Fine Jewelry & Craftsmanship" },
    { name: "ZAAM DESIGNS", cat: "Contemporary Bags", highlight: "Egyptian Leather Heritage" },
    { name: "INCH", cat: "Streetwear", highlight: "Youth Culture Pioneer" },
    { name: "UNAI", cat: "Resortwear", highlight: "Summer Collection Flagship" },
    { name: "KAI COLLECTIONS", cat: "Swimwear & Lifestyle", highlight: "Mediterranean Aesthetics" },
    { name: "NADA ZEIDAN", cat: "Fine Jewelry", highlight: "Bespoke Egyptian Gems" },
    { name: "PALM HILLS MERCH", cat: "Lifestyle Apparel", highlight: "Collaborative Lines" },
  ];

  const brandsRow2 = [
    { name: "THE GYM STORE", cat: "Athleisure", highlight: "High-Performance Activewear" },
    { name: "NOT YOUR STANDARD", cat: "Footwear", highlight: "Gen-Z Trendsetter" },
    { name: "URBAN NOMAD", cat: "Apparel", highlight: "Conscious Tailoring" },
    { name: "MAISON 69 CURATED", cat: "Concept Fashion", highlight: "Selected Showcase" },
    { name: "B.ORIGINALS", cat: "Casual Chic", highlight: "High-Velocity Turnover" },
    { name: "SELA RESORT", cat: "Linen & Resort", highlight: "North Coast Essential" },
    { name: "INDIGO STUDIO", cat: "Ceramics & Home", highlight: "Artisanal Pottery" },
    { name: "VELA ATHLETICS", cat: "Performance Wear", highlight: "BeFit Partner Brand" },
  ];

  return (
    <section className="py-20 bg-[#121316] text-[#FBF9F5] border-b border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#FFC107] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracker-tag">20,000+ BRANDS HOSTED</span>
        </div>
        <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          THE BRANDS. THE STORIES. THE GROWTH.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          Over 15 years, Bazarna has been the primary launching pad and commercial accelerator for Egypt's top fashion, design, and lifestyle labels.
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative flex overflow-x-hidden mb-6">
        <motion.div
          className="flex gap-6 shrink-0"
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        >
          {[...brandsRow1, ...brandsRow1].map((b, i) => (
            <div
              key={i}
              className="px-8 py-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C85A32] hover:bg-white/[0.08] transition-all duration-300 shrink-0 cursor-default group"
            >
              <div className="font-anton text-2xl text-white group-hover:text-[#FFC107] transition-colors tracking-wide">
                {b.name}
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 mt-1">
                <span className="text-[#C85A32]">•</span>
                <span>{b.cat}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Reverse Direction) */}
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex gap-6 shrink-0"
          animate={{ x: [-1200, 0] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          {[...brandsRow2, ...brandsRow2].map((b, i) => (
            <div
              key={i}
              className="px-8 py-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#1CA778] hover:bg-white/[0.08] transition-all duration-300 shrink-0 cursor-default group"
            >
              <div className="font-anton text-2xl text-white group-hover:text-[#1CA778] transition-colors tracking-wide">
                {b.name}
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 mt-1">
                <span className="text-[#1CA778]">•</span>
                <span>{b.cat}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
