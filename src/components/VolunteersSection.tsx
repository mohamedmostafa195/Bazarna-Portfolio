import React from 'react';
import { COMMUNITY_SECTION } from '../data/bazarnaData';
import { Award, Briefcase, Users2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface VolunteersSectionProps {
  onOpenContact: (topic?: string) => void;
}

export const VolunteersSection: React.FC<VolunteersSectionProps> = ({ onOpenContact }) => {
  const { volunteerProgram } = COMMUNITY_SECTION;

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#121316]/10 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#FFC107]/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#1CA778]/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Volunteer Program Story */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C85A32]" />
              <span className="tracker-tag text-[#C85A32]">ESTABLISHED IN {volunteerProgram.yearStarted}</span>
            </div>

            <h2 className="text-display font-extrabold text-[#121316] uppercase leading-[1.0] mb-6">
              THE BAZARNA <br />
              <span className="text-[#C85A32]">VOLUNTEER INCUBATOR</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5C5E66] leading-relaxed mb-8">
              {volunteerProgram.summary}
            </p>

            {/* Benefit Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {volunteerProgram.benefits.map((benefit, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#121316]/10 shadow-xs flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1CA778]/15 text-[#1CA778] flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#121316] leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenContact('Volunteer Program Application')}
                className="px-8 py-4 rounded-full bg-[#121316] text-[#FBF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#C85A32] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>JOIN THE COMMUNITY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Youth Energy Visual with Real PDF Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden border-2 border-[#121316]/10 shadow-2xl bg-white group">
              <div className="aspect-[4/5] relative overflow-hidden bg-stone-100">
                <img
                  src="/extracted_images/p61_img1.jpeg"
                  alt="Bazarna Youth Volunteer Community"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/images/real_community.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-85" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-[#FFC107] mb-2">
                    <Users2 className="w-3.5 h-3.5" />
                    <span>HANDS-ON LEADERSHIP</span>
                  </div>
                  <h4 className="font-anton text-2xl uppercase tracking-wide">
                    EMPOWERING TOMORROW'S LEADERS
                  </h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Real market exposure, operational mastery, and direct founder networking.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
