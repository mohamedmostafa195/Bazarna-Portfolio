import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const BrandsMarquee: React.FC = () => {
  const brands = [
    {
      name: "Jude Benhalim",
      cat: "Fine Jewelry",
      logo: "/brand_logos/jude_benhalim.png"
    },
    {
      name: "Sara Elemary",
      cat: "Ready-to-Wear",
      logo: "/brand_logos/sara_elemary.png"
    },
    {
      name: "Nile Eyewear",
      cat: "Designer Eyewear",
      logo: "/brand_logos/nile_eyewear.png"
    },
    {
      name: "UP•FUSE",
      cat: "Sustainable Fashion",
      logo: "/brand_logos/upfuse.png"
    },
    {
      name: "NOTFOUND",
      cat: "Streetwear & Apparel",
      logo: "/brand_logos/notfound.png"
    },
    {
      name: "Nesaa",
      cat: "Women's Fashion",
      logo: "/brand_logos/nesaa.png"
    },
    {
      name: "JUVÉNILE",
      cat: "Contemporary Wear",
      logo: "/brand_logos/juvenile.png"
    },
    {
      name: "Palma Cairo",
      cat: "Leather Goods & Bags",
      logo: "/brand_logos/palma.png"
    },
    {
      name: "Fazzali",
      cat: "Lifestyle Apparel",
      logo: "/brand_logos/fazzali.png"
    },
    {
      name: "MYNE",
      cat: "Curated Fashion",
      logo: "/brand_logos/myne.png"
    }
  ];

  // Repeat for continuous seamless loop
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-[#121316] text-[#FBF9F5] border-b border-white/10 overflow-hidden relative">
      {/* Subtle Glow Behind Marquee */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#FFC107] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracker-tag">BRANDS THAT GREW WITH US</span>
        </div>
        <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          THE BRANDS. THE STORIES. THE GROWTH.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          Over 15 years, Bazarna has been the primary launching pad and commercial accelerator for Egypt's top fashion, design, and lifestyle labels.
        </p>
      </div>

      {/* Single Line Marquee Row */}
      <div className="relative flex overflow-x-hidden py-4">
        {/* Left & Right gradient fade masks for smooth aesthetics */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#121316] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#121316] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 shrink-0 items-center"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        >
          {marqueeItems.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="px-6 py-4 rounded-2xl bg-white flex flex-col items-center justify-center h-24 sm:h-28 w-52 sm:w-60 shadow-lg border border-white/20 hover:border-[#C85A32] hover:scale-105 hover:shadow-2xl transition-all duration-300 shrink-0 cursor-pointer group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 sm:max-h-14 max-w-[150px] sm:max-w-[170px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-108"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

