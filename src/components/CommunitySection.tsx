import React from 'react';
import { COMMUNITY_SECTION } from '../data/bazarnaData';
import { Check, ArrowUpRight, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface CommunitySectionProps {
  onOpenContact: (topic?: string) => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onOpenContact }) => {
  const { pillars } = COMMUNITY_SECTION;

  const celebrityPhotos = [
    { img: "/extracted_images/p63_img1.jpeg", caption: "Celebrities & Creatives Supporting Local Brands" },
    { img: "/extracted_images/p64_img1.jpeg", caption: "Authentic Cultural Endorsements Since 2021" },
    { img: "/extracted_images/p65_img1.jpeg", caption: "Local Designers Meeting Public Figures" },
    { img: "/extracted_images/p66_img1.jpeg", caption: "High-Profile Shoppers Championing Made in Egypt" },
    { img: "/extracted_images/p67_img1.jpeg", caption: "Creative Community Connections at Scale" },
  ];

  return (
    <section id="community" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#121316]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">COMMUNITY & CULTURE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-anton text-huge text-[#121316] uppercase leading-[0.95]">
              OUR BIGGEST PRODUCT <br />
              <span className="text-[#C85A32]">IS COMMUNITY.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-[#5C5E66] text-base leading-relaxed">
            {COMMUNITY_SECTION.intro}
          </div>
        </div>

        {/* 4 Community Network Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-[#121316]/10 hover:border-[#C85A32]/40 transition-all duration-300 shadow-sm"
            >
              <div className="font-anton text-2xl text-[#C85A32] mb-3">{pillar.count}</div>
              <h3 className="font-anton text-xl text-[#121316] mb-2 uppercase tracking-wide">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-[#5C5E66] leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Celebrities & Cultural Figures Shopping Local from PDF Page 63-68 */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#121316]/10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="tracker-tag text-[#FFC107]">CULTURAL REACH</span>
              <h3 className="font-anton text-3xl sm:text-4xl text-[#121316] mt-1 uppercase">
                Celebrities & Tastemakers Shopping Local
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5C5E66] max-w-sm">
              Since 2021, Bazarna has been the primary destination where Egypt's leading actors, musicians, and creatives actively discover and shop homegrown labels.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {celebrityPhotos.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-[#121316]/10 relative group aspect-[3/4] bg-stone-100"
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/images/real_community.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-[11px] leading-tight font-medium">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
