// components/Footer.tsx
import { useContext } from "react";
import { ThemeContext } from "@/app/layout"; // Adjust path as needed

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <footer className="py-6 px-6 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Devashish. All rights reserved.</p>
      </div>
    </footer>
  );
};