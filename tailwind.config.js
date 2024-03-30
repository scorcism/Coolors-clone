/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202020",
        secondary: "#D9D9D9",
      },
      screens: {
        xs: "350px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      borderRadius: {
        md: "5px",
      },
    },
  },
  plugins: [],
};
