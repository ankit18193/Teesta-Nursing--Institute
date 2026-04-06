module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B3C5D",   // deep medical blue
        accent: "#2ECC71",    // healing green
        softbg: "#F8FAFC",    // light background
        dark: "#1E293B",      // text
        light: "#64748B",     // secondary text
      },

    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};