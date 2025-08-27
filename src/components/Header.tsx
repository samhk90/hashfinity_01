'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import navigationData from '@/data/navigation.json';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-strong shadow-lg border-b border-white/10' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <nav className="w-screen px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-neon hover-lift animate-pulse-glow group-hover:scale-110 transition-all duration-300">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 font-bold text-xl tracking-wide group-hover:text-blue-600 transition-colors duration-300">
              HASHFINITY
            </span>
            <span className="text-gray-600 text-xs tracking-widest group-hover:text-blue-500 transition-colors duration-300">
              BLOCKCHAIN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigationData.mainNavigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Link
          href={navigationData.ctaButton.href}
          className="hidden lg:block relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-neon hover-lift hover:shadow-neon-hover animate-gradient overflow-hidden group"
        >
          <span className="relative z-10">{navigationData.ctaButton.label}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden mr-3 text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover-lift"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-dark border-t border-gray-700/50 animate-fade-in-up">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navigationData.mainNavigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-gray-300 hover:text-white transition-all duration-300 py-3 font-medium border-b border-gray-700/30 hover:border-blue-500/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={navigationData.ctaButton.href}
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 text-center mt-6 hover-lift shadow-neon hover:shadow-neon-hover"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navigationData.ctaButton.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
