/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        naarm: {
          50: "#eef7ff",
          100: "#d7ebff",
          200: "#b4d7ff",
          300: "#85bdff",
          400: "#559fff",
          500: "#2a82ff",
          600: "#1864db",
          700: "#134db1",
          800: "#123f8c",
          900: "#122f66",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
