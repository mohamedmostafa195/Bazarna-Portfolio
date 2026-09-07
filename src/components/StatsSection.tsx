import React, { useState, useEffect, useRef } from 'react';
import { STATS_DATA, VISITOR_GROWTH } from '../data/bazarnaData';
import { TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#121316] text-[#FBF9F5] relative overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1CA778]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C85A32]" />
              <span className="tracker-tag text-[#C85A32]">BAZARNA BY THE NUMBERS</span>
            </div>
            <h2 className="font-anton text-huge text-white uppercase leading-[0.95]">
              VERIFIABLE TRACTION <br />
              <span className="text-[#C85A32]">AT PROVEN SCALE</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-md">
            All data strictly backed by 15 years of consistent execution, authentic footfall, and measurable sales volume.
          </p>
        </div>

        {/* 4 Quantitative Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#C85A32]/50 transition-all duration-300 group shadow-lg"
            >
              <div className="tracker-tag text-[#8E9099] mb-4">METRIC 0{idx + 1}</div>
              <div className="font-anton text-5xl sm:text-6xl font-normal text-[#FBF9F5] group-hover:text-[#FFC107] transition-colors mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="font-poppins font-bold text-sm sm:text-base text-gray-200 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400 leading-relaxed font-mono">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Reach & Media Impact Row from PDF Page 16 & 17 */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-gray-400">MONTHLY ACCOUNT REACH</div>
              <div className="font-anton text-2xl text-[#FFC107]">2X — 4X FOLLOWERS</div>
            </div>
            <Sparkles className="w-5 h-5 text-[#FFC107]" />
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-gray-400">CAMPAIGN REACH / EVENT</div>
              <div className="font-anton text-2xl text-[#1CA778]">4X — 8X FOLLOWERS</div>
            </div>
            <TrendingUp className="w-5 h-5 text-[#1CA778]" />
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-gray-400">EXHIBITOR DEMAND</div>
              <div className="font-anton text-2xl text-[#C85A32]">1,500+ ANNUAL REQUESTS</div>
            </div>
            <Sparkles className="w-5 h-5 text-[#C85A32]" />
          </div>
        </div>

        {/* Year-by-Year Visitor Growth Progression */}
        <div className="mt-12 sm:mt-16 p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <span className="tracker-tag text-[#FFC107]">AUDIENCE EXPANSION</span>
              <h3 className="font-anton text-2xl sm:text-3xl text-white mt-1 uppercase">
                Annual Visitor Growth Progression (2021 – 2025)
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10 font-mono">
              <TrendingUp className="w-3.5 h-3.5 text-[#1CA778]" />
              <span>400% Cumulative Footfall Surge</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 pt-4">
            {VISITOR_GROWTH.map((item) => (
              <div key={item.year} className="flex flex-col justify-end">
                <div className="text-right mb-2 font-anton text-lg text-[#FFC107]">
                  {item.visitors}
                </div>
                {/* Visual Progress Bar */}
                <div className="w-full bg-white/10 h-28 sm:h-36 rounded-xl p-1.5 flex flex-col justify-end">
                  <div
                    className="w-full bg-gradient-to-t from-[#C85A32] to-[#FFC107] rounded-lg transition-all duration-1000 ease-out"
                    style={{
                      height: isVisible ? `${item.growthPercentage}%` : '10%'
                    }}
                  />
                </div>
                <div className="text-center mt-3 font-anton text-base text-gray-300">
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
