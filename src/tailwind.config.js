const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT(
    {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        colors: {
            'background-main': "#1C1C1E",
            'background-main-transparent': "rgba(28,28,30,.9)",
            'background-header': "#373743",
            'color-text-header-dark-yellow': "#F6AA1C",
            'color-text-header-light-blue': "#A6C2C9",
            'color-text-body-white': "#FFFFFF",
        },
        extend: {},
      },
      plugins: []
    });
