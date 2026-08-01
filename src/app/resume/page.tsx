"use client";
import Link from 'next/link'
import Image from 'next/image'
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaGraduationCap, FaBriefcase, FaCode, FaTrophy, FaLanguage, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const CONTACT_INFO = {
  email: "kumardevashish000@gmail.com",
  phone: "+91 8986416949",
  linkedin: "https://linkedin.com/in/kumar-devashishh",
  github: "https://github.com/kumar10248"
} as const;

const PROJECTS = [
  {
    name: "Trunkller - AI UI Component Generator",
    url: "https://trunkller.com",
    description: "Developed AI-powered platform generating customizable React UI components. Scaled application to support 1,500+ active users and process 50,000+ records monthly. Integrated Razorpay payment system for premium feature monetization. Implemented comprehensive user authentication and authorization systems."
  },
  {
    name: "CloakShare - Temporary File and Text Storage",
    url: "https://cloakshare.vercel.app",
    description: "Architected anonymous file-sharing platform with Google Drive API integration. Scaled system to handle 1,000+ files monthly, reducing server response time by 25%. Developed robust authentication and encryption protocols for data security. Containerized application with Docker for consistent deployment."
  },
  {
    name: "ReviewAI - AI-Powered Code Review Platform",
    url: "https://ai-code-reviewer-nu-henna.vercel.app",
    description: "ReviewAI is an intelligent code review platform that brings GitHub-style collaboration to AI-powered code analysis. Users can paste or upload code and receive real-time, token-by-token AI reviews with inline comments, severity ratings, and actionable fix suggestions. The platform combines the power of modern AI models (OpenAI/Gemini) with the user experience developers expect from collaborative tools."
  }
] as const;

const SKILLS = [
  { category: "Programming Languages", skills: ["Bash", "Java", "JavaScript", "Solidity"] },
  { category: "Web Development", skills: ["HTML", "CSS", "React.js", "Next.js", "Node.js", "Express.js"] },
  { category: "Databases", skills: ["MongoDB", "MySQL"] },
  { category: "Cloud/DevOps", skills: ["Docker", "Kubernetes", "AWS (EC2, S3)"] },
  { category: "Tools & Platforms", skills: ["Git", "Postman", "VS Code", "Linux", "Selenium", "Maven", "Gradle", "Jenkins"] }
];

