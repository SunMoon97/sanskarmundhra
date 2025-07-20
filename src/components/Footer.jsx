import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/SunMoon97",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/sunmoon97/",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:f20220757@goa.bits-pilani.ac.in",
      color: "hover:text-primary-400"
    }
  ]

  return (
    <footer className="enhanced-glass border-t-2 border-primary-400/20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-primary-900 via-secondary-900 to-dark-900 opacity-80 blur-2xl"
      />
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
            <motion.h3 
              className="text-2xl font-extrabold gradient-text mb-2 drop-shadow-lg tracking-widest"
              whileHover={{ scale: 1.05 }}
            >
              Sanskar Mundhra
            </motion.h3>
            <p className="text-dark-300 text-sm mb-3">
              Full Stack Developer & Computer Science Student
            </p>
            <p className="text-dark-400 text-xs">
              Turning ideas into reality through code
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
            <h4 className="text-white font-semibold mb-4 tracking-wide">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    color: '#38bdf8',
                    textShadow: '0 0 8px #38bdf8cc'
                  }}
                  className="text-dark-300 hover:text-primary-400 transition-all duration-200 px-2 py-1 rounded hover:bg-white/5"
                >
                  {link.name}
                </motion.a>
              ))}
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
            <h4 className="text-white font-semibold mb-4 tracking-wide">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.18, 
                    rotate: [0, 8, -8, 0], 
                    boxShadow: '0 0 24px #60a5fa55',
                    y: -3
                  }}
                  whileTap={{ scale: 0.97 }}
                  className={`text-dark-300 transition-all duration-200 rounded-lg p-2 hover:bg-white/5 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: '0 0 20px #38bdf8cc',
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 text-center"
        >
          <p className="text-dark-300 text-sm flex items-center justify-center gap-2">
            © {currentYear} Sanskar Mundhra. Made with{' '}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-500" size={14} />
            </motion.div>{' '}
            using React & Vite
          </p>
          <p className="text-dark-400 text-xs mt-2">
            Built with modern web technologies and best practices
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 