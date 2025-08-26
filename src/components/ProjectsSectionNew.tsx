'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-30"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-24 h-24 bg-purple-100 rounded-full opacity-30"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our Projects
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Showcasing successful digital transformations and innovative solutions that drive real business results for our clients across various industries.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className={`grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? 'md:grid-flow-col' : 'md:grid-flow-col-dense'
              } ${project.bgColor}`}
            >
              {/* Logo Section */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
                transition={{ duration: 1, delay: 1.2 + index * 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6 }
                }}
                className={`flex items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <motion.div 
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white/50"
                >
                  <span className="text-6xl font-bold text-gray-800">{project.logo}</span>
                </motion.div>
              </motion.div>

              {/* Content Section */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                  className="text-gray-700 leading-relaxed mb-6 text-lg"
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                >
                  <motion.button 
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span className="flex items-center">
                      {project.buttonText}
                      <motion.svg 
                        className="w-5 h-5 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mt-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 2.7 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 2.9 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Ready to Start Your Project?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 3.1 }}
              className="text-xl mb-8 opacity-90"
            >
              Let's discuss how we can bring your vision to life with our expertise and innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 3.3 }}
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(255,255,255,0.3)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center">
                  Get Free Consultation
                  <motion.svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
