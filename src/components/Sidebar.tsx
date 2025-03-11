"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useContext, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { isMobile } from "@/lib/utils";
import profileimage from "../../public/about_profile.png";
import { ThemeContext } from "@/app/layout";

export const Sidebar = () => {
  const [open, setOpen] = useState(!isMobile());
  const { theme } = useContext(ThemeContext);
  
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e:any) => {
      if (isMobile() && open && !e.target.closest('.sidebar-container')) {
        setOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setOpen(!isMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ x: -280 }}
            className={twMerge(
              "sidebar-container px-6 z-[100] py-8 w-64 fixed lg:relative h-screen left-0 flex flex-col justify-between transition-all",
              "bg-white/95 backdrop-blur-sm dark:bg-gray-900/95 border-r border-neutral-200 dark:border-gray-800 shadow-lg"
            )}
          >
            <div className="flex-1 overflow-auto no-scrollbar">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div className="pt-4 border-t border-neutral-200 dark:border-gray-800">
              <Badge href="/resume" text="Download Resume"  />
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4 text-center">
                © {new Date().getFullYear()} Kumar Devashish
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        className="fixed bottom-6 right-6 h-12 w-12 bg-white dark:bg-gray-800 border border-neutral-200 dark:border-gray-700 rounded-full backdrop-blur-sm flex items-center justify-center z-50 shadow-lg transition-transform hover:scale-105"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <RiCloseLine className="h-6 w-6 text-primary dark:text-white" />
        ) : (
          <RiMenu4Line className="h-6 w-6 text-primary dark:text-white" />
        )}
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-8 relative z-[100]">
      <div className="mb-4">
        {navlinks.map((link: Navlink) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => isMobile() && setOpen(false)}
            className={twMerge(
              "text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white transition-all duration-200 flex items-center space-x-3 py-3 px-4 rounded-lg text-sm font-medium group",
              isActive(link.href) && 
              "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-600 dark:text-blue-400 font-semibold"
            )}
          >
            <div className={twMerge(
              "h-8 w-8 rounded-md bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all",
              isActive(link.href) && "bg-blue-500 dark:bg-blue-600"
            )}>
              <link.icon
                className={twMerge(
                  "h-4 w-4 flex-shrink-0 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors",
                  isActive(link.href) && "text-white dark:text-white"
                )}
              />
            </div>
            <span className="group-hover:translate-x-1 transition-transform">
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200 dark:border-gray-800"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white dark:bg-gray-900 px-2 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
            CONNECT
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-6">
        {socials.map((link: Navlink) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(
              "text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white transition-all duration-200 flex flex-col items-center space-y-2 py-4 px-2 rounded-lg text-xs font-medium group",
              "bg-neutral-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md"
            )}
          >
            <link.icon
              className="h-5 w-5 flex-shrink-0 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
            />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex flex-col space-y-4 pt-2 pb-4">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Image
            src={profileimage}
            alt="Avatar"
            height="48"
            width="48"
            className="object-cover object-top rounded-full flex-shrink-0 ring-2 ring-white dark:ring-gray-800 shadow-md"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
        </div>
        <div className="flex text-sm flex-col">
          <p className="font-bold text-primary dark:text-white">Kumar Devashish</p>
          <p className="font-light text-secondary dark:text-gray-300">Full Stack Developer</p>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg px-4 py-3 text-xs text-gray-600 dark:text-gray-300">
        <div className="flex justify-between items-center mb-2">
          <span>Profile views</span>
          <span className="font-medium">1.2k</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
        </div>
      </div>
    </div>
  );
};