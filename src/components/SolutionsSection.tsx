'use client';

import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SolutionsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Phone Mockup - Half Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center items-end h-64 sm:h-80 lg:h-96 overflow-hidden order-2 lg:order-1"
          >
             {/* Phone Frame - Only showing bottom half */}
              <motion.div 
                initial={{ scale: 0.8, y: 100 }}
                animate={inView ? { scale: 1, y: 125 } : { scale: 0.8, y: 100 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="w-48 sm:w-56 lg:w-64 h-80 sm:h-96 lg:h-[450px] bg-black rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="w-full h-full bg-white rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden relative"
                >
                  {/* Notch */}
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-28 lg:w-32 h-4 sm:h-5 lg:h-6 bg-black rounded-b-xl lg:rounded-b-2xl z-10"
                  />
                  
                  {/* Hashfinity Website Content */}
                  <div className="pt-6 sm:pt-7 lg:pt-8 px-2 sm:px-3 lg:px-4 h-full bg-gradient-to-br from-blue-50 to-blue-100">
                    {/* Status Bar */}
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                      transition={{ duration: 0.25, delay: 0.5 }}
                      className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-6"
                    >
                      <div className="text-xs text-gray-600">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-gray-800 rounded-sm"></div>
                        <div className="w-1 h-1.5 sm:h-2 bg-gray-800 rounded-full"></div>
                      </div>
                    </motion.div>
                    
                    {/* Website Header */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="text-center mb-3 sm:mb-4 lg:mb-6"
                    >
                      <motion.h1 
                        initial={{ scale: 0.9 }}
                        animate={inView ? { scale: 1 } : { scale: 0.9 }}
                        transition={{ duration: 0.25, delay: 0.7 }}
                        className="text-sm sm:text-lg lg:text-xl font-bold text-blue-600 mb-1 sm:mb-2"
                      >
                        Hashfinity
                      </motion.h1>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.25, delay: 0.8 }}
                        className="text-xs text-gray-600"
                      >
                        Transform Your Vision Into Digital Excellence
                      </motion.p>
                    </motion.div>
                    
                    {/* Navigation Menu */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="flex justify-center space-x-2 sm:space-x-3 lg:space-x-4 mb-3 sm:mb-4 lg:mb-6"
                    >
                      {['Home', 'Services', 'About', 'Contact'].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ y: 20, opacity: 0 }}
                          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                          transition={{ duration: 0.15, delay: 1 + i * 0.05 }}
                          className="text-xs text-gray-700 hover:text-blue-600 cursor-pointer"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Main Content Card */}
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                      className="bg-white rounded-md sm:rounded-lg p-2 sm:p-3 lg:p-4 shadow-lg mb-2 sm:mb-3 lg:mb-4"
                    >
                      <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.25, delay: 1.2 }}
                        className="text-xs sm:text-sm font-bold text-gray-800 mb-1 sm:mb-2"
                      >
                        Our Services
                      </motion.h2>
                      <div className="space-y-1 sm:space-y-2">
                        {['Web Development', 'Mobile Apps', 'UI/UX Design'].map((service, i) => (
                          <motion.div
                            key={service}
                            initial={{ width: 0 }}
                            animate={inView ? { width: '100%' } : { width: 0 }}
                            transition={{ duration: 0.25, delay: 1.3 + i * 0.05 }}
                            className="flex items-center space-x-1 sm:space-x-2"
                          >
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">{service}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* CTA Button */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 1.4 }}
                      className="text-center"
                    >
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center lg:text-left order-1 lg:order-2 py-6 sm:px-8 lg:px-0"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="block"
              >
                We have the solutions you need.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="block"
              >
                Let&apos;s discuss your project
              </motion.span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  transition: { duration: 0.1 }
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-150 group text-sm sm:text-base"
              >
                <span className="mr-2">Get Free Consultation</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.1 }}
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;
