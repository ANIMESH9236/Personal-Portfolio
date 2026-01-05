'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, ExternalLink, FileText } from 'lucide-react'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef(null)
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              y: useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? -300 : 300)])
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
        style={{ scale }}
      >
        <motion.p
          variants={itemVariants}
          className="text-accent font-mono text-sm mb-4"
          animate={{
            textShadow: [
              "0 0 0px rgba(100, 255, 218, 0)",
              "0 0 10px rgba(100, 255, 218, 0.5)",
              "0 0 0px rgba(100, 255, 218, 0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-text-primary mb-4"
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 30px rgba(100, 255, 218, 0.3)"
          }}
        >
          Animesh Kumar Rai
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-text-secondary mb-6"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          style={{
            background: "linear-gradient(90deg, #94a3b8, #64ffda, #94a3b8)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          BTech CSE | Full-Stack Developer
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Aspiring Full Stack Developer passionate about problem-solving and building scalable real-world applications with strong DSA foundations.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-dark-bg transition-all duration-300 font-mono text-sm relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
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
            <motion.span
              className="relative z-10"
              animate={{
                color: [
                  "rgb(100, 255, 218)",
                  "rgb(255, 255, 255)",
                  "rgb(100, 255, 218)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              View My Projects
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-accent/10"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </motion.a>
          
          <div className="flex gap-4">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-accent transition-colors relative"
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              title="Resume"
            >
              <FileText size={24} />
              <motion.div
                className="absolute inset-0 border border-accent/30 rounded"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.a>
            
            <motion.a
              href="https://github.com/ANIMESH9236"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-accent transition-colors relative"
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              title="GitHub"
            >
              <Github size={24} />
              <motion.div
                className="absolute inset-0 border border-accent/30 rounded"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center"
          whileHover={{ borderColor: "rgb(100, 255, 218)" }}
        >
          <motion.div
            className="w-1 h-3 bg-accent rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero