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
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
        : 'bg-white/30 backdrop-blur-xl border-b border-white/20 shadow-lg'
    }`}>
      <nav className=" max-w-screen-xl  px-4 lg:px-8 py-3 flex items-center justify-baseline">
  {/* Logo */}
  <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg hover-lift group-hover:scale-110 transition-all duration-300">
      <span className="text-white font-bold text-lg sm:text-xl">H</span>
    </div>
    <div className="flex flex-col">
      <span className={`font-bold text-lg sm:text-xl tracking-wide transition-colors duration-300 group-hover:text-blue-600 ${
        isScrolled ? 'text-gray-900' : 'text-gray-900 drop-shadow-sm'
      }`}>
        HASHFINITY
      </span>
      <span className={`text-xs tracking-widest transition-colors duration-300 group-hover:text-blue-500 ${
        isScrolled ? 'text-gray-600' : 'text-gray-700 drop-shadow-sm'
      }`}>
        BLOCKCHAIN
      </span>
    </div>
  </Link>

  {/* Desktop Navigation */}
  <div className="hidden md:flex text-black items-center space-x-4 lg:space-x-8">
    {navigationData.mainNavigation.map((item, index) => (
      <Link
        key={index}
        href={item.href}
        className={`relative transition-all duration-300 font-medium text-sm lg:text-base group text-gray-800 hover:text-blue-600`}
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    ))}
  </div>

  {/* Desktop CTA */}
  <Link
    href={navigationData.ctaButton.href}
    className="hidden md:block relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-blue-800 text-white px-4 lg:px-8 py-2 lg:py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover-lift overflow-hidden group"
  >
    <span className="relative z-10">{navigationData.ctaButton.label}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </Link>

  {/* Mobile Menu Button */}
  <button 
    className={`md:hidden ml-30 justify-end p-2 rounded-lg transition-all duration-300 hover-lift backdrop-blur-md ${
      isScrolled 
        ? 'text-gray-900 hover:bg-white/20 bg-white/10 border border-gray-300' 
        : 'text-gray-900 hover:bg-white/20 bg-white/20 border border-gray-400 shadow-lg'
    }`}
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
  <div className="md:hidden w-full bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl animate-fade-in-up">
    <div className="max-w-screen-xl  px-4 sm:px-6 py-6 space-y-1">
            {navigationData.mainNavigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-gray-800 hover:text-blue-600 transition-all duration-300 py-3 px-4 font-medium border-b border-gray-200/30 hover:border-blue-500/50 hover:bg-blue-50/50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={navigationData.ctaButton.href}
              className="block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-center mt-6 shadow-xl hover:shadow-2xl hover-lift"
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
