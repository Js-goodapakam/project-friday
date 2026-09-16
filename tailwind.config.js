/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      colors: {
        ink: "#0b1c33",
        cyan: "#2fb4e0",
        leaf: "#4fc97a",
      },
    },
  },
  plugins: [],
};
