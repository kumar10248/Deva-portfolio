// app/metadata.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Kumar Devashish - Full Stack Developer & Software Engineer",
    template: "%s | Kumar Devashish"
  },
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications and sharing knowledge through technical writing. Explore my portfolio, projects, and blog.",
  keywords: [
    "Kumar Devashish",
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
  authors: [{ name: "Kumar Devashish" }],
  creator: "Kumar Devashish",
  publisher: "Kumar Devashish",
  metadataBase: new URL("https://devashish.top"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devashish.top",
    siteName: "Kumar Devashish Portfolio",
    title: "Kumar Devashish - Full Stack Developer & Software Engineer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications and sharing knowledge through technical writing.",
    images: [
      {
        url: "/images/about_profile.png",
        width: 1200,
        height: 630,
        alt: "Kumar Devashish - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Devashish - Full Stack Developer & Software Engineer",
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "technology",
};