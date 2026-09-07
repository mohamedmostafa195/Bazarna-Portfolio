import React from 'react';
import { FOOTER_DATA } from '../data/bazarnaData';
import { ArrowUp, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const instagramHandles = [
    { handle: "@bazarnasociety", label: "Flagship Society", href: "https://instagram.com/bazarnasociety" },
    { handle: "@byouthbazarna", label: "Gen Z & Youth Platform", href: "https://instagram.com/byouthbazarna" },
    { handle: "@theshowcasebazarna", label: "Artisanal & Dubai Showcase", href: "https://instagram.com/theshowcasebazarna" },
    { handle: "@thestoreregional", label: "Permanent Retail & Luxury", href: "https://instagram.com/thestoreregional" },
  ];

  return (
    <footer className="bg-[#121316] text-[#FBF9F5] pt-20 pb-12 px-6 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col with Real Official Logo */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-6">
              <img
                src="/images/bazarna_logo_icon.png"
                alt="BAZARNA"
                className="h-10 w-10 object-contain rounded-lg shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tight text-white leading-none">
                  BAZARNA
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#8E9099] uppercase font-bold mt-1">
                  POP-UP SOCIETY
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
              {FOOTER_DATA.description}
            </p>

            {/* Brand Bauhaus Colors */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#1CA778]" title="Bazarna Teal" />
              <span className="w-3 h-3 rounded-full bg-[#FFC107]" title="Bazarna Yellow" />
              <span className="w-3 h-3 rounded-full bg-[#E5343A]" title="Bazarna Red" />
              <span className="w-3 h-3 rounded-full bg-[#1C61C4]" title="Bazarna Blue" />
            </div>

            <div className="text-xs font-mono text-gray-400">
              Cairo, Egypt • Marina Marassi, North Coast • Dubai, UAE
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-3">
            <span className="tracker-tag text-[#FFC107] block mb-6">EXPLORE BAZARNA</span>
            <div className="grid grid-cols-2 gap-2.5">
              {FOOTER_DATA.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs sm:text-sm text-gray-300 hover:text-[#FFC107] transition-colors py-1 cursor-pointer font-medium"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onOpenContact}
                className="text-left text-xs sm:text-sm text-gray-300 hover:text-[#FFC107] transition-colors py-1 cursor-pointer font-medium"
              >
                Work With Us
              </button>
            </div>
          </div>

          {/* Official Social Handles Col */}
          <div className="lg:col-span-5">
            <span className="tracker-tag text-[#FFC107] block mb-6">OFFICIAL INSTAGRAM CHANNELS</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {instagramHandles.map((handleItem) => (
                <a
                  key={handleItem.handle}
                  href={handleItem.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#FFC107]/50 hover:bg-white/[0.08] transition-all block group"
                >
                  <div className="text-xs font-bold text-white group-hover:text-[#FFC107] transition-colors">
                    {handleItem.handle}
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                    {handleItem.label}
                  </div>
                </a>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div>
              <span className="tracker-tag text-gray-400 block mb-2 text-[10px]">STAY IN THE ECOSYSTEM</span>
              {subscribed ? (
                <div className="p-3 rounded-xl bg-[#1CA778]/20 border border-[#1CA778]/40 text-[#1CA778] text-xs font-bold">
                  ✓ Welcome to the Bazarna inner circle.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C85A32]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#121316] transition-colors cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} Bazarna Pop-Up Society. All rights reserved. Made in Egypt.</div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
