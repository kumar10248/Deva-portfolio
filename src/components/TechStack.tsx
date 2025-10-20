"use client";
import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const TechStack = () => {
  const categories = [
    {
      title: "Programming Languages",
      color: "from-blue-500 to-cyan-500",
      stack: [
        { title: "JavaScript", icon: "JS", isText: true },
        { title: "Java", icon: "Java", isText: true },
        { title: "HTML", icon: "HTML", isText: true },
        { title: "CSS", icon: "CSS", isText: true },
      ]
    },
    {
      title: "Frameworks & Libraries",
      color: "from-purple-500 to-pink-500",
      stack: [
        { title: "React", icon: "⚛️", isText: true },
        { title: "Next.js", src: "/images/logos/next.png", className: "h-10 w-14" },
      ]
    },
    {
      title: "Databases",
      color: "from-green-500 to-emerald-500",
      stack: [
        { title: "MongoDB", src: "/images/logos/database.png", className: "h-10 w-20" },
        { title: "SQL", icon: "SQL", isText: true },
        { title: "NoSQL", icon: "NoSQL", isText: true },
      ]
    },
    {
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      stack: [
        { title: "Linux", icon: "🐧", isText: true },
        { title: "AWS", src: "/images/logos/aws.webp", className: "h-10 w-10" },
        { title: "Jenkins", icon: "Jenkins", isText: true },
      ]
    },
    {
      title: "Tools & Platforms",
      color: "from-pink-500 to-purple-500",
      stack: [
        { title: "Git", icon: "Git", isText: true },
        { title: "GitHub", icon: "GitHub", isText: true },
        { title: "Postman", icon: "📮", isText: true },
        { title: "VS Code", icon: "VS", isText: true },
        { title: "Docker", src: "/images/logos/docker.png", className: "h-10 w-10" },
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {categories.map((category, categoryIdx) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
          className="relative"
        >
          {/* Category Header */}
          <div className="flex items-center mb-6">
            <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full mr-4`} />
            <Heading as="h3" className="text-xl font-bold text-gray-800 dark:text-white">
              {category.title}
            </Heading>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {category.stack.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: categoryIdx * 0.1 + idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
                  {item.isText ? (
                    <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                      {item.icon}
                    </div>
                  ) : (
                    <Image
                      src={item.src!}
                      width={200}
                      height={200}
                      alt={item.title}
                      className={twMerge("object-contain transition-transform duration-300", item.className)}
                    />
                  )}
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {item.title}
                  </p>
                </div>

                {/* Animated border effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