const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Chandigarh University, India",
    period: "2022 – 2026",
    grade: "CGPA: 7.90/10"
  },
  {
    degree: "Intermediate (BSEB)",
    institution: "KST College",
    period: "2018 – 2020",
    grade: "71.20%"
  },
  {
    degree: "Matriculation (BSEB)",
    institution: "Kishan HS School",
    period: "2018",
    grade: "65.80%"
  }
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl shadow-2xl overflow-hidden mb-12 bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl border border-white/40 dark:border-gray-700/50"
        >
          <div className="relative p-8 md:p-12 z-10">
            {/* Animated Decorative orbs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, -30, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 dark:bg-blue-600/30 rounded-full -mr-20 -mt-20 blur-3xl"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                x: [0, 40, 0],
                y: [0, -40, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 dark:bg-purple-600/30 rounded-full -ml-32 -mb-32 blur-3xl"
            />
            
            <div className="relative flex flex-col md:flex-row items-center gap-10">
              {/* Profile Image */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10"
              >
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-white/60 dark:ring-gray-700/60 shadow-2xl relative"
                >
                  <Image 
                    src="/about_profile.png"
                    alt="Kumar Devashish"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  className="absolute bottom-3 right-3 w-8 h-8 bg-green-500 rounded-full ring-4 ring-white dark:ring-gray-800 shadow-lg z-20"
                ></motion.div>
              </motion.div>

              {/* Header Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm"
                >
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Resume</span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight"
                >
                  Kumar Devashish
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6"
                >
                  {["💻 Full-Stack Developer", "🐧 Linux Expert", "⚙️ Automation Engineer"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow transition-shadow">
                      {tag}
                    </span>
                  ))}
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed font-medium"
                >
                   Focused on backend engineering, real-time systems, and building reliable infrastructure.
                   <br className="mb-2" />
                 • Built a real-time AI code review platform  
                  <br />
                  • Developed a self-healing Linux infrastructure system
                  <br className="mb-2" />
                  <span className="text-blue-600 dark:text-blue-400 font-bold">Actively looking for Backend / Full Stack opportunities</span>
                </motion.p>
              </div>

              {/* Contact Quick Links */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex md:flex-col gap-4 z-20"
              >
                {[
                  { icon: FaEnvelope, href: `mailto:${CONTACT_INFO.email}` },
                  { icon: FaLinkedin, href: CONTACT_INFO.linkedin },
                  { icon: FaGithub, href: CONTACT_INFO.github }
                ].map((item, i) => (
                  <Link key={i} href={item.href} target={item.href.startsWith('mailto') ? undefined : "_blank"} 
                        className="bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-md p-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50 group">
                    <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10"
        >
          {[
            { icon: "💼", label: "Experience", value: "Multiple Projects", color: "from-blue-500 to-cyan-500" },
            { icon: "🚀", label: "Projects", value: "10+ Completed", color: "from-purple-500 to-pink-500" },
            { icon: "👥", label: "Users Impacted", value: "3000+", color: "from-orange-500 to-red-500" },
            { icon: "🏆", label: "Achievements", value: "Multiple Awards", color: "from-emerald-500 to-teal-500" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-white/50 dark:border-gray-700/50 overflow-hidden text-center"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 inline-block">{stat.icon}</div>
              <div className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1 tracking-tight">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Projects & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Projects */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              aria-labelledby="projects-heading"
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg shadow-blue-500/30">
                  <FaBriefcase className="w-5 h-5 text-white" />
                </div>
                <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Featured Projects</h2>
              </div>
              <div className="space-y-6 relative z-10">
                {PROJECTS.map((project, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-white/60 dark:border-gray-600/50 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Link 
                      href={project.url}
                      className="inline-flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 mb-3 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                      <svg className="w-5 h-5 text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative z-10">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              aria-labelledby="education-heading"
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 border border-white/50 dark:border-gray-700/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-xl shadow-lg shadow-purple-500/30">
                  <FaGraduationCap className="w-5 h-5 text-white" />
                </div>
                <h2 id="education-heading" className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Education Timeline</h2>
              </div>
              <div className="space-y-0 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-blue-500 before:to-transparent">
                {EDUCATION.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-6"
                  >
                    {/* Glowing Node */}
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] absolute left-0 md:left-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform duration-300"></div>
                    
                    {/* Content Card */}
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-5 rounded-2xl bg-white dark:bg-gray-800/80 shadow-md border border-gray-100 dark:border-gray-700 group-hover:shadow-xl group-hover:border-purple-200 dark:group-hover:border-purple-800/50 transition-all duration-300 relative ml-8 md:ml-0">
                      <div className="flex flex-col gap-2">
                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full w-fit mb-1">{edu.period}</span>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">{edu.degree}</h3>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.institution}</p>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1 inline-flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {edu.grade}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Achievements */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              aria-labelledby="certifications-heading"
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-xl shadow-lg shadow-orange-500/30">
                  <FaTrophy className="w-5 h-5 text-white" />
                </div>
                <h2 id="certifications-heading" className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Achievements</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Scholarship Recipient - Metacrafter (Training with distinction)",
                  "Hack it out Hackathon 2025 - 3rd Place Winner (IIT-BHU)",
                  "Ranked 4th in Aptitude Wizard 2024, Chandigarh University"
                ].map((achievement, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-xl"
                  >
                    <span className="text-yellow-500 text-lg mt-0.5">🏆</span>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{achievement}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right Column - Skills & More */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              aria-labelledby="skills-heading"
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-xl shadow-lg shadow-emerald-500/30">
                  <FaCode className="w-5 h-5 text-white" />
                </div>
                <h2 id="skills-heading" className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
              </div>
              <div className="space-y-6">
                {SKILLS.map((skillGroup, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    className="bg-white/40 dark:bg-gray-900/40 p-5 rounded-2xl border border-white/60 dark:border-gray-700/50 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-colors"
                  >
                    <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {skillGroup.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-50/80 to-teal-50/80 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-200 text-xs font-semibold rounded-full border border-emerald-200/50 dark:border-emerald-800/50 shadow-sm backdrop-blur-md hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Spacer to replace Achievements to balance layout, or we can just leave it empty. Let's just remove Achievements from here. */}

            {/* Languages */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              aria-labelledby="languages-heading"
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-3 rounded-xl shadow-lg shadow-rose-500/30">
                  <FaLanguage className="w-5 h-5 text-white" />
                </div>
                <h2 id="languages-heading" className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Languages</h2>
              </div>
              <div className="space-y-3">
                {[
                  { lang: "English", level: "Professional Proficiency", progress: 90 },
                  { lang: "Hindi", level: "Native", progress: 100 }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.9 + idx * 0.1, duration: 0.5 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800 dark:text-white">{item.lang}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-600 px-2 py-1 rounded">{item.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Interests */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
              aria-labelledby="interests-heading"
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-xl shadow-lg shadow-indigo-500/30">
                  <FaHeart className="w-5 h-5 text-white" />
                </div>
                <h2 id="interests-heading" className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Interests</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["💻 Technology Blogs", "🚀 Emerging Tech", "🏏 Cricket", "📸 Photography"].map((interest, idx) => (
                  <motion.span 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2 + idx * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-lg border border-indigo-200 dark:border-indigo-800 hover:shadow-md transition-all cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Download CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          className="mt-12 text-center pb-8"
        >
          <Link
            href="/Devashish_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                      text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                      font-bold text-lg shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] focus:outline-none focus:ring-4 
                      focus:ring-blue-300 focus:ring-offset-2 transform hover:scale-105 group border border-white/20"
            download="Kumar_Devashish_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="w-6 h-6 group-hover:animate-bounce" />
            Download Full Resume
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Last updated: June 2026 • Available for opportunities
          </p>
        </motion.div>
      </div>
    </div>
  )
}