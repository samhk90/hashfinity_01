'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import navigationData from '@/data/navigation.json';
import Image from 'next/image';
import logo from "@/../public/logo1.png"

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-strong shadow-lg border-b border-white/10' 
          : 'bg-transparent backdrop-blur-sm'
      }`}>
        <nav className="w-screen lg:px-8 px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
              <Image src={logo} alt="HASHFINITY Logo" width={150} height={150} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationData.mainNavigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href={navigationData.ctaButton.href}
              className={`group relative px-6 py-3 font-semibold text-md transition-all duration-500 rounded-2xl overflow-hidden border-2 transform hover:scale-105 cursor-pointer text-gray-800 border-gray-800`}
            >
              <span className="relative z-10">{navigationData.ctaButton.label}</span>
              {/* Special CTA button effect */}
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-500 transform scale-0 ${
                  isScrolled ? 'bg-gray-800/10' : 'bg-white/10'
                }`}
              ></div>
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 transition-all duration-500 group-hover:w-full rounded-full bg-gray-800 shadow-gray-800/5`}
              ></div>
              <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </Link>
          </div>

          {/* Modern Hamburger Menu Button */}
          <button 
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 group z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}></span>
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-[99998] lg:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Background Overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div className={`absolute top-0  right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl transform transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Image src={logo} alt="HASHFINITY Logo" width={150} height={150} />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 px-6 space-y-2">
            {navigationData.mainNavigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`group flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md transform hover:scale-[1.02] ${
                  index === 0 ? 'animate-[slideInRight_0.3s_ease-out]' : 
                  index === 1 ? 'animate-[slideInRight_0.4s_ease-out]' : 
                  index === 2 ? 'animate-[slideInRight_0.5s_ease-out]' : 
                  'animate-[slideInRight_0.6s_ease-out]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-gray-800 font-medium text-lg group-hover:text-blue-600 transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}