/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "primary-text": "var(--primary-text-color)",
        "secondary-text": "var(--secondary-text-color)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/b4.jpeg')",
      },
    },
  },
  plugins: [],
};
