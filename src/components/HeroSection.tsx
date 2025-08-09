'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import contentData from '@/data/content.json';

export default function HeroSection() {
  const { hero } = contentData;
  const [isVisible, setIsVisible] = useState(false);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger initial animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Complete text animation after delay
    const textTimer = setTimeout(() => {
      setTextAnimationComplete(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen hero-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Animated Blue spotlight overlay */}
      <div className={`absolute inset-0 blue-spotlight transition-all duration-2000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
      


      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        {/* Main Heading with staggered animation */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4">
            <span className={`text-gray-900 block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transform Your Vision Into
            </span>
            <span className={`text-blue-700 block transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0 animate-glow-pulse' : 'opacity-0 translate-y-10'}`}>
              Digital Excellence
            </span>
          </h1>
        </div>
        
        {/* Description with fade-in animation */}
        <div className="mb-12">
          <p className={`text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-2xl leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We help businesses grow, streamline operations, and stay ahead in today's competitive market with end-to-end digital solutions and continuous support.
          </p>
        </div>
        
        {/* CTA Button with enhanced hover effects */}
        <div className={`transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/consultation"
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-700 bg-transparent border-2 border-blue-600 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
          >
            {/* Button shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative z-10">Get Free Consultation</span>
            <svg 
              className="w-5 h-5 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>


      </div>

    </section>
  );
}
