/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        des: "1440px",
      },
      textDecorationThickness: {
        1: "1px",
        2: "2px",
        4: "4px",
      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"], // Define Chivo as a custom font
      },
      colors: {
        customBlue: "#C7D9FF",
      },
    },
  },
  plugins: [],
};
