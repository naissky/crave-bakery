import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F4F4",
        foreground: "#181818",
        primary: "#FFCADE"
      },
      fontFamily: {
        sans: ['Josefin Sans Variable', 'sans-serif'],
        serif: ['Playfair Display Variable', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
