/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p1: "#1A3636",
        p2: "#40534C",
        p3: "#677D6A",
        p4: "#D6BD98",
        dark: "#0d1f1f",
        darker: "#091515",
      },
      fontFamily: {
        display: ["var(--font-display)","sans-serif"],
        body:    ["var(--font-body)",   "sans-serif"],
        mono:    ["var(--font-mono)",   "monospace"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% 0%, #1A3636 0%, #091515 70%)",
      },
    },
  },
  plugins: [],
}