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
    url: "https://cloakshare.devashish.top",
    description: "Architected anonymous file-sharing platform with Google Drive API integration. Scaled system to handle 1,000+ files monthly, reducing server response time by 25%. Developed robust authentication and encryption protocols for data security. Containerized application with Docker for consistent deployment."
  },
  {
    name: "Blockchain-Based Fundraising Campaign",
    url: "#",
    description: "Developed secure Ethereum smart contracts for transparent fundraising. Built responsive React.js dashboard for real-time fund tracking and analytics. Optimized Solidity code resulting in 30% transaction cost reduction. Implemented cryptographic techniques to enhance security."
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
    grade: "CGPA: 7.75"
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
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden mb-8"
        >
          <div className="relative p-8 md:p-12">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/30 shadow-xl">
                  <Image 
                    src="/about_profile.png"
                    alt="Kumar Devashish"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full ring-4 ring-white"></div>
              </motion.div>

              {/* Header Content */}
              <div className="flex-1 text-center md:text-left text-white">
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-3"
                >
                  Kumar Devashish
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4"
                >
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    💻 Full-Stack Developer
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                     Linux Expert
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Automation Engineer
                  </span>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-white/90 text-base md:text-lg max-w-2xl"
                >
                  Passionate software engineer specializing in building scalable web applications 
                  and blockchain solutions with 3+ years of experience.
                </motion.p>
              </div>

              {/* Contact Quick Links */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex md:flex-col gap-3"
              >
                <Link href={`mailto:${CONTACT_INFO.email}`} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-lg transition-all">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </Link>
                <Link href={CONTACT_INFO.linkedin} target="_blank" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-lg transition-all">
                  <FaLinkedin className="w-5 h-5 text-white" />
                </Link>
                <Link href={CONTACT_INFO.github} target="_blank" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-lg transition-all">
                  <FaGithub className="w-5 h-5 text-white" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { icon: "💼", label: "Experience", value: "3+ Years" },
            { icon: "🚀", label: "Projects", value: "15+ Completed" },
            { icon: "👥", label: "Users Impacted", value: "2500+" },
            { icon: "🏆", label: "Achievements", value: "Multiple Awards" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                  <FaBriefcase className="w-5 h-5 text-white" />
                </div>
                <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Featured Projects</h2>
              </div>
              <div className="space-y-6">
                {PROJECTS.map((project, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Link 
                      href={project.url}
                      className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg">
                  <FaGraduationCap className="w-5 h-5 text-white" />
                </div>
                <h2 id="education-heading" className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Education</h2>
              </div>
              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                    className="relative pl-8 pb-6 border-l-2 border-gray-300 dark:border-gray-600 last:border-transparent last:pb-0"
                  >
                    <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 ring-4 ring-white dark:ring-gray-800"></div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">{edu.degree}</h3>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full w-fit">{edu.period}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.grade}</p>
                  </motion.div>
                ))}
              </div>
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg">
                  <FaCode className="w-5 h-5 text-white" />
                </div>
                <h2 id="skills-heading" className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
              </div>
              <div className="space-y-5">
                {SKILLS.map((skillGroup, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <h3 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          {skill}
                        </span>
                      ))}
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-lg">
                  <FaTrophy className="w-5 h-5 text-white" />
                </div>
                <h2 id="certifications-heading" className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Achievements</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Scholarship Recipient - Metacrafter (Training with distinction)",
                  "Certificate of Merit in Blockchain (Solidity, Ethereum)",
                  "Ranked 4th in Aptitude Wizard 2024, Chandigarh University"
                ].map((achievement, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 p-3 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-lg"
                  >
                    <span className="text-yellow-500 text-lg mt-0.5">🏆</span>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{achievement}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Languages */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              aria-labelledby="languages-heading"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-3 rounded-lg">
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg">
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
          className="mt-12 text-center"
        >
          <Link
            href="/Devashish_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                      text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                      font-bold text-lg shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 
                      focus:ring-blue-300 focus:ring-offset-2 transform hover:scale-105 group"
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
            Last updated: October 2025 • Available for opportunities
          </p>
        </motion.div>
      </div>
    </div>
  )
}