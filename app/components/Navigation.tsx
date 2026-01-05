'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  const { scrollYProgress } = useScroll()
  const navY = useTransform(scrollYProgress, [0, 0.1], [0, -10])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'profile', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ y: navY }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg border-b border-accent/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent via-accent/80 to-accent origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-xl font-bold text-accent hover:text-accent-hover transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              textShadow: [
                "0 0 0px rgba(100, 255, 218, 0)",
                "0 0 10px rgba(100, 255, 218, 0.5)",
                "0 0 0px rgba(100, 255, 218, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &lt;Animesh /&gt;
            
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-accent"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`relative text-text-secondary hover:text-accent transition-all duration-300 font-mono text-sm cursor-pointer group ${
                  activeSection === item.id ? 'text-accent' : ''
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  y: -3,
                  textShadow: "0 0 8px rgba(100, 255, 218, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="text-accent"
                  animate={{
                    opacity: activeSection === item.id ? [0.7, 1, 0.7] : 1
                  }}
                  transition={{ duration: 2, repeat: activeSection === item.id ? Infinity : 0 }}
                >
                  0{index + 1}.
                </motion.span> {item.name}
                
                {/* Active indicator */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-accent/5 rounded -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            
            {/* Resume button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-dark-bg transition-all duration-300 font-mono text-sm rounded relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
              
              {/* Button shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-accent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.div 
                className="w-full h-0.5 bg-accent"
                animate={{ scaleX: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-full h-0.5 bg-accent"
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div 
                className="w-full h-0.5 bg-accent"
                animate={{ scaleX: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation