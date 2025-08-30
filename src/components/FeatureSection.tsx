'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FeatureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teams = [
    {
      id: 1,
      title: "DEDICATED TEAM",
      description: "A dedicated team model where you hire people that exclusively work on your project, with full-time commitment.",
      icon: (
        <svg className="w-16 h-16 text-black-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "PRODUCT TEAM",
      description: "An autonomous cross-functional team focused on the outcome, not the work. We shape the strategy, design, and development.",
      icon: (
        <svg className="w-16 h-16 text-black-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "END-TO-END TEAM",
      description: "We work with you from concept to launch to provide a full range of product design and development services.",
      icon: (
        <svg className="w-16 h-16 text-black-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  return (
    <motion.section id='about'
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-10 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-8 py-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-[Satoshi] font-bold mb-5 text-black text-[40px] leading-[52px] tracking-[0] align-middle"
          >
            TAKE CHARGE STEERING YOUR DEVELOPMENT
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="font-[Avenir_Next_LT_Pro] font-bold text-[40px] p-0 leading-none tracking-[0] align-middle text-[#044BD9]"
          >
            Our ability to combine expertise and systems<br/> thinking is what fuels us as a team.
          </motion.p>
        </motion.div>

        {/* Team Cards */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mt-10 mb-4"
        >
          {teams.map((team, index) => (
            <motion.div 
              key={team.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                transition: { duration: 0.15 }
              }}
              className="bg-gray-100 rounded-2xl shadow-lg border border-gray-100 p-8 text-center cursor-pointer group relative overflow-hidden"
            >
              {/* Background animated gradient on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl"
              />
              
              {/* Icon */}
              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                className="flex justify-center mb-6 relative z-10"
              >
                <motion.div 
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25
                  }}
                  className="w-24 h-24 text-black rounded-full flex items-center justify-center transition-all duration-150 group-hover:bg-blue-50"
                >
                  {team.icon}
                </motion.div>
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="text-xl font-bold text-gray-900 mb-6 relative z-10 group-hover:text-blue-600 transition-colors duration-150"
              >
                {team.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="text-gray-600 leading-relaxed text-sm relative z-10"
              >
                {team.description}
              </motion.p>

              {/* Animated border */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.15 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-2xl w-full"
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}


