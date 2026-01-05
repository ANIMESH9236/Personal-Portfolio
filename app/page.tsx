'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Profile from './components/Profile'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  // Loading screen animation
  const loadingVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  // Page entrance animation
  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 20
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }

  // Section transition variants
  const sectionVariants = {
    initial: { 
      opacity: 0,
      y: 50
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  if (!mounted) return null

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        // Loading Screen
        <motion.div
          key="loading"
          variants={loadingVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50"
        >
          <div className="text-center">
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full mx-auto mb-4"
            />
            <motion.h1
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              className="text-2xl font-bold text-accent font-mono"
            >
              Animesh Kumar Rai
            </motion.h1>
            <motion.p
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.5
              }}
              className="text-text-secondary mt-2"
            >
              Loading Portfolio...
            </motion.p>
          </div>
        </motion.div>
      ) : (
        // Main Content
        <motion.div
          key="content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          className="min-h-screen bg-dark-bg relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>

          {/* Navigation with entrance animation */}
          <motion.div
            variants={sectionVariants}
            className="relative z-10"
          >
            <Navigation />
          </motion.div>

          {/* Main content with section transitions */}
          <motion.main className="relative z-10">
            {/* Hero Section */}
            <motion.div
              variants={sectionVariants}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="animate"
              initial="initial"
            >
              <Hero />
            </motion.div>

            {/* Section Divider */}
            <motion.div
              className="relative py-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="max-w-6xl mx-auto px-6">
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                  animate={{
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Profile Section */}
            <motion.div
              variants={sectionVariants}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="animate"
              initial="initial"
            >
              <Profile />
            </motion.div>

            {/* Section Divider */}
            <motion.div
              className="relative py-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="max-w-6xl mx-auto px-6">
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                  animate={{
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>

            {/* About Section */}
            <motion.div
              variants={sectionVariants}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="animate"
              initial="initial"
            >
              <About />
            </motion.div>

            {/* Section Divider */}
            <motion.div
              className="relative py-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="max-w-6xl mx-auto px-6">
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                  animate={{
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={sectionVariants}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="animate"
              initial="initial"
            >
              <Skills />
            </motion.div>

            {/* Section Divider */}
            <motion.div
              className="relative py-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="max-w-6xl mx-auto px-6">
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                  animate={{
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 3 }}
                />
              </div>
            </motion.div>

            {/* Projects Section */}
            <motion.div
              variants={sectionVariants}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="animate"
              initial="initial"
            >
              <Projects />
            </motion.div>

            {/* Section Divider */}
            <motion.div
              className="relative py-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="max-w-6xl mx-auto px-6">
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                  animate={{
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 4 }}
                />
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              variants={sectionVariants}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="animate"
              initial="initial"
            >
              <Contact />
            </motion.div>
          </motion.main>

          {/* Floating action elements */}
          <motion.div
            className="fixed bottom-8 right-8 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.button
              className="bg-accent text-dark-bg p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 30px rgba(100, 255, 218, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              animate={{
                y: [0, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ↑
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}