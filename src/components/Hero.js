import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(100, 255, 218, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <section id="home" className="hero">
      {/* Dynamic background gradient */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)`,
          pointerEvents: 'none'
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="hero-name text-gradient"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          Animesh Kumar Rai
        </motion.h1>

        <motion.h2
          className="hero-title"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          style={{
            background: 'linear-gradient(45deg, #94a3b8, #64ffda, #94a3b8)',
            backgroundSize: '200% 200%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          className="hero-description"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          whileHover={{
            color: 'var(--text-primary)',
            transition: { duration: 0.3 }
          }}
        >
          I'm a passionate full-stack developer specializing in building exceptional digital experiences. 
          Currently focused on creating innovative web applications with modern technologies.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
        >
          <motion.button
            className="btn-primary"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => scrollToSection('projects')}
          >
            <motion.span
              animate={{
                x: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Check out my work!
            </motion.span>
          </motion.button>

          <motion.div 
            className="social-links"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.2
                }
              }
            }}
          >
            <motion.a
              href="https://github.com/ANIMESH9236"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: -180 },
                visible: { opacity: 1, scale: 1, rotate: 0 }
              }}
              whileHover={{ 
                scale: 1.3, 
                y: -5,
                rotate: 10,
                boxShadow: "0 10px 20px rgba(100, 255, 218, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </motion.svg>
            </motion.a>

            <motion.a
              href="mailto:animeshrai197@gmail.com"
              className="social-link"
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: -180 },
                visible: { opacity: 1, scale: 1, rotate: 0 }
              }}
              whileHover={{ 
                scale: 1.3, 
                y: -5,
                rotate: -10,
                boxShadow: "0 10px 20px rgba(100, 255, 218, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z"/>
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced floating particles */}
      <div className="hero-particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              background: `rgba(100, 255, 218, ${0.2 + Math.random() * 0.6})`,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2 + Math.random() * 0.5, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            border: '2px solid rgba(100, 255, 218, 0.3)',
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            borderRadius: i % 2 === 0 ? '50%' : '0%'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
        />
      ))}
    </section>
  );
};

export default Hero;