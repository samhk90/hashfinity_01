"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isCarouselMode, setIsCarouselMode] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

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

  // Check screen size to determine carousel mode
  useEffect(() => {
    const checkScreenSize = () => {
      const newCarouselMode = window.innerWidth < 768;
      
      // Reset pagination when switching modes
      if (newCarouselMode !== isCarouselMode) {
        setCurrentSlide(0);
        setCurrentPage(0);
      }
      
      // Use carousel only on mobile (screens < 768px)
      setIsCarouselMode(newCarouselMode);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isCarouselMode]);

  // Carousel navigation functions
  const nextSlide = () => {
    const slidesToShow = getSlidesToShow();
    const maxSlide = Math.ceil(clients.length / slidesToShow) - 1;
    setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1));
  };

  const prevSlide = () => {
    const slidesToShow = getSlidesToShow();
    const maxSlide = Math.ceil(clients.length / slidesToShow) - 1;
    setCurrentSlide((prev) => (prev - 1 + (maxSlide + 1)) % (maxSlide + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch/swipe handlers
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Get slides to show based on screen size
  const getSlidesToShow = () => {
    if (window.innerWidth >= 1024) return 3; // lg: 3 cards on desktop
    if (window.innerWidth >= 768) return 2;  // md: 2 cards on tablet
    return 1; // mobile: 1 card
  };

  // Get cards to show per page for desktop grid
  const getCardsPerPage = () => { // xl: 6 cards (2 rows of 3)
    if (window.innerWidth >= 1024) return 3; // lg: 6 cards (2 rows of 3)
    if (window.innerWidth >= 768) return 4;  // md: 4 cards (2 rows of 2)
    return 3; // smaller screens: 3 cards
  };

  // Desktop grid navigation functions
  const nextPage = () => {
    const cardsPerPage = getCardsPerPage();
    const totalPages = Math.ceil(clients.length / cardsPerPage);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    const cardsPerPage = getCardsPerPage();
    const totalPages = Math.ceil(clients.length / cardsPerPage);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Get current page clients for desktop grid
  const getCurrentPageClients = () => {
    if (isCarouselMode) return clients;
    
    const cardsPerPage = getCardsPerPage();
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return clients.slice(startIndex, endIndex);
  };

  return (
    <section ref={sectionRef} className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-600 relative overflow-hidden">
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
        
        {/* Clients Grid/Carousel */}
        {isCarouselMode ? (
          // Mobile Carousel View
          <div className="relative">
            <div 
              ref={carouselRef}
              className="overflow-hidden rounded-lg"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <motion.div 
                className="flex transition-transform duration-300 ease-in-out"
                animate={{ 
                  x: `-${currentSlide * (100 / getSlidesToShow())}%` 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {clients.map((client, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 px-2"
                    style={{ 
                      width: `${100 / getSlidesToShow()}%` 
                    }}
                  >
                    <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-2xl hover:bg-gray-50 h-full">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {client.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-between mt-6">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(clients.length / getSlidesToShow()) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentSlide === index 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          // Desktop Grid View with Pagination
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
              <AnimatePresence mode="wait">
                {getCurrentPageClients().map((client, index) => (
                  <motion.div 
                    key={`${currentPage}-${index}`}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      scale: 1
                    }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-2xl hover:bg-gray-50 group cursor-pointer h-full"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {client.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {client.description}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Previous Button */}
              <button
                onClick={prevPage}
                className="p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous page"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(clients.length / getCardsPerPage()) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentPage === index 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextPage}
                className="p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next page"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
