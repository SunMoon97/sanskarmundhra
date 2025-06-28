import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary-400" size={28} />,
      title: "Email",
      value: "f20220757@goa.bits-pilani.ac.in",
      link: "mailto:f20220757@goa.bits-pilani.ac.in"
    },
    {
      icon: <Phone className="text-primary-400" size={28} />,
      title: "Phone",
      value: "+91 6289127271",
      link: "tel:+916289127271"
    },
    {
      icon: <MapPin className="text-primary-400" size={28} />,
      title: "Location",
      value: "Goa, India",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={28} />,
      url: "https://github.com/SunMoon97",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={28} />,
      url: "https://linkedin.com/in/sunmoon97/",
      color: "hover:text-blue-400"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
              <p className="text-xl text-dark-300 mb-10 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 glass-effect rounded-lg hover:bg-white/5 transition-all duration-200 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xl">{info.title}</h4>
                    <p className="text-dark-300 text-lg">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-4 glass-effect rounded-lg text-dark-300 transition-all duration-200 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src="/20250413_152052.jpg"
                  alt="Sanskar Mundhra"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-lg p-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Work Together?</h3>
            <p className="text-xl text-dark-300 mb-8">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's create something incredible together!
            </p>
            <motion.a
              href="mailto:f20220757@goa.bits-pilani.ac.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 text-xl"
            >
              <Mail size={24} />
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 