"use client";
import { Paragraph } from "@/components/Paragraph";
import { Heading } from "@/components/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];

  const highlights = [
    { icon: "💻", title: "Full-Stack Development", description: "3+ years of experience" },
    { icon: "⛓️", title: "Blockchain Expert", description: "Solidity & Smart Contracts" },
    { icon: "🚀", title: "Entrepreneur", description: "Co-founder of Tech Startup" },
    { icon: "☁️", title: "Cloud & DevOps", description: "Docker, K8s, AWS" },
  ];

  return (
    <div className="space-y-16">
      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 3 : -3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="relative group"
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-xl object-cover shadow-xl block w-full h-40 md:h-60 transition-all duration-300"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.div>
        ))}
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-4xl mb-3">{highlight.icon}</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{highlight.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Story Section */}
      <div className="max-w-4xl">
        <Heading as="h2" className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          My Journey 🚀
        </Heading>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <Paragraph className="leading-relaxed">
            I am a <strong className="text-blue-600 dark:text-blue-400">passionate software developer and entrepreneur</strong> with a deep interest in blockchain, backend development, and scalable applications. My journey began with an eagerness to understand how technology works, leading me to master programming languages like <strong>Java, Python, and JavaScript</strong>. Over time, I expanded my expertise in algorithms, data structures, and automation, working with tools like Selenium and solving complex computational problems.
          </Paragraph>

          <Paragraph className="leading-relaxed">
            As I explored new frontiers, <strong className="text-purple-600 dark:text-purple-400">blockchain technology</strong> captivated me with its potential for decentralization and security. I delved into smart contract development using <strong>Solidity</strong>, deploying contracts on Ethereum and working on projects like <em>DegenToken ERC20</em> and <em>Degen Gaming</em>. Additionally, I gained experience with <strong>Avalanche Subnets and HyperSDK</strong>, further enhancing my understanding of blockchain infrastructure and scalability.
          </Paragraph>

          <Paragraph className="leading-relaxed">
            Beyond development, I have worked extensively with <strong className="text-green-600 dark:text-green-400">Docker, containerization, and cloud-based databases</strong> like MongoDB Atlas. Managing backend systems and troubleshooting complex deployment issues have strengthened my problem-solving abilities. These experiences have helped me build robust and scalable applications that seamlessly integrate with modern technologies.
          </Paragraph>

          <Paragraph className="leading-relaxed">
            <strong className="text-orange-600 dark:text-orange-400">Entrepreneurship</strong> has been an integral part of my journey. Along with <strong>Raushan Kumar</strong>, I co-founded a technology startup, where I combine my technical expertise with strategic thinking to drive innovation. This experience has pushed me beyond coding into business development, product design, and leadership.
          </Paragraph>

          <Paragraph className="leading-relaxed">
            I thrive on challenges, constantly learning and adapting to new technologies. Whether it's debugging intricate code, optimizing blockchain applications, or architecting scalable systems, I am committed to building solutions that make an impact. Looking ahead, I am eager to explore <strong className="text-blue-600 dark:text-blue-400">AI-driven applications, decentralized systems</strong>, and cutting-edge innovations that shape the future.
          </Paragraph>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-4 border-blue-600">
            <Paragraph className="leading-relaxed italic">
              Join me on this journey of bytes and narratives, logic and creativity, code and prose. Together, we can explore the boundless possibilities of technology and storytelling, all while reveling in the sheer beauty of thoughtful design.
            </Paragraph>
          </div>

          <Paragraph className="leading-relaxed font-semibold text-gray-900 dark:text-white">
            Thank you for being here, and I can't wait to embark on this adventure with you. 🌟
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
