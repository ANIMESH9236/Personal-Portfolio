'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, Linkedin, Mail, Send, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const headerScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 1.1])
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
      id="contact" 
      className="py-20 px-6 bg-dark-secondary/30 relative overflow-hidden"
      style={{ y: backgroundY }}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              y: useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? -150 : 150)])
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4 flex items-center justify-center relative z-10"
            style={{ scale: headerScale }}
            variants={itemVariants}
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
              04.
            </motion.span>
            Get In Touch
            <motion.div 
              className="ml-8 h-px bg-gradient-to-r from-accent via-accent/50 to-transparent flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ originX: 0 }}
            />
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto"
            whileHover={{ color: "rgb(226, 232, 240)" }}
          >
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Feel free to reach out!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div>
                <motion.h3 
                  className="text-xl font-semibold text-text-primary mb-6"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(100, 255, 218, 0)",
                      "0 0 10px rgba(100, 255, 218, 0.3)",
                      "0 0 0px rgba(100, 255, 218, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Let's Connect
                </motion.h3>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:animeshkumarrai9236@gmail.com"
                    className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors group p-3 rounded-lg border border-dark-accent/30 hover:border-accent/50 bg-dark-bg/30"
                    whileHover={{ 
                      x: 10,
                      scale: 1.02,
                      backgroundColor: "rgba(100, 255, 218, 0.05)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Mail size={20} className="group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <span>animeshkumarrai9236@gmail.com</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/ANIMESH9236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors group p-3 rounded-lg border border-dark-accent/30 hover:border-accent/50 bg-dark-bg/30"
                    whileHover={{ 
                      x: 10,
                      scale: 1.02,
                      backgroundColor: "rgba(100, 255, 218, 0.05)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Github size={20} className="group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <span>GitHub Profile</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com/in/animesh-kumar-rai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors group p-3 rounded-lg border border-dark-accent/30 hover:border-accent/50 bg-dark-bg/30"
                    whileHover={{ 
                      x: 10,
                      scale: 1.02,
                      backgroundColor: "rgba(100, 255, 218, 0.05)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <span>LinkedIn Profile</span>
                  </motion.a>
                </div>
              </div>

              {/* Additional contact info */}
              <motion.div
                className="p-6 bg-dark-bg/50 rounded-lg border border-dark-accent/30"
                whileHover={{ 
                  borderColor: "rgba(100, 255, 218, 0.5)",
                  backgroundColor: "rgba(100, 255, 218, 0.05)"
                }}
              >
                <h4 className="text-accent font-semibold mb-4">Quick Response</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to connect with me on LinkedIn for faster communication.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-lg"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(100, 255, 218, 0.05), transparent, rgba(100, 255, 218, 0.05))",
                    "linear-gradient(135deg, rgba(100, 255, 218, 0.05), transparent, rgba(100, 255, 218, 0.05))",
                    "linear-gradient(45deg, rgba(100, 255, 218, 0.05), transparent, rgba(100, 255, 218, 0.05))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-accent rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-all duration-300"
                    whileFocus={{ 
                      borderColor: "rgb(100, 255, 218)",
                      boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)"
                    }}
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-accent rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-all duration-300"
                    whileFocus={{ 
                      borderColor: "rgb(100, 255, 218)",
                      boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)"
                    }}
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-accent rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                    whileFocus={{ 
                      borderColor: "rgb(100, 255, 218)",
                      boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)"
                    }}
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-dark-bg font-semibold rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(100, 255, 218, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    borderColor: [
                      "rgba(100, 255, 218, 0.5)",
                      "rgba(100, 255, 218, 1)",
                      "rgba(100, 255, 218, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Send size={18} />
                  </motion.div>
                  Send Message
                  
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
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced Footer */}
      <motion.footer
        variants={itemVariants}
        className="mt-20 pt-8 border-t border-dark-accent text-center relative"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
        
        <motion.p 
          className="text-text-secondary text-sm font-mono relative z-10"
          animate={{
            textShadow: [
              "0 0 0px rgba(100, 255, 218, 0)",
              "0 0 5px rgba(100, 255, 218, 0.3)",
              "0 0 0px rgba(100, 255, 218, 0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Built with ❤️ using Next.js, Tailwind CSS & Framer Motion
        </motion.p>
        <motion.p 
          className="text-text-secondary/60 text-xs mt-2 relative z-10"
          animate={{
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          © 2024 Animesh Kumar Rai. All rights reserved.
        </motion.p>
      </motion.footer>
    </motion.section>
  )
}

export default Contact