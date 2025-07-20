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
    <section id="about" className="section-padding relative overflow-hidden">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A passionate Computer Science student with a strong foundation in software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h3 className="text-3xl font-bold text-white mb-8 tracking-wide">Personal Information</h3>
            <div className="space-y-7">
              <div className="flex items-center space-x-4">
                <Mail className="text-primary-400 drop-shadow-lg" size={24} />
                <div>
                  <p className="text-dark-300 text-base">Email</p>
                  <p className="text-white text-lg">f20220757@goa.bits-pilani.ac.in</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary-400 drop-shadow-lg" size={24} />
                <div>
                  <p className="text-dark-300 text-base">Phone</p>
                  <p className="text-white text-lg">+91 6289127271</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary-400 drop-shadow-lg" size={24} />
                <div>
                  <p className="text-dark-300 text-base">Location</p>
                  <p className="text-white text-lg">Goa, India</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="mt-10">
              <h4 className="text-2xl font-semibold text-white mb-6 tracking-wide">Interests</h4>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="enhanced-glass rounded-2xl p-6 text-center card-hover"
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
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h3 className="text-3xl font-bold text-white mb-8 tracking-wide">Education</h3>
            <div className="space-y-7">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, type: 'spring' }}
                  viewport={{ once: true }}
                  className="enhanced-glass rounded-2xl p-7 card-hover"
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="enhanced-glass rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border-2 border-primary-400/30">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: '0 0 64px 0 #38bdf855' }}
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
                    src={`${import.meta.env.BASE_URL}Batchsnaps 2025 [DoPy] 83.jpg`}
                    alt="Sanskar Mundhra"
                    className="w-64 h-64 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-bold text-white mb-6 tracking-wide">What Drives Me</h3>
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