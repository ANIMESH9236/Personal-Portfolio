'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Profile = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const textX = useTransform(scrollYProgress, [0, 1], [0, 50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      },
    },
  }

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      },
    },
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      },
    },
  }

  const orbitVariants = {
    animate: (i: number) => ({
      rotate: 360,
      transition: {
        duration: 20 + i * 5,
        repeat: Infinity,
        ease: "linear"
      }
    })
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section 
      id="profile" 
      className="py-20 px-6 bg-gradient-to-br from-dark-bg via-dark-secondary/20 to-dark-bg relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background decorative elements with scroll animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              y: useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? -200 : 200)])
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{ scale }}
        >
          {/* Profile Image Section with scroll parallax */}
          <motion.div 
            variants={imageVariants}
            className="relative flex justify-center lg:justify-start"
            style={{ y: imageY }}
          >
            {/* Orbiting elements with scroll-based rotation */}
            <div className="relative">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-accent/20 rounded-full"
                  style={{
                    width: `${300 + i * 60}px`,
                    height: `${300 + i * 60}px`,
                    left: `${-30 * i}px`,
                    top: `${-30 * i}px`,
                    rotate: useTransform(scrollYProgress, [0, 1], [0, 360 * (i + 1)])
                  }}
                >
                  <motion.div
                    className="absolute w-2 h-2 bg-accent rounded-full"
                    style={{
                      top: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                </motion.div>
              ))}

              {/* Main profile image container */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative z-10"
              >
                <motion.div
                  className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(100, 255, 218, 0.6)",
                    boxShadow: "0 0 50px rgba(100, 255, 218, 0.3)"
                  }}
                  style={{
                    rotateY: useTransform(scrollYProgress, [0, 1], [0, 15])
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 via-dark-secondary to-accent/10 flex items-center justify-center">
                    <motion.div
                      className="text-6xl text-accent/60"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      👨‍💻
                    </motion.div>
                  </div>
                  
                  {/* Animated overlay with scroll effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/5"
                    style={{
                      rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
                    }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }}
                  />
                </motion.div>

                {/* Floating status indicator */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-green-500 w-8 h-8 rounded-full border-4 border-dark-bg flex items-center justify-center z-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.7)",
                      "0 0 0 10px rgba(34, 197, 94, 0)",
                      "0 0 0 0 rgba(34, 197, 94, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Content Section with scroll parallax */}
          <motion.div 
            variants={textVariants}
            className="space-y-6"
            style={{ x: textX }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-text-primary mb-4 flex items-center"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(100, 255, 218, 0)",
                    "0 0 20px rgba(100, 255, 218, 0.3)",
                    "0 0 0px rgba(100, 255, 218, 0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-accent font-mono text-xl mr-4">01.</span>
                About Me
                <motion.div 
                  className="ml-8 h-px bg-gradient-to-r from-dark-accent via-accent to-transparent flex-1 max-w-xs"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  style={{ originX: 0 }}
                />
              </motion.h2>
            </motion.div>

            <motion.div
              className="space-y-4 text-text-secondary leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.p
                whileHover={{ color: "rgb(226, 232, 240)" }}
                transition={{ duration: 0.3 }}
              >
                Hello! I'm Animesh Kumar Rai, a passionate full-stack developer with a love for creating 
                innovative digital experiences. My journey in web development started 
                during my computer science studies, and I've been hooked ever since.
              </motion.p>
              
              <motion.p
                whileHover={{ color: "rgb(226, 232, 240)" }}
                transition={{ duration: 0.3 }}
              >
                I specialize in modern web technologies and enjoy working on projects 
                that challenge me to learn and grow. My recent project, Cinemora, showcases 
                my skills in building comprehensive movie discovery platforms with advanced features.
              </motion.p>
              
              <motion.p
                whileHover={{ color: "rgb(226, 232, 240)" }}
                transition={{ duration: 0.3 }}
              >
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source, or sharing knowledge with the developer community.
              </motion.p>
            </motion.div>

            {/* Animated stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                { label: 'Projects', value: '50+' },
                { label: 'Experience', value: '3+ Years' },
                { label: 'Technologies', value: '20+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-dark-bg/50 rounded-lg border border-dark-accent/30"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(100, 255, 218, 0.5)",
                    backgroundColor: "rgba(100, 255, 218, 0.05)"
                  }}
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <motion.div
                    className="text-2xl font-bold text-accent mb-1"
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to action */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.button
                className="bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-dark-bg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(100, 255, 218, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  borderColor: [
                    "rgb(100, 255, 218)",
                    "rgba(100, 255, 218, 0.6)",
                    "rgb(100, 255, 218)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background ambient effects with scroll animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]),
          y: useTransform(scrollYProgress, [0, 1], [0, -100])
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]),
          y: useTransform(scrollYProgress, [0, 1], [0, 100])
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />
    </motion.section>
  )
}

export default Profile