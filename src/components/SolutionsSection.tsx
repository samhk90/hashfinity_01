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
      transition={{ duration: 0.8 }}
      className=" sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600"
    >
      <div className="max-w-6xl ">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-1 items-center">
          
          {/* Phone Mockup - Half Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -15 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center items-end h-96 overflow-hidden"
          >
            <motion.div 
             
              className="relative"
            >
              {/* Phone Frame - Only showing bottom half */}
              <motion.div 
                initial={{ scale: 0.8, y: 100 }}
                animate={inView ? { scale: 1, y: 125 } : { scale: 0.8, y: 100 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-64 h-[450px] bg-black rounded-[2.5rem] p-2 shadow-2xl"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative"
                >
                  {/* Notch */}
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"
                  />
                  
                  {/* Hashfinity Website Content */}
                  <div className="pt-8 px-4 h-full bg-gradient-to-br from-blue-50 to-blue-100">
                    {/* Status Bar */}
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="flex justify-between items-center mb-6"
                    >
                      <div className="text-xs text-gray-600">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-800 rounded-sm"></div>
                        <div className="w-1 h-2 bg-gray-800 rounded-full"></div>
                      </div>
                    </motion.div>
                    
                    {/* Website Header */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="text-center mb-6"
                    >
                      <motion.h1 
                        initial={{ scale: 0.9 }}
                        animate={inView ? { scale: 1 } : { scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className="text-xl font-bold text-blue-600 mb-2"
                      >
                        Hashfinity
                      </motion.h1>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="text-xs text-gray-600"
                      >
                        Transform Your Vision Into Digital Excellence
                      </motion.p>
                    </motion.div>
                    
                    {/* Navigation Menu */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="flex justify-center space-x-4 mb-6"
                    >
                      {['Home', 'Services', 'About', 'Contact'].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ y: 20, opacity: 0 }}
                          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 2 + i * 0.1 }}
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
                      transition={{ duration: 0.6, delay: 2.2 }}
                      className="bg-white rounded-lg p-4 shadow-lg mb-4"
                    >
                      <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 2.4 }}
                        className="text-sm font-bold text-gray-800 mb-2"
                      >
                        Our Services
                      </motion.h2>
                      <div className="space-y-2">
                        {['Web Development', 'Mobile Apps', 'UI/UX Design'].map((service, i) => (
                          <motion.div
                            key={service}
                            initial={{ width: 0 }}
                            animate={inView ? { width: '100%' } : { width: 0 }}
                            transition={{ duration: 0.5, delay: 2.6 + i * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">{service}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* CTA Button */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 2.8 }}
                      className="text-center"
                    >
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-left lg:text-left w-3xl"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="inline"
              >
                We have the solutions you need.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="block"
              >
                Let's discuss your project
              </motion.span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                <span className="mr-2">Get Free Consultation</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
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
