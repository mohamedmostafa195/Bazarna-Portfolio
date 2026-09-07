import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { FOOTER_DATA } from '../data/bazarnaData';

interface NavbarProps {
  onOpenContact: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Story', href: '#story' },
    { label: 'Pop-Ups', href: '#popups' },
    { label: 'Retail', href: '#retail' },
    { label: 'Services', href: '#services' },
    { label: 'Partnerships', href: '#partnerships' },
    { label: 'Community', href: '#community' },
    { label: 'Founder', href: '#founder' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md py-3 shadow-md border-b border-[#121316]/10'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Real Bazarna Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Bazarna Home"
          >
            <div className="h-9 sm:h-11 flex items-center gap-3">
              <img
                src="/images/bazarna_logo_icon.png"
                alt="BAZARNA Logo"
                className="h-full w-auto object-contain rounded-md shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-[#121316] leading-none">
                  BAZARNA
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#8E9099] uppercase font-bold mt-0.5">
                  POP-UP SOCIETY
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-xs font-bold uppercase tracking-wider text-[#343741] hover:text-[#C85A32] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C85A32] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenContact('General Inquiry')}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#121316] text-[#FBF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#C85A32] transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/80 border border-[#121316]/10 text-[#121316] hover:bg-black/5 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#121316]/70 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FBF9F5] p-8 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#121316]/10">
              <div className="flex items-center gap-3">
                <img
                  src="/images/bazarna_logo_icon.png"
                  alt="BAZARNA"
                  className="h-8 w-auto object-contain rounded"
                />
                <div className="flex flex-col">
                  <span className="font-heading font-black text-lg tracking-tight text-[#121316] leading-none">
                    BAZARNA
                  </span>
                  <span className="font-mono text-[8px] tracking-widest text-[#8E9099] uppercase font-bold">
                    POP-UP SOCIETY
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-black/5 text-[#121316]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-base font-bold uppercase tracking-wide text-[#121316] hover:text-[#C85A32] py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#121316]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-full bg-[#121316] text-[#FBF9F5] font-bold text-xs uppercase tracking-wider hover:bg-[#C85A32] flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="mt-4 text-center text-xs text-[#8E9099]">
              Egypt's Pop-Up Growth Platform • Since 2010
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
