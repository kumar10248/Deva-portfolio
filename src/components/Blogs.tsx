"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="max-w-5xl mx-auto my-6 md:my-10 px-4 sm:px-6 lg:px-0">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            key={`blog-${blog.title}`}
            href={`/blog/${blog.slug}`}
            className="relative my-6 md:my-10 block"
            onMouseEnter={() => setHovered(blog.slug)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence mode="wait">
              {hovered === blog.slug && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1.05,
                    scaleY: 1.2,
                  }}
                  exit={{
                    opacity: 0,

                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  className="absolute z-0 pointer-events-none bg-gray-50 dark:bg-gray-800/50 inset-0 h-full w-full rounded-md "
                />
              )}
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative z-20">
              <div className="w-full md:w-auto">
                <Image
                  src={blog.image}
                  alt="thumbnail"
                  height="200"
                  width="200"
                  objectFit="cover"
                  className="rounded-md object-cover h-48 md:h-40 w-full md:w-60"
                />
              </div>
              <div className="flex flex-col col-span-1 md:col-span-3">
                <Heading className="text-xl md:text-lg lg:text-xl">
                  {blog.title}
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-base mt-2 line-clamp-2 md:line-clamp-3">
                  {blog.description}
                </Paragraph>
                <div className="flex space-x-2 flex-wrap gap-y-2 mt-4">
                  {blog.tags?.map((tag, index) => (
                    <span
                      key={`tag-${blog.slug}-${index}`}
                      className="text-xs px-2 py-1 text-secondary dark:text-gray-300 border border-neutral-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
