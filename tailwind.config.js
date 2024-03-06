/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-color": "#121214",
        "yellow-color": "#f8f858",
        "gray-color": "#9ea0a9",
      },
    },
  },
  plugins: [],
};
