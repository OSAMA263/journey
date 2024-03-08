/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-color": "#121214",
        "yellow-color": "#f8f858",
        "gray-color": "#aaacb6",
        "light-gray": "#393940",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".flex": {
          display: "flex",
          alignItems: "center",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
