import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2, once: true });
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const skills = [
    {
      name: 'JavaScript',
      category: 'Frontend',
      icon: '⚡',
      color: '#F7DF1E'
    },
    {
      name: 'React',
      category: 'Frontend',
      icon: '⚛️',
      color: '#61DAFB'
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: '🟢',
      color: '#339933'
    },
    {
      name: 'Python',
      category: 'Backend',
      icon: '🐍',
      color: '#3776AB'
    },
    {
      name: 'MongoDB',
      category: 'Database',
      icon: '🍃',
      color: '#47A248'
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      icon: '🐘',
      color: '#336791'
    },
    {
      name: 'Express.js',
      category: 'Backend',
      icon: '🚀',
      color: '#000000'
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      icon: '▲',
      color: '#000000'
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      icon: '📘',
      color: '#3178C6'
    },
    {
      name: 'Git',
      category: 'Tools',
      icon: '📝',
      color: '#F05032'
    },
    {
      name: 'MySQL',
      category: 'Database',
      icon: '🐬',
      color: '#FF9900'
    },
    // {
    //   name: 'Docker',
    //   category: 'DevOps',
    //   icon: '🐳',
    //   color: '#2496ED'
    // }
  ];

  return (
    <section id="skills" className="section skills" ref={ref}>
      <motion.div
        variants={containerVariants}
        animate={controls}
        initial="hidden"
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          <motion.span
            whileHover={{
              scale: 1.05,
              color: '#64ffda'
            }}
          >
            Skills & Technologies
          </motion.span>
          <div className="section-line"></div>
        </motion.h2>

        <motion.div 
          className="skills-container"
          variants={containerVariants}
          style={{ 
            paddingBottom: '2rem',
            position: 'relative'
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              whileHover={{
                scale: 1.08,
                y: -15,
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(100, 255, 218, 0.3)',
                borderColor: 'rgba(100, 255, 218, 0.6)',
                zIndex: 10
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: hoveredIndex !== null && hoveredIndex !== index ? 0.95 : 1,
                opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.7 : 1,
                filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(2px)' : 'blur(0px)'
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, transparent, rgba(100, 255, 218, 0.1), transparent)`,
                  borderRadius: '12px',
                  opacity: 0
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  backgroundPosition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />

              <div className="skill-header">
                <motion.h3 
                  className="skill-name"
                  whileHover={{
                    color: skill.color,
                    scale: 1.05
                  }}
                >
                  {skill.name}
                </motion.h3>
                <motion.span 
                  className="skill-category"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(100, 255, 218, 0.2)'
                  }}
                >
                  {skill.category}
                </motion.span>
              </div>

              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: '100%', 
                    opacity: 1,
                    background: [
                      'linear-gradient(90deg, #64ffda, #38bdf8)',
                      `linear-gradient(90deg, ${skill.color}, #64ffda)`,
                      'linear-gradient(90deg, #64ffda, #38bdf8)'
                    ]
                  }}
                  transition={{ 
                    width: { delay: index * 0.1, duration: 1.5, ease: "easeOut" },
                    opacity: { delay: index * 0.1, duration: 0.5 },
                    background: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{
                    height: '8px',
                    boxShadow: `0 0 20px ${skill.color}40`
                  }}
                />
              </div>

              <div className="skill-footer">
                <div className="skill-dots">
                  {[...Array(3)].map((_, dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      className="skill-dot"
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.4, 1, 0.4],
                        backgroundColor: [
                          'var(--accent-color)',
                          skill.color,
                          'var(--accent-color)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: dotIndex * 0.2 + index * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                <motion.div
                  className="skill-icon"
                  style={{ fontSize: '1.5rem' }}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.3,
                    color: skill.color
                  }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {skill.icon}
                </motion.div>
              </div>

              {/* Shimmer effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  borderRadius: '12px'
                }}
                animate={{
                  left: hoveredIndex === index ? '100%' : '-100%'
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced floating background elements */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: `${4 + Math.random() * 10}px`,
                height: `${4 + Math.random() * 10}px`,
                background: `rgba(100, 255, 218, ${0.1 + Math.random() * 0.4})`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40 - Math.random() * 20, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5],
                rotate: [0, 360]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Connecting lines between skills */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.1
          }}
          width="100%"
          height="100%"
        >
          {skills.map((_, index) => (
            index < skills.length - 1 && (
              <motion.line
                key={index}
                x1={`${(index % 4) * 25 + 12.5}%`}
                y1="50%"
                x2={`${((index + 1) % 4) * 25 + 12.5}%`}
                y2="50%"
                stroke="rgba(100, 255, 218, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            )
          ))}
        </svg>
      </motion.div>
    </section>
  );
};

export default Skills;