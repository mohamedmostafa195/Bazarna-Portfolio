import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Story', href: '#story' },
    { label: 'Pop-Ups', href: '#popups' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Retail', href: '#retail' },
    { label: 'Services', href: '#services' },
    { label: 'Partnerships', href: '#partnerships' },
    { label: 'Community', href: '#community' },
    { label: 'Founder', href: '#founder' },
  ];

  useEffect(() => {
    const sectionIds = ['about', 'story', 'popups', 'highlights', 'retail', 'services', 'partnerships', 'community', 'founder'];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if near bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('founder');
        return;
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 180;

      let current = '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
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
            : 'bg-[#FBF9F5]/80 backdrop-blur-xs py-4 lg:py-5 border-b border-[#121316]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Real Bazarna Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('');
            }}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            aria-label="Bazarna Home"
          >
            <div className="h-9 sm:h-11 flex items-center gap-3">
              <img
                src="/images/bazarna_logo_icon.png"
                alt="BAZARNA Logo"
                className="h-full w-auto object-contain rounded-md shadow-xs transition-transform duration-300 group-hover:scale-105"
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

          {/* Desktop Navigation Links with Clean Underline Indicator */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-xs font-bold uppercase tracking-wider transition-all duration-200 relative py-2 cursor-pointer ${
                    isActive
                      ? 'text-[#C85A32]'
                      : 'text-[#343741] hover:text-[#C85A32]'
                  }`}
                >
                  <span>{item.label}</span>

                  {/* Active Underline matching user reference */}
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C85A32] rounded-full shadow-xs" />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C85A32] transition-all duration-200 group-hover:w-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenContact('General Inquiry')}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#121316] text-[#FBF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#C85A32] transition-all duration-300 shadow-xs hover:shadow active:scale-95 cursor-pointer"
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

            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`text-sm font-bold uppercase tracking-wide py-2.5 px-4 rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-[#C85A32] bg-[#C85A32]/10 border-l-4 border-[#C85A32] font-black'
                        : 'text-[#121316] hover:text-[#C85A32] hover:bg-black/[0.03]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#C85A32]" />}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#121316]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-full bg-[#121316] text-[#FBF9F5] font-bold text-xs uppercase tracking-wider hover:bg-[#C85A32] flex items-center justify-center gap-2 cursor-pointer"
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

