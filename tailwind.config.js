/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#120F19",
        accent: "#7EC8E3",
        surface: "#1A1625",
        border: "#2A2438",
        textmain: "#E6E6F0",
        textsub: "#9CA3AF",
      },
      fontFamily:{
        display: ["Quantico", "sans-serif"]
      }
    },
  },
  plugins: [],
}