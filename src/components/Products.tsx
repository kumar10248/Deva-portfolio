"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
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
            className="shadow-sm hover:shadow-md border border-gray-100 rounded-2xl overflow-hidden"
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="group flex flex-col md:flex-row hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              <div className="md:w-1/4 min-w-48">
                <Image
                  src={product.thumbnail}
                  alt={`${product.title} thumbnail`}
                  height="200"
                  width="200"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6 md:w-3/4">
                <div>
                  <Heading
                    as="h4"
                    className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-200"
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl line-clamp-3">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};