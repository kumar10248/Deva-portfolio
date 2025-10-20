"use client";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-8">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ 
              duration: 0.4, 
              delay: idx * 0.1,
              ease: "easeOut"
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300"
          >
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="flex flex-col md:flex-row relative z-10"
            >
              {/* Image Section with Overlay */}
              <div className="md:w-2/5 relative overflow-hidden">
                <Image
                  src={product.thumbnail}
                  alt={`${product.title} thumbnail`}
                  height="300"
                  width="400"
                  className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View Project Badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project →
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 flex flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <Heading
                      as="h4"
                      className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                    >
                      {product.title}
                    </Heading>
                    
                    {/* Arrow Icon */}
                    <motion.div
                      animate={{ x: hoveredIndex === idx ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  <Paragraph className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-2 mb-4 line-clamp-3">
                    {product.description}
                  </Paragraph>
                </div>

                {/* Tech Stack Tags */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.stack?.slice(0, 6).map((stack: string) => (
                      <span
                        key={stack}
                        className="text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                      >
                        {stack}
                      </span>
                    ))}
                    {product.stack && product.stack.length > 6 && (
                      <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full">
                        +{product.stack.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    <span>Learn More</span>
                    <motion.svg
                      animate={{ x: hoveredIndex === idx ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </motion.svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};