'use client';
import { useState, useRef, useEffect } from 'react';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const sectionRef = useRef(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      id: 1,
      title: "CRM-Steal",
      description: "CRM-Steal is a SaaS platform that offers cloud-based customer relationship tools as a complete toolkit helping you to improve your customer relationships, increase sales, and build trust to deliver targeted result-driven marketing campaigns that drive better results.",
      buttonText: "Get Free Consultation",
      bgColor: "bg-blue-200",
      logo: "CS"
    },
    {
      id: 2,
      title: "Wine Era",
      description: "Wine Era is a platform designed to connect wine lovers with premium wine selections from around the world. Our platform simplifies the process of discovering, purchasing, and enjoying exceptional wines from trusted vineyards and wine producers to ensure quality excellence for wine enthusiasts.",
      buttonText: "Get Free Consultation", 
      bgColor: "bg-orange-200",
      logo: "W"
    },
    {
      id: 3,
      title: "VoucherX Deals",
      description: "VoucherX Deals is a discount deal local deals company built for business that aims to democratize local offers & deals, from restaurants to travel. Our platform removes friction to let business and independent developers free and empowering vendors for easy integrations with targeted marketing efforts.",
      buttonText: "Get Free Consultation",
      bgColor: "bg-green-200", 
      logo: "VX"
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

  // Intersection Observer for individual project cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => new Set([...prev, projectIndex]));
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Projects
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Showcasing successful digital transformations and innovative solutions that drive real business results for our clients across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => { projectRefs.current[index] = el; }}
              data-index={index}
              className={`grid lg:grid-cols-12 gap-8 items-center transform transition-all duration-700 ${
                visibleProjects.has(index)
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-16 opacity-0 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {/* Project Content */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${project.bgColor.replace('bg-', 'bg-').replace('200', '300')} rounded-lg flex items-center justify-center transition-all duration-500 ${
                    visibleProjects.has(index) 
                      ? 'scale-100 rotate-0 opacity-100' 
                      : 'scale-75 rotate-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 100}ms` }}>
                    <span className="text-white font-bold text-lg">{project.logo}</span>
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 transition-all duration-500 ${
                    visibleProjects.has(index) 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 200}ms` }}>
                    {project.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className={`text-gray-600 text-base leading-relaxed transition-all duration-500 ${
                  visibleProjects.has(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-2 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}>
                  {project.description}
                </p>
                
                {/* CTA Button */}
                <div className={`transition-all duration-500 ${
                  visibleProjects.has(index) 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-2 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}>
                  <button className="group inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
                    <span className="font-medium">{project.buttonText}</span>
                    <svg 
                      className="w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Project Mockup */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                <div className={`${project.bgColor} rounded-3xl p-8 transition-all duration-700 transform ${
                  visibleProjects.has(index)
                    ? 'scale-100 rotate-0 opacity-100' 
                    : 'scale-90 rotate-2 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 100}ms` }}>
                  {/* Device Mockups Container */}
                  <div className="relative flex justify-center items-center h-80">
                    {/* Main Phone */}
                    <div className="relative z-10">
                      <div className="w-48 bg-black rounded-3xl p-1 shadow-2xl">
                        <div className="bg-white rounded-[22px] overflow-hidden h-96">
                          {/* Status Bar */}
                          <div className="bg-gray-50 h-6 flex items-center justify-between px-4">
                            <div className="text-xs font-semibold">9:41</div>
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-2 border border-gray-400 rounded-sm">
                                <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* App Content */}
                          <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                              <div className="w-6 h-6 bg-gray-300 rounded"></div>
                            </div>
                            
                            {/* Content Cards */}
                            <div className="space-y-3">
                              <div className="bg-white rounded-xl p-3 shadow-sm">
                                <div className="flex items-center space-x-2 mb-2">
                                  <div className="w-6 h-6 bg-red-400 rounded-full"></div>
                                  <div className="w-20 h-2 bg-gray-200 rounded"></div>
                                </div>
                                <div className="w-full h-1 bg-gray-100 rounded mb-1"></div>
                                <div className="w-3/4 h-1 bg-gray-100 rounded"></div>
                              </div>
                              
                              <div className="bg-white rounded-xl p-3 shadow-sm">
                                <div className="flex items-center space-x-2 mb-2">
                                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                                  <div className="w-16 h-2 bg-gray-200 rounded"></div>
                                </div>
                                <div className="w-full h-1 bg-gray-100 rounded mb-1"></div>
                                <div className="w-2/3 h-1 bg-gray-100 rounded"></div>
                              </div>
                              
                              <div className="bg-white rounded-xl p-3 shadow-sm">
                                <div className="flex items-center space-x-2 mb-2">
                                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                                  <div className="w-24 h-2 bg-gray-200 rounded"></div>
                                </div>
                                <div className="w-full h-1 bg-gray-100 rounded mb-1"></div>
                                <div className="w-4/5 h-1 bg-gray-100 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Secondary Phone (Overlapping) */}
                    <div className="absolute right-4 top-8 z-5 transform rotate-12">
                      <div className="w-32 bg-black rounded-2xl p-0.5 shadow-xl">
                        <div className="bg-white rounded-2xl overflow-hidden h-64">
                          <div className="bg-gray-50 h-4"></div>
                          <div className="p-2 bg-gradient-to-br from-orange-50 to-red-50 h-full">
                            <div className="space-y-2">
                              <div className="bg-white rounded-lg p-2 shadow-sm">
                                <div className="w-4 h-4 bg-orange-400 rounded mb-1"></div>
                                <div className="w-full h-0.5 bg-gray-200 rounded"></div>
                              </div>
                              <div className="bg-white rounded-lg p-2 shadow-sm">
                                <div className="w-4 h-4 bg-red-400 rounded mb-1"></div>
                                <div className="w-3/4 h-0.5 bg-gray-200 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 shadow-lg hover:shadow-xl">
            <span>View All</span>
            <svg 
              className="w-5 h-5 ml-2 transition-all duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
