/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202020",
        secondary: "#D9D9D9",
      },
      borderRadius: {
        md: "5px",
      },
    },
  },
  plugins: [],
};
