/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kanit: "Kanit, sans-serif",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-motion")],
};
