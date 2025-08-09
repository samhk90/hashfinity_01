'use client';

import { useState, useEffect } from 'react';
import contentData from '@/data/content.json';

export default function FeatureSection() {
  const feature = contentData.features[0];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('feature-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="feature-section" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">

      <div className="container mx-auto relative z-10">
        <div className={`bg-white rounded-3xl shadow-3xl overflow-hidden max-w-6xl mx-auto hover-lift transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
              {/* Company branding */}
              <div className={`mb-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <span className="font-bold text-gray-800 text-lg group-hover:text-red-600 transition-colors duration-300">
                    Callerdesk
                  </span>
                </div>
                <div className="text-sm text-gray-500 mb-6 tracking-wide">
                  INVESTMENT FOR STARTUPS
                </div>
              </div>

              <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight hover:text-gradient-blue transition-colors duration-500">
                  {feature.title}
                </h2>
              </div>

              <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift group relative overflow-hidden">
                  <span className="relative z-10">{feature.buttonText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                <div className="text-sm text-gray-500 flex items-center font-medium">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {feature.hotline}
                </div>
              </div>
            </div>

            {/* Right Image/Dashboard */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 p-8 lg:p-12 flex items-center justify-center relative">
              <div className={`relative w-full max-w-md ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
                {/* Dashboard mockup */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover-lift transition-all duration-500 hover:shadow-3xl">
                  {/* Dashboard header */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="text-xs text-gray-500 font-semibold">Dashboard</div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {/* User cards with staggered animations */}
                      {[
                        { name: 'Sarah Wilson', role: 'Sales Manager', status: 'online' },
                        { name: 'Mike Chen', role: 'Lead Developer', status: 'busy' },
                        { name: 'Emma Rodriguez', role: 'Product Manager', status: 'online' }
                      ].map((user, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover-lift cursor-pointer group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                          style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-semibold text-sm">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                              {user.name}
                            </div>
                            <div className="text-xs text-gray-500">{user.role}</div>
                          </div>
                          <div className={`w-3 h-3 rounded-full animate-pulse ${user.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Call to action */}
                    <div className={`mt-6 p-6 bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
                      <div className="text-sm font-semibold mb-1">Ready to start calling?</div>
                      <div className="text-xs opacity-90">Connect with your team now</div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl animate-float">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>

                {/* Additional floating badge */}
                <div className="absolute -bottom-2 -left-2 bg-white rounded-xl p-3 shadow-xl border border-gray-100 animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-700">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
