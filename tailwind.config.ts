import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#090c11",
        card: "#101722",
        accent: "#6ee7b7",
        muted: "#8ea0b8"
      },
      boxShadow: {
        glow: "0 0 30px rgba(110, 231, 183, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
