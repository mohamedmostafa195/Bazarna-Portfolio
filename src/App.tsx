import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { StoryTimeline } from './components/StoryTimeline';
import { VisionMission } from './components/VisionMission';
import { DifferenceSection } from './components/DifferenceSection';
import { StatsSection } from './components/StatsSection';
import { EcosystemSection } from './components/EcosystemSection';
import { PopUpConcepts } from './components/PopUpConcepts';
import { EventHighlights } from './components/EventHighlights';
import { RetailSection } from './components/RetailSection';
import { ServicesSection } from './components/ServicesSection';
import { PartnershipsSection } from './components/PartnershipsSection';
import { BrandsMarquee } from './components/BrandsMarquee';
import { CommunitySection } from './components/CommunitySection';
import { VolunteersSection } from './components/VolunteersSection';
import { FounderSection } from './components/FounderSection';
import { PressSection } from './components/PressSection';
import { FutureExpansionSection } from './components/FutureExpansionSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState<string | undefined>();

  const handleOpenContact = (topic?: string) => {
    setContactTopic(topic);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#121316] selection:bg-[#C85A32] selection:text-white font-poppins antialiased">
      {/* 01 — Sticky Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Landing Flow */}
      <main>
        {/* 02 — Cinematic Hero Section */}
        <Hero onOpenContact={() => handleOpenContact('Explore Bazarna')} />

        {/* 03 — About Bazarna */}
        <AboutSection onOpenContact={() => handleOpenContact('Incubation Program')} />

        {/* 04 — Our Story (Interactive Timeline) */}
        <StoryTimeline />

        {/* 05 — Vision & Mission */}
        <VisionMission />

        {/* 06 — What Sets Us Apart */}
        <DifferenceSection />

        {/* 07 — Impact & Milestones */}
        <StatsSection />

        {/* 08 — Bazarna Ecosystem */}
        <EcosystemSection onOpenContact={handleOpenContact} />

        {/* 09 — Pop-Up Concepts (Playgrounds) */}
        <PopUpConcepts onOpenContact={handleOpenContact} />

        {/* 09.5 — Event Highlights & Live Video Moments */}
        <EventHighlights />

        {/* 10 — Retail Concepts (The Store & The Motion) */}
        <RetailSection onOpenContact={handleOpenContact} />

        {/* 11 — Incubation Services */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* 12 & 13 — Strategic Partnerships & Visual Case Studies */}
        <PartnershipsSection onOpenContact={handleOpenContact} />

        {/* 14 — Brands That Grew With Us (Marquee) */}
        <BrandsMarquee />

        {/* 15 — Community Network & Celebrities Shopping Local */}
        <CommunitySection onOpenContact={handleOpenContact} />

        {/* 16 — Volunteers & Youth Program */}
        <VolunteersSection onOpenContact={handleOpenContact} />

        {/* 17 — Meet the Founder (Yasmine Medhat) */}
        <FounderSection onOpenContact={handleOpenContact} />

        {/* 18 — Press & Media Recognition */}
        <PressSection />

        {/* 19 — 2026 Retail Expansion */}
        <FutureExpansionSection onOpenContact={handleOpenContact} />

        {/* 20 — Final Call to Action */}
        <FinalCTA onOpenContact={handleOpenContact} />
      </main>

      {/* 21 — Comprehensive Footer */}
      <Footer onOpenContact={() => handleOpenContact('Footer Inquiries')} />

      {/* Global Interactive Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        defaultTopic={contactTopic}
      />
    </div>
  );
}
