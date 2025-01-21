/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-gotham-light)", "sans-serif"],
        medium: ["var(--font-gotham-medium)", "sans-serif"],
        kunika: ["var(--font-kunika)", "sans-serif"],
      },
      colors: {
        primary: "#007BFF",
        secondary: "#0056b3",
      },
    },
  },
  plugins: [],
}

