import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kumar Devashish - Resume',
  description: 'Professional resume of Kumar Devashish - Blockchain & Full-Stack Developer',
}

const CONTACT_INFO = {
  email: "kumardevashish000@gmail.com",
  phone: "+91-8986416949",
  linkedin: "https://linkedin.com/in/kumar-devashishh",
  github: "https://github.com/kumar10248"
} as const

const PROJECTS = [
  {
    name: "Degen Gaming",
    url: "https://github.com/kumar10248/DegenGaming",
    description: "A blockchain-based gaming ecosystem with NFT integration."
  },
  {
    name: "Avalanche Subnet",
    url: "https://github.com/kumar10248/Avalanche-Subnet",
    description: "Custom Avalanche blockchain subnet for scalable dApps."
  },
  {
    name: "Online CloakShare",
    url: "https://github.com/kumar10248/OnlineCloakShare",
    description: "Secure clipboard application with temporary storage and auto-delete features."
  },
  {
    name: "Degen Token",
    url: "https://github.com/kumar10248/DegenTokenERC20",
    description: "Custom ERC-20 token with staking and governance features."
  }
] as const

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Kumar Devashish</h1>
        <p className="text-gray-600 mb-2">Technology Startup Founder | Blockchain & Full-Stack Developer</p>
        <div className="text-gray-500 space-x-2">
          <span>{CONTACT_INFO.email}</span>
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

      <section className="mb-8" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Co-Founder - Technology Startup</h3>
            <p className="text-gray-600">Dec 2024 - Present</p>
            <p className="mt-2">Leading a tech startup focused on innovative solutions in blockchain, decentralized applications, and full-stack development. Managing a team of developers and overseeing product development lifecycle.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Software Engineer - Freelance</h3>
            <p className="text-gray-600">Jan 2022 - Nov 2024</p>
            <p className="mt-2">Worked on multiple projects involving smart contract development, API integrations, and frontend engineering. Specialized in Ethereum and Avalanche ecosystems.</p>
          </div>
        </div>
      </section>

      <section className="mb-8" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Skills</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Blockchain Development (EVM, Avalanche Subnets, Solidity, Web3.js, Hardhat)</li>
          <li>Smart Contracts (Solidity, Hardhat, Remix IDE, OpenZeppelin)</li>
          <li>Full-Stack Development (React, Node.js, MongoDB, Express.js, GraphQL)</li>
          <li>DevOps & Cloud (Docker, Kubernetes, AWS, CI/CD Pipelines)</li>
          <li>Security & Cryptography (Wallet Integrations, Encryption Techniques, Secure APIs)</li>
        </ul>
      </section>

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

      <section className="mb-8" aria-labelledby="education-heading">
        <h2 id="education-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Education</h2>
        <div>
          <h3 className="font-semibold">Bachelor's of Engineering in Computer Science</h3>
          <p>Expected Graduation: 2026</p>
          <p>Relevant Coursework: Data Structures, Blockchain Development, Cryptography, Web Development</p>
        </div>
      </section>

      <section className="mb-8" aria-labelledby="certifications-heading">
        <h2 id="certifications-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Certifications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Certified Ethereum Developer - ConsenSys Academy</li>
          <li>AWS Certified Solutions Architect - Amazon</li>
          <li>Blockchain Security Essentials - Coursera</li>
        </ul>
      </section>

      <section className="mb-8" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-2xl font-semibold border-b-2 pb-2 mb-4">Contact</h2>
        <div className="space-y-2">
          <p>Email: {CONTACT_INFO.email}</p>
          <p>Phone: {CONTACT_INFO.phone}</p>
          <p>
            LinkedIn:{" "}
            <Link href={CONTACT_INFO.linkedin} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </Link>
          </p>
          <p>
            GitHub:{" "}
            <Link href={CONTACT_INFO.github} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </Link>
          </p>
        </div>
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