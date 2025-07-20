import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Users, Database, Smartphone, Star, Calendar, TrendingUp } from 'lucide-react'

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
      category: "Full Stack",
      featured: true
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
      stats: "1.5K+ downloads",
      featured: true
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
      stats: "Enhanced developer productivity",
      featured: true
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
    <section id="projects" className="section-padding relative overflow-hidden">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A collection of my best work showcasing various technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.04, 
                boxShadow: '0 0 48px 0 #38bdf855',
                y: -10
              }}
              className={`premium-card card-hover group relative overflow-hidden ${
                project.featured ? 'ring-2 ring-primary-400/50' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 z-10"
                >
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full">
                    <Star size={14} />
                    Featured
                  </div>
                </motion.div>
              )}

              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <motion.span 
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {project.icon}
                  </motion.span>
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
                <motion.div 
                  className="mb-6 p-3 bg-primary-500/10 rounded-lg border border-primary-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-primary-400 text-base font-medium flex items-center gap-2">
                    <TrendingUp size={16} />
                    {project.stats}
                  </p>
                </motion.div>
              )}

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Code size={20} />
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-base text-dark-300">{feature}</span>
                    </motion.li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-base text-primary-400 flex items-center gap-2">
                      <span>+{project.features.length - 3} more features</span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Database size={20} />
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-2 bg-dark-700 text-dark-300 text-base rounded-full border border-dark-600 hover:border-primary-500/50 transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
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
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-dark-400 hover:text-primary-400 transition-colors duration-200 p-2 hover:bg-white/5 rounded-lg"
                    >
                      <Github size={22} />
                    </motion.a>
                  )}
                  {project.live !== "#" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-dark-400 hover:text-primary-400 transition-colors duration-200 p-2 hover:bg-white/5 rounded-lg"
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                  )}
                </div>
                <div className="text-base text-dark-400 flex items-center gap-1">
                  <Calendar size={16} />
                  {project.deployment.join(", ")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/SunMoon97"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.08, 
              boxShadow: '0 0 32px 0 #38bdf8cc',
              y: -5
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-12 py-5 border-2 border-primary-500 text-primary-400 font-bold rounded-full bg-gradient-to-r from-primary-900/60 to-secondary-900/60 hover:bg-primary-500 hover:text-white transition-all duration-300 text-xl shadow-lg ring-2 ring-primary-400/20 hover:ring-4 hover:ring-primary-400/40 glow-effect"
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