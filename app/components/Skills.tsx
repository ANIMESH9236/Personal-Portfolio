'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const skillsX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])
  const headerScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 1.1])

  const skills = [
    { name: 'JavaScript', category: 'Languages', color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', category: 'Languages', color: 'from-blue-400 to-blue-600' },
    { name: 'Python', category: 'Languages', color: 'from-green-400 to-green-600' },
    { name: 'React', category: 'Frontend', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Next.js', category: 'Frontend', color: 'from-gray-400 to-gray-600' },
    { name: 'Vue.js', category: 'Frontend', color: 'from-emerald-400 to-emerald-600' },
    { name: 'Tailwind CSS', category: 'Frontend', color: 'from-teal-400 to-teal-600' },
    { name: 'Framer Motion', category: 'Frontend', color: 'from-purple-400 to-purple-600' },
    { name: 'Node.js', category: 'Backend', color: 'from-lime-400 to-lime-600' },
    { name: 'Express.js', category: 'Backend', color: 'from-orange-400 to-orange-600' },
    { name: 'Django', category: 'Backend', color: 'from-green-500 to-green-700' },
    { name: 'MongoDB', category: 'Databases', color: 'from-green-400 to-green-600' },
    { name: 'PostgreSQL', category: 'Databases', color: 'from-blue-500 to-blue-700' },
    { name: 'Firebase', category: 'Databases', color: 'from-amber-400 to-amber-600' },
    { name: 'Git', category: 'Tools', color: 'from-red-400 to-red-600' },
    { name: 'Docker', category: 'Tools', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', category: 'Tools', color: 'from-orange-400 to-orange-600' },
    { name: 'Figma', category: 'Tools', color: 'from-pink-400 to-pink-600' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      },
    },
  }

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      },
    },
  }

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  return (
    <motion.section 
      id="skills" 
      className="py-20 px-6 bg-dark-secondary/30 relative overflow-hidden"
      style={{ y: backgroundY }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating background particles with scroll animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  y: useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? -400 : 400)])
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.sin(i) * 50, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-text-primary mb-16 flex items-center relative z-10"
            style={{ scale: headerScale }}
          >
            <motion.span 
              className="text-accent font-mono text-xl mr-4"
              animate={{
                textShadow: [
                  "0 0 10px rgba(100, 255, 218, 0.5)",
                  "0 0 20px rgba(100, 255, 218, 0.8)",
                  "0 0 10px rgba(100, 255, 218, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              02.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Skills & Technologies
            </motion.span>
            <motion.div 
              className="ml-8 h-px bg-gradient-to-r from-dark-accent via-accent to-transparent flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ originX: 0 }}
            />
          </motion.h2>

          {/* Horizontal scrolling container with scroll parallax */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex gap-6 pb-6 overflow-x-auto scrollbar-thin scrollbar-track-dark-bg scrollbar-thumb-accent/30 hover:scrollbar-thumb-accent/50"
              style={{ 
                scrollbarWidth: 'thin',
                x: skillsX,
                paddingTop: '20px',
                paddingBottom: '20px'
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 w-64 bg-dark-bg/70 backdrop-blur-sm p-6 rounded-xl border border-dark-accent hover:border-accent/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        `linear-gradient(45deg, transparent, transparent)`,
                        `linear-gradient(45deg, rgba(100, 255, 218, 0.05), transparent)`,
                        `linear-gradient(45deg, transparent, transparent)`
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Content container - removed conflicting animations */}
                  <div className="relative z-10">
                    {/* Skill header with simplified animations */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3 
                        className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {skill.name}
                      </motion.h3>
                      <motion.span 
                        className="text-xs text-text-secondary bg-dark-accent/30 px-2 py-1 rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 255, 218, 0.2)" }}
                      >
                        {skill.category}
                      </motion.span>
                    </div>

                    {/* Skill indicator bar */}
                    <div className="mb-4">
                      <motion.span 
                        className="text-sm text-text-secondary block mb-2"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                      >
                        Expertise Level
                      </motion.span>
                      <div className="h-1.5 bg-dark-accent/30 rounded-full overflow-hidden relative">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          variants={progressVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          style={{ originX: 0 }}
                        >
                          {/* Single shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-white/30 rounded-full"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: 'loop',
                              ease: 'linear',
                              delay: index * 0.1
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Simplified decorative elements */}
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-accent rounded-full"
                            animate={{
                              scale: [0.8, 1.2, 0.8],
                              opacity: [0.4, 1, 0.4]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: index * 0.1 + i * 0.2
                            }}
                          />
                        ))}
                      </div>
                      <motion.div
                        className="text-accent/30 group-hover:text-accent/80 transition-colors duration-300 text-xl"
                        whileHover={{ 
                          rotate: 180,
                          scale: 1.2
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        ⚡
                      </motion.div>
                    </div>
                  </div>

                  {/* Simplified hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                  
                  {/* Removed conflicting border and sparkle effects */}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced scroll indicator with more animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex justify-center mt-8"
          >
            <motion.div
              animate={{ 
                x: [0, 15, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="flex items-center text-text-secondary text-sm bg-dark-bg/30 px-4 py-2 rounded-full border border-dark-accent/50"
            >
              <motion.span 
                className="mr-3"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll to explore
              </motion.span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      x: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="text-accent"
                  >
                    →
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills