'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, floatingAnimation, buttonHover } from '@/utils/animations';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen hero-gradient flex items-center justify-center p-5 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Animated Blue spotlight overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 blue-spotlight"
      />
      
      {/* Floating background elements */}

      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full opacity-15"
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
        className="container mx-auto text-center relative z-10 max-w-5xl"
      >
        {/* Main Heading with staggered animation */}
        <motion.div className="mb-8">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-10xl font-bold  mb-4">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-900 block"
            >
              Transform Your Vision Into
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="text-blue-700 block animate-glow-pulse"
            >
              Digital Excellence
            </motion.span>
          </motion.h1>
        </motion.div>
        
        {/* Description with fade-in animation */}
        <motion.div className="mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-2xl leading-relaxed max-w-4xl mx-auto"
          >
            We help businesses grow, streamline operations, and stay ahead in today&apos;s competitive market with end-to-end digital solutions and continuous support.
          </motion.p>
        </motion.div>
        
        {/* CTA Button with enhanced hover effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/consultation"
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-700 bg-transparent border-2 border-blue-600 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
            >
              {/* Button shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative z-10">Get Free Consultation</span>
              <motion.svg 
                className="w-5 h-5 ml-2 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
