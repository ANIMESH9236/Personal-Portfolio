'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Play, Star, Users, Calendar } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const headerScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 1.1])

  const projects = [
    {
      title: 'Cinemora',
      description: 'A comprehensive movie discovery platform that brings the magic of cinema to your fingertips. Features advanced search, personalized recommendations, detailed movie information, trailers, reviews, and user watchlists. Built with modern web technologies for optimal performance and user experience.',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TMDB API', 'Framer Motion'],
      github: 'https://github.com/ANIMESH9236/CINEMORA.git',
      live: 'https://cinemora-dusky.vercel.app/',
      featured: true,
      stats: {
        stars: '⭐ Featured',
        users: '🎬 Movie Discovery',
        date: '2024'
      }
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with performance and accessibility in mind, featuring smooth scroll animations, interactive elements, and clean design.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/ANIMESH9236',
      live: '#',
      featured: true,
      stats: {
        stars: '✨ Interactive',
        users: '🚀 Performance',
        date: '2024'
      }
    },
    {
      title: 'Coming Soon',
      description: 'Exciting new projects are in development! Stay tuned for innovative web applications that push the boundaries of user experience and modern web technologies.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/ANIMESH9236',
      live: null,
      featured: false,
      stats: {
        stars: '🔮 Future',
        users: '⚡ Innovation',
        date: '2024'
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.section 
      id="projects" 
      className="py-20 px-6 relative overflow-hidden"
      style={{ y: backgroundY }}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent/20 rounded-full"
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
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 flex items-center relative z-10"
            style={{ scale: headerScale }}
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
              03.
            </motion.span>
            Projects
            <motion.div 
              className="ml-8 h-px bg-gradient-to-r from-dark-accent via-accent to-transparent flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ originX: 0 }}
            />
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`group relative ${
                  project.featured 
                    ? 'lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center' 
                    : 'bg-dark-secondary/50 p-6 rounded-lg border border-dark-accent hover:border-accent/30 transition-all duration-300'
                }`}
                style={{
                  y: useTransform(scrollYProgress, [0, 1], [0, (index % 2 === 0 ? -30 : 30)])
                }}
              >
                {project.featured ? (
                  <>
                    <motion.div 
                      className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                      whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-dark-secondary/80 backdrop-blur-sm p-8 rounded-lg border border-dark-accent group-hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'loop'
                          }}
                        />
                        
                        <div className="relative z-10">
                          <motion.p 
                            className="text-accent font-mono text-sm mb-2"
                            animate={{
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Featured Project
                          </motion.p>
                          <motion.h3 
                            className="text-2xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors"
                            whileHover={{ scale: 1.02 }}
                          >
                            {project.title}
                          </motion.h3>
                          
                          {/* Project stats */}
                          <div className="flex gap-4 mb-4">
                            {Object.entries(project.stats).map(([key, value]) => (
                              <motion.span
                                key={key}
                                className="text-xs text-accent/80 bg-accent/10 px-2 py-1 rounded-full border border-accent/20"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 255, 218, 0.2)" }}
                              >
                                {value}
                              </motion.span>
                            ))}
                          </div>
                          
                          <motion.p 
                            className="text-text-secondary leading-relaxed mb-6"
                            whileHover={{ color: "rgb(226, 232, 240)" }}
                          >
                            {project.description}
                          </motion.p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-3 py-1 text-sm font-mono text-accent bg-accent/10 rounded border border-accent/20"
                                whileHover={{ 
                                  scale: 1.05,
                                  backgroundColor: "rgba(100, 255, 218, 0.2)",
                                  borderColor: "rgba(100, 255, 218, 0.4)"
                                }}
                                animate={{
                                  y: [0, -2, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: techIndex * 0.1
                                }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                          <div className="flex gap-4">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-secondary hover:text-accent transition-colors relative"
                              whileHover={{ 
                                scale: 1.2, 
                                y: -3,
                                boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)"
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github size={20} />
                              <motion.div
                                className="absolute inset-0 border border-accent/30 rounded"
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0, 0.5, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                              />
                            </motion.a>
                            {project.live && (
                              <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-secondary hover:text-accent transition-colors relative"
                                whileHover={{ 
                                  scale: 1.2, 
                                  y: -3,
                                  boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)"
                                }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink size={20} />
                                <motion.div
                                  className="absolute inset-0 border border-accent/30 rounded"
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0, 0.5, 0]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                />
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div 
                      className={`lg:col-span-5 mt-8 lg:mt-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: index % 2 === 1 ? -5 : 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative group-hover:scale-105 transition-transform duration-300">
                        <motion.div 
                          className="aspect-video bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-lg border-2 border-accent/20 flex items-center justify-center relative overflow-hidden"
                          animate={{
                            borderColor: [
                              "rgba(100, 255, 218, 0.2)",
                              "rgba(100, 255, 218, 0.4)",
                              "rgba(100, 255, 218, 0.2)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <motion.div 
                            className="text-accent/60 text-4xl font-mono"
                            animate={{
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                          >
                            {project.title === 'Cinemora' ? '🎬' : '&lt;/&gt;'}
                          </motion.div>
                          
                          {/* Animated overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: 'loop'
                            }}
                          />
                          
                          {/* Corner effects */}
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-accent/40 rounded-full"
                              style={{
                                top: i < 2 ? '10px' : 'auto',
                                bottom: i >= 2 ? '10px' : 'auto',
                                left: i % 2 === 0 ? '10px' : 'auto',
                                right: i % 2 === 1 ? '10px' : 'auto',
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.5
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
                  </>
                ) : (
                  <motion.div 
                    className="flex flex-col h-full relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(30, 41, 59, 0.8)"
                    }}
                  >
                    {/* Background animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop'
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <motion.h3 
                          className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors"
                          whileHover={{ scale: 1.02 }}
                        >
                          {project.title}
                        </motion.h3>
                        <div className="flex gap-3">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent transition-colors"
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github size={18} />
                          </motion.a>
                          {project.live && (
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-secondary hover:text-accent transition-colors"
                              whileHover={{ scale: 1.2, y: -2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink size={18} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      
                      {/* Project stats */}
                      <div className="flex gap-2 mb-4">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <motion.span
                            key={key}
                            className="text-xs text-accent/80 bg-accent/10 px-2 py-1 rounded-full border border-accent/20"
                            whileHover={{ scale: 1.05 }}
                          >
                            {value}
                          </motion.span>
                        ))}
                      </div>
                      
                      <motion.p 
                        className="text-text-secondary leading-relaxed mb-4 flex-1"
                        whileHover={{ color: "rgb(226, 232, 240)" }}
                      >
                        {project.description}
                      </motion.p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono text-accent bg-accent/10 rounded border border-accent/20"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(100, 255, 218, 0.2)"
                            }}
                            animate={{
                              y: [0, -1, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: techIndex * 0.1
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects