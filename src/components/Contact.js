import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3, once: true });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('contact')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.addEventListener('mousemove', handleMouseMove);
      return () => contactSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const contactLinks = [
    {
      label: 'Email',
      value: 'animeshkumarrai9236@gmail.com',
      href: 'mailto:animeshkumarrai9236@gmail.com',
      icon: '📧',
      color: '#EA4335'
    },
    {
      label: 'GitHub',
      value: 'github.com/ANIMESH9236',
      href: 'https://github.com/ANIMESH9236',
      icon: '💻',
      color: '#333'
    },
    {
      label: 'Location',
      value: 'Available for Remote Work',
      href: '#',
      icon: '📍',
      color: '#4285F4'
    }
  ];

  return (
    <section id="contact" className="section contact" ref={ref}>
      {/* Dynamic background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(100, 255, 218, 0.08) 0%, transparent 50%)`,
          pointerEvents: 'none'
        }}
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
            Get In Touch
          </motion.span>
          <div className="section-line"></div>
        </motion.h2>

        <motion.div className="contact-content" variants={itemVariants}>
          <motion.p 
            className="contact-description"
            whileHover={{ 
              color: 'var(--text-primary)',
              scale: 1.02
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            style={{
              background: 'linear-gradient(45deg, #94a3b8, #e2e8f0, #94a3b8)',
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
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={containerVariants}>
              <motion.h3 
                variants={itemVariants}
                whileHover={{
                  color: '#64ffda',
                  scale: 1.05
                }}
              >
                Let's Connect
              </motion.h3>
              <div className="contact-links">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="contact-link"
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    variants={itemVariants}
                    whileHover={{
                      x: 15,
                      scale: 1.05,
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      borderColor: 'rgba(100, 255, 218, 0.6)',
                      boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      style={{ fontSize: '1.2rem' }}
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: [0, -10, 10, 0],
                        color: link.color
                      }}
                      animate={{
                        y: [0, -3, 0]
                      }}
                      transition={{
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      {link.icon}
                    </motion.span>
                    <div>
                      <motion.div 
                        style={{ fontWeight: '600', color: 'var(--text-primary)' }}
                        whileHover={{ color: '#64ffda' }}
                      >
                        {link.label}
                      </motion.div>
                      <motion.div 
                        style={{ fontSize: '0.875rem' }}
                        whileHover={{ color: 'var(--text-primary)' }}
                      >
                        {link.value}
                      </motion.div>
                    </div>

                    {/* Animated border */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        border: '2px solid transparent',
                        borderRadius: '8px',
                        background: `linear-gradient(45deg, transparent, ${link.color}40, transparent) border-box`,
                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'exclude',
                        opacity: 0
                      }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form 
              className="contact-form" 
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <motion.div className="form-group" variants={itemVariants}>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: 'var(--accent-color)',
                    boxShadow: '0 0 25px rgba(100, 255, 218, 0.4)'
                  }}
                  animate={{
                    borderColor: formData.name ? 'rgba(100, 255, 218, 0.5)' : 'var(--dark-accent)'
                  }}
                />
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: 'var(--accent-color)',
                    boxShadow: '0 0 25px rgba(100, 255, 218, 0.4)'
                  }}
                  animate={{
                    borderColor: formData.email ? 'rgba(100, 255, 218, 0.5)' : 'var(--dark-accent)'
                  }}
                />
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: 'var(--accent-color)',
                    boxShadow: '0 0 25px rgba(100, 255, 218, 0.4)'
                  }}
                  animate={{
                    borderColor: formData.message ? 'rgba(100, 255, 218, 0.5)' : 'var(--dark-accent)'
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="form-button"
                variants={itemVariants}
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: isSubmitting ? 'none' : '0 0 40px rgba(100, 255, 218, 0.5)'
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                animate={{
                  backgroundColor: isSubmitting ? '#4a5568' : 'var(--accent-color)',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                <motion.span
                  animate={{
                    opacity: isSubmitting ? 0 : 1
                  }}
                >
                  Send Message
                </motion.span>
                
                {isSubmitting && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid transparent',
                        borderTop: '2px solid var(--primary-bg)',
                        borderRadius: '50%'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        {/* Enhanced floating particles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: `${3 + Math.random() * 8}px`,
                height: `${3 + Math.random() * 8}px`,
                background: `rgba(100, 255, 218, ${0.2 + Math.random() * 0.5})`,
                borderRadius: Math.random() > 0.7 ? '50%' : '0%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50 - Math.random() * 30, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Animated connection lines */}
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
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${20 + Math.random() * 60}%`}
              cy={`${20 + Math.random() * 60}%`}
              r="2"
              fill="rgba(100, 255, 218, 0.6)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>
    </section>
  );
};

export default Contact;