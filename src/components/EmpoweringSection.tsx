'use client';

import { useState, useEffect, useRef } from 'react';

export default function EmpoweringSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      id: 1,
      title: "CONNECT",
      description: "Share your vision, goals, and challenges; let's explore what's possible.",
      icon: (
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      id: 2,
      title: "STRATEGIZE",
      description: "We analyze needs, define solutions, and craft a tailored roadmap.",
      icon: (
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "DESIGN",
      description: "Blueprints, prototypes, and user experiences take shape with precision.",
      icon: (
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "BUILD",
      description: "A dedicated team executes, developing and delivering your dream technology.",
      icon: (
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for individual items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, itemIndex]));
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-blue-200  to-blue-400"
    >
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className={`text-left mb-5 md:mb-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4 leading-tight">
            EMPOWERING SKILLS TO HELP YOU!
          </h2>
          <p className="text-lg text-left md:text-xl lg:text-2xl font-semibold text-blue-700 max-w-4xl  leading-relaxed">
            Add the best talent on the market, an agile <br className="hidden md:block" />
            skilled management & seamless involvement
          </p>
        </div>

        {/* Features Grid */}
        <div className=" justify-start  flex flex-col sm:flex-row flex-wrap ">
  {features.map((feature, index) => (
    <div 
      key={feature.id}
      ref={(el) => { itemRefs.current[index] = el; }}
      data-index={index}
      className={`flex items-start  backdrop-blur-sm rounded-2xl p-2 md:p-6 transition-all duration-700 transform  ${
        visibleItems.has(index)
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-10 opacity-0 scale-95'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {/* Icon */}
      <div className={`mr-4 md:mr-6 transition-all duration-500 ${
        visibleItems.has(index) 
          ? 'scale-100 rotate-0 opacity-100' 
          : 'scale-75 rotate-12 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150 + 200}ms` }}>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-200">
          {feature.icon}
        </div>
      </div>
      
      {/* Text */}
      <div>
        <h3 className={`text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2 transition-all duration-500 ${
          visibleItems.has(index) 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-2 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 150 + 300}ms` }}>
          {feature.title}
        </h3>
        <p className={`text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-500 ${
          visibleItems.has(index) 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-2 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 150 + 400}ms` }}>
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>



      </div>
    </section>
  );
}
