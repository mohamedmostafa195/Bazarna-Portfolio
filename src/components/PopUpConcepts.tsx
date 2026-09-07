import React, { useState } from 'react';
import { POPUP_CONCEPTS } from '../data/bazarnaData';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PopUpConceptsProps {
  onOpenContact: (conceptName?: string) => void;
}

export const PopUpConcepts: React.FC<PopUpConceptsProps> = ({ onOpenContact }) => {
  const [selectedConceptId, setSelectedConceptId] = useState<string>(POPUP_CONCEPTS[0].id);

  const conceptImages: Record<string, string> = {
    market: "/extracted_images/p20_img3.jpeg",
    youth: "/extracted_images/p21_img3.jpeg",
    outlet: "/extracted_images/p22_img3.jpeg",
    expo: "/extracted_images/p23_img3.jpeg",
    showcase: "/extracted_images/p24_img3.jpeg",
    showroom: "/extracted_images/p25_img3.jpeg",
    bykidz: "/extracted_images/p26_img3.jpeg",
  };

  const activeConcept = POPUP_CONCEPTS.find((c) => c.id === selectedConceptId) || POPUP_CONCEPTS[0];

  return (
    <section id="popups" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#121316]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with exact prompt Title & Subtitle */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">POP-UP CONCEPTS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-anton text-huge text-[#121316] uppercase leading-[0.95]">
              OUR PLAYGROUNDS.
            </h2>
            <p className="font-poppins text-lg font-bold text-[#C85A32] mt-2 uppercase tracking-tight">
              Different experiences. One ecosystem.
            </p>
          </div>
          <p className="text-sm sm:text-base text-[#5C5E66] max-w-md">
            Purpose-built experiential formats engineered for specific demographics, seasonal liquidity cycles, and brand maturation stages.
          </p>
        </div>

        {/* Concept Pill Selectors */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none mb-10 border-b border-[#121316]/10">
          {POPUP_CONCEPTS.map((concept) => {
            const isSelected = concept.id === selectedConceptId;
            return (
              <button
                key={concept.id}
                onClick={() => setSelectedConceptId(concept.id)}
                className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#121316] text-[#FBF9F5] shadow-md scale-105'
                    : 'bg-white text-[#5C5E66] border border-[#121316]/10 hover:text-[#121316] hover:bg-[#F3EFE6]'
                }`}
              >
                {concept.name}
              </button>
            );
          })}
        </div>

        {/* Detailed Immersive Showcase Card */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#121316]/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative overflow-hidden">
          
          {/* Left / Concept Details */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 rounded-full bg-[#FDF3EE] text-[#C85A32] text-xs font-bold uppercase tracking-wider border border-[#C85A32]/20">
                {activeConcept.category}
              </span>
              <span className="text-xs text-[#8E9099] font-mono">
                {activeConcept.specs}
              </span>
            </div>

            <h3 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-[#121316] mb-3 uppercase">
              {activeConcept.name}
            </h3>

            <div className="text-lg font-bold text-[#C85A32] mb-6">
              {activeConcept.tagline}
            </div>

            <p className="text-base sm:text-lg text-[#5C5E66] leading-relaxed mb-8">
              {activeConcept.description}
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {activeConcept.highlights.map((h, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#121316]/5 flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#1CA778]/10 text-[#1CA778] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-[#121316]">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-[#121316]/10">
              <button
                onClick={() => onOpenContact(`Explore ${activeConcept.name}`)}
                className="px-8 py-4 rounded-full bg-[#121316] text-[#FBF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#C85A32] transition-colors flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
              >
                <span>Explore {activeConcept.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right / Large Immersive Photo with Real PDF Picture */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-[#121316]/10 shadow-xl bg-stone-100 relative group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                key={activeConcept.id}
                src={conceptImages[activeConcept.id] || activeConcept.image}
                alt={activeConcept.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "/images/hero_market.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/20 to-transparent opacity-85" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="tracker-tag text-[#FFC107] block mb-1">CURATION STANDARD</span>
                <p className="text-sm font-semibold italic text-gray-200">
                  "{activeConcept.editorialNote}"
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
