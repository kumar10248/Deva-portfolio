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
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': '51 65 85',   // slate-700
          '--color-secondary': '100 116 139', // slate-500
        },
      });
    }),
  ],
};

export default config;