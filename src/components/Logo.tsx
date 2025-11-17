"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/app/layout";

export const Logo = ({ size = "lg" }: { size?: "sm" | "md" | "lg" | "xl" }) => {
  const { theme } = useContext(ThemeContext);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} relative cursor-pointer group`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Outer glowing ring */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-md"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main container */}
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 dark:from-blue-500 dark:via-purple-600 dark:to-pink-500 p-[2px] shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
        {/* Inner background */}
        <div className="w-full h-full rounded-[14px] bg-white dark:bg-gray-900 flex items-center justify-center relative overflow-hidden">
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-10 dark:opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, #ec4899 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* D letter with code style */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <svg
              viewBox="0 0 100 100"
              className="w-[70%] h-[70%]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main D shape */}
              <motion.path
                d="M25 20 L45 20 C65 20 75 30 75 50 C75 70 65 80 45 80 L25 80 Z"
                stroke="url(#gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="url(#gradient)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Slash */}
              <motion.line
                x1="70"
                y1="25"
                x2="82"
                y2="45"
                stroke="url(#gradient)"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
              />

              {/* Right bracket */}
              <motion.path
                d="M85 20 L90 20 L90 80 L85 80"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Sparkle effects */}
          <motion.div
            className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1.5,
            }}
          />
        </div>
      </div>

      {/* Floating particles on hover */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          y: [-10, -20],
          opacity: [1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          y: [10, 20],
          opacity: [1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
    </motion.div>
  );
};
