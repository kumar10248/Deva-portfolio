import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // This covers all files in src
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        "card-foreground": "rgb(var(--color-card-foreground) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function({ addBase, addUtilities, theme }) {
      addBase({
        ':root': {
          '--color-primary': '51 65 85',   // slate-700
          '--color-secondary': '100 116 139', // slate-500
          '--color-background': '255 255 255', // white
          '--color-foreground': '15 23 42', // slate-900
          '--color-card': '255 255 255', // white
          '--color-card-foreground': '15 23 42', // slate-900
          '--color-border': '226 232 240', // slate-200
        },
        '.dark': {
          '--color-primary': '148 163 184', // slate-400
          '--color-secondary': '148 163 184', // slate-400
          '--color-background': '15 23 42', // slate-900
          '--color-foreground': '248 250 252', // slate-50
          '--color-card': '30 41 59', // slate-800
          '--color-card-foreground': '248 250 252', // slate-50
          '--color-border': '51 65 85', // slate-700
        },
      });
      // Add responsive utilities
      addUtilities({
        '.mobile-safe': {
          'max-width': '100vw',
          'overflow-x': 'hidden',
          'word-wrap': 'break-word',
          'overflow-wrap': 'break-word',
        },
      });
    }),
  ],
};

export default config;