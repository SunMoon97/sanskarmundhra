import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Globe, Server, Cpu, TrendingUp } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-primary-400" size={28} />,
      skills: [
        { name: "C++", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "Python", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-500" },
        { name: "C", level: 75, color: "from-blue-600 to-blue-700" },
        { name: "Dart", level: 70, color: "from-blue-400 to-blue-500" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="text-primary-400" size={28} />,
      skills: [
        { name: "React.js", level: 85, color: "from-blue-400 to-blue-500" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500" },
        { name: "TypeScript", level: 75, color: "from-blue-600 to-blue-700" },
        { name: "Flutter", level: 80, color: "from-blue-500 to-blue-600" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Server className="text-primary-400" size={28} />,
      skills: [
        { name: "Node.js", level: 80, color: "from-green-500 to-green-600" },
        { name: "MySQL", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "Firebase", level: 75, color: "from-orange-500 to-yellow-500" },
        { name: "Express.js", level: 75, color: "from-gray-600 to-gray-700" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-primary-400" size={28} />,
      skills: [
        { name: "Flutter", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "Dart", level: 75, color: "from-blue-400 to-blue-500" },
        { name: "Mobile UI/UX", level: 85, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Cpu className="text-primary-400" size={28} />,
      skills: [
        { name: "Git/GitHub", level: 90, color: "from-gray-700 to-gray-800" },
        { name: "Postman", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "Vercel", level: 80, color: "from-black to-gray-800" },
        { name: "Google Apps Script", level: 75, color: "from-yellow-500 to-yellow-600" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="text-primary-400" size={28} />,
      skills: [
        { name: "MySQL", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "Firebase", level: 75, color: "from-orange-500 to-yellow-500" },
        { name: "Supabase", level: 70, color: "from-green-500 to-green-600" },
        { name: "MongoDB", level: 65, color: "from-green-600 to-green-700" }
      ]
    }
  ]

  const additionalSkills = [
    "RESTful APIs", "Algorithm Design", "Data Structures", "Performance Optimization",
    "System Integration", "API Testing", "Responsive Design", "Cross-platform Development",
    "Version Control", "Agile Development", "Problem Solving", "Team Collaboration"
  ]

  const skillStats = [
    { label: "Programming Languages", value: "6+", icon: <Code className="text-primary-400" size={24} /> },
    { label: "Technologies & Tools", value: "12+", icon: <Cpu className="text-primary-400" size={24} /> },
    { label: "Projects Completed", value: "25+", icon: <TrendingUp className="text-primary-400" size={24} /> }
  ]

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: categoryIndex * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.04, 
                boxShadow: '0 0 32px 0 #38bdf855',
                y: -5
              }}
              className="premium-card card-hover group"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                      <motion.span 
                        className="text-base text-dark-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`skill-progress-fill bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 tracking-wide">Additional Skills & Competencies</h3>
          <div className="premium-card max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'rgba(56, 189, 248, 0.3)',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)'
                  }}
                  className="px-5 py-3 bg-primary-500/20 text-primary-300 text-lg rounded-full border border-primary-500/30 hover:bg-primary-500/30 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring' }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center premium-card"
            >
              <div className="flex items-center justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold gradient-text mb-3">{stat.value}</div>
              <div className="text-xl text-dark-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, type: 'spring' }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="premium-card max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-wide">Continuous Learning Journey</h3>
            <p className="text-xl text-dark-300 mb-8 leading-relaxed">
              I believe in staying updated with the latest technologies and best practices. 
              Currently exploring advanced React patterns, cloud architecture, and emerging technologies.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full border border-primary-500/30"
            >
              <TrendingUp className="text-primary-400" size={24} />
              <span className="text-primary-400 font-semibold">Always Learning & Growing</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 