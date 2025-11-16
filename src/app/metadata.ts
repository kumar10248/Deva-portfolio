// app/metadata.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Devashish Kumar - Full Stack Developer & Software Engineer",
    template: "%s | Devashish Kumar"
  },
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications and sharing knowledge through technical writing. Explore my portfolio, projects, and blog.",
  keywords: [
    "Devashish Kumar",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Expert",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Technical Blog",
    "Docker",
    "DevOps",
    "Linux",
    "Clean Code",
    "UI/UX Design"
  ],
  authors: [{ name: "Devashish Kumar" }],
  creator: "Devashish Kumar",
  publisher: "Devashish Kumar",
  metadataBase: new URL("https://devashish.top"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devashish.top",
    siteName: "Devashish Kumar Portfolio",
    title: "Devashish Kumar - Full Stack Developer & Software Engineer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications and sharing knowledge through technical writing.",
    images: [
      {
        url: "/images/about_profile.png",
        width: 1200,
        height: 630,
        alt: "Devashish Kumar - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Devashish Kumar - Full Stack Developer & Software Engineer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications and sharing knowledge.",
    images: ["/images/about_profile.png"],
    creator: "@kumarDe10248"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "technology",
};