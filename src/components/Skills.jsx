import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Globe, Server, Cpu } from 'lucide-react'

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

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                {category.icon}
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                      <span className="text-base text-dark-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Additional Skills & Competencies</h3>
          <div className="glass-effect rounded-lg p-10 max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-5 py-3 bg-primary-500/20 text-primary-300 text-lg rounded-full border border-primary-500/30 hover:bg-primary-500/30 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-3">6+</div>
            <div className="text-xl text-dark-300">Programming Languages</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-3">12+</div>
            <div className="text-xl text-dark-300">Technologies & Tools</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-3">25+</div>
            <div className="text-xl text-dark-300">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 