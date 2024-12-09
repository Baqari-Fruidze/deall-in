/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        des: "1440px",
      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"], // Define Chivo as a custom font
      },
    },
  },
  plugins: [],
};
