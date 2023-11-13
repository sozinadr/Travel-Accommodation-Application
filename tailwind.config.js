/** @type {import('tailwindcss').Config} */
import img from "/herosection.jpg";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],

  theme: {
    extend: {},
  },
  plugins: [],
};
