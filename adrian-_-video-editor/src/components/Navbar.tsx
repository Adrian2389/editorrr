import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'work', 'about', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-zinc-800/80 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-white font-bold tracking-[0.2em] text-base sm:text-lg hover:text-zinc-200 transition-colors"
        >
          ADRIAN
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-${link.id}`}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-xs tracking-[0.18em] uppercase transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-white font-normal'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:block">
          <button
            id="nav-cta-btn"
            onClick={onOpenContact}
            className="px-5 py-2 rounded-full border border-zinc-500 hover:border-white text-zinc-100 hover:text-white text-xs tracking-[0.18em] uppercase font-semibold transition-all duration-300 hover:bg-white/5 active:scale-95 cursor-pointer"
          >
            LET'S WORK
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            id="mobile-contact-btn"
            onClick={onOpenContact}
            className="px-3.5 py-1.5 rounded-full border border-zinc-600 text-zinc-200 text-[11px] tracking-wider uppercase font-medium"
          >
            LET'S WORK
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#0a0a0e]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 transition-all duration-300"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm tracking-widest uppercase py-2 transition-colors ${
                  activeSection === link.id ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
