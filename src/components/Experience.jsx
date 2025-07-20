import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Star } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "PLM Intern",
      company: "Siemens India",
      location: "Remote",
      period: "May 2025 - Jul 2025",
      description: "Worked on Siemens ALM product Polarion, analyzing and integrating Java libraries.",
      achievements: [
        "Analyzed Java libraries to replace legacy DaisyDiff HTML comparator",
        "Benchmarked performance and accuracy across libraries",
        "Designed and implemented a full-stack debugger architecture for the Polarion script editor, supporting JavaScript and Velocity scripts with advanced debugging features"
      ],
      technologies: ["Java", "Polarion ALM", "Performance Analysis"],
      highlights: ["500+ document revisions", "Improved reliability"]
    },
    {
      title: "Tech Intern",
      company: "Lane",
      location: "Remote",
      period: "Jan 2025 - Apr 2025",
      description: "Developed custom lead automation solutions and enhanced web application performance.",
      achievements: [
        "Developed automation system using Google Apps Script, reducing costs",
        "Implemented UI components using ReactJS, optimizing performance by 70%",
        "Contributed to web app features using React, TypeScript, and Supabase"
      ],
      technologies: ["React", "TypeScript", "Supabase", "Google Apps Script"],
      highlights: ["70% performance improvement", "Cost reduction"]
    },
    {
      title: "Software Intern",
      company: "Caarya",
      location: "Remote",
      period: "May 2024 - Jul 2024",
      description: "Built and deployed MapIt, a full-stack location-based review application.",
      achievements: [
        "Built MapIt, a location-based review app for exploring places and reviews",
        "Used Postman to test RESTful APIs for user authentication",
        "Utilized MERN stack with Vercel and Render for deployment"
      ],
      technologies: ["MERN Stack", "Postman", "Vercel", "Render"],
      highlights: ["Full-stack development", "API testing"]
    }
  ]

  const positions = [
    {
      title: "Member - Technical Team",
      organization: "AUGSD, BITS Goa",
      period: "Aug 2024 - Present",
      description: "Active member contributing to development projects and initiatives."
    },
    {
      title: "Senior Developer",
      organization: "Developer's Society, BITS Goa",
      period: "Aug 2023 - Apr 2024",
      description: "Led development projects and mentored junior developers."
    }
  ]

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            My professional journey through internships and leadership roles.
          </p>
        </motion.div>

        {/* Internships */}
        <div className="space-y-10 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 48px 0 #38bdf855' }}
              className="enhanced-glass rounded-2xl p-10 card-hover shadow-2xl border-2 border-primary-400/20"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="text-primary-400" size={24} />
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-dark-300 mb-3">
                    <span className="font-medium text-primary-400 text-lg">{exp.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-dark-400 mb-4">
                    <Calendar size={18} />
                    <span className="text-lg">{exp.period}</span>
                  </div>
                  <p className="text-dark-300 text-lg mb-6">{exp.description}</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Star className="text-primary-400" size={20} />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-dark-300 text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Highlights */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-primary-500/20 text-primary-300 text-base rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Highlights</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.highlights.map((highlight, highIndex) => (
                      <span
                        key={highIndex}
                        className="px-4 py-2 bg-secondary-500/20 text-secondary-300 text-base rounded-full border border-secondary-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Positions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-white mb-10 text-center tracking-wide">
            Leadership <span className="gradient-text">Positions</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 32px 0 #60a5fa55' }}
                className="enhanced-glass rounded-2xl p-8 text-center card-hover shadow-xl border border-secondary-400/20"
              >
                <h4 className="text-xl font-bold text-white mb-3">{position.title}</h4>
                <p className="text-primary-400 font-medium mb-3 text-lg">{position.organization}</p>
                <p className="text-dark-300 text-base mb-4">{position.period}</p>
                <p className="text-dark-300 text-lg">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 