'use client';

import { useState, useEffect, useRef } from 'react';

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardsPerView = 5;
  
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

  const totalSlides = Math.ceil(services.length / cardsPerView);

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

  // Intersection Observer for individual card scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          } else {
            // Optional: Remove card from visible set when it goes out of view
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.delete(cardIndex);
              return newSet;
            });
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all card elements
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleServices = () => {
    const startIndex = currentSlide * cardsPerView;
    return services.slice(startIndex, startIndex + cardsPerView);
  };

  return (
    <section ref={sectionRef} className="py-12 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-left mb-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            <span className="inline-block animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              Hashfinity Transforms Digital Journeys
            </span>
            <br />
            <span className="text-gray-700 inline-block animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              with Cutting-Edge AI Technology.
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span className="inline-block">Crafting Seamless Websites, Stunning Designs,</span>
            <br />
            <span className="inline-block animate-pulse">and Powerful Mobile Apps!</span>
          </h3>
          <p className="text-gray-600 w-3xl text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            At Hashfinity Technologies, we don't just build solutions... we solve problems. Whether 
            you're a startup testing ideas or an established brand scaling operations, we offer end-
            to-end services tailored to your business needs.
          </p>
          <div className={`mt-6 flex justify-between items-center transform transition-all duration-700 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            {/* Left Navigation Button */}
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-110 hover:shadow-xl animate-bounce-slow"
            >
              <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentSlide ? 'bg-blue-600 animate-pulse' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Right Navigation Button */}
            <button 
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-110 hover:shadow-xl animate-bounce-slow"
            >
              <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-all duration-700 ease-out gap-6"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div 
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-index={index}
                className={`flex-shrink-0 w-1/5 bg-gray-100 rounded-lg p-6 transition-all duration-700 transform ${
                  visibleCards.has(index)
                    ? 'translate-y-0 opacity-100 scale-100 rotate-0' 
                    : 'translate-y-20 opacity-0 scale-90 rotate-1'
                } hover:shadow-2xl hover:bg-gray-200 hover:scale-105 hover:-translate-y-2 group`}
                style={{ 
                  transitionDelay: visibleCards.has(index) ? `${(index % cardsPerView) * 100}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {/* Icon */}
                <div className={`mb-4 transform transition-all duration-500 ${
                  visibleCards.has(index) 
                    ? 'scale-100 rotate-0 opacity-100' 
                    : 'scale-75 rotate-12 opacity-0'
                } group-hover:scale-110 group-hover:rotate-6`}
                style={{ transitionDelay: visibleCards.has(index) ? `${(index % cardsPerView) * 100 + 200}ms` : '0ms' }}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h4 className={`font-bold text-lg text-gray-900 mb-3 transition-all duration-500 ${
                  visibleCards.has(index) 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                } group-hover:text-blue-600`}
                style={{ transitionDelay: visibleCards.has(index) ? `${(index % cardsPerView) * 100 + 300}ms` : '0ms' }}>
                  {service.title}
                </h4>
                
                {/* Description */}
                <p className={`text-gray-600 text-sm mb-4 leading-relaxed transition-all duration-500 ${
                  visibleCards.has(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-2 opacity-0'
                } group-hover:text-gray-700`}
                style={{ transitionDelay: visibleCards.has(index) ? `${(index % cardsPerView) * 100 + 400}ms` : '0ms' }}>
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className={`mb-4 transition-all duration-500 ${
                  visibleCards.has(index) 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-2 opacity-0'
                } group-hover:translate-x-1`}
                style={{ transitionDelay: visibleCards.has(index) ? `${(index % cardsPerView) * 100 + 500}ms` : '0ms' }}>
                  <p className={`font-semibold text-gray-800 text-sm mb-2 transition-all duration-400 ${
                    visibleCards.has(index) 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-1 opacity-0'
                  } group-hover:text-blue-700`}
                  style={{ transitionDelay: visibleCards.has(index) ? `${(index % cardsPerView) * 100 + 600}ms` : '0ms' }}>
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
                      <li 
                        key={featureIndex}
                        className={`transition-all duration-400 ${
                          visibleCards.has(index) 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-2 opacity-0'
                        } hover:text-gray-800 hover:translate-x-1`}
                        style={{ 
                          transitionDelay: visibleCards.has(index) 
                            ? `${(index % cardsPerView) * 100 + 700 + featureIndex * 50}ms` 
                            : '0ms' 
                        }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Read More Link */}
                <button className={`text-blue-600 text-sm font-medium hover:text-blue-700 transition-all duration-500 transform hover:scale-105 hover:translate-x-2 relative ${
                  visibleCards.has(index) 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-2 opacity-0 scale-95'
                } group-hover:animate-pulse`}
                style={{ transitionDelay: visibleCards.has(index) ? `${(index % cardsPerView) * 100 + 800}ms` : '0ms' }}>
                  Read More
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
