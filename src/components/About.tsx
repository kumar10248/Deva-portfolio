"use client";
import { Paragraph } from "@/components/Paragraph";
import { Heading } from "@/components/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/developer.png",
    "/images/blockchain.png",
    "/images/innovator.png",
    "/images/devops.png",
  ];

  const highlights = [
    { icon: "💻", title: "Full-Stack Developer", description: "MERN • Java • REST APIs" },
    { icon: "⛓️", title: "Blockchain Builder", description: "Solidity • Smart Contracts • EVM" },
    { icon: "🚀", title: "Startup Co-Founder", description: "Product • Strategy • Innovation" },
    { icon: "☁️", title: "Cloud & DevOps", description: "Docker • Kubernetes • AWS" },
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
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              {highlight.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {highlight.description}
            </p>
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
            I’m a <strong className="text-blue-600 dark:text-blue-400">full-stack developer and technologist</strong> who
            loves building fast, scalable, and meaningful digital experiences. What began as curiosity
            about how systems work has grown into a passion for creating products that blend logic,
            creativity, and engineering excellence.
          </Paragraph>

          <Paragraph className="leading-relaxed">
            My foundations were built through <strong>Java, Python, and JavaScript</strong>, along with
            a strong understanding of algorithms, backend architecture, and problem-solving. These
            skills shaped the way I approach development — with clarity, structure, and scalability.
          </Paragraph>

          <Paragraph className="leading-relaxed">
            I later discovered the world of <strong className="text-purple-600 dark:text-purple-400">blockchain</strong>.
            Concepts like decentralization and on-chain automation inspired me to build{" "}
            <strong>Solidity smart contracts</strong> and work on projects such as{" "}
            <em>DegenToken</em> and <em>Degen Gaming</em>. I also explored{" "}
            <strong>Avalanche Subnets and HyperSDK</strong>, deepening my understanding of blockchain
            performance and infrastructure.
          </Paragraph>

          <Paragraph className="leading-relaxed">
            On the backend and DevOps side, I enjoy architecting systems that run reliably at scale.
            I work with <strong className="text-green-600 dark:text-green-400">Docker, cloud databases,
            CI/CD pipelines, and distributed architectures</strong> — ensuring applications are secure,
            stable, and optimized for real-world usage.
          </Paragraph>

          <Paragraph className="leading-relaxed">
            My journey also led me into <strong className="text-orange-600 dark:text-orange-400">entrepreneurship</strong>.
            Along with <strong>Raushan Kumar</strong>, I co-founded a tech startup focused on building
            user-centric products. This experience expanded my perspective beyond code — into product,
            design, strategy, and leadership.
          </Paragraph>

          <Paragraph className="leading-relaxed">
            I thrive on challenges and continuous learning. Whether it’s designing scalable systems,
            debugging complex issues, or exploring emerging technologies — I aim to create work that
            is thoughtful, impactful, and future-focused.
          </Paragraph>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-4 border-blue-600">
            <Paragraph className="leading-relaxed italic">
              Technology is more than tools — it’s a canvas for ideas, innovation, and stories.
              I’m here to build products that inspire, connect, and push boundaries.
            </Paragraph>
          </div>

          <Paragraph className="leading-relaxed font-semibold text-gray-900 dark:text-white">
            Thank you for visiting my portfolio — the journey continues. 🌟
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
