import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Users, Database, Smartphone } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "MapIt",
      description: "A full-stack location-based review application where users can explore places, add reviews, and read feedback from others.",
      features: [
        "User authentication and registration",
        "Location-based place discovery",
        "Review and rating system",
        "Interactive maps integration",
        "Real-time updates"
      ],
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "Postman"],
      deployment: ["Vercel", "Render"],
      github: "https://github.com/SunMoon97/MapIt",
      live: "#",
      icon: "🗺️",
      category: "Full Stack"
    },
    {
      title: "CSA-Times",
      description: "A comprehensive app development project serving 4000+ students with efficient scheduling and campus services.",
      features: [
        "Student portal with personalized dashboard",
        "Course scheduling and management",
        "Campus event notifications",
        "Resource booking system",
        "Cross-platform compatibility"
      ],
      technologies: ["Flutter", "MySQL", "Firebase", "Dart", "RESTful APIs"],
      deployment: ["Play Store", "App Store"],
      github: "https://github.com/SunMoon97/CSA-Times",
      live: "#",
      icon: "📱",
      category: "Mobile App",
      stats: "1.5K+ downloads"
    },
    {
      title: "University Course Assignment System",
      description: "An algorithm optimization project for generating course assignments based on faculty preferences and constraints.",
      features: [
        "Heuristic algorithm implementation",
        "Hungarian algorithm integration",
        "Faculty preference management",
        "Constraint validation",
        "Performance optimization"
      ],
      technologies: ["Python", "Algorithms", "Optimization", "Data Structures"],
      deployment: ["Local System"],
      github: "https://github.com/SunMoon97/DOP-TimeTableGen",
      live: "#",
      icon: "⚡",
      category: "Algorithm",
      stats: "40% efficiency improvement"
    },
    {
      title: "Timetable Generation System",
      description: "A Python-based system for generating timetables for 4000+ students with complex constraints and automated scheduling.",
      features: [
        "Automated timetable generation",
        "Complex constraint handling",
        "Faculty preference integration",
        "Conflict resolution",
        "Export functionality"
      ],
      technologies: ["Python", "Algorithm Design", "Constraint Satisfaction", "Data Processing"],
      deployment: ["Local System"],
      github: "https://github.com/SunMoon97/DOP-TimeTableGen",
      live: "#",
      icon: "📅",
      category: "Automation",
      stats: "4000+ students served"
    },
    {
      title: "Lead Automation System",
      description: "Custom lead automation solution using Google Apps Script to replace expensive third-party services.",
      features: [
        "Automated lead processing",
        "Google Sheets integration",
        "Email automation",
        "Cost optimization",
        "Custom workflows"
      ],
      technologies: ["Google Apps Script", "JavaScript", "Google Sheets API", "Automation"],
      deployment: ["Google Workspace"],
      github: "#",
      live: "#",
      icon: "🤖",
      category: "Automation",
      stats: "Cost reduction achieved"
    },
    // {
    //   title: "Calculator App",
    //   description: "A modern calculator application with advanced mathematical functions and intuitive user interface.",
    //   features: [
    //     "Basic arithmetic operations",
    //     "Scientific functions",
    //     "History tracking",
    //     "Responsive design",
    //     "Keyboard support"
    //   ],
    //   technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    //   deployment: ["GitHub Pages"],
    //   github: "https://github.com/SunMoon97/calculator",
    //   live: "#",
    //   icon: "🧮",
    //   category: "Web App"
    // },
    {
      title: "Debugger Architecture for Polarion Script Editor",
      description: "Designed and implemented a modern debugger architecture for the Polarion ALM script editor, enabling advanced debugging for JavaScript and Velocity scripts.",
      features: [
        "Integrated Monaco code editor for rich editing and breakpoint UI",
        "Frontend debug controls: step, run, pause, etc.",
        "Backend session manager and protocol handlers",
        "Real-time debugging via Node.js Inspector and DAP",
        "Debugger UI: variables panel, call stack, console output"
      ],
      technologies: ["React", "Monaco Editor", "Node.js", "Express", "WebSockets", "DAP", "Inspector Protocol"],
      deployment: ["Polarion ALM (Siemens)", "Architecture diagram available"],
      github: "#",
      live: "#",
      icon: "🛠️",
      category: "Full Stack",
      stats: "Enhanced developer productivity"
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack': return <Code className="text-primary-400" size={24} />
      case 'Mobile App': return <Smartphone className="text-primary-400" size={24} />
      case 'Algorithm': return <Database className="text-primary-400" size={24} />
      case 'Automation': return <Code className="text-primary-400" size={24} />
      case 'Web App': return <Code className="text-primary-400" size={24} />
      default: return <Code className="text-primary-400" size={24} />
    }
  }

  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A collection of my best work showcasing various technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6 card-hover group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{project.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      {getCategoryIcon(project.category)}
                      <span className="text-base text-dark-300">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-dark-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Stats */}
              {project.stats && (
                <div className="mb-6 p-3 bg-primary-500/10 rounded-lg">
                  <p className="text-primary-400 text-base font-medium">{project.stats}</p>
                </div>
              )}

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-base text-dark-300">{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-base text-primary-400">+{project.features.length - 3} more features</li>
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-2 bg-dark-700 text-dark-300 text-base rounded-full border border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-2 bg-dark-700 text-primary-400 text-base rounded-full border border-dark-600">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <Github size={22} />
                    </motion.a>
                  )}
                  {project.live !== "#" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                  )}
                </div>
                <div className="text-base text-dark-400">
                  {project.deployment.join(", ")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/SunMoon97"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 text-xl"
          >
            <Github size={24} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 