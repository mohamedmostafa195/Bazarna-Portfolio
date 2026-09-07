import React, { useState } from 'react';
import { STORY_DATA } from '../data/bazarnaData';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const StoryTimeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const milestoneImages = [
    "/extracted_images/p5_img1.jpeg",
    "/extracted_images/p6_img1.jpeg",
    "/extracted_images/p11_img1.jpeg",
    "/extracted_images/p27_img1.jpeg",
    "/extracted_images/p71_img1.jpeg",
  ];

  return (
    <section id="story" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 noise-bg border-b border-[#121316]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C85A32]" />
              <span className="tracker-tag text-[#C85A32]">OUR STORY • 2010 TO PRESENT</span>
            </div>
            <h2 className="font-anton text-huge text-[#121316] uppercase leading-[0.95]">
              {STORY_DATA.headline}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C5E66] max-w-md">
            {STORY_DATA.intro}
          </p>
        </div>

        {/* Interactive Story Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Timeline Milestone Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {STORY_DATA.milestones.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-[#121316] text-[#FBF9F5] border-[#121316] shadow-xl translate-x-2'
                      : 'bg-white text-[#121316] border-[#121316]/10 hover:border-[#C85A32]/40 hover:bg-[#FDF3EE]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                        isActive ? 'bg-[#C85A32] text-white' : 'bg-[#F3EFE6] text-[#5C5E66]'
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span className={`font-anton text-xl ${isActive ? 'text-[#FFC107]' : 'text-[#8E9099]'}`}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className={`font-poppins font-bold text-base sm:text-lg ${isActive ? 'text-white' : 'text-[#121316]'}`}>
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Chapter Display with Image */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#121316]/10 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-9xl font-anton text-[#121316]/5 select-none pointer-events-none">
              {STORY_DATA.milestones[activeIdx].year.slice(0, 4)}
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF3EE] border border-[#C85A32]/20 text-[#C85A32] text-xs font-bold tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MILESTONE CHAPTER</span>
              </div>

              <div className="font-anton text-4xl sm:text-5xl text-[#C85A32] mb-3">
                {STORY_DATA.milestones[activeIdx].year}
              </div>

              <h3 className="font-anton text-2xl sm:text-3xl text-[#121316] mb-4 uppercase">
                {STORY_DATA.milestones[activeIdx].title}
              </h3>

              <p className="text-base sm:text-lg text-[#5C5E66] leading-relaxed mb-6">
                {STORY_DATA.milestones[activeIdx].description}
              </p>

              {/* Milestone Thumbnail */}
              <div className="h-44 sm:h-52 w-full rounded-2xl overflow-hidden mb-6 relative border border-[#121316]/10">
                <img
                  src={milestoneImages[activeIdx] || "/images/real_story.jpg"}
                  alt={STORY_DATA.milestones[activeIdx].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/real_story.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/60 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white text-xs font-mono font-bold">
                  {STORY_DATA.milestones[activeIdx].tag} ARCHIVE
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#121316]/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#8E9099] uppercase tracking-wider font-mono">
                Chapter {activeIdx + 1} of {STORY_DATA.milestones.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : STORY_DATA.milestones.length - 1))}
                  className="px-4 py-2 rounded-xl border border-[#121316]/10 text-xs font-bold hover:bg-[#121316] hover:text-white transition-colors cursor-pointer"
                >
                  Prev
                </button>
                <button
                  onClick={() => setActiveIdx((prev) => (prev < STORY_DATA.milestones.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-xl border border-[#121316]/10 text-xs font-bold hover:bg-[#121316] hover:text-white transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
