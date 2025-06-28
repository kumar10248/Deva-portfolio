// app/page.tsx (if using App Router)
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400 blur-3xl dark:bg-blue-600" />
          <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-400 blur-3xl dark:bg-purple-600" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
          
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
  {/* Left side content */}
  <div>
    <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
      <span className="mr-2">👋</span>
      <span className="text-blue-700 dark:text-blue-300 font-medium">Software Engineer</span>
    </div>
    
    <Heading className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
      Hello there! I'm Kumar Devasish
    </Heading>
    
    <Paragraph className="text-xl mb-8 text-gray-700 dark:text-gray-300">
      I'm a full-stack developer that loves building products and web apps that can impact millions of lives
    </Paragraph>
    
    <Paragraph className="text-lg mb-10 text-gray-600 dark:text-gray-400">
      A passionate software engineer with 3 years of experience building scalable web apps that are performance optimized and good looking.
    </Paragraph>
    
    <div className="flex flex-wrap gap-4">
      <Link href="/projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
        View My Work
      </Link>
      <Link href="/contact" className="px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 font-medium rounded-lg transition-colors">
        Get In Touch
      </Link>
    </div>
  </div>
  
  {/* Right side image - FIXED VERSION */}
  <div className="relative">
    {/* Background decorative overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 rounded-2xl" />
    
    {/* Image container with proper aspect ratio */}
    <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
      <Image 
        src="/about_profile.png" 
        alt="Kumar Devasish - Full Stack Developer"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  </div>
</div>
          
        </div>
      </div>
      
      {/* Project Section */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <span className="text-purple-700 dark:text-purple-300 font-medium">Featured Projects</span>
              </div>
              <Heading className="text-3xl md:text-4xl font-bold mb-4">
                What I've been <Highlight className="text-violet-700">working on</Highlight>
              </Heading>
              <Paragraph className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore some of my recent projects that showcase my skills and passion for building beautiful, functional applications.
              </Paragraph>
            </div>
            
            <Products />
          </div>
        </div>
      </div>
      
      {/* Tech Stack Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <span className="text-blue-700 dark:text-blue-300 font-medium">Technologies</span>
              </div>
              <Heading className="text-3xl md:text-4xl font-bold mb-4">
                My <Highlight className="text-violet-700">Tech Stack</Highlight>
              </Heading>
              <Paragraph className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                These are the technologies and tools I use to bring ideas to life.
              </Paragraph>
            </div>
            
            <TechStack />
          </div>
        </div>
      </div>
      
      {/* Footer / Contact Section */}
      <div className="py-16 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Heading className="text-3xl font-bold mb-6">
              Let's build something amazing together
            </Heading>
            <Paragraph className="mb-8 text-gray-300">
              Have a project in mind or just want to chat? I'm always open to new opportunities.
            </Paragraph>
            <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}