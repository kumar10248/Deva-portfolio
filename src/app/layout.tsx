import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

// Load font outside component to prevent reinitialization
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap', // Add font-display swap for better performance
  variable: '--font-inter', // Add variable for CSS custom property
});

export const metadata: Metadata = {
  title: "Devashish - Developer",
  description: "Devashish is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
  viewport: "width=device-width, initial-scale=1", // Add viewport meta
  robots: "index, follow", // Add robots meta
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <main className="flex flex-1">
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
            <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}