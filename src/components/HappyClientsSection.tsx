"use client";

import { useState, useEffect } from 'react';

const clients = [
  {
    name: "Catalystcreek",
    description: "CatalystCreek is a B2B SaaS Platform that offers self-service virtual phone numbers, IVR, Interactive Voice Response technology, advanced call analytics for startups, SMEs, and enterprises."
  },
  {
    name: "ComplyKore",
    description: "ComplyKore is a full-scale HR Performance platform, providing seamless support to enterprises that require enhanced accessibility, improved quality, and legal compliance systems."
  },
  {
    name: "Marketshook",
    description: "Marketshook is a B2B SaaS Platform built in Django framework, bringing with real-time insights into the technology stack buying decisions across the full timelines of their target customers."
  },
  {
    name: "CivicCore",
    description: "CivicCore is a comprehensive data analysis and civic management platform that connects healthcare operations and citizen health tracking. Built with advanced analytics tools and provides an intuitive interface for analyzing performance within administration tasks."
  },
  {
    name: "Marketshook",
    description: "Marketshook is a B2B SaaS Platform built in Django framework, bringing with real-time insights into the technology stack buying decisions across the full timelines of their target customers."
  },
  {
    name: "CivicCore",
    description: "CivicCore is a comprehensive data analysis and civic management platform that connects healthcare operations and citizen health tracking. Built with advanced analytics tools and provides an intuitive interface for analyzing performance within administration tasks."
  },
  {
    name: "CivicCore",
    description: "CivicCore is a comprehensive data analysis and civic management platform that connects healthcare operations and citizen health tracking. Built with advanced analytics tools and provides an intuitive interface for analyzing performance within administration tasks."
  }
];

export default function HappyClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLaptopView, setIsLaptopView] = useState(false);

  // Check if current view is laptop/desktop (1024px and above)
  useEffect(() => {
    const checkViewport = () => {
      setIsLaptopView(window.innerWidth >= 1024);
    };
    
    checkViewport();
    setIsVisible(true);
    
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Carousel functionality for laptop view
  const cardsPerView = isLaptopView ? 3 : 1;
  const maxIndex = Math.max(0, clients.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className={`text-left mb-8 md:mb-10 lg:mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3 md:mb-4">
            Our Happy Clients
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-black/90">
            They trust us and we keep giving them reasons to.
          </p>
        </div>
        
        {/* Conditional Rendering: Carousel for Laptop, Grid for Mobile/Tablet */}
        {isLaptopView ? (
          /* Carousel Layout for Laptop/Desktop */
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                }}
              >
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <div className="bg-white rounded-lg p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full transform   group">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {client.name}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {client.description}
                      </p>
                      
                  
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons - Only for laptop view */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevSlide}
                className="bg-black/20 hover:bg-black/40 rounded-full p-3 lg:p-4 transition-all duration-200 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={currentIndex === 0}
              >
                <svg 
                  className="w-5 h-5 lg:w-6 lg:h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
              </button>
              
              {/* Pagination dots */}
              <div className="flex space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-200 transform hover:scale-125 ${
                      currentIndex === index ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="bg-black/20 hover:bg-black/40 rounded-full p-3 lg:p-4 transition-all duration-200 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={currentIndex === maxIndex}
              >
                <svg 
                  className="w-5 h-5 lg:w-6 lg:h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          /* Grid Layout for Mobile/Tablet */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-20 opacity-0 scale-90'
                } `}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <div className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 h-full group">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {client.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {client.description}
                  </p>
                  

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
