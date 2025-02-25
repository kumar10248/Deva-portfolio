import { Metadata } from 'next'
import Link from 'next/link'

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
    url: "#",
    description: "Developed AI-powered platform generating customizable React UI components. Scaled application to support 1,500+ active users and process 50,000+ records monthly. Integrated Razorpay payment system for premium feature monetization. Implemented comprehensive user authentication and authorization systems."
  },
  {
    name: "CloakShare - Temporary File and Text Storage",
    url: "#",
    description: "Architected anonymous file-sharing platform with Google Drive API integration. Scaled system to handle 1,000+ files monthly, reducing server response time by 25%. Developed robust authentication and encryption protocols for data security. Containerized application with Docker for consistent deployment."
  },
  {
    name: "Blockchain-Based Fundraising Campaign",
    url: "#",
    description: "Developed secure Ethereum smart contracts for transparent fundraising. Built responsive React.js dashboard for real-time fund tracking and analytics. Optimized Solidity code resulting in 30% transaction cost reduction. Implemented cryptographic techniques to enhance security."
  }
] as const;



export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Kumar Devashish</h1>
        <p className="text-gray-600 mb-2">Full-stack Software Engineer with expertise in blockchain and cloud technologies, seeking to build scalable applications and contribute to innovative projects.</p>
        <div className="text-gray-500 space-x-2">
          <span>{CONTACT_INFO.email}</span>
          <span>|</span>
          <span>{CONTACT_INFO.phone}</span>
          <span>|</span>
          <Link href={CONTACT_INFO.linkedin} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
          <span>|</span>
          <Link href={CONTACT_INFO.github} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </div>
      </header>

      {/* Technical Skills */}
      <section className="mb-8" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Technical Skills</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Programming Languages:</strong> C++, Java, JavaScript, Solidity</li>
          <li><strong>Web Development:</strong> HTML, CSS, React.js, Next.js, Node.js, Express.js</li>
          <li><strong>Databases:</strong> MongoDB, MySQL</li>
          <li><strong>Cloud/DevOps:</strong> Docker, Kubernetes, AWS (EC2, S3)</li>
          <li><strong>Tools & Platforms:</strong> Git, Postman, VS Code, Linux, Selenium, Maven, Gradle, Jenkins</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-8" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Projects</h2>
        <ul className="list-disc pl-5 space-y-2">
          {PROJECTS.map((project) => (
            <li key={project.name}>
              <Link 
                href={project.url}
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </Link>
              {" - "}{project.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mb-8" aria-labelledby="education-heading">
        <h2 id="education-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Bachelor of Engineering in Computer Science</h3>
            <p>Chandigarh University, India | 2022 – 2026 | CGPA: 7.63</p>
          </div>
          <div>
            <h3 className="font-semibold">Intermediate (BSEB)</h3>
            <p>KST College | 2018 – 2020 | 71.20%</p>
          </div>
          <div>
            <h3 className="font-semibold">Matriculation (BSEB)</h3>
            <p>Kishan HS School | 2018 | 65.80%</p>
          </div>
        </div>
      </section>

      {/* Certifications and Achievements */}
      <section className="mb-8" aria-labelledby="certifications-heading">
        <h2 id="certifications-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Certifications and Achievements</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Scholarship Recipient - Metacrafter (Training with distinction)</li>
          <li>Certificate of Merit in Blockchain (Solidity, Ethereum)</li>
          <li>Ranked 4th in Aptitude Wizard 2024, Chandigarh University</li>
        </ul>
      </section>

      {/* Professional Skills */}
      <section className="mb-8" aria-labelledby="professional-skills-heading">
        <h2 id="professional-skills-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Professional Skills</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Analytical Problem-Solving</li>
          <li>Effective Technical Communication</li>
          <li>Team Leadership</li>
          <li>Agile Development Methodology</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="mb-8" aria-labelledby="languages-heading">
        <h2 id="languages-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Languages</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>English (Professional Proficiency)</li>
          <li>Hindi (Native)</li>
        </ul>
      </section>

      {/* Interests */}
      <section className="mb-8" aria-labelledby="interests-heading">
        <h2 id="interests-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Interests</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Technology Blogs</li>
          <li>Emerging Technologies</li>
          <li>Cricket</li>
          <li>Photography</li>
        </ul>
      </section>

      <div className="text-center">
        <Link
          href="/Devashish_Resume.pdf"
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg
                   hover:bg-blue-600 transition-colors duration-200 font-medium
                   shadow-sm hover:shadow-md focus:outline-none focus:ring-2
                   focus:ring-blue-500 focus:ring-offset-2"
          download="Kumar_Devashish_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </Link>
      </div>
    </div>
  )
}