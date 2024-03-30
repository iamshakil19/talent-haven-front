/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
    
    },
    extend: {
      colors: {
        primary: {
          100: "#E6F6FF",
          200: "#BAE3FF",
          300: "#7CC4FA",
          400: "#47A3F3",
          500: "#2186EB",
          600: "#0967D2",
          700: "#0552B5",
          800: "#03449E",
          900: "#01337D",
        },
        secondary: {
          100: "#FFF9DB",
          200: "#FFF3BF",
          300: "#FCE588",
          400: "#FADB5F",
          500: "#F7C948",
          600: "#F0B429",
          700: "#DE911D",
          800: "#CB6E17",
          900: "#B44D12",
        },
      },
    },
  },
  plugins: [],
};
