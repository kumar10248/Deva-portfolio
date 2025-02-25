// app/layout.tsx
'use client';

import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { createContext, useEffect, useContext, useState } from "react";
import { Analytics } from "@vercel/analytics/react"

// Create theme context
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// Load font outside component to prevent reinitialization
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
  variable: '--font-inter',
});

// Theme toggle component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Explicitly set default theme to 'light'
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize theme from localStorage, but explicitly default to 'light'
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Always default to light theme regardless of system preference
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <html lang="en" className={inter.variable}>
        <body className={inter.className}>
          <div className="flex antialiased h-screen overflow-hidden">
            {children}
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={`${inter.variable} ${theme === 'dark' ? 'dark' : ''}`}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-200"
        )}
      >
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ThemeToggle />
          <main className="flex flex-1">
            <Sidebar />
            <div className="lg:pl-2 lg:pt-2 bg-gray-100 dark:bg-gray-900 flex-1 overflow-y-auto transition-colors duration-200">
              <div className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 dark:lg:border-neutral-700 overflow-y-auto transition-colors duration-200">
                {children}
                <Footer />
              </div>
            </div>
          </main>
          <Analytics />
        </ThemeContext.Provider>
      </body>
    </html>
  );
}