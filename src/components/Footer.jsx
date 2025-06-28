import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Sanskar Mundhra</h3>
            <p className="text-dark-300 text-sm">
              Full Stack Developer & Computer Science Student
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#home" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                About
              </a>
              <a href="#experience" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Experience
              </a>
              <a href="#projects" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#skills" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Skills
              </a>
              <a href="#contact" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <motion.a
                href="https://github.com/SunMoon97"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sunmoon97/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:f20220757@goa.bits-pilani.ac.in"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 text-center"
        >
          <p className="text-dark-300 text-sm">
            © {currentYear} Sanskar Mundhra. Made with{' '}
            <Heart className="inline text-red-500" size={14} />{' '}
            using React & Vite
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 