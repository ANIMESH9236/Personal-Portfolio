'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  return (
    <motion.section 
      id="about" 
      className="py-20 px-6 relative overflow-hidden"
      style={{ y: backgroundY }}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/10 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 2) * 60}%`,
              y: useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? -150 : 150)])
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-text-primary mb-8 flex items-center"
          >
            <motion.span 
              className="text-accent font-mono text-xl mr-4"
              animate={{
                textShadow: [
                  "0 0 0px rgba(100, 255, 218, 0)",
                  "0 0 15px rgba(100, 255, 218, 0.6)",
                  "0 0 0px rgba(100, 255, 218, 0)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              01.
            </motion.span>
            About Me
            <motion.div 
              className="ml-8 h-px bg-gradient-to-r from-dark-accent via-accent to-transparent flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ originX: 0 }}
            />
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <motion.div 
              className="md:col-span-2"
              style={{ y: textY }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-text-secondary leading-relaxed space-y-4"
              >
                <motion.p
                  whileHover={{ 
                    color: "rgb(226, 232, 240)",
                    x: 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  I'm Animesh Kumar Rai, a passionate Computer Science student currently pursuing my BTech degree, 
                  with a strong focus on full-stack development and problem-solving. I love 
                  turning complex problems into simple, beautiful solutions through code.
                </motion.p>
                
                <motion.p
                  whileHover={{ 
                    color: "rgb(226, 232, 240)",
                    x: 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  My journey in programming started with curiosity about how websites work, 
                  and has evolved into a deep appreciation for clean code, user experience, 
                  and continuous learning. My recent project Cinemora showcases my ability to build 
                  comprehensive web applications with modern technologies.
                </motion.p>
                
                <motion.p
                  whileHover={{ 
                    color: "rgb(226, 232, 240)",
                    x: 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  When I'm not coding, you can find me contributing to open-source projects, 
                  participating in hackathons, or learning about the latest developments in 
                  artificial intelligence and web technologies.
                </motion.p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
              style={{ y: imageY }}
            >
              <div className="relative">
                <motion.div 
                  className="w-64 h-64 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-lg border-2 border-accent/20 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(100, 255, 218, 0.5)",
                    boxShadow: "0 20px 40px rgba(100, 255, 218, 0.2)"
                  }}
                >
                  <motion.div 
                    className="text-accent/60 text-6xl font-mono"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    &lt;/&gt;
                  </motion.div>
                  
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      background: [
                        "linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.1), transparent)",
                        "linear-gradient(135deg, transparent, rgba(100, 255, 218, 0.1), transparent)",
                        "linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.1), transparent)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Floating particles inside */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent/40 rounded-full"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </motion.div>
                
                <motion.div 
                  className="absolute inset-0 bg-accent/20 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"
                  animate={{
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About