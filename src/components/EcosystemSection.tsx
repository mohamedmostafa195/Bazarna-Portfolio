import React, { useState } from 'react';
import { ECOSYSTEM_NODES } from '../data/bazarnaData';
import { Layers, Store, GraduationCap, Sparkles, Network, Users, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface EcosystemSectionProps {
  onOpenContact: (category?: string) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onOpenContact }) => {
  const [activeNodeId, setActiveNodeId] = useState<string>(ECOSYSTEM_NODES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  const activeNode = ECOSYSTEM_NODES.find((n) => n.id === activeNodeId) || ECOSYSTEM_NODES[0];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 noise-bg border-b border-[#121316]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C85A32]" />
          <span className="tracker-tag text-[#C85A32]">THE BAZARNA ECOSYSTEM</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-anton text-huge text-[#121316] uppercase leading-[0.95]">
              MORE THAN POP-UPS.
            </h2>
            <p className="font-poppins text-lg font-semibold text-[#C85A32] mt-2">
              An integrated platform where local brands expose, sell, learn, network, and scale.
            </p>
          </div>
          <p className="text-sm sm:text-base text-[#5C5E66] max-w-md">
            Bazarna is an ecosystem rather than a single event—connecting temporary validation with permanent retail and continuous strategic scaling.
          </p>
        </div>

        {/* Interactive Hub Visual System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 6 Surrounding Ecosystem Nodes */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {ECOSYSTEM_NODES.map((node) => {
              const isActive = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-5 rounded-2xl border text-left flex flex-col justify-between h-36 sm:h-40 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#121316] text-[#FBF9F5] border-[#121316] shadow-xl scale-[1.03]'
                      : 'bg-white text-[#121316] border-[#121316]/10 hover:border-[#C85A32]/40 hover:bg-[#FDF3EE]'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl w-fit ${isActive ? 'bg-[#C85A32] text-white' : 'bg-[#F3EFE6] text-[#C85A32]'}`}>
                    {getIcon(node.icon)}
                  </div>
                  <div>
                    <h3 className="font-anton text-sm uppercase tracking-wide leading-snug">
                      {node.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Central Node Focus Display */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-white border border-[#121316]/10 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1CA778] animate-ping" />
              <span className="tracker-tag text-[#C85A32]">{activeNode.role}</span>
            </div>

            <h3 className="font-anton text-3xl sm:text-4xl text-[#121316] mb-4 uppercase">
              {activeNode.title}
            </h3>

            <p className="text-base sm:text-lg text-[#5C5E66] leading-relaxed mb-8">
              {activeNode.description}
            </p>

            <div className="pt-6 border-t border-[#121316]/10 flex items-center justify-between">
              <span className="text-xs text-[#8E9099] font-semibold uppercase font-mono">Core Bazarna Pillar</span>
              <button
                onClick={() => onOpenContact(`Ecosystem Inquiry - ${activeNode.title}`)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121316] hover:text-[#C85A32] transition-colors cursor-pointer"
              >
                <span>Engage Pillar</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
