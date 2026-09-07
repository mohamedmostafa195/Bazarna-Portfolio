import React from 'react';
import { SERVICES_SECTION } from '../data/bazarnaData';
import { Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesSectionProps {
  onOpenContact: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] border-b border-[#121316]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">INCUBATION SERVICES</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-anton text-huge text-[#121316] uppercase max-w-4xl leading-[0.95]">
              WE DON'T JUST GIVE BRANDS SPACE. <br />
              <span className="text-[#C85A32]">WE HELP THEM GROW.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C5E66] max-w-md">
            {SERVICES_SECTION.intro}
          </p>
        </div>

        {/* 4 Service Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_SECTION.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#121316]/10 hover:border-[#C85A32]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#121316]/10 mb-6">
                  <span className="tracker-tag text-[#C85A32]">{service.category}</span>
                  <span className="font-anton text-lg text-[#8E9099]">0{idx + 1}</span>
                </div>

                <h3 className="font-anton text-2xl sm:text-3xl text-[#121316] mb-3 group-hover:text-[#C85A32] transition-colors uppercase">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[#5C5E66] leading-relaxed mb-6">
                  {service.summary}
                </p>

                <div className="space-y-2.5 mb-8">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#121316]">
                      <div className="w-4 h-4 rounded-full bg-[#1CA778]/15 text-[#1CA778] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#121316]/10 flex items-center justify-between">
                <span className="text-xs text-[#8E9099] font-medium">Bespoke Acceleration</span>
                <button
                  onClick={() => onOpenContact(`Service Inquiry - ${service.title}`)}
                  className="text-xs font-bold uppercase tracking-wider text-[#121316] hover:text-[#C85A32] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Request Advisory</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
