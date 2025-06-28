import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Phone, Mail, Calendar, Trophy, Gamepad2 } from 'lucide-react'

const About = () => {
  const education = [
    {
      degree: "B.E. Computer Science",
      institution: "BITS Pilani Goa",
      year: "2022 - 2026",
      subjects: ["Database Systems", "Data Structures", "Object Oriented Programming", "Algorithms"]
    },
    {
      degree: "Class XII",
      institution: "Techno India Group Public School",
      year: "2022",
      board: "CBSE"
    },
    {
      degree: "Class X",
      institution: "Stepping Stone School (High), Rishra",
      year: "2020",
      board: "ICSE"
    }
  ]

  const interests = [
    { name: "Chess", icon: Gamepad2, description: "Strategic thinking" },
    { name: "Cricket", icon: Trophy, description: "Team sports" },
    { name: "Painting", icon: "🎨", description: "Creative expression" },
    { name: "Travelling", icon: "✈️", description: "Exploring new places" }
  ]

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A passionate Computer Science student with a strong foundation in software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Personal Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-primary-400" size={24} />
                <div>
                  <p className="text-dark-300 text-base">Email</p>
                  <p className="text-white text-lg">f20220757@goa.bits-pilani.ac.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="text-primary-400" size={24} />
                <div>
                  <p className="text-dark-300 text-base">Phone</p>
                  <p className="text-white text-lg">+91 6289127271</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary-400" size={24} />
                <div>
                  <p className="text-dark-300 text-base">Location</p>
                  <p className="text-white text-lg">Goa, India</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="mt-10">
              <h4 className="text-2xl font-semibold text-white mb-6">Interests</h4>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect rounded-lg p-5 text-center"
                  >
                    <div className="text-3xl mb-3">
                      {typeof interest.icon === 'string' ? interest.icon : <interest.icon className="mx-auto" size={28} />}
                    </div>
                    <h5 className="font-semibold text-white mb-1 text-lg">{interest.name}</h5>
                    <p className="text-sm text-dark-300">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                      <p className="text-primary-400 text-lg">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-dark-300 text-base">{edu.year}</p>
                      {edu.score && (
                        <p className="text-primary-400 font-semibold text-lg">{edu.score}</p>
                      )}
                    </div>
                  </div>
                  
                  {edu.board && (
                    <p className="text-dark-300 text-base mb-3">Board: {edu.board}</p>
                  )}
                  
                  {edu.subjects && (
                    <div>
                      <p className="text-dark-300 text-base mb-3">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, subIndex) => (
                          <span
                            key={subIndex}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Profile Photo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img
                  src="/Batchsnaps 2025 [DoPy] 83.jpg"
                  alt="Sanskar Mundhra"
                  className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </motion.div>
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-bold text-white mb-6">What Drives Me</h3>
                <p className="text-xl text-dark-300 leading-relaxed">
                  I'm passionate about leveraging technology to solve real-world problems. 
                  My experience spans full-stack development to algorithm optimization, 
                  with a focus on creating scalable applications that make a difference.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 