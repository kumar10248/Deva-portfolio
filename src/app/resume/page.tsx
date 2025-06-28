import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Kumar Devashish - Resume',
  description: 'Professional resume of Kumar Devashish - Blockchain & Full-Stack Developer',
}

const CONTACT_INFO = {
  email: "kumardevashish000@gmail.com",
  phone: "+91 8986416949",
  linkedin: "https://www.linkedin.com/in/kumar-devashish",
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
  { category: "Programming Languages", skills: ["C++", "Java", "JavaScript", "Solidity"] },
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
    <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 shadow-xl rounded-xl my-8">
      {/* Header with modern design */}
      <header className="mb-10 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-xl opacity-10"></div>
        
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-6 pt-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">Kumar Devashish</h1>
            <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Full-stack Software Engineer</span>
            </div>
            <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
              Full-stack Software Engineer with expertise in blockchain and cloud technologies, 
              seeking to build scalable applications and contribute to innovative projects.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 border border-gray-100 dark:border-gray-700">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <FaEnvelope className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <FaPhone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <FaLinkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <Link href={CONTACT_INFO.linkedin} className="text-sm text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <FaGithub className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <Link href={CONTACT_INFO.github} className="text-sm text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Projects */}
          <section aria-labelledby="projects-heading">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
              <h2 id="projects-heading" className="text-2xl font-bold text-gray-800 dark:text-white">Projects</h2>
            </div>
            <div className="space-y-6">
              {PROJECTS.map((project, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <Link 
                    href={project.url}
                    className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </Link>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section aria-labelledby="education-heading">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
              <h2 id="education-heading" className="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
            </div>
            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-transparent last:pb-0">
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-blue-500"></div>
                  <h3 className="font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                  <div className="flex justify-between flex-wrap mt-1">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.period}</p>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mt-1 font-medium">{edu.grade}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          {/* Technical Skills */}
          <section aria-labelledby="skills-heading">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
              <h2 id="skills-heading" className="text-2xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
            </div>
            <div className="space-y-4">
              {SKILLS.map((skillGroup, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications and Achievements */}
          <section aria-labelledby="certifications-heading">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
              <h2 id="certifications-heading" className="text-2xl font-bold text-gray-800 dark:text-white">Achievements</h2>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="min-w-4 pt-1">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Scholarship Recipient - Metacrafter (Training with distinction)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-4 pt-1">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Certificate of Merit in Blockchain (Solidity, Ethereum)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-4 pt-1">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Ranked 4th in Aptitude Wizard 2024, Chandigarh University</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Professional Skills */}
          <section aria-labelledby="professional-skills-heading">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
              <h2 id="professional-skills-heading" className="text-2xl font-bold text-gray-800 dark:text-white">Professional Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Analytical Problem-Solving", "Effective Technical Communication", "Team Leadership", "Agile Development Methodology"].map((skill, idx) => (
                <span key={idx} className="px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section aria-labelledby="languages-heading">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
              <h2 id="languages-heading" className="text-2xl font-bold text-gray-800 dark:text-white">Languages</h2>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">English</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Professional Proficiency</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Hindi</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Native</span>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section aria-labelledby="interests-heading">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
              <h2 id="interests-heading" className="text-2xl font-bold text-gray-800 dark:text-white">Interests</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Technology Blogs", "Emerging Technologies", "Cricket", "Photography"].map((interest, idx) => (
                <span key={idx} className="px-3 py-2 bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-lg">
                  {interest}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/Devashish_Resume.pdf"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                    text-white rounded-lg hover:from-indigo-500 hover:to-blue-700 transition-all duration-300 
                    font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 
                    focus:ring-blue-300 focus:ring-offset-2 transform hover:scale-105"
          download="Kumar_Devashish_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDownload className="w-5 h-5 mr-2" />
          Download Resume
        </Link>
      </div>
    </div>
  )
}