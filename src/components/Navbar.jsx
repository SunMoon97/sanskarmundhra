import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Home, User, Briefcase, FolderOpen, Code, MessageCircle } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={18} /> },
    { name: 'Projects', href: '#projects', icon: <FolderOpen size={18} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={18} /> },
    { name: 'Contact', href: '#contact', icon: <MessageCircle size={18} /> },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'enhanced-glass shadow-2xl border-b-2 border-primary-400/20' : 'bg-transparent'
      }`}
    >
      {/* Animated Navbar Gradient Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0.7 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-primary-900 via-secondary-900 to-dark-900 opacity-80 blur-xl pointer-events-none"
      />
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ 
              scale: 1.12, 
              rotate: [0, 8, -8, 0], 
              textShadow: '0 0 24px #38bdf8cc' 
            }}
            whileTap={{ scale: 0.97 }}
            className="text-2xl font-extrabold gradient-text cursor-pointer drop-shadow-lg tracking-widest"
            onClick={() => scrollToSection('#home')}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            SM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.name}
                whileHover={{ 
                  scale: 1.12, 
                  color: '#38bdf8', 
                  textShadow: '0 0 16px #38bdf8cc',
                  y: -2
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors duration-200 font-semibold px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400/40 ${
                  activeSection === item.href.slice(1) ? 'text-primary-400 bg-primary-500/10' : ''
                }`}
              >
                {item.icon}
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/SunMoon97"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.18, 
                y: -2, 
                boxShadow: '0 0 24px #64748b55',
                rotate: [0, 5, -5, 0]
              }}
              whileTap={{ scale: 0.97 }}
              className="text-dark-300 hover:text-primary-400 transition-colors duration-200 rounded-lg p-2 hover:bg-white/5"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sunmoon97/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.18, 
                y: -2, 
                boxShadow: '0 0 24px #60a5fa55',
                rotate: [0, 5, -5, 0]
              }}
              whileTap={{ scale: 0.97 }}
              className="text-dark-300 hover:text-primary-400 transition-colors duration-200 rounded-lg p-2 hover:bg-white/5"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:f20220757@goa.bits-pilani.ac.in"
              whileHover={{ 
                scale: 1.18, 
                y: -2, 
                boxShadow: '0 0 24px #38bdf855',
                rotate: [0, 5, -5, 0]
              }}
              whileTap={{ scale: 0.97 }}
              className="text-dark-300 hover:text-primary-400 transition-colors duration-200 rounded-lg p-2 hover:bg-white/5"
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-300 hover:text-primary-400 transition-colors duration-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-400/40"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="md:hidden enhanced-glass rounded-2xl mt-2 overflow-hidden shadow-2xl border border-primary-400/20 animate-float"
            >
              <div className="py-6 space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      x: 10, 
                      color: '#38bdf8', 
                      textShadow: '0 0 12px #38bdf8cc',
                      backgroundColor: 'rgba(56, 189, 248, 0.1)'
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-3 w-full text-left px-6 py-3 text-lg text-dark-300 hover:text-primary-400 hover:bg-white/5 transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400/40 ${
                      activeSection === item.href.slice(1) ? 'text-primary-400 bg-primary-500/10' : ''
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </motion.button>
                ))}
                <div className="flex items-center justify-center space-x-6 pt-6 border-t border-white/10">
                  <motion.a
                    href="https://github.com/SunMoon97"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.18, 
                      boxShadow: '0 0 24px #64748b55',
                      rotate: [0, 8, -8, 0]
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200 rounded-lg p-2 hover:bg-white/5"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/sunmoon97/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.18, 
                      boxShadow: '0 0 24px #60a5fa55',
                      rotate: [0, 8, -8, 0]
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200 rounded-lg p-2 hover:bg-white/5"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="mailto:f20220757@goa.bits-pilani.ac.in"
                    whileHover={{ 
                      scale: 1.18, 
                      boxShadow: '0 0 24px #38bdf855',
                      rotate: [0, 8, -8, 0]
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200 rounded-lg p-2 hover:bg-white/5"
                  >
                    <Mail size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar 