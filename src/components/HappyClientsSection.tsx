"use client";

import { useState, useRef, useEffect } from 'react';

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
    name: "TechFlow",
    description: "TechFlow is an innovative project management platform that streamlines workflow automation and team collaboration for modern businesses."
  },
  {
    name: "DataSync",
    description: "DataSync provides real-time data synchronization solutions for enterprise applications, ensuring seamless integration across multiple platforms."
  },
  {
    name: "CloudBridge",
    description: "CloudBridge offers comprehensive cloud migration services and infrastructure management for businesses transitioning to digital-first operations."
  }
];

export default function HappyClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section ref={sectionRef} id="testimonials" className="py-10 bg-gradient-to-r from-blue-200  to-blue-400 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
           Our Happy Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our clients trust us to deliver exceptional results. Here's what they have to say about their experience working with us.
          </p>
        </div>

        {/* Marquee Container */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Marquee */}
          <div className="marquee-container overflow-hidden">
            <div className="marquee-content flex items-stretch gap-6 animate-marquee">
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 min-w-[350px] max-w-[350px]"
                >
                  {/* Client Name */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {client.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {client.name}
                    </h3>
                  </div>
                  
                  {/* Client Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {client.description}
                  </p>
                  
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 128px,
            black calc(100% - 128px),
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 128px,
            black calc(100% - 128px),
            transparent
          );
        }
        
        .marquee-content {
          animation: marquee 60s linear infinite;
          width: fit-content;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
