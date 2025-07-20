import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Clock } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary-400 drop-shadow-lg" size={28} />,
      title: "Email",
      value: "f20220757@goa.bits-pilani.ac.in",
      link: "mailto:f20220757@goa.bits-pilani.ac.in",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="text-primary-400 drop-shadow-lg" size={28} />,
      title: "Phone",
      value: "+91 6289127271",
      link: "tel:+916289127271",
      description: "Call me for urgent matters"
    },
    {
      icon: <MapPin className="text-primary-400 drop-shadow-lg" size={28} />,
      title: "Location",
      value: "Goa, India",
      link: "#",
      description: "Based in Goa, open to remote work"
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={28} />,
      url: "https://github.com/SunMoon97",
      color: "hover:text-gray-400",
      description: "Check out my projects"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={28} />,
      url: "https://linkedin.com/in/sunmoon97/",
      color: "hover:text-blue-400",
      description: "Connect professionally"
    }
  ]

  const availabilityInfo = [
    {
      icon: <Clock className="text-green-400" size={20} />,
      text: "Available for new opportunities",
      status: "Open to work"
    },
    {
      icon: <MessageCircle className="text-blue-400" size={20} />,
      text: "Quick response time",
      status: "Usually responds within 24h"
    }
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-primary-900 via-secondary-900 to-dark-900 opacity-80 blur-2xl"
      />
      {/* Subtle floating shapes */}
      <motion.div
        aria-hidden
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary-500/30 via-secondary-500/20 to-transparent rounded-full blur-3xl opacity-60 -z-10 animate-float"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 0.7, y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 tracking-wide">Let's Connect</h3>
              <p className="text-xl text-dark-300 mb-10 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="premium-card"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Current Status</h4>
              <div className="space-y-3">
                {availabilityInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    {info.icon}
                    <div>
                      <p className="text-white font-medium">{info.text}</p>
                      <p className="text-dark-300 text-sm">{info.status}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-7">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15, type: 'spring' }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.04, 
                    boxShadow: '0 4px 32px 0 rgba(80,200,255,0.15)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-6 p-6 premium-card card-hover group"
                >
                  <motion.div 
                    className="group-hover:scale-125 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white text-xl tracking-wide">{info.title}</h4>
                    <p className="text-dark-300 text-lg">{info.value}</p>
                    <p className="text-dark-400 text-sm mt-1">{info.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-semibold text-white mb-6 tracking-wide">Follow Me</h4>
              <div className="flex gap-7">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.12, type: 'spring' }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.18, 
                      rotate: [0, 8, -8, 0], 
                      boxShadow: '0 0 24px 0 #60a5fa55',
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 premium-card text-dark-300 transition-all duration-300 shadow-lg ${social.color}`}
                    title={social.description}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ 
                scale: 1.04, 
                boxShadow: '0 0 64px 0 #38bdf855',
                y: -10
              }}
              className="relative group"
            >
              {/* Animated glowing border */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 #38bdf8cc',
                    '0 0 32px 8px #38bdf8cc',
                    '0 0 0 0 #38bdf8cc'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
                className="absolute -inset-3 rounded-3xl pointer-events-none z-10"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10">
                <img
                  src={`${import.meta.env.BASE_URL}20250413_152052.jpg`}
                  alt="Sanskar Mundhra"
                  className="w-80 h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-extrabold text-2xl tracking-widest">SM</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="premium-card max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-wide">Ready to Work Together?</h3>
            <p className="text-xl text-dark-300 mb-8">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's create something incredible together!
            </p>
            <motion.a
              href="mailto:f20220757@goa.bits-pilani.ac.in"
              whileHover={{ 
                scale: 1.08, 
                boxShadow: '0 0 32px 0 #38bdf8cc',
                y: -5
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-12 py-5 border-2 border-primary-500 text-primary-400 font-bold rounded-full bg-gradient-to-r from-primary-900/60 to-secondary-900/60 hover:bg-primary-500 hover:text-white transition-all duration-300 text-xl shadow-lg ring-2 ring-primary-400/20 hover:ring-4 hover:ring-primary-400/40 glow-effect"
            >
              <Send size={24} />
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 