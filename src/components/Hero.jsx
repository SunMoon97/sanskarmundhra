import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You can add your resume file to the public folder
    link.download = 'Sanskar_Mundhra_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-400 font-mono text-3xl"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-8xl font-bold"
          >
            <span className="gradient-text">Sanskar</span>
            <br />
            <span className="text-white">Mundhra</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-4xl text-dark-300 font-medium"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-dark-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions and building scalable applications. 
            Currently pursuing Computer Science at BITS Pilani Goa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full flex items-center gap-3 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 text-lg"
            >
              <Download size={24} />
              Download Resume
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-10 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 text-lg"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-8 pt-8"
          >
            <motion.a
              href="https://github.com/SunMoon97"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sunmoon97/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:f20220757@goa.bits-pilani.ac.in"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
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
          className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
        >
          <ChevronDown size={28} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero 