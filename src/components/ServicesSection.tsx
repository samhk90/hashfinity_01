'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isCarouselMode, setIsCarouselMode] = useState(false); // Default to false for SSR to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Web Development",
      description: "From landing pages to complex web portals, we build responsive, fast-loading, and user-friendly websites tailored to your business goals.",
      features: [
        "Business websites",
        "Portfolio sites", 
        "Corporate & enterprise websites",
        "Blogs & news portals",
        "Custom CMS integrations (WordPress, Strapi, etc.)"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      title: "E-Commerce Development",
      description: "Launch your online store with secure payment gateways, product management, and a smooth shopping experience.",
      features: [
        "Custom e-commerce platforms",
        "Shopify / WooCommerce setup",
        "Payment & logistics integration",
        "Inventory & order management systems"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "SaaS Platform Development",
      description: "Have a SaaS idea? We can build the entire SaaS platform - from architecture and backend logic to frontend UI and cloud deployment.",
      features: [
        "Role-based access systems",
        "Admin dashboards",
        "Subscription & user management",
        "Analytics, reports & automation",
        "Scalable cloud hosting setup"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1v-1H7v1a1 1 0 001 1zM7 18V7a1 1 0 011-1h8a1 1 0 011 1v11M9 9h6M9 12h6M9 15h6" />
        </svg>
      ),
      title: "Mobile App Development",
      description: "We develop fast, stable, and intuitive mobile apps for Android and iOS.",
      features: [
        "Business & service apps",
        "E-commerce apps",
        "Booking & appointment apps",
        "Hybrid or native builds (Flutter, React Native, Kotlin)"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Web App Development",
      description: "Need more than a website? We build fledged web apps with dashboards, and admin tools.",
      features: [
        "Real-time applications",
        "Progressive Web Apps",
        "Custom dashboards",
        "Data visualization & analytics tools"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Database Solutions",
      description: "Design and implement robust database architectures that scale with your business growth and ensure data security.",
      features: [
        "Database design & optimization",
        "Data migration services",
        "Backup & recovery solutions",
        "Performance tuning",
        "Cloud database setup"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security solutions and vulnerability assessments.",
      features: [
        "Security audits",
        "Penetration testing",
        "SSL implementation",
        "Data encryption",
        "Compliance consulting"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "API Development",
      description: "Create powerful APIs that connect your applications and enable seamless data integration across platforms.",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "API documentation",
        "Third-party integrations",
        "Microservices architecture"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Analytics & BI",
      description: "Transform your data into actionable insights with custom analytics dashboards and business intelligence solutions.",
      features: [
        "Custom dashboards",
        "Data visualization",
        "Real-time reporting",
        "KPI tracking",
        "Business intelligence tools"
      ]
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

  // Check screen size to determine carousel mode
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window === 'undefined') return;
      
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

  // Auto-play carousel (completely disabled)
  // useEffect(() => {
  //   // Auto-play is completely disabled
  // }, [isCarouselMode, services.length]);

  // Carousel navigation functions
  const nextSlide = () => {
    const slidesToShow = getSlidesToShow();
    const maxSlide = Math.ceil(services.length / slidesToShow) - 1;
    setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1));
  };

  const prevSlide = () => {
    const slidesToShow = getSlidesToShow();
    const maxSlide = Math.ceil(services.length / slidesToShow) - 1;
    setCurrentSlide((prev) => (prev - 1 + (maxSlide + 1)) % (maxSlide + 1));
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
    if (typeof window === 'undefined') return 1; // Default for SSR
    if (window.innerWidth >= 1024) return 4; // lg: 4 cards on desktop
    if (window.innerWidth >= 768) return 2;  // md: 2 cards on tablet
    return 1; // mobile: 1 card
  };

  // Get cards to show per page for desktop grid
  const getCardsPerPage = () => {
    if (typeof window === 'undefined') return 4; // Default for SSR
    if (window.innerWidth >= 1280) return 4; // xl: 8 cards (2 rows of 4)
    if (window.innerWidth >= 1024) return 4; // lg: 6 cards (2 rows of 3)
    if (window.innerWidth >= 768) return 4;  // md: 4 cards (2 rows of 2)
    return 3; // smaller screens: 3 cards
  };

  // Desktop grid navigation functions
  const nextPage = () => {
    const cardsPerPage = getCardsPerPage();
    const totalPages = Math.ceil(services.length / cardsPerPage);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    const cardsPerPage = getCardsPerPage();
    const totalPages = Math.ceil(services.length / cardsPerPage);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Get current page services for desktop grid
  const getCurrentPageServices = () => {
    if (isCarouselMode) return services;
    
    const cardsPerPage = getCardsPerPage();
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return services.slice(startIndex, endIndex);
  };

  // Intersection Observer for individual card scroll animations (not needed with pagination)
  useEffect(() => {
    // This effect is no longer needed since we use pagination instead of scroll-based animations
    return () => {};
  }, [isCarouselMode]);

  return (
    <section ref={sectionRef} id='services' className="py-12 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-left mb-6 md:mb-10 transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            <span className="inline-block animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
              Hashfinity Transforms Digital Journeys
            </span>
            <br />
            <span className="text-gray-700 inline-block animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              with Cutting-Edge AI Technology.
            </span>
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="inline-block">Crafting Seamless Websites, Stunning Designs,
            <br className="hidden sm:block" />and Powerful Mobile Apps!</span>
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            At Hashfinity Technologies, we don&apos;t just build solutions... we solve problems. Whether 
            you&apos;re a startup testing ideas or an established brand scaling operations, we offer end-
            to-end services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid/Carousel */}
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
                className="flex transition-transform duration-100 ease-in-out"
                animate={{ 
                  x: `-${currentSlide * (100 / getSlidesToShow())}%` 
                }}
                transition={{ type: "spring", stiffness: 600, damping: 40 }}
              >
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 px-2"
                    style={{ 
                      width: `${100 / getSlidesToShow()}%` 
                    }}
                  >
                    <div className="bg-gray-100 rounded-lg p-6  transition-all duration-100 hover:shadow-xl hover:bg-gray-200">
                      {/* Icon */}
                      <div className="mb-4">
                        <div className="w-8 h-8 text-blue-400">
                          {service.icon}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h4 className="font-bold text-lg text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        {service.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="mb-4">
                        <p className="font-semibold text-gray-800 text-sm mb-2">
                          {index === 0 && "We do:"}
                          {index === 1 && "We offer:"}
                          {index === 2 && "Includes:"}
                          {index === 3 && "We specialize in:"}
                          {index === 4 && "Capabilities:"}
                          {index === 5 && "Services:"}
                          {index === 6 && "Security:"}
                          {index === 7 && "Features:"}
                          {index === 8 && "Solutions:"}
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="hover:text-gray-800 transition-colors">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Read More Link */}
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-all duration-100 hover:translate-x-1">
                        Read More →
                      </button>
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
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

        

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 ">
              <AnimatePresence mode="wait">
                {getCurrentPageServices().map((service, index) => {
                  const actualIndex = currentPage * getCardsPerPage() + index;
                  return (
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
                      className="bg-gray-100 rounded-lg p-4 md:p-6 transition-all duration-200 hover:shadow-2xl hover:bg-gray-200 group cursor-pointer"
                    >
                      {/* Icon */}
                      <motion.div 
                        className="mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 text-blue-400">
                          {service.icon}
                        </div>
                      </motion.div>
                      
                      {/* Title */}
                      <h4 className="font-bold text-base md:text-lg text-gray-900 mb-3 transition-colors group-hover:text-blue-600">
                        {service.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="mb-4">
                        <p className="font-semibold text-gray-800 text-xs md:text-sm mb-2 group-hover:text-blue-700 transition-colors">
                          {actualIndex === 0 && "We do:"}
                          {actualIndex === 1 && "We offer:"}
                          {actualIndex === 2 && "Includes:"}
                          {actualIndex === 3 && "We specialize in:"}
                          {actualIndex === 4 && "Capabilities:"}
                          {actualIndex === 5 && "Services:"}
                          {actualIndex === 6 && "Security:"}
                          {actualIndex === 7 && "Features:"}
                          {actualIndex === 8 && "Solutions:"}
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li 
                              key={featureIndex}
                              className="hover:text-gray-800 transition-colors"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.1 }}
                            >
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                     
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Previous Button */}
              <button
                onClick={prevPage}
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                aria-label="Previous page"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(services.length / getCardsPerPage()) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentPage === index 
                        ? 'bg-blue-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextPage}
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
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