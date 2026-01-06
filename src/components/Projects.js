import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      title: 'Cinemora',
      label: 'Featured Project',
      description: 'A comprehensive movie discovery platform built with modern web technologies. Features include movie search, detailed information, ratings, reviews, and personalized recommendations. The application provides an intuitive user experience with responsive design and smooth animations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'API Integration', 'Responsive Design'],
      liveLink: 'https://cinemora-dusky.vercel.app/',
      githubLink: 'https://github.com/ANIMESH9236/CINEMORA.git',
      icon: '🎬'
    },
    {
      title: 'Portfolio Website',
      label: 'Personal Project',
      description: 'A modern, responsive portfolio website showcasing my skills, projects, and experience. Built with React and Framer Motion for smooth animations and interactions. Features include dark theme, smooth scrolling, and mobile-responsive design.',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveLink: '#',
      githubLink: 'https://github.com/ANIMESH9236/Personal-Portfolio.git',
      icon: '💼'
    },
    {
      title: 'E-Commerce Platform',
      label: 'Full Stack Project',
      description: 'A complete e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Features admin panel for inventory management and order tracking.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'JWT', 'Redux'],
      liveLink: '#',
      githubLink: '#',
      icon: '🛒'
    }
  ];

  return (
    <section id="projects" className="section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          <motion.span 
            className="section-number"
            animate={{
              color: ['#64ffda', '#ffffff', '#64ffda']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            03.
          </motion.span>
          <motion.span
            whileHover={{
              scale: 1.05,
              color: '#64ffda'
            }}
          >
            Some Things I've Built
          </motion.span>
          <div className="section-line"></div>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
            >
              <motion.div 
                className="project-content"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(100, 255, 218, 0.1)'
                }}
              >
                <motion.p 
                  className="project-label"
                  whileHover={{ color: '#ffffff' }}
                >
                  {project.label}
                </motion.p>
                
                <motion.h3 
                  className="project-title"
                  whileHover={{ 
                    color: 'var(--accent-color)',
                    x: 5
                  }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="project-description"
                  whileHover={{ color: 'var(--text-primary)' }}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="project-tech"
                  variants={containerVariants}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-tag"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(100, 255, 218, 0.2)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="project-links">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ 
                      scale: 1.2,
                      y: -3,
                      color: 'var(--accent-color)'
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ 
                      scale: 1.2,
                      y: -3,
                      color: 'var(--accent-color)'
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                className="project-image"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="project-img-container"
                  whileHover={{
                    borderColor: 'rgba(100, 255, 218, 0.6)',
                    boxShadow: '0 20px 40px rgba(100, 255, 218, 0.2)'
                  }}
                >
                  <motion.div
                    style={{ fontSize: '4rem' }}
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Animated shimmer effect */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.1), transparent)',
                      borderRadius: '12px'
                    }}
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;