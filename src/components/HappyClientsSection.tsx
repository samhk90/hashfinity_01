"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const clientLogos = [
  {
    name: "AbhiJaat Sankalpana",
    logo: "/Logos/AbhiJaat Sankalpana.png"
  },
  {
    name: "Caller Desk",
    logo: "/Logos/Caller_Desk.png"
  },
  {
    name: "Comply Gate",
    logo: "/Logos/Comply_Gate.png"
  },
  {
    name: "Dr. Harsha",
    logo: "/Logos/Dr._Harsha.png"
  },
  {
    name: "ElectroKld",
    logo: "/Logos/ElectroKld.png"
  },
  {
    name: "Envirocon",
    logo: "/Logos/Envirocon.png"
  },
  {
    name: "Iconic",
    logo: "/Logos/Iconic.png"
  },
  {
    name: "Nirosha",
    logo: "/Logos/Nirosha.png"
  },
  {
    name: "Oskar Tech",
    logo: "/Logos/Oskar_Tech.png"
  },
  {
    name: "Qwinzi",
    logo: "/Logos/Qwinzi.png"
  },
  {
    name: "Shree Balaji",
    logo: "/Logos/Shree_Balaji.png"
  },
  {
    name: "Syte",
    logo: "/Logos/Syte.png"
  },
  {
    name: "Viaz Cloud",
    logo: "/Logos/Viaz_Cloud (1).png"
  },
  {
    name: "Wizer",
    logo: "/Logos/Wizer.png"
  },
  {
    name: "Zfinity",
    logo: "/Logos/Zfinity.png"
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

  // Duplicate logos array for seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section ref={sectionRef} id="testimonials" className="py-10 bg-gradient-to-r from-blue-200 to-blue-400 relative overflow-hidden">
      <div className="container mx-auto w-full px-4">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Happy Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies worldwide. We&apos;re proud to work with these amazing organizations.
          </p>
        </div>

        {/* Logo Marquee Container */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}>
          {/* Reduced Gradient Overlays - only for smooth edge effect */}
          <div className="absolute left-0 top-0 w-8 sm:w-2 h-full bg-gradient-to-r from-blue-200 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-8 sm:w-2 h-full bg-gradient-to-l from-blue-200 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Logo Marquee */}
          <div className="marquee-container overflow-hidden">
            <div className="marquee-content flex items-center gap-4 sm:gap-8 md:gap-12 animate-marquee">
              {duplicatedLogos.map((client, index) => (
                <div 
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-32 flex items-center justify-center group"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={160}
                      height={80}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
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
            black 32px,
            black calc(100% - 32px),
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 32px,
            black calc(100% - 32px),
            transparent
          );
        }
        
        .marquee-content {
          animation: marquee 40s linear infinite;
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
        
        /* Responsive adjustments */
        @media (min-width: 640px) {
          .marquee-container {
            mask-image: linear-gradient(
              to right,
              transparent,
              black 64px,
              black calc(100% - 64px),
              transparent
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 64px,
              black calc(100% - 64px),
              transparent
            );
          }
        }
      `}</style>
    </section>
  );
}
