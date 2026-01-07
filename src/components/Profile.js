import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Profile = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3, once: true });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('profile')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const profileSection = document.getElementById('profile');
    if (profileSection) {
      profileSection.addEventListener('mousemove', handleMouseMove);
      return () => profileSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  const stats = [
    // { value: '2+', label: 'Years Experience', icon: '⏱️' },
    // { value: '10+', label: 'Projects Completed', icon: '🚀' },
    // { value: '5+', label: 'Technologies', icon: '💻' }
  ];

  return (
    <section id="profile" className="section profile" ref={ref}>
      {/* Dynamic background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)`,
          pointerEvents: 'none'
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="profile-content"
        variants={containerVariants}
        animate={controls}
        initial="hidden"
      >
        <motion.div className="profile-image" variants={itemVariants}>
          <motion.div
            className="profile-img-container"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, 0],
              transition: { 
                duration: 0.8,
                ease: "backOut"
              }
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(100, 255, 218, 0.2)",
                "0 0 40px rgba(100, 255, 218, 0.4)",
                "0 0 20px rgba(100, 255, 218, 0.2)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                fontSize: '4rem',
                background: 'linear-gradient(45deg, #64ffda, #ffffff, #64ffda)',
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              whileHover={{
                scale: 1.3,
                rotate: [0, 20, -20, 0],
                transition: { duration: 0.5 }
              }}
            >
              👨‍💻
            </motion.div>
            
            {/* Enhanced floating rings */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  inset: `-${25 + i * 20}px`,
                  border: `2px solid rgba(100, 255, 218, ${0.3 - i * 0.05})`,
                  borderRadius: '50%',
                  borderTop: `2px solid rgba(100, 255, 218, ${0.8 - i * 0.1})`,
                  borderRight: `2px solid rgba(100, 255, 218, ${0.6 - i * 0.1})`,
                }}
                animate={{ 
                  rotate: i % 2 === 0 ? 360 : -360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: {
                    duration: 12 + i * 3,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
            ))}

            {/* Orbiting particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`orbit-${i}`}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  background: 'var(--accent-color)',
                  borderRadius: '50%',
                  left: '50%',
                  top: '50%',
                  transformOrigin: `0 ${80 + i * 15}px`
                }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="profile-text" variants={itemVariants}>
          <motion.h3
            variants={itemVariants}
            whileHover={{ 
              color: '#64ffda',
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            style={{
              background: 'linear-gradient(45deg, #e2e8f0, #64ffda, #e2e8f0)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            transition={{
              backgroundPosition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            Full Stack Developer & Problem Solver
          </motion.h3>
          
          <motion.p 
            variants={itemVariants}
            whileHover={{
              color: 'var(--text-primary)',
              x: 5,
              transition: { duration: 0.3 }
            }}
          >
            I’m a Full Stack Developer with a strong foundation in data structures and algorithms, focused on building scalable, high-performance web applications using modern technologies. I enjoy solving complex problems and turning them into clean, efficient, and user-centric solutions.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            whileHover={{
              color: 'var(--text-primary)',
              x: 5,
              transition: { duration: 0.3 }
            }}
          >
            When I’m not coding, I’m solving algorithmic problems, experimenting with new technologies, and building impactful projects that push my technical limits.
          </motion.p>

          <motion.div 
            className="profile-stats"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  rotateY: 10,
                  boxShadow: '0 20px 40px rgba(100, 255, 218, 0.3)',
                  borderColor: 'rgba(100, 255, 218, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  borderColor: [
                    'rgba(51, 65, 85, 0.3)',
                    'rgba(100, 255, 218, 0.3)',
                    'rgba(51, 65, 85, 0.3)'
                  ]
                }}
                transition={{
                  borderColor: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }
                }}
              >
                <motion.div
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}
                >
                  <motion.span
                    style={{ fontSize: '1.5rem' }}
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    {stat.icon}
                  </motion.span>
                  <motion.div
                    className="stat-value"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.5 + index * 0.2, 
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.2,
                      color: '#ffffff'
                    }}
                  >
                    {stat.value}
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="stat-label"
                  whileHover={{ color: 'var(--text-primary)' }}
                >
                  {stat.label}
                </motion.div>

                {/* Animated background */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.05), transparent)',
                    borderRadius: '8px',
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced floating elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `rgba(100, 255, 218, ${0.2 + Math.random() * 0.4})`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50 - Math.random() * 30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 360]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;