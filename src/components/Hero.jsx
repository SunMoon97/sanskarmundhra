import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, Linkedin, Mail, Sparkles, Zap } from 'lucide-react'
import FloatingTechIcons from './FloatingTechIcons'

const techIcons = [
  '/vite.svg',
  '/src/assets/react.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
]

const roles = [
  'Full Stack Developer',
  'React Enthusiast',
  'Open Source Contributor',
  'Tech Explorer',
  'Problem Solver',
]

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Sanskar_Mundhra_Resume.pdf'
    link.click()
  }

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      
      {/* Live Floating Tech Icons Background */}
      <FloatingTechIcons icons={techIcons} />
      
      {/* Interactive background elements */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        animate={{
          x: -mousePosition.x * 0.5,
          y: -mousePosition.y * 0.5,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      <div className="container-custom text-center relative z-10 flex flex-col items-center gap-8">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          className="flex items-center gap-3 text-2xl md:text-3xl text-primary-400 font-mono mb-2"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            👋
          </motion.div>
          <span>Hello, I am</span>
        </motion.div>
        
        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight gradient-text drop-shadow-2xl relative"
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 20px rgba(56, 189, 248, 0.5)",
                "0 0 40px rgba(56, 189, 248, 0.8)",
                "0 0 20px rgba(56, 189, 248, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Sanskar Mundhra
          </motion.span>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4 text-2xl"
          >
            <Sparkles className="text-yellow-400" />
          </motion.div>
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          key={roleIdx}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="text-2xl md:text-3xl lg:text-4xl text-primary-400 font-mono mb-2 h-12 flex items-center justify-center"
        >
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mr-2"
          >
            <Zap className="text-yellow-400" size={28} />
          </motion.div>
          {roles[roleIdx]}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-dark-300 max-w-2xl leading-relaxed"
        >
          Passionate about creating innovative solutions and turning ideas into reality through code.
          Currently pursuing Computer Science at BITS Pilani Goa.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4"
        >
          <motion.button
            whileHover={{ 
              scale: 1.08, 
              boxShadow: '0 0 32px 0 #38bdf8cc',
              y: -5
            }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownloadResume}
            className="px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-full flex items-center gap-3 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 text-lg shadow-xl ring-2 ring-primary-400/20 hover:ring-4 hover:ring-primary-400/40 glow-effect"
          >
            <Download size={24} />
            Download Resume
          </motion.button>
          <motion.button
            whileHover={{ 
              scale: 1.08, 
              boxShadow: '0 0 32px 0 #38bdf8cc',
              y: -5
            }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToAbout}
            className="px-10 py-4 border-2 border-primary-500 text-primary-400 font-bold rounded-full bg-gradient-to-r from-primary-900/60 to-secondary-900/60 hover:bg-primary-500 hover:text-white transition-all duration-300 text-lg shadow-lg ring-2 ring-primary-400/20 hover:ring-4 hover:ring-primary-400/40 glow-effect"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center space-x-8 pt-4"
        >
          <motion.a
            href="https://github.com/SunMoon97"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.18, 
              rotate: [0, 8, -8, 0], 
              boxShadow: '0 0 24px #64748b55',
              y: -5
            }}
            whileTap={{ scale: 0.97 }}
            className="text-dark-400 hover:text-primary-400 transition-colors duration-200 rounded-lg p-3 hover:bg-white/5"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/sunmoon97/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.18, 
              rotate: [0, 8, -8, 0], 
              boxShadow: '0 0 24px #60a5fa55',
              y: -5
            }}
            whileTap={{ scale: 0.97 }}
            className="text-dark-400 hover:text-primary-400 transition-colors duration-200 rounded-lg p-3 hover:bg-white/5"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="mailto:f20220757@goa.bits-pilani.ac.in"
            whileHover={{ 
              scale: 1.18, 
              rotate: [0, 8, -8, 0], 
              boxShadow: '0 0 24px #38bdf855',
              y: -5
            }}
            whileTap={{ scale: 0.97 }}
            className="text-dark-400 hover:text-primary-400 transition-colors duration-200 rounded-lg p-3 hover:bg-white/5"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center gap-8 pt-8"
        >
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">25+</div>
            <div className="text-sm text-dark-300">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">3+</div>
            <div className="text-sm text-dark-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">15+</div>
            <div className="text-sm text-dark-300">Technologies</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ 
            scale: 1.18, 
            boxShadow: '0 0 24px #38bdf8cc',
            y: -5
          }}
          whileTap={{ scale: 0.97 }}
          className="text-dark-400 hover:text-primary-400 transition-colors duration-200 rounded-full p-3 shadow-lg hover:bg-white/5"
        >
          <ChevronDown size={28} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero 