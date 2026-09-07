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

        {/* Year-by-Year Visitor Growth Progression — Redesigned High-End Editorial Chart & Milestone Timeline */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C85A32]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Header & Overview Badges */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/10 mb-8 gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#1CA778] animate-pulse" />
                <span className="tracker-tag text-[#FFC107]">AUDIENCE ACCELERATION</span>
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wide">
                Annual Visitor Growth Progression (2021 – 2025)
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Exponential trajectory backed by expanding flagship destinations and community retention.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#1CA778]/10 text-xs text-[#1CA778] border border-[#1CA778]/30 font-mono font-bold">
                <TrendingUp className="w-4 h-4" />
                <span>+400% Cumulative Surge</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FFC107]/10 text-xs text-[#FFC107] border border-[#FFC107]/30 font-mono font-bold">
                <span>200K+ Annual Peak</span>
              </div>
            </div>
          </div>

          {/* Interactive SVG Area & Trajectory Chart */}
          <div className="relative mb-8 pt-4 pb-2 px-2 z-10">
            <div className="w-full h-44 sm:h-56 relative">
              <svg
                viewBox="0 0 1000 240"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  {/* Linear Gradient for Area Fill */}
                  <linearGradient id="growthAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C85A32" stopOpacity="0.45" />
                    <stop offset="50%" stopColor="#FFC107" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#1CA778" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Gradient for the Stroke Line */}
                  <linearGradient id="growthLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C85A32" />
                    <stop offset="40%" stopColor="#FFC107" />
                    <stop offset="100%" stopColor="#1CA778" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Grid Guidelines */}
                <line x1="80" y1="50" x2="920" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="80" y1="115" x2="920" y2="115" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="80" y1="180" x2="920" y2="180" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                {/* Area Fill */}
                <motion.path
                  d="M 80 190 C 180 190, 190 125, 290 125 C 390 125, 400 90, 500 90 C 600 90, 610 65, 710 65 C 810 65, 820 28, 920 28 L 920 220 L 80 220 Z"
                  fill="url(#growthAreaGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                />

                {/* Stroke Line */}
                <motion.path
                  d="M 80 190 C 180 190, 190 125, 290 125 C 390 125, 400 90, 500 90 C 600 90, 610 65, 710 65 C 810 65, 820 28, 920 28"
                  fill="none"
                  stroke="url(#growthLineGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isVisible ? 1 : 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Interactive Glowing Nodes */}
                {[
                  { cx: 80, cy: 190, year: "2021", count: "50,000+" },
                  { cx: 290, cy: 125, year: "2022", count: "120,000+" },
                  { cx: 500, cy: 90, year: "2023", count: "150,000+" },
                  { cx: 710, cy: 65, year: "2024", count: "170,000+" },
                  { cx: 920, cy: 28, year: "2025", count: "200,000+" },
                ].map((node, i) => (
                  <g key={i}>
                    {/* Outer Pulsing Ring */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="10"
                      fill="none"
                      stroke={i === 4 ? "#1CA778" : i === 0 ? "#C85A32" : "#FFC107"}
                      strokeOpacity="0.4"
                      className="animate-ping"
                      style={{ animationDuration: '3s', animationDelay: `${i * 0.4}s` }}
                    />
                    {/* Inner Node */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="6"
                      fill="#121316"
                      stroke={i === 4 ? "#1CA778" : i === 0 ? "#C85A32" : "#FFC107"}
                      strokeWidth="3"
                    />
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* 5 Progression Milestone Cards (Swipeable on Mobile, 5-col Grid on Desktop) */}
          <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0 relative z-10">
            {[
              {
                year: "2021",
                visitors: "50,000+",
                surge: "Baseline Cohort",
                surgeColor: "text-gray-400 bg-white/5 border-white/10",
                desc: "Post-pandemic revival across flagship pop-up activations.",
                percent: 25,
                accent: "#C85A32",
              },
              {
                year: "2022",
                visitors: "120,000+",
                surge: "+140% YoY Surge",
                surgeColor: "text-[#FFC107] bg-[#FFC107]/10 border-[#FFC107]/30",
                desc: "Multi-destination scaling & expanded vendor curation.",
                percent: 60,
                accent: "#FF9800",
              },
              {
                year: "2023",
                visitors: "150,000+",
                surge: "+25% YoY Growth",
                surgeColor: "text-[#FFC107] bg-[#FFC107]/10 border-[#FFC107]/30",
                desc: "Permanent retail at Marina Marassi & seasonal lifestyle hubs.",
                percent: 75,
                accent: "#FFC107",
              },
              {
                year: "2024",
                visitors: "170,000+",
                surge: "+13% YoY Growth",
                surgeColor: "text-[#1CA778] bg-[#1CA778]/10 border-[#1CA778]/30",
                desc: "District 5 / Marakez urban activations & peak footfall density.",
                percent: 85,
                accent: "#4CAF50",
              },
              {
                year: "2025",
                visitors: "200,000+",
                surge: "Target Scale",
                surgeColor: "text-[#1CA778] bg-[#1CA778]/15 border-[#1CA778]/40",
                desc: "Regional MENA expansion & year-round ecosystem reach.",
                percent: 100,
                accent: "#1CA778",
              },
            ].map((item, idx) => (
              <div
                key={item.year}
                className="w-[72vw] max-w-[260px] shrink-0 sm:w-auto sm:shrink snap-center p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-anton text-lg text-gray-300 group-hover:text-white transition-colors">
                      {item.year}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${item.surgeColor}`}>
                      {item.surge}
                    </span>
                  </div>

                  <div className="font-anton text-3xl sm:text-3xl text-[#FBF9F5] group-hover:text-[#FFC107] transition-colors mb-2 tracking-tight">
                    {item.visitors}
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Progress bar indicator */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${item.percent}%` : '10%',
                        backgroundColor: item.accent,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swiper Hint */}
          <div className="mt-4 flex sm:hidden items-center justify-center gap-1.5 text-[11px] text-gray-400 font-mono">
            <span>← Swipe to explore annual timeline →</span>
          </div>
        </div>
      </div>
    </section>
  );
};
